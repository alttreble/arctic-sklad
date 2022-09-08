<script lang="ts">
	import type { AddItemInput, Item } from '../generated/graphql';
	import Drawer from '$lib/components/Drawer.svelte';
	import Container from '$lib/components/Container.svelte';
    import Typography from '$lib/components/Typography.svelte';
    import Button from '$lib/components/Button.svelte';
    import { Icon } from '@steeze-ui/svelte-icon';
    import { X } from '@steeze-ui/heroicons'; 
    import { createEventDispatcher } from 'svelte';
    import client from "../graphql/client";

    const dispatch = createEventDispatcher();

    export let open = false;
    let newItem: Partial<AddItemInput> = {}

    function handleSave() {
        const {name, genericName, uomId} = newItem;
        if (!name || !genericName || !uomId) throw new Error("invalid input")

        client.addItem({
            input: newItem as AddItemInput
        })
    }

</script>

<Drawer variant="temporary" {open} direction="bottom" class="rounded-t-[15px] h-[300px] md:h-[300px] bg-white">
	<Container>
		<div class="flex justify-between mt-3">
            <Typography variant="h6">
                Нов продукт
            </Typography>
            <Button variant="text" on:click={() => dispatch("close")}>
                <Icon 
                class="w-5 h-5"
                src={X}/>
            </Button>
        </div>
        <Typography variant="subtitle2" class="text-[11px] text-gray-500">
            Търговско име
        </Typography>
        <input type="text" class="rounded-md h-9 bg-gray-200 pl-4 text-[15px] mt-1 mb-2" required bind:value={newItem.name}>
        <Typography variant="subtitle2" class="text-[11px] text-gray-500">
            Генерично име
        </Typography>
        <input type="text" class="rounded-md h-9 bg-gray-200 pl-4 text-[15px] mt-1 mb-2" required bind:value={newItem.genericName}>
        <Typography variant="subtitle2" class="text-[11px] text-gray-500">
            Мерна единица
        </Typography>
        <input type="text" class="rounded-md h-9 bg-gray-200 pl-4 text-[15px] mt-1 mb-2 w-[40%]" required value={""}>
        <Button variant="text" class="bg-black text-white h-10 w-[90px]" on:click={handleSave}>Запази</Button>
	</Container>
</Drawer>
