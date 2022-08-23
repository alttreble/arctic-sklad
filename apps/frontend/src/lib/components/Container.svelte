<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import getThemeContext from '../styles/getThemeContext.js';
	import type { ContainerProps } from "../types"

	const theme = getThemeContext();
	const { defaultProps, styleOverrides } = theme.components.Container;

	let _class = '';
	export { _class as class };
	export let element: ContainerProps['element'] = defaultProps.element;
</script>

<svelte:element
	this={element}
	class={twMerge('flex flex-col w-full max-w-[105ch] mx-auto px-4 md:px-6 xl:px-8', _class)}
	{...$$restProps}
>
	<slot />
</svelte:element>
