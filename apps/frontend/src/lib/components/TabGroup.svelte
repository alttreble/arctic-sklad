<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import getThemeContext from '../styles/getThemeContext';
	import type { TabGroupProps } from '../types';
	import { tabsContextKey } from '../utils/consts';
	import type { TabsState } from '../contexts/tabs';

	const theme = getThemeContext();
	const { defaultProps, styleOverrides } = theme.components.TabGroup;

	/***** Props *****/
	export let element: TabGroupProps['element'] = defaultProps.element;
	export let defaultIndex: TabGroupProps['defaultIndex'] = defaultProps.defaultIndex;
	export let vertical = defaultProps.vertical;
	export let manual = defaultProps.manual;

	/***** Component *****/
	let selectedIndex: TabsState['selectedIndex'] = null;
	let hoveredIndex: TabsState['hoveredIndex'] = null;
	let tabs: TabsState['tabs'] = [];
	let panels: TabsState['panels'] = [];
	let listRef: TabsState['listRef'] = writable(null);

	let context = writable<TabsState>({
		selectedIndex: defaultIndex,
		hoveredIndex: hoveredIndex,
		orientation: vertical ? 'vertical' : 'horizontal',
		activation: manual ? 'manual' : 'auto',
		tabs: tabs,
		panels: panels,
		listRef: writable(null),
		setSelectedIndex(index: number) {
			if (selectedIndex === index) return;
			selectedIndex = index;
		},
		setHoveredIndex(index: number | null) {
			if (hoveredIndex === index) return;
			hoveredIndex = index;
		},
		registerTab(tab: typeof tabs[number]) {
			if (tabs.includes(tab)) return;
			if (!$listRef) {
				// We haven't mounted yet so just append
				tabs = [...tabs, tab];
				return;
			}
			let currentSelectedTab = selectedIndex !== null ? tabs[selectedIndex] : null;
			let orderMap = Array.from($listRef.querySelectorAll('[id^="kitui-tabs-tab-"]')!).reduce(
				(lookup, element, index) => Object.assign(lookup, { [element.id]: index }),
				{}
			) as Record<string, number>;
			let nextTabs = [...tabs, tab];
			nextTabs.sort((a, z) => orderMap[a.id] - orderMap[z.id]);
			tabs = nextTabs;
			// Maintain the correct item active
			selectedIndex = (() => {
				if (currentSelectedTab === null) return null;
				return tabs.indexOf(currentSelectedTab);
			})();
		},
		unregisterTab(tab: typeof tabs[number]) {
			tabs = tabs.filter((t) => t !== tab);
		},
		registerPanel(panel: typeof panels[number]) {
			if (!panels.includes(panel)) panels = [...panels, panel];
		},
		unregisterPanel(panel: typeof panels[number]) {
			panels = panels.filter((p) => p !== panel);
		}
	});

	setContext(tabsContextKey, context);

	$: context.update((obj) => {
		return {
			...obj,
			selectedIndex,
			hoveredIndex,
			orientation: vertical ? 'vertical' : 'horizontal',
			activation: manual ? 'manual' : 'auto',
			tabs,
			panels
		};
	});

	onMount(() => {
		if (tabs.length <= 0) return;
		if (selectedIndex !== null) return;
		let mountedTabs = tabs.filter(Boolean) as HTMLElement[];
		let focusableTabs = mountedTabs.filter((tab) => !tab.hasAttribute('disabled'));
		if (focusableTabs.length <= 0) return;
		// Underflow
		if (defaultIndex < 0) {
			selectedIndex = mountedTabs.indexOf(focusableTabs[0]);
		}
		// Overflow
		else if (defaultIndex > mountedTabs.length) {
			selectedIndex = mountedTabs.indexOf(focusableTabs[focusableTabs.length - 1]);
		}
		// Middle
		else {
			let before = mountedTabs.slice(0, defaultIndex);
			let after = mountedTabs.slice(defaultIndex);
			let next = [...after, ...before].find((tab) => focusableTabs.includes(tab));
			if (!next) return;
			selectedIndex = mountedTabs.indexOf(next);
		}
	});
</script>

<svelte:element this={element}>
	<slot />
</svelte:element>
