<script lang="ts">
    import { Icon } from '@steeze-ui/svelte-icon';
    import { ChevronDown, ChevronUp, ExclamationCircle } from '@steeze-ui/heroicons';
	import Divider from '$lib/components/Divider.svelte';
	import type { ItemEdge } from '../generated/graphql';
	import { Card, CardContent, Container, Stack, Typography, Button } from '../lib/index.js';
    import ItemEntriesComponent from './ItemEntriesComponent.svelte';

	export let item: ItemEdge;
    let itemEntriesBtn = false

    function toggleItemEntries() {
        itemEntriesBtn = !itemEntriesBtn
        console.log(itemEntriesBtn)
    }
</script>

<Container>
	<Stack>
		<Card class="bg-white">
			<CardContent class="flex flex-col">
				<div class="flex justify-between">
                    <div class="flex flex-col">
                        <Typography variant="h6" class="pb-5">
                            {item.node?.name}
                        </Typography>
                        <Typography variant="subtitle1">Количесто:</Typography>
                        <Typography>
                            <strong> {item.node?.totalQuantity} {item.node?.uom.name} </strong>
                        </Typography>
                    </div>
                    <div class="flex flex-col justify-center">
                        <Button variant="text" on:click={toggleItemEntries}>
                            {#if !itemEntriesBtn}
                                <Icon class="w-5 h-5" src={ChevronDown}/>
                            {:else}
                                <Icon class="w-5 h-5" src={ChevronUp}/>    
                            {/if}
                            
                        </Button>
                    </div>
                </div>
                {#if itemEntriesBtn}
                    <ItemEntriesComponent itemEntries = {item?.node?.entries}/>
                {/if}
                {#if item.node?.hasExpiredEntry}
				<Divider/>
                <Typography class="flex"><Icon class="w-6 h-6 stroke-red-500 mr-3" src={ExclamationCircle}/>Изтекъл срок</Typography>
                {/if}
			</CardContent>
		</Card>
	</Stack>
</Container>

<style>
</style>
