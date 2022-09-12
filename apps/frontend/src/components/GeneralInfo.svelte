<script lang="ts">
	import type { Item, UomConnection } from '../generated/graphql';
	import Drawer from '$lib/components/Drawer.svelte';
	import Container from '$lib/components/Container.svelte';
	import Typography from '$lib/components/Typography.svelte';
	import Button from '$lib/components/Button.svelte';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { X } from '@steeze-ui/heroicons';
import { createEventDispatcher } from 'svelte';

	export let item: Item;
	export let uoms: UomConnection;
	export let open = false;
    let dispatch = createEventDispatcher()
</script>

<Drawer
	variant="temporary"
	{open}
	direction="bottom"
	class="rounded-t-[15px] h-[300px] md:h-[300px] bg-white"
>
	<Container>
		<div class="flex justify-between mt-3">
			<Typography variant="h6">Обща информация</Typography>
			<Button variant="text" on:click={() => {dispatch('close')}}>
				<Icon class="w-5 h-5" src={X} />
			</Button>
		</div>
		<Typography variant="subtitle2" class="text-[11px] text-gray-500">Търговско име</Typography>
		<input
			type="text"
			class="rounded-md h-9 bg-gray-200 pl-4 text-[15px] mt-1 mb-2"
			value={item.name}
		/>
		<Typography variant="subtitle2" class="text-[11px] text-gray-500">Генерично име</Typography>
		<input
			type="text"
			class="rounded-md h-9 bg-gray-200 pl-4 text-[15px] mt-1 mb-2"
			value={item.genericName}
		/>
		<Typography variant="subtitle2" class="text-[11px] text-gray-500">Мерна единица</Typography>
		<select class="rounded-md h-9 bg-gray-200 pl-4 text-[15px] mt-1 mb-2 w-[40%]" required>
			<option value="{item.uom.id}" disabled selected hidden >{item.uom.name}</option>
            {#each uoms.edges as uom}
                <option value="{uom.node.id}">{uom.node.name}</option>
            {/each}
        </select>
		<div class="flex gap-1">
			<Button variant="text" class="bg-black text-white h-10 w-[90px]" on:click={() => {dispatch('close')}}>Запази</Button>
			<Button variant="text" class="border-red-500 text-red-500 border-[1px] h-[40px] w-[90px]">Изтрий</Button>
		</div>
	</Container>
</Drawer>
