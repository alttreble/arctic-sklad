<script lang="ts">
    import type { ItemEdge } from '../../generated/graphql';
    import Container from '$lib/components/Container.svelte';
    import Card from '$lib/components/Card.svelte';
    import CardContent from '$lib/components/CardContent.svelte';
    import { ChevronLeft } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
    import Typography from '$lib/components/Typography.svelte';
	import Button from '$lib/components/Button.svelte';

    export let data;
    

    let items: ItemEdge = data.items; 

	let table;

	function exportTable() {
		// window.open('data:application/vnd.ms-excel,' + encodeURIComponent(table.textContent))
		let dataType = 'application/vnd.ms-excel';
		let tableHtml = table.outerHTML.replace(/ /g, '%20');
		tableHtml.replace(Typography, 'p')
		const downloadLink = document.createElement("a");
		document.body.appendChild(downloadLink);

        downloadLink.href = 'data:' + dataType + ', ' + tableHtml;
        
        downloadLink.click();
    }
   
</script>

<Container>
    <div class='mb-5'>
        <a href='/' class='flex items-center mt-10 mb-1'>
            <Icon class='w-4 h-4' src={ChevronLeft} />
            <p>Назад</p>
        </a>
    </div>
    
  <Card class='bg-white'>
    <CardContent>
        <table bind:this={table} class="table-fixed text-left w-full">
			<thead>
				<tr>
					<th>
						<Typography variant="subtitle2">Име</Typography>
					</th>
					<th>
						<Typography variant="subtitle2">Мерна Единица</Typography>
					</th>
					<th>
						<Typography variant="subtitle2">Състояние</Typography>
					</th>
                    <th>
						<Typography variant="subtitle2" class="text-center">Брой</Typography>
					</th>
				</tr>
			</thead>
			<tbody>
				{#each items as item}
					<tr
						class="hover:bg-accent-100 cursor-pointer"
					>
						<td>
							<Typography variant="body2">{item.node.name}</Typography>
						</td>
						<td>
							<Typography variant="body2">{item.node.uom.name}</Typography>
						</td>
						
							<td>
								<Typography
									variant="body2"
									class="{item.node.hasExpiredEntry ? 'text-left' : 'text-left pl-8'}"
								>
                                {item.node.hasExpiredEntry ? 'Изтекъл срок' : '-'}
								</Typography>
							</td>
						
							<td class="text-center">
								<input type="text" class="text-center w-10">
							</td>
						
					</tr>
				{/each}
			</tbody>
		</table>
    </CardContent>
  </Card>
  <Button class='fixed bottom-8 right-8 flex items-center gap-2' on:click={exportTable}>Изтегли Excel</Button>
</Container>
  