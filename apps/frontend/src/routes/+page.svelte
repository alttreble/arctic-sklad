<script lang='ts'>

	import { Container, Stack } from '../lib/index.js';
	import type { ItemEdge } from '../generated/graphql';
	import Item from '../components/Item.svelte';

	export let data: { items: ItemEdge[] };
	const items = data?.items;
</script>


<Container element='main' class='max-w-xl py-6'>
	<Stack gap={3}>
		{#each items as item}
			<Item item={item} />
		{/each}
	</Stack>
</Container>
