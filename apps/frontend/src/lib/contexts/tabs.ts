import type { Readable, Writable } from 'svelte/store';
import { getContext } from 'svelte';
import { tabsContextKey } from '../utils/consts';

interface PanelData {
	id: string;
	ref: Readable<HTMLElement | null>;
}

export type TabsState = {
	// State
	selectedIndex: number | null;
	hoveredIndex: number | null;
	orientation: 'vertical' | 'horizontal';
	activation: 'auto' | 'manual';
	tabs: HTMLElement[];
	panels: PanelData[];
	listRef: Writable<HTMLElement | null>;
	// State mutators
	setSelectedIndex(index: number): void;
	setHoveredIndex(index: number | null): void;
	registerTab(tab: HTMLElement | null): void;
	unregisterTab(tab: HTMLElement | null): void;
	registerPanel(panel: PanelData): void;
	unregisterPanel(panel: PanelData): void;
};

export default function getTabsContext(component: string): Readable<TabsState> {
	const context: Writable<TabsState> | undefined = getContext(tabsContextKey);

	if (context === undefined) {
		throw new Error(`<${component} /> is missing a parent <TabGroup /> component.`);
	}

	return context;
}
