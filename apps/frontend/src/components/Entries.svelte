<script lang="ts">
	import type { Item, ItemEntry } from '../generated/graphql';
	import { Card, CardContent, Typography, Button } from '../lib/index.js';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Login, PlusCircle } from '@steeze-ui/heroicons';
	import UpdateEntry from './UpdateEntry.svelte';

	export let item: Item;
	let singleEntry: ItemEntry;
	
	let updateEntry = false;
	let data = item.notificationListeners?.find((e) => e?.type === 'hasEntriesThatWillExpire')
	let notificationExpirationTimeWarning = JSON.parse(data?.conditions[0].value)


	function calculateDate(dateInMilliseconds) {
		const d = new Date(+dateInMilliseconds);
		let year = d.getFullYear();
		let month = d.getMonth() + 1;
		let day = d.getDate();
		if (month < 10) {
			let addZero = '0';
			addZero += month;
			month = addZero;
		}
		if (day < 10) {
			let addZero = '0';
			addZero += day;
			day = addZero;
		}
		if (!dateInMilliseconds) {
			return '-';
		}
		return `${day}.${month}.${year}`;
	}

	function checkIfExpirationOnEntryWillExpire(expirationD) {
		let expirationDate = new Date(+expirationD)
		let currentDate = new Date 
		if (expirationDate.getFullYear() === currentDate.getFullYear()) {
			let res = expirationDate.getMonth() - currentDate.getMonth()
			if (res <= notificationExpirationTimeWarning.value) {
				return 'yellow'
			}
		}
	}

	checkIfExpirationOnEntryWillExpire(item.entries[0]?.expirationDate)
	let b = new Date(+item.entries[0]?.expirationDate)
	let d = new Date
	console.log(d.getMonth())
	console.log(b)
	console.log(calculateDate(item.entries[0]?.expirationDate))
	console.log(calculateDate(item.entries[1]?.expirationDate))
	console.log(calculateDate(item.entries[0]?.expirationDate) < calculateDate(item.entries[1]?.expirationDate))
	console.log(item.entries[0]?.expirationDate < item.entries[1]?.expirationDate)
	function toggleUpdateEntrie() {
		updateEntry = !updateEntry;
	}
</script>

<Card class="bg-white">
	<CardContent class="flex flex-col">
		<div class="flex justify-between mb-4">
			<Typography variant="h6">Наличност</Typography>
			<Button on:click variant="text">
				<Icon src={PlusCircle} class="w-5 h-5" />
			</Button>
		</div>
		<table class="table-fixed text-left w-full">
			<thead>
				<tr>
					<th>
						<Typography variant="subtitle2">ДОБАВЕНО</Typography>
					</th>
					<th>
						<Typography variant="subtitle2">БРОЙ</Typography>
					</th>
					<th>
						<Typography variant="subtitle2">СРОК</Typography>
					</th>
				</tr>
			</thead>
			<tbody>
				{#each item.entries as entry}
					<tr
						on:click={() => {
							singleEntry = entry;
							toggleUpdateEntrie();					
						}}
						class="hover:bg-accent-100 cursor-pointer"
					>
						<td>
							<Typography variant="body2">{calculateDate(entry.createdAt)}</Typography>
						</td>
						<td>
							<Typography variant="body2">{entry.quantity}</Typography>
						</td>
						{#if calculateDate(entry.expirationDate) === '-'}
							<td class="pl-8">{calculateDate(entry.expirationDate)}</td>
						{:else if entry.hasExpired}
							<td>
								<Typography
									variant="body2"
									class="bg-red-500 inline-block text-white rounded-md p-1"
								>
									{calculateDate(entry.expirationDate)}
								</Typography>
							</td>
						{:else}
							<td>
								<Typography
									variant="body2"
									class="bg-green-500 text-white inline-block rounded-md p-1"
								>
									{calculateDate(entry.expirationDate)}
								</Typography>
							</td>
						{/if}
					</tr>
				{/each}
			</tbody>
		</table>
	</CardContent>
</Card>


{#if updateEntry}
	<UpdateEntry entry={singleEntry} {item} on:close={toggleUpdateEntrie} />
{/if}

