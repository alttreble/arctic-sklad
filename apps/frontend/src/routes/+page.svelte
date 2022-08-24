<script lang="ts">
  import { Card, CardContent, Container, Stack, Typography} from "../lib/index.js";
  import type { ItemEdge } from "../generated/graphql";
  let expert = "Axl"

  export let data: {items: ItemEdge[]}
  const items = data?.items
</script>

<Container element="main">
   <Stack gap={4}>
      <Typography variant="subtitle1">The expert is <strong>{expert}</strong></Typography>
    {#each items as item}
        <Card>
          <CardContent>
            {item.node.uom.name}
          </CardContent>
        </Card>
    {/each}
  </Stack>
</Container>
