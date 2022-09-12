<script lang="ts">
	import { Container, Stack } from '../lib/index.js';
	import type { ItemEdge, UomConnection } from '../generated/graphql';
	import Item from '../components/Item.svelte';
	import Button from '$lib/components/Button.svelte';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { PlusCircle } from '@steeze-ui/heroicons';
import NewItem from '../components/NewItem.svelte';

	export let data: { items: ItemEdge[], uoms: UomConnection  };
	$: items = data?.items;
	$: uoms = data?.uoms;
	let addingNewItem = false;
</script>

<Container class='py-8 max-w-2xl'>
	<Stack gap={3}>
		{#each items as item}
			<Item {item} />
		{/each}
	</Stack>
</Container>
<Button element="a" href="item/new" color="accent" class="fixed bottom-8 right-8 flex items-center gap-2" on:click={() => addingNewItem = true}>
	Добави <Icon src={PlusCircle} class="w-4 h-4"/>
</Button>

<NewItem {uoms} open={addingNewItem} on:close={() => addingNewItem = false}/>
