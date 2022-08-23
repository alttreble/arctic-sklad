<script lang='ts'>
	import { twMerge } from 'tailwind-merge';
	import cn from 'classnames';
	import getThemeContext from '../styles/getThemeContext';
	import type { ListItemPropsOptions } from '../types';

	const theme = getThemeContext();
	const { defaultProps, styleOverrides } = theme.components.ListItem;

	let _class = '';
	export { _class as class };
	export let element: ListItemPropsOptions['element'] = defaultProps.element;
	export let href: string | undefined = undefined;
	export let active = false;
</script>

<svelte:element
	this={element}
	class={twMerge(
			`flex m-1 py-2 px-4 rounded-md
    transition-colors
    hover:bg-gray-800/10
    active:bg-gray-800/5
    focus:bg-gray-800/10`,
			cn({
				[`bg-primary-200/30 hover:bg-primary-200/50
        active:bg-primary-200/30 focus:bg-primary-200/50`]: active
			}),
			_class
		)}
	{...$$restProps}
>
	{#if href}
		<a {href}>
			<slot />
		</a>
	{:else}
		<slot />
	{/if}
</svelte:element>
