<script lang="ts">
	import type { ItemEdge } from '../generated/graphql';
	import { Container, Stack, Typography, Divider } from '../lib/index.js';
	

	export let itemEntries: ItemEdge;
    function calcolateDate(dateInMiliseconds) {
                    const d = new Date(+dateInMiliseconds);
					let year = d.getFullYear();
					let month = d.getMonth() + 1;
					let day = d.getDate();
                    if (month < 10) {
                        let addZero = '0'
                        addZero += month
                        month = addZero
                    }
                    if (!dateInMiliseconds) {
                        return "-"
                    }
					let date = `${day}.${month}.${year}`;
					return date;
				}         
</script>

<Divider />
<table class="table-fixed my-3 text-left">
    <thead>
      <tr>
        <th><Typography variant="subtitle2">ДОБАВЕНО</Typography></th>
        <th><Typography variant="subtitle2">БРОЙ</Typography></th>
        <th><Typography variant="subtitle2">СРОК</Typography></th>
      </tr>
    </thead>
    <tbody>
        {#each itemEntries as entry}
		<tr>
			<td>{calcolateDate(entry.createdAt)}</td>
			<td>{entry.quantity}</td>
            {#if calcolateDate(entry.expirationDate) === '-'}
                <td>{calcolateDate(entry.expirationDate)}</td>
            {:else}
                {#if !entry.hasExpired} 
                    <td><span class="bg-green-500 text-white rounded-md p-0.5">{calcolateDate(entry.expirationDate)}</span></td>
                {:else}
                    <td><span class="bg-red-500 text-white rounded-md p-0.5">{calcolateDate(entry.expirationDate)}</span></td>
                {/if}   
            {/if}    
        </tr>
	{/each}
    </tbody>
  </table>

