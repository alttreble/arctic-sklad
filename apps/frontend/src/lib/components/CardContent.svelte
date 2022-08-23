<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import getThemeContext from '../styles/getThemeContext';
	import type { CardContentProps } from '../types';

	const theme = getThemeContext();
	const { defaultProps, styleOverrides } = theme.components.CardContent;

	let _class = '';
	export { _class as class };
	export let element: CardContentProps['element'] = defaultProps.element;
</script>

<svelte:element
	this={element}
	class={twMerge('p-4', styleOverrides.root, _class)}
	{...$$restProps}
>
	<slot />
</svelte:element>
