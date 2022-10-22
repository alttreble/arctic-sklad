<script lang='ts'>
	import type { Item, UomConnection } from '../../../generated/graphql';
	import ItemComponent from '../../../components/ItemComponent.svelte';
	import { Container, Stack } from '../../../lib/index.js';
	import { ChevronLeft } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import Entries from '../../../components/Entries.svelte';
	import Notifications from '../../../components/Notifications.svelte';
	import GeneralInfo from '../../../components/GeneralInfo.svelte';
	import NewEntry from '../../../components/NewEntry.svelte';

	let generalInfo = false;
	let newEntry = false;

	export let data: { item: Item, uoms: UomConnection };

	$: item = data?.item;
	$: uoms = data?.uoms;
</script>

<Container>
	<Stack gap={3}>
		<div class='pt40'>
			<a href='/' class='flex items-center mt-10 mb-1'>
				<Icon class='w-4 h-4' src={ChevronLeft} />
				<p>Назад</p>
			</a>
		</div>
		<ItemComponent
			{item}
			on:click={() => {
				generalInfo = !generalInfo;
			}}
		/>
		<Entries
			{item}
			on:click={() => {
				newEntry = !newEntry;
			}}
		/>
		<Notifications {item}/>
	</Stack>
</Container>

<GeneralInfo
	open={generalInfo}
	{uoms}
	{item}
	on:close={() => {
		generalInfo = !generalInfo;
	}}
/>

<NewEntry
	open={newEntry}
	{item}
	on:close={() => {
		newEntry = !newEntry;
	}}
/>
