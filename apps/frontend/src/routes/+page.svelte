<script lang="ts">
  import Title from "../components/title.svelte";
  import { List, ListItem } from "../lib/index.js";
  import type { ItemEdge } from "../generated/graphql";

  export let data: {items: ItemEdge[]}
  const items = data?.items
</script>

<main>
  <List>
    {#each items as item}
      <ListItem>
        <Title {item}/>
      </ListItem>
    {/each}
  </List>
</main>
