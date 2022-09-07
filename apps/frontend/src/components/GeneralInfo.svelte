<script lang="ts">
	import type { Item } from '../generated/graphql';
	import Drawer from '$lib/components/Drawer.svelte';
	import Container from '$lib/components/Container.svelte';
import Typography from '$lib/components/Typography.svelte';
import Button from '$lib/components/Button.svelte';
import { Icon } from '@steeze-ui/svelte-icon';
import { X } from '@steeze-ui/heroicons'; 

	export let item: Item;
</script>

<Drawer variant="temporary" open={true} direction="bottom" class="rounded-t-[15px] h-40 md:h-60 bg-white">
	<Container>
		<div class="flex justify-between mt-3">
            <Typography variant="h6">
                Обща информация
            </Typography>
            <Button variant="text">
                <Icon 
                class="w-5 h-5"
                src={X}/>
            </Button>
        </div>
        <Typography variant="subtitle2" class="text-[11px]">
            Търговско име
        </Typography>
        <input type="text" class="rounded-md h-9 bg-gray-200" value={item.name}>
	</Container>
</Drawer>
