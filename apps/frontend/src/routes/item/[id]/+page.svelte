<script lang="ts">
import type { Item } from '../../../generated/graphql';

export let data: { item: Item };
const item = data?.item

</script>

<h1>{item.name}</h1>




















