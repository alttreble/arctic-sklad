<script lang="ts">
	import type { Item } from '../../../generated/graphql';
	import ItemComponent from '../../../components/ItemComponent.svelte';
	import { Stack, Container, Button } from '../../../lib/index.js';
	import { ChevronLeft, ExclamationCircle, Pencil } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
    import Entries from '../../../components/Entries.svelte';
    import Notifications from '../../../components/Notifications.svelte';

	export let data: { item: Item };
	const item = data?.item;
</script>

<Container>
	<Stack gap={3}>
		<div class="pt40">
			<a href="http://127.0.0.1:5173/"  class="flex items-center mt-10 mb-1">
                <Icon class="w-4 h-4" src={ChevronLeft} />
			<p>Назад</p>
            </a>
		</div>
		<ItemComponent {item} />
        <Entries {item}/>
        <Notifications/>
	</Stack>
</Container>
