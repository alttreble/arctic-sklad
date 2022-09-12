<script lang='ts'>
	import {Card, CardContent} from "$lib";
	import { debounce } from 'lodash-es';
	import { goto } from '$app/navigation';

	const handleInput = debounce(async e => {
		const url = new URL(location);
		url.searchParams.set('query', e.target.value);
		await goto(url.href, { keepfocus: true, replaceState: true });
	}, 300)
</script>

<Card class='bg-white'>
	<CardContent>
		<input autofocus type='text' class='rounded-md w-full h-9 bg-gray-200 pl-4 text-[15px] mt-1 mb-2' on:input={handleInput}>
	</CardContent>
</Card>
