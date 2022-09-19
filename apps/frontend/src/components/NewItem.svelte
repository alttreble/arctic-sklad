<script lang="ts">
	import type { AddItemInput, UomConnection } from '../generated/graphql';
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

	async function handleSave() {
		const { name, genericName } = newItem;
		if (!name || !genericName) throw new Error('invalid input');

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
			class="rounded-md h-9 bg-gray-200 pl-4 text-[15px] mt-1 mb-2 w-[40%]"
			required
			bind:value={newItem.uomId}
		>
			{#each uoms.edges as uom}
				<option value={uom.node.id}>{uom.node.name}</option>
			{/each}
		</select>
		<Button variant="contained" color="accent" on:click={handleSave}>Запази</Button>
	</Container>
</Drawer>
