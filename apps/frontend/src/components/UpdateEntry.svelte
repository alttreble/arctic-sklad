<script lang="ts">
	import type { Item, ItemEntry } from '../generated/graphql';
	import Drawer from '$lib/components/Drawer.svelte';
	import Container from '$lib/components/Container.svelte';
	import Typography from '$lib/components/Typography.svelte';
	import Button from '$lib/components/Button.svelte';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { X } from '@steeze-ui/heroicons';

	export let item: Item;
	export let entry: ItemEntry;
	export let open = false;

	let createdAt = calculateDate(entry?.createdAt);
	let expirationDate = calculateDateForCalendar(entry?.expirationDate);
	let  itemQantity = entry?.quantity;
	
	function incrementItem() {
		itemQantity += 1;
	}

	function decrementItem() {
		if (itemQantity === 0) {
			return 
		}
		itemQantity -= 1;
	}

	function calculateDate(dateInMilliseconds: string) {
		const d = new Date(+dateInMilliseconds);
		let year = d.getFullYear();
		let month = d.getMonth() + 1;
		let day = d.getDate();
		if (month < 10) {
			let addZero = '0';
			addZero += month;
			month = addZero;
		}
		if (!dateInMilliseconds) {
			return '-';
		}
		return `${day}.${month}.${year}`;
	}

	function calculateDateForCalendar(dateInMilliseconds: string) {
		const d = new Date(+dateInMilliseconds);
		let year = d.getFullYear();
		let month = d.getMonth() + 1;
		let day = d.getDate();
		if (month < 10) {
			let addZero = '0';
			addZero += month;
			month = addZero;
		}	
		if (day < 10) {
			let addZero = '0';
			addZero += day;
			day = addZero;
		}
		if (!dateInMilliseconds) {
			return;
		}
		return `${year}-${month}-${day}`;
	}
</script>

<Drawer
	variant="temporary"
	open={true}
	direction="bottom"
	class="rounded-t-[15px] h-[300px] md:h-[300px] bg-white"
>
	<Container>
		<div class="flex justify-between mt-3">
			<Typography variant="h6">Артикул</Typography>
			<Button variant="text" on:click>
				<Icon class="w-5 h-5" src={X} />
			</Button>
		</div>
		<Typography variant="subtitle2" class="text-[11px] text-gray-500">ДОБАВЕНО</Typography>
		<Typography class="text-[12px] my-1"
			><span class=" bg-[#D6E0FF] p-[3px] rounded">{createdAt}</span></Typography
		>
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
			bind:value={expirationDate}
		/>
		<div class="flex gap-1">
			<Button variant="text" class="bg-black text-white h-10 w-[90px]">Запази</Button>
			<Button variant="text" class="border-red-500 text-red-500 border-[1px] h-[40px] w-[90px]">Изтрий</Button>
		</div>
	</Container>
</Drawer>
