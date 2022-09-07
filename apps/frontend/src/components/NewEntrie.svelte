<script lang="ts">
	import type { Item } from '../generated/graphql';
	import Drawer from '$lib/components/Drawer.svelte';
	import Container from '$lib/components/Container.svelte';
	import Typography from '$lib/components/Typography.svelte';
	import Button from '$lib/components/Button.svelte';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { X } from '@steeze-ui/heroicons';

	export let item: Item;
	let itemQantity = 5;

	function incrementItem() {
		itemQantity += 1;
	}

	function decrementItem() {
		itemQantity -= 1;
	}

	
	function formatDate() {
        let dateInOneYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
		var d = new Date(dateInOneYear),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		return [year, month, day].join('-');
	}
	
    let date = formatDate()
</script>

<Drawer
	variant="temporary"
	open={true}
	direction="bottom"
	class="rounded-t-[15px] h-[240px] md:h-[240px] bg-white"
>
	<Container>
		<div class="flex justify-between mt-3">
			<Typography variant="h6">Нова наличност</Typography>
			<Button variant="text" on:click>
				<Icon class="w-5 h-5" src={X} />
			</Button>
		</div>
		<Typography variant="subtitle2" class="text-[11px] text-gray-500">{item.uom.name}</Typography>
		<div class="flex gap-2 items-start">
			<input
				type="number"
				class="rounded-md h-9 bg-gray-200 pl-4 text-[15px] mt-1 mb-2 w-[60%]"
				bind:value={itemQantity}
			/>
			<button on:click={decrementItem} class="rounded-md h-9 w-9 bg-gray-200 mt-1 text-center"
				>-</button
			>
			<button on:click={incrementItem} class="rounded-md h-9 w-9 bg-gray-200 mt-1 text-center"
				>+</button
			>
		</div>
		<Typography variant="subtitle2" class="text-[11px] text-gray-500">Срок на годност</Typography>
		<input
			type="date"
			class="rounded-md h-9 bg-gray-200 pl-4 text-[15px] mt-1 mb-2 w-[60%]"
			bind:value={date}
		/>
		<Button variant="text" class="bg-black text-white h-10 w-[90px] mt-2">Запази</Button>
	</Container>
</Drawer>
