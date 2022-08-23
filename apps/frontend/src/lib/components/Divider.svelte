<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import getThemeContext from '../styles/getThemeContext';
	import type { DividerProps } from '../types';
	import cn from 'classnames';

	const theme = getThemeContext();
	const { defaultProps, styleOverrides } = theme.components.Divider;

	let _class = '';
	export { _class as class };
	export let element: DividerProps['element'] = defaultProps.element;
	export let direction: DividerProps['direction'] = defaultProps.direction;
</script>

<svelte:element
	this={element}
	class={twMerge(
		'bg-accent-300/50 ',
		styleOverrides.root,
		cn({
			['h-[1px] w-full my-2']: direction === 'horizontal',
			['w-[1px] h-full mx-2']: direction === 'vertical'
		}),
		_class
	)}
	{...$$restProps}
>
	<slot />
</svelte:element>
