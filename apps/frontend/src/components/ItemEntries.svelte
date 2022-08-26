<script lang='ts'>
	import type { ItemEntry } from '../generated/graphql';
	import { Divider, Typography } from '../lib/index.js';

	export let itemEntries: ItemEntry[];

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
		if (!dateInMilliseconds) {
			return '-';
		}
		return `${day}.${month}.${year}`;
	}
</script>

<Divider class='my-4' />
<table class='table-fixed text-left'>
	<thead>
	<tr>
		<th>
			<Typography variant='subtitle2'>ДОБАВЕНО</Typography>
		</th>
		<th>
			<Typography variant='subtitle2'>БРОЙ</Typography>
		</th>
		<th>
			<Typography variant='subtitle2'>СРОК</Typography>
		</th>
	</tr>
	</thead>
	<tbody>
	{#each itemEntries as entry}
		<tr>
			<td>
				<Typography variant='body2'>{calculateDate(entry.createdAt)}</Typography>
			</td>
			<td>
				<Typography variant='body2'>{entry.quantity}</Typography>
			</td>
			{#if calculateDate(entry.expirationDate) === '-'}
				<td>{calculateDate(entry.expirationDate)}</td>
			{:else}
				{#if !entry.hasExpired}
					<td>
						<Typography
							variant='body2'
							class='bg-green-500 inline-block text-white rounded-md p-1'
						>
							{calculateDate(entry.expirationDate)}
						</Typography>
					</td>
				{:else}
					<td>
						<Typography
							variant='body2'
							class='bg-red-500 text-white inline-block rounded-md p-1'
						>
							{calculateDate(entry.expirationDate)}
						</Typography>
					</td>
				{/if}
			{/if}
		</tr>
	{/each}
	</tbody>
</table>
