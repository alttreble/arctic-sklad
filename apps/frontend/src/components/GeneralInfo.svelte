<script lang='ts'>
	import type { Item, UomConnection } from '../generated/graphql';
	import { invalidate } from '$app/navigation';
	import Drawer from './Drawer.svelte';
	import Container from '$lib/components/Container.svelte';
	import Typography from '$lib/components/Typography.svelte';
	import Button from '$lib/components/Button.svelte';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { X } from '@steeze-ui/heroicons';
	import { createEventDispatcher } from 'svelte';
	import client from '../graphql/client';

	export let item: Item;
	export let uoms: UomConnection;
	export let open = false;
	let uomId = item.uom.id;
	let name = item.name;
	let genericName = item.genericName;
	let dispatch = createEventDispatcher();

	async function handleSave() {
		if (!name || !genericName) throw new Error('invalid input');
		await client.updateItem({
			input: {
				id: item.id,
				name,
				genericName,
				uomId
			}
		});
		await invalidate();
		dispatch('close');
	}

	async function handleDelete() {
		await client.deleteItem({
			input: {
				id: item.id
			}
		})
		await invalidate();
		window.location.replace('/')
	}
</script>

<Drawer {open} on:close={() => dispatch("close")}>
	<Container>
		<div class='flex justify-between mt-3'>
			<Typography variant='h6'>Обща информация</Typography>
			<Button variant='text' on:click={() => {dispatch('close')}}>
				<Icon class='w-5 h-5' src={X} />
			</Button>
		</div>
		<Typography variant='subtitle2' class='text-[11px] text-gray-500'>Търговско име</Typography>
		<input
			type='text'
			class='rounded-md h-9 bg-gray-200 pl-4 text-[15px] mt-1 mb-2'
			bind:value={name}
		/>
		<Typography variant='subtitle2' class='text-[11px] text-gray-500'>Генерично име</Typography>
		<input
			type='text'
			class='rounded-md h-9 bg-gray-200 pl-4 text-[15px] mt-1 mb-2'
			bind:value={genericName}
		/>
		<Typography variant='subtitle2' class='text-[11px] text-gray-500'>Мерна единица</Typography>
		<select class='rounded-md h-9 bg-gray-200 pl-4 text-[15px] mt-1 mb-2 w-[40%]' required bind:value={uomId}>
			<option value='{item.uom.id}' disabled selected hidden>{item.uom.name}</option>
			{#each uoms.edges as uom}
				<option value='{uom.node.id}'>{uom.node.name}</option>
			{/each}
		</select>
		<div class='flex gap-1'>
			<Button variant='text' class='bg-black text-white h-10 w-[90px]' on:click={handleSave}>Запази</Button>
			<Button variant='text' class='border-red-500 text-red-500 border-[1px] h-[40px] w-[90px]' on:click={handleDelete}>Изтрий</Button>
		</div>
	</Container>
</Drawer>
