<script lang="ts">
import type { Item } from '../generated/graphql';
import { Card, CardContent, Typography, Button } from '../lib/index.js';
import { Icon } from '@steeze-ui/svelte-icon';
import { Pencil } from '@steeze-ui/heroicons';


export let item: Item;

</script>

<Card class='bg-white'>
    <CardContent class='flex flex-col'>
        <div class='flex justify-between'>
            <div class='flex flex-col'>
                <div class="pb-2">
                    <Typography variant='h6'>
                        {item.name}
                    </Typography>
                    {#if item.genericName}
                        <Typography class="text-sm" variant="subtitle1">
                            {item.genericName}
                        </Typography>
                    {/if}
                    {#if item.description}
                        <Typography class="text-sm" variant="subtitle1">
                            {item.description}
                        </Typography>
                    {/if}
                </div>
                <Typography>
                    <strong> {item.totalQuantity} 
                        {#if item.totalQuantity === 1}
								{item.uom.name}
							{:else}
								{item.uom.namePlural}
						{/if} 
                    </strong>
                    
                </Typography>
            </div>
            <div>
                <Button variant="text" on:click>
                    <Icon 
                        class="w-4 h-4"
                        src={Pencil}
                    />
                </Button>
            </div>
        </div>
    </CardContent>
</Card>