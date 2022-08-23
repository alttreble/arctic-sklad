<script lang="ts">
	import Typography from './Typography.svelte';
	import getThemeContext from '../styles/getThemeContext';
	import type { CardTitleProps } from '../types';
	import { twMerge } from 'tailwind-merge';

	const theme = getThemeContext();
	const { defaultProps, styleOverrides } = theme.components.CardTitle;

	let _class = '';
	export { _class as class };
	export let element: CardTitleProps['element'] = defaultProps.element;
</script>

<Typography
	{element}
	variant="h5"
	class={twMerge('p-4', styleOverrides.root, _class)}
	{...$$restProps}
>
	<slot />
</Typography>
