<script lang="ts">
	import { onMount } from 'svelte';
	import getThemeContext from '../styles/getThemeContext';
	import type { TabPanelProps } from '../types';
	import getTabsContext from '../contexts/tabs';
	import { writable } from 'svelte/store';
	import generateId from '../utils/generateId';
	import { twMerge } from 'tailwind-merge';

	const theme = getThemeContext();
	const { defaultProps, styleOverrides } = theme.components.TabPanel;

	/***** Props *****/
	let _class = '';
	export { _class as class };
	export let element: TabPanelProps['element'] = defaultProps.element;

	/***** Component *****/
	let elementRef = writable<HTMLElement | null>(null);
	let context = getTabsContext('TabPanel');
	let id = `kitui-tabs-panel-${generateId()}`;

	$: panelData = { id, ref: elementRef };

	onMount(() => {
		$context.registerPanel(panelData);
		return () => $context.unregisterPanel(panelData);
	});
	$: myIndex = $context.panels.indexOf(panelData);
	$: selected = myIndex === $context.selectedIndex;
	$: props = {
		id,
		role: 'tabpanel',
		'aria-labelledby': $context.tabs[myIndex]?.id,
		tabIndex: selected ? 0 : -1
	};
</script>

{#if selected}
	<svelte:element this={element} bind:this={$elementRef} class={twMerge(_class)} {...props}>
		<slot />
	</svelte:element>
{/if}
