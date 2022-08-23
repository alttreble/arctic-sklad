<script>
	import { twMerge } from 'tailwind-merge';

	export const element = 'li';
	let _class = '';
	export { _class as class };
</script>

<svelte:element
	this={element}
	class={twMerge(
		`py-1 px-4
    text-gray-500
    cursor-default`,
		_class
	)}
	on:click
>
	<slot />
</svelte:element>
