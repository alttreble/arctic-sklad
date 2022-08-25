<script lang="ts">
	import { Card, CardContent, Container, Stack, Typography } from '../lib/index.js';
	import type { ItemEdge } from '../generated/graphql';
  import ItemComonent from '../components/itemComonent.svelte';
	

	export let data: { items: ItemEdge[] };
	const items = data?.items;
</script>

<Stack gap={3}>
{#each items as item}
  
    <ItemComonent item={item}/>
  
{/each}
</Stack>

