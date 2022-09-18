<script lang='ts'>
	import { slide } from 'svelte/transition';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ChevronDown, ChevronUp, ExclamationCircle } from '@steeze-ui/heroicons';
	import Divider from '$lib/components/Divider.svelte';
	import type { ItemEdge } from '../generated/graphql';
	import { Button, Card, CardContent, Stack, Typography } from '../lib/index.js';
	import ItemEntries from './ItemEntries.svelte';

	export let item: ItemEdge;

	let itemEntriesBtn = false;

	function toggleItemEntries() {
		itemEntriesBtn = !itemEntriesBtn;
	}
</script>

<Card class='bg-white' element='a' href={`item/${item.node?.id}`}>
	<CardContent class='flex flex-col'>
		<div class='flex'>
			<Stack class='xs:flex-row sm:flex-col flex-1 justify-between'>
				<Stack class='justify-between'>
					<div class='pb-6'>
						<Typography variant='h6'>
							{item.node?.name}
						</Typography>
						{#if item.node?.genericName}
							<Typography class='text-sm' variant='subtitle1'>
								{item.node?.genericName}
							</Typography>
						{/if}
					</div>
				</Stack>
				<Stack direction='row'>
					<Typography>
						<strong> {item.node?.totalQuantity} {item.node?.uom.name} </strong>
					</Typography>
				</Stack>
			</Stack>
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
			<div transition:slide={{duration: 200}} class='w-full'>
				<ItemEntries itemEntries={item?.node?.entries} />
			</div>
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

