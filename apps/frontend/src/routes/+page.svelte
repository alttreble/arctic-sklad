<script lang="ts">
  import { Card, CardContent, Container, Stack } from "../lib/index.js";
  import type { ItemEdge } from "../generated/graphql";

  export let data: {items: ItemEdge[]}
  const items = data?.items
</script>

<Container element="main">
   <Stack gap={4}>
    {#each items as item}
        <Card>
          <CardContent>
            {item.node.name}
          </CardContent>
        </Card>
    {/each}
  </Stack>
</Container>
