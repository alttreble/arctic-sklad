<script lang="ts">
	import { Card, CardContent } from '$lib';
	import { debounce } from 'lodash-es';
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
	import Drawer from './Drawer.svelte';
	import Container from '$lib/components/Container.svelte';
	import Stack from '$lib/components/Stack.svelte';
	import { createEventDispatcher } from 'svelte';
	import Typography from '$lib/components/Typography.svelte';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { X } from '@steeze-ui/heroicons';
	import Divider from '$lib/components/Divider.svelte';

	let dispatch = createEventDispatcher();
	let open = false;
	let willExpire = false;
	let hasExpired = false;
	let lowQantity = false;
	let noQantity = false;

	const handleInput = debounce(async (e) => {
		const url = new URL(location);
		url.searchParams.set('query', e.target.value);
		await goto(url.href, { keepfocus: true, replaceState: true });
	}, 300);
</script>

<Card class="bg-white">
	<CardContent class="flex flex-col items-end">
		<input
			autofocus
			type="text"
			class="rounded-md w-full h-9 bg-gray-200 pl-4 text-[15px] mt-1 mb-2"
			on:input={handleInput}
		/>
		<Button
			variant="outlined"
			class="text-black border-gray-200 hover:border-gray-500"
			on:click={() => {
				open = !open;
			}}>Филтри</Button
		>
		<Drawer
			{open}
			on:close={() => {
				open = !open;
			}}
		>
			<Container class="py-7">
				<div class="flex justify-between pb-5">
					<Typography variant="h4">Филтри</Typography>
					<Button
						variant="text"
						on:click={() => {
							open = !open;
						}}
					>
						<Icon class="w-5 h-5" src={X} />
					</Button>
				</div>
				<Stack gap={3}>
					<div class="flex gap-2">
						<Button
							variant={!lowQantity ? 'outlined' : 'contained'}
							size="small"
							on:click={() => {
								lowQantity = !lowQantity;
							}}
						>
							Ниско количество
						</Button>
						<Button
							variant={!willExpire ? 'outlined' : 'contained'}
							size="small"
							on:click={() => {
								willExpire = !willExpire;
							}}
						>
							Изтичащ срок
						</Button>
					</div>
					<div class="flex gap-2">
						<Button
							variant={!noQantity ? 'outlined' : 'contained'}
							size="small"
							on:click={() => {
								noQantity = !noQantity;
							}}
						>
							Изчерпано количество
						</Button>
						<Button
							variant={!hasExpired ? 'outlined' : 'contained'}
							size="small"
							on:click={() => {
								hasExpired = !hasExpired;
							}}
						>
							Изтекъл срок
						</Button>
					</div>
					<Divider class="my-4" />
				</Stack>
			</Container>
		</Drawer>
	</CardContent>
</Card>
