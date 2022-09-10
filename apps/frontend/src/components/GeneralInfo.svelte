<script lang="ts">
	import type { Item } from '../generated/graphql';
	import Drawer from '$lib/components/Drawer.svelte';
	import Container from '$lib/components/Container.svelte';
	import Typography from '$lib/components/Typography.svelte';
	import Button from '$lib/components/Button.svelte';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { X } from '@steeze-ui/heroicons';

	export let item: Item;
	export let open = false;
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
			<Button variant="text" on:click>
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
		<input
			type="text"
			class="rounded-md h-9 bg-gray-200 pl-4 text-[15px] mt-1 mb-2 w-[40%]"
			value={item.uom.name}
		/>
		<div class="flex gap-1">
			<Button variant="text" class="bg-black text-white h-10 w-[90px]">Запази</Button>
			<Button variant="text" class="border-red-500 text-red-500 border-[1px] h-[40px] w-[90px]">Изтрий</Button>
		</div>
	</Container>
</Drawer>
