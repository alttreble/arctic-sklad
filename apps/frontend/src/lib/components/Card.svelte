<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import getThemeContext from '../styles/getThemeContext';
	import type { CardProps } from '../types';
	import cn from 'classnames';

	const theme = getThemeContext();
	const { defaultProps, styleOverrides } = theme.components.Card;

	let _class = '';
	export { _class as class };
	export let element: CardProps['element'] = defaultProps.element;
	export let outlined: CardProps['outlined'] = defaultProps.outlined;
</script>

<svelte:element
	this={element}
	class={twMerge(
		'rounded-lg overflow-hidden shadow box-border',
		styleOverrides.root,
		cn({
			[twMerge('  shadow-none border border-accent-300', styleOverrides.outline)]: outlined
		}),
		_class
	)}
	{...$$restProps}
>
	<slot />
</svelte:element>
