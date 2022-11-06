<script lang="ts">
	import type { Item, ItemEntry } from '../generated/graphql';
	import { Divider, Typography } from '../lib/index.js';

	export let itemEntries: ItemEntry[];
	export let item: Item;

	let data = item.node.notificationListeners?.find((e) => e?.type === 'hasEntriesThatWillExpire')
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

	function determineConditionofEntry(expirationD) {
		let expirationDate = new Date(+expirationD)
		let currentDate = new Date 
		if (expirationD < currentDate.getTime()) {
			return 'bg-red-500'
		}
		if (expirationDate.getFullYear() === currentDate.getFullYear()) {
				let res = expirationDate.getMonth() - currentDate.getMonth()
					if (res <= notificationExpirationTimeWarning.value) {
						return 'bg-yellow-500'
					}
			}
		else if (expirationDate.getFullYear() === currentDate.getFullYear() + 1) {
				let res = expirationDate.getMonth() + 12
				res = res -currentDate.getMonth()
					if (res <= notificationExpirationTimeWarning.value) {
						return 'bg-yellow-500'
					}
			}
		return 'bg-green-500'
	}
</script>

<Divider class="my-4" />
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
		{#each itemEntries as entry}
			<tr>
				<td>
					<Typography variant="body2">{calculateDate(entry.createdAt)}</Typography>
				</td>
				<td>
					<Typography variant="body2">{entry.quantity}</Typography>
				</td>
				{#if calculateDate(entry.expirationDate) === '-'}
					<td class="pl-8">{calculateDate(entry.expirationDate)}</td>
				{:else}
					<td>
						<Typography variant="body2" class="{determineConditionofEntry(entry.expirationDate)} inline-block text-white rounded-md p-1">
							{calculateDate(entry.expirationDate)}
						</Typography>
					</td>
				{/if}
			</tr>
		{/each}
	</tbody>
</table>
