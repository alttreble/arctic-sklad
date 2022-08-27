<script lang='ts'>
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ChevronDown, ChevronUp, ExclamationCircle } from '@steeze-ui/heroicons';
	import Divider from '$lib/components/Divider.svelte';
	import type { ItemEdge } from '../generated/graphql';
	import { Card, CardContent, Stack, Typography, Button } from '../lib/index.js';
	import ItemEntries from './ItemEntries.svelte';

	export let item: ItemEdge;
	
	let itemEntriesBtn = false;

	function toggleItemEntries() {
		itemEntriesBtn = !itemEntriesBtn;
	}
</script>

	<Card class='bg-white' element="a" href={`item/5`}>
		<CardContent class='flex flex-col'>
			<div class='flex justify-between'>
				<div class='flex flex-col'>
					<Typography variant='h6'>
						{item.node?.name}
					</Typography>
					<Typography variant="subtitle2"  class='pb-5'>
						{item.node?.genericName}
					</Typography>
					<Typography class='text-accent-600'>Количесто:</Typography>
					<Typography>
						<strong> {item.node?.totalQuantity} {item.node?.uom.name} </strong>
					</Typography>
				</div>
				<div class='flex flex-col justify-center'>
					<Button variant='text' on:click={toggleItemEntries}>
						<Icon
							class='w-5 h-5'
							src={itemEntriesBtn ? ChevronUp : ChevronDown}
						/>
					</Button>
				</div>
			</div>
			{#if itemEntriesBtn}
				<ItemEntries itemEntries={item?.node?.entries} />
			{/if}
			{#if item.node?.hasExpiredEntry}
				<Divider class='my-4' />
				<Typography class='flex'>
					<Icon class='w-6 h-6 stroke-red-500 mr-3' src={ExclamationCircle} />
					Изтекъл срок
				</Typography>
			{/if}
		</CardContent>
	</Card>

