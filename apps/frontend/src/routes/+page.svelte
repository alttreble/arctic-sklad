<script lang='ts'>

	import { Container, Stack } from '../lib/index.js';
	import type { ItemEdge } from '../generated/graphql';
	import Item from '../components/Item.svelte';

	export let data: { items: ItemEdge[] };
	const items = data?.items;
</script>


<Stack gap={3}>
{#each items as item}
    <ItemComonent item={item}/>
{/each}
</Stack>
