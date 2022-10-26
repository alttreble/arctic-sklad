<script lang="ts">
	import type { AddItemInput, UomConnection, DefineUomInput } from '../generated/graphql';
	import Container from '$lib/components/Container.svelte';
	import Typography from '$lib/components/Typography.svelte';
	import Button from '$lib/components/Button.svelte';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { X } from '@steeze-ui/heroicons';
	import { createEventDispatcher } from 'svelte';
	import client from '../graphql/client';
	import { invalidate } from '$app/navigation';
	import Drawer from './Drawer.svelte';

	const dispatch = createEventDispatcher();
	export let uoms: UomConnection;

	export let open = false;
	let newItem: Partial<AddItemInput> = {
		name: '',
		genericName: ''
	};

	let defineUom: DefineUomInput = {
		name: '',
		namePlural: ''
	}

	async function handleSave() {
		const { name, genericName } = newItem;
		if (!name || !genericName) throw new Error('invalid input');
		if (newItem.uomId === "-") {
			let response = await client.DefineUOM({input: defineUom})
			newItem.uomId = response.data.defineUOM.id
		}

		await client.addItem({
			input: newItem as AddItemInput
		});
		await invalidate();
		dispatch('close');
	}
</script>

<Drawer {open} on:close={() => dispatch('close')}>
	<Container>
		<div class="flex justify-between mt-3">
			<Typography variant="h6">Нов продукт</Typography>
			<Button variant="text" on:click={() => dispatch('close')}>
				<Icon class="w-5 h-5" src={X} />
			</Button>
		</div>
		<Typography variant="subtitle2" class="text-[11px] text-gray-500">Търговско име</Typography>
		<input
			type="text"
			class="rounded-md h-9 bg-gray-200 pl-4 text-[15px] mt-1 mb-2"
			required
			bind:value={newItem.name}
		/>
		<Typography variant="subtitle2" class="text-[11px] text-gray-500">Генерично име</Typography>
		<input
			type="text"
			class="rounded-md h-9 bg-gray-200 pl-4 text-[15px] mt-1 mb-2"
			required
			bind:value={newItem.genericName}
		/>

		<Typography variant="subtitle2" class="text-[11px] text-gray-500">Описание</Typography>
		<input
			type="text"
			class="rounded-md h-9 bg-gray-200 pl-4 text-[15px] mt-1 mb-2"
			required
			bind:value={newItem.description}
		/>
		<Typography variant="subtitle2" class="text-[11px] text-gray-500">Мерна единица</Typography>
		<select
			class="rounded-md h-9 bg-gray-200 pl-4 text-[15px] mt-1 mb-2 w-[60%]"
			required
			bind:value={newItem.uomId}
		>
			{#each uoms.edges as uom}
				<option value={uom.node.id}>{uom.node.name}</option>
			{/each}
			<option value="-">Нова мерна единица</option>
		</select>
			{#if newItem.uomId === "-"}
			<Typography variant="subtitle2" class="text-[11px] text-gray-500">Единствено число</Typography>
				<input type="text" class="rounded-md h-9 bg-gray-200 pl-4 text-[15px] mt-1 mb-2 w-[40%]" bind:value={defineUom.name}>
			<Typography variant="subtitle2" class="text-[11px] text-gray-500">Множествено число</Typography>
				<input type="text" class="rounded-md h-9 bg-gray-200 pl-4 text-[15px] mt-1 mb-2 w-[40%]" bind:value={defineUom.namePlural}>
			{/if}
		<Button variant="contained" color="accent" on:click={handleSave}>Запази</Button>
	</Container>
</Drawer>
