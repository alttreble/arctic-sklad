<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { Item } from '../generated/graphql';
import { Card, CardContent, Typography, Divider } from '../lib/index.js';

    export let item: Item;

	// let data = JSON.parse(item.notificationListeners[3]?.conditions[0]?.value)	
	// console.log(data.value)

	let quantity = true;
	let expiration = true;
	let suitableForExpedition = true
	let minQantity = item.notificationListeners[1]?.conditions[0].value;
	let newMinQantity = minQantity
	let expirationTimeWarning = "4 Месец"     // `${data.value} Месец`;

	
</script>

<Card class="bg-white space-y-10">
	<CardContent class="flex flex-col">
		<Typography variant="h6" class="mb-4">Известия</Typography>
		<div class="flex gap-5 items-start">
			<input type="checkbox" class="accent-gray-500 mt-1.5" bind:checked={quantity} />
			<div class="w-full">
				<Typography>Извести при ниско количество</Typography>
				{#if quantity}				
					<Typography class="text-[11px] mt-2 font-bold text-gray-500">
						МИНИМАЛНО КОЛИЧЕСТВО:
					</Typography>
					<div class="flex justify-between h-[24px]">
						<input
							type="number"
							bind:value={minQantity}
							class="bg-gray-100 rounded-md text-center w-12 text=gray-100"
						/>
						{#if newMinQantity != minQantity}
						<Button size="small" class="mr-9 border-0">Запази</Button>
						{/if}
					</div>	
				{/if}
			</div>
		</div>
		<Divider class="my-4" />
		<div class="flex items-start gap-5">
			<input type="checkbox" class="accent-gray-500 mt-1.5" bind:checked={expiration} />
			<div>
				<Typography>Извести при наближаващо изтичане на срок</Typography>
				{#if expiration}
					<Typography class="text-[11px] mt-2 font-bold text-gray-500">ИЗВЕСТИ ПРЕДИ:</Typography>
					<select name="Месеци" class="bg-gray-100 text-sm p-1 rounded-md"  required bind:value={expirationTimeWarning}>
						<option value="1 Месец">1 Месец</option>
						<option value="2 Месец">2 Месеца</option>
						<option value="3 Месец">3 Месеца</option>
						<option value="4 Месец">4 Месеца</option>
						<option value="5 Месец">5 Месеца</option>
						<option value="6 Месец">6 Месеца</option>
					</select>
				{/if}
			</div>
		</div>
		<Divider class="my-4" />
		<div class="flex gap-5 items-start">
			<input type="checkbox" class="accent-gray-500 mt-1.5" bind:checked={suitableForExpedition} />
			<div>
				<Typography>Годно за експедиция</Typography>
				{#if suitableForExpedition}
					<Typography class="text-[11px] mt-2 font-bold text-gray-500">
						АРТИКУЛА Е ГОДЕН АКО ГОДНОСТТА МУ НЕ ИЗТИЧА В ТЕКУЩАТА КАЛЕНДАРНА ГОДИНА
					</Typography>
				{/if}
			</div>
		</div>
	</CardContent>
</Card>
