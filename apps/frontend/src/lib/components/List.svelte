<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import getThemeContext from '../styles/getThemeContext';
	import type { ListPropsOptions } from '../types';

	const theme = getThemeContext();
	const { defaultProps, styleOverrides } = theme.components.List;

	let _class = '';
	export { _class as class };
	export let element: ListPropsOptions['element'] = defaultProps.element;
</script>

<svelte:element
	this={element}
	class={twMerge(`py-2`, _class)}
	{...$$restProps}
>
	<slot />
</svelte:element>
