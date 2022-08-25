<script lang="ts">
import type {ItemEdge} from "../generated/graphql"

export let item: ItemEdge;
</script>

<p>{item?.node?.name}</p>