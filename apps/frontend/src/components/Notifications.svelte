<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import client from '../graphql/client';
	import type { Item } from '../generated/graphql';
	import { Card, CardContent, Typography, Divider } from '../lib/index.js';
	import { invalidate } from '$app/navigation';

	export let item: Item;

	let data = item.notificationListeners?.find((e) => e?.type === 'hasEntriesThatWillExpire');
	let notificationExpirationTimeWarning = JSON.parse(data?.conditions[0].value);
	let notificationMinQuantity = item.notificationListeners?.find((e) => e?.type === 'lowQuantity');

	let minQantity = notificationMinQuantity?.conditions[0]?.value;
	let expirationTimeWarning = `${notificationExpirationTimeWarning.value} Месец`;

	async function handleSave() {
		await client.updateNotificationListener({
			input: {
				itemId: item.id,
				type: 'lowQuantity',
				conditions: [
					{
						attribute: 'totalQuantity',
						operator: 'LTE',
						value: `${minQantity}`
					}
				]
			}
		});
		await client.updateNotificationListener({
			input: {
				itemId: item.id,
				type: 'hasEntriesThatWillExpire',
				conditions: [
					{
						attribute: 'entries.expirationDate',
						operator: 'TIME_BEFORE',
						value: JSON.stringify({value: `${expirationTimeWarning.substring(0, 1)}`, type: 'months'})
					}
				]
			}
		});
		location.reload()
	}
	$: notificationChanged =
		notificationMinQuantity?.conditions[0]?.value != minQantity ||
		`${notificationExpirationTimeWarning.value} Месец` != expirationTimeWarning;
</script>

<Card class="bg-white space-y-10">
	<CardContent class="flex flex-col">
		<Typography variant="h6" class="mb-4">Известия</Typography>
		<div class="flex gap-5 items-start">
			<div class="w-full ml-4">
				<Typography>Извести при ниско количество</Typography>

				<Typography class="text-[11px] mt-2 font-bold text-gray-500">
					МИНИМАЛНО КОЛИЧЕСТВО:
				</Typography>
				<div class="flex justify-between h-[24px]">
					<input
						type="number"
						bind:value={minQantity}
						class="bg-gray-100 rounded-md text-center w-12 text=gray-100"
					/>
				</div>
			</div>
		</div>
		<Divider class="my-4" />
		<div class="flex items-start gap-5 ml-4">
			<div>
				<Typography>Извести при наближаващо изтичане на срок</Typography>
				<Typography class="text-[11px] mt-2 font-bold text-gray-500">ИЗВЕСТИ ПРЕДИ:</Typography>
				<select
					name="Месеци"
					class="bg-gray-100 text-sm p-1 rounded-md"
					required
					bind:value={expirationTimeWarning}
				>
					<option value="1 Месец">1 Месец</option>
					<option value="2 Месец">2 Месеца</option>
					<option value="3 Месец">3 Месеца</option>
					<option value="4 Месец">4 Месеца</option>
					<option value="5 Месец">5 Месеца</option>
					<option value="6 Месец">6 Месеца</option>
				</select>
			</div>
		</div>
		<Divider class="my-4" />
		<div class="flex gap-5 items-start ml-4">
			<div>
				<Typography>Годно за експедиция</Typography>
				<Typography class="text-[11px] mt-2 font-bold text-gray-500">
					АРТИКУЛА Е ГОДЕН АКО ГОДНОСТТА МУ НЕ ИЗТИЧА В ТЕКУЩАТА КАЛЕНДАРНА ГОДИНА
				</Typography>
			</div>
		</div>
	</CardContent>
</Card>

{#if notificationChanged}
	<div class="flex justify-end">
		<Button on:click={handleSave} class="border-0">Запази</Button>
	</div>
{/if}
