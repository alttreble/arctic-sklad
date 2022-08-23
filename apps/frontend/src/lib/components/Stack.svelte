<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import getGap from '../utils/gap';
	import getDirection from '../utils/direction';
	import getThemeContext from '../styles/getThemeContext';
	import type { StackProps } from '../types';

	const theme = getThemeContext();
	const { defaultProps, styleOverrides } = theme.components.Stack;

	let _class = '';
	export { _class as class };

	export let element: StackProps['element'] = defaultProps.element;
	export let gap: StackProps['gap'] = defaultProps.gap;
	export let direction: StackProps['direction'] = defaultProps.direction;
</script>

<svelte:element
	this={element}
	class={twMerge(`flex`, getDirection(direction), getGap(gap), _class)}
>
	<slot />
</svelte:element>
