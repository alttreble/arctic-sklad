<script lang="ts">
	import { slide } from 'svelte/transition';
	import { Icon } from '@steeze-ui/svelte-icon';
	import {
		ChevronDown,
		ChevronUp,
		ExclamationCircle,
		Exclamation,
		CheckCircle
	} from '@steeze-ui/heroicons';
	import Divider from '$lib/components/Divider.svelte';
	import type { ItemEdge, UomsDocument } from '../generated/graphql';
	import { Button, Card, CardContent, Stack, Typography } from '../lib/index.js';
	import ItemEntries from './ItemEntries.svelte';
	import { find } from 'lodash-es';

	export let item: ItemEdge;

	let itemEntriesBtn = false;

	function toggleItemEntries(e) {
		e.preventDefault();
		itemEntriesBtn = !itemEntriesBtn;
	}
</script>

<Card class="bg-white" element="a" href={`item/${item.node?.id}`}>
	<CardContent class="flex flex-col">
		<div class="flex">
			<Stack class="xs:flex-row sm:flex-col flex-1 justify-between">
				<Stack class="justify-between">
					<div class="pb-6">
						<Typography variant="h6">
							{item.node?.name}
						</Typography>
						{#if item.node?.genericName}
							<Typography class="text-sm" variant="subtitle1">
								{item.node?.genericName}
							</Typography>
						{/if}
					</div>
				</Stack>
				<Stack direction="row">
					<Typography>
						<strong>
							{item.node?.totalQuantity}
							{#if item.node?.totalQuantity === 1}
								{item.node?.uom.name}
							{:else}
								{item.node?.uom.namePlural}
							{/if}
						</strong>
					</Typography>
				</Stack>
			</Stack>
			<div class="flex flex-col justify-center">
				<Button variant="text" on:click={toggleItemEntries}>
					<Icon class="w-5 h-5" src={itemEntriesBtn ? ChevronUp : ChevronDown} />
				</Button>
			</div>
		</div>
		{#if itemEntriesBtn}
			<div transition:slide={{ duration: 200 }} class="w-full">
				<ItemEntries itemEntries={item?.node?.entries} />
			</div>
		{/if}
		<Divider class="my-4" />
		{#if !item.node?.notifications?.find((e) => e?.type)}
			<Typography class="flex">
				<Icon class="w-[24px] h-[24px] stroke-green-500 mr-2" src={CheckCircle} />
				Топ
			</Typography>
		{/if}
		<div class="flex gap-5 flex-wrap">
			{#if item.node?.notifications?.find((e) => e?.type === 'hasExpired')}
				<Typography class="flex">
					<Icon class="w-[24px] h-[24px] stroke-red-500 mr-2" src={ExclamationCircle} />
					Изтекъл срок
				</Typography>
			{:else if item.node?.notifications?.find((e) => e?.type === 'hasEntriesThatWillExpire')}
				<Typography class="flex">
					<Icon class="w-[24px] h-[24px] stroke-yellow-500 mr-2" src={ExclamationCircle} />
					Изтичащ срок
				</Typography>
			{/if}
			{#if item.node?.notifications?.find((e) => e?.type === 'expiredForNextExpedition')}
				<Typography class="flex">
					<Icon class="w-[24px] h-[24px] stroke-orange-500 mr-2" src={ExclamationCircle} />
					Негодно за следваща експедиция
				</Typography>
			{/if}
			{#if item.node?.notifications?.find((e) => e?.type === 'lowQuantity')}
				<Typography class="flex">
					<Icon class="w-[24px] h-[24px] stroke-yellow-500 mr-2" src={Exclamation} />
					Ниско количество
				</Typography>
			{/if}
		</div>
	</CardContent>
</Card>
