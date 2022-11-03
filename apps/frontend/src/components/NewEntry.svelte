<script lang='ts'>
	import type { Item } from '../generated/graphql';
	import Drawer from './Drawer.svelte';
	import Container from '$lib/components/Container.svelte';
	import Typography from '$lib/components/Typography.svelte';
	import Button from '$lib/components/Button.svelte';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { X } from '@steeze-ui/heroicons';
	import { invalidate } from '$app/navigation';
	import client from '../graphql/client';
	import { createEventDispatcher } from 'svelte';

	export let item: Item;
	let itemQuantity = 5;

	const dispatch = createEventDispatcher();

	function incrementItem() {
		itemQuantity += 1;
	}

	function decrementItem() {
		itemQuantity -= 1;
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

	export let open = false;
	let date = formatDate();

	async function handleSave() {
		await client.createEntryOnItem({
			input: {
				itemId: item.id,
				quantity: itemQuantity,
				...(date && { expirationDate: new Date(date).toISOString() })
			}
		});
		await invalidate();
		dispatch('close');
	}
</script>

<Drawer {open} on:close={() => dispatch("close")}>
	<Container>
		<div class='flex justify-between mt-3'>
			<Typography variant='h6'>Нова наличност</Typography>
			<Button variant='text' on:click={() => {dispatch('close')}}>
				<Icon class='w-5 h-5' src={X} />
			</Button>
		</div>
		<Typography variant='subtitle2' class='text-[11px] text-gray-500'>{item.uom.name}</Typography>
		<div class='flex gap-2 items-start'>
			<input
				type='number'
				class='rounded-md h-9 bg-gray-200 pl-4 text-[15px] mt-1 mb-2 w-[60%]'
				bind:value={itemQuantity}
			/>
			<button on:click={decrementItem} class='rounded-md h-9 w-9 bg-gray-200 mt-1 text-center'
			>-
			</button
			>
			<button on:click={incrementItem} class='rounded-md h-9 w-9 bg-gray-200 mt-1 text-center'
			>+
			</button
			>
		</div>
		<Typography variant='subtitle2' class='text-[11px] text-gray-500'>Срок на годност</Typography>
		<input
			type='date'
			class='rounded-md h-9 bg-gray-200 pl-4 text-[15px] mt-1 mb-2 w-[60%]'
			bind:value={date}
		/>
		<Button variant='contained' color='accent' on:click={handleSave}>Запази</Button>
	</Container>
</Drawer>
