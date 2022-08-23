<script lang="ts">
	import getTabsContext from '../contexts/tabs';
	import getThemeContext from '../styles/getThemeContext';
	import type { TabListProps } from '../types';
	import TabHighlighter from './TabHighlighter.svelte';
	import { twMerge } from 'tailwind-merge';
	import cn from 'classnames';

	const theme = getThemeContext();
	const { defaultProps, styleOverrides } = theme.components.TabList;

	let _class = '';
	export { _class as class };
	export let element: TabListProps['element'] = defaultProps.element;

	/***** Component *****/
	let context = getTabsContext('TabList');
	let listRef = $context.listRef;

	function resetHoverState() {
		$context.setHoveredIndex(null);
	}

	$: props = {
		role: 'tablist',
		'aria-orientation': $context.orientation
	};
</script>

<svelte:element
	this={element}
	bind:this={$listRef}
	class={twMerge(
		'flex relative',
		cn({
			['flex-row']: $context.orientation === 'horizontal',
			['flex-col']: $context.orientation === 'vertical'
		}),
		_class
	)}
	{...props}
	on:mouseleave={resetHoverState}
>
	<TabHighlighter />
	<slot />
</svelte:element>
