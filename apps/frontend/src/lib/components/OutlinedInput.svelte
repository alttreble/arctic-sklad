<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import getThemeContext from '../styles/getThemeContext';
	import type { OutlinedInputProps } from '../types';

	const theme = getThemeContext();
	const { defaultProps, styleOverrides } = theme.components.OutlinedInput;

	let _class = '';
	export { _class as class };
	export let element: OutlinedInputProps['element'] = defaultProps.element;
</script>

<svelte:element
	this={element}
	class={twMerge(
		'flex items-center border border-accent-300 rounded-lg w-fit',
		styleOverrides.root,
		_class
	)}
>
	{#if $$slots.startAdornment}
		<slot name="startAdornment" />
	{/if}
	<input type="text" class="outline-none bg-inherit py-2 px-2 w-fit" />
	{#if $$slots.endAdornment}
		<slot name="endAdornment" />
	{/if}
</svelte:element>

<style>
	:global([slot='startAdornment']) {
		@apply pl-4 px-2 h-4 w-auto text-accent-500 pointer-events-auto;
	}
	:global([slot='endAdornment']) {
		@apply pl-2 px-4 h-4 w-auto text-accent-500 pointer-events-auto;
	}
</style>
