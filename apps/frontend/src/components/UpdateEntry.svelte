<script lang="ts">
	import type { Item, ItemEntry } from '../generated/graphql';
	import Drawer from './Drawer.svelte';
	import Container from '$lib/components/Container.svelte';
	import Typography from '$lib/components/Typography.svelte';
	import Button from '$lib/components/Button.svelte';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { X } from '@steeze-ui/heroicons';
import { createEventDispatcher } from 'svelte';
import client from '../graphql/client';
import { invalidate } from '$app/navigation';
	import { Stack } from '../lib/index.js';

	export let item: Item;
	export let entry: ItemEntry;
	let dispatch = createEventDispatcher()

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

	async function handleSave(){
		await client.updateItemEntry({
			input: {
				id: entry.id,
				quantity: itemQantity,
				...(expirationDate && { expirationDate: new Date(expirationDate).toISOString() })
			}
		})
		await invalidate()
		dispatch('close')
	}

	async function handleDelete(){
		await client.updateItemEntry({
			input: {
				id: entry.id,
				quantity: 0,
				expirationDate: new Date(expirationDate).toISOString()
			}
		})
		await invalidate()
		dispatch('close')
	}
</script>

<Drawer
	open={true}
	on:close={() => dispatch("close")}
>
	<Container>
		<div class="flex justify-between mt-3">
			<Typography variant="h6">Артикул</Typography>
			<Button variant="text" on:click={()=> {dispatch('close')}}>
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
		<Stack direction='row' gap={2}>
			<Button variant="contained" color='accent' on:click={handleSave}>Запази</Button>
			<Button variant='outlined' color='error'on:click={handleDelete}>Изтрий</Button>
		</Stack>
	</Container>
</Drawer>
