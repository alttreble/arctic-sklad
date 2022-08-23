<script lang="ts">
	import getThemeContext from '../styles/getThemeContext';
	import type { TabPanelsProps } from '../types';
	import { twMerge } from 'tailwind-merge';

	const theme = getThemeContext();
	const { defaultProps, styleOverrides } = theme.components.TabPanels;

	/***** Props *****/
	let _class = '';
	export { _class as class };
	export let element: TabPanelsProps['element'] = defaultProps.element;
</script>

<svelte:element this={element} class={twMerge(_class)}>
	<slot />
</svelte:element>
