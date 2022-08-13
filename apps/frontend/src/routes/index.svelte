<script lang="ts">
    import { GraphQLClient } from 'graphql-request'
    import { getSdk, UomsDocument } from '../generated/graphql'
    const client = new GraphQLClient('http://localhost:4000/')
    const sdk = getSdk(client)
    let autor = 'Axl'
   
    const umosPromise = sdk.Uoms()
</script>

<h1>The autor is {autor}</h1>

{#await umosPromise}
<p>...</p>
{:then uoms}
<p>{uoms.data.uoms.edges[0]?.node?.name}</p>
{/await}