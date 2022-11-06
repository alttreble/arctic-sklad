<script lang='ts'>
	import { Container, Stack } from '../lib/index.js';
	import type { ItemEdge, UomConnection } from '../generated/graphql';
	import Item from '../components/Item.svelte';
	import Button from '$lib/components/Button.svelte';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { PlusCircle } from '@steeze-ui/heroicons';
	import NewItem from '../components/NewItem.svelte';
	import Filters from "../components/Filters.svelte";
	import { goto } from '$app/navigation';

	export let data: { items: ItemEdge[], uoms: UomConnection, filters: any };
	$: items = data?.items;
	$: uoms = data?.uoms;
	$: filters = data?.filters;
	let addingNewItem = false;

	const goToTable = async () => {
		const url = new URL(location);
		await goto(`tableData${url.search}`, { replaceState: true });
	}
	
</script>

<Container class="py-8 lg:max-w-[1200px] max-w-2xl">
	<Stack gap={3}>
		<Filters 
			hasExpired={filters.hasExpired}
			lowQuantity={filters.lowQuantity}
			expiredForNextExpedition={filters.expiredForNextExpedition}
			willExpire={filters.willExpire}
		/>
		<Stack  class="lg:grid grid-cols-2">
		{#each items as item}
			<Item {item} />
		{/each}
		</Stack>
	</Stack>
</Container>
<Button color='accent' class='fixed bottom-8 right-8 flex items-center gap-2'
				on:click={() => addingNewItem = true}>
	Добави
	<Icon src={PlusCircle} class='w-4 h-4' />
</Button>
<Button element="a" on:click={goToTable} color='accent' class='fixed bottom-8 left-8 flex items-center gap-2'>
	Изкарай в таблица
</Button>

<NewItem {uoms} open={addingNewItem} on:close={() => addingNewItem = false} />
