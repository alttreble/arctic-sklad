<script lang="ts">
	import { onMount } from 'svelte';
	import type { TabProps } from '../types';
	import getThemeContext from '../styles/getThemeContext';
	import generateId from '../utils/generateId';
	import getTabsContext from '../contexts/tabs';
	import { Keys } from '../utils/keys';
	import { Focus, focusIn } from '../utils/focus';
	import { match } from '../utils/match';
	import { twMerge } from 'tailwind-merge';
	import cn from 'classnames';

	const theme = getThemeContext();
	const { defaultProps, styleOverrides } = theme.components.Tab;

	/***** Props *****/
	let _class = '';
	export { _class as class };
	export let element: TabProps['element'] = defaultProps.element;
	export let disabled: TabProps['disabled'] = defaultProps.disabled;

	/***** Component *****/
	let context = getTabsContext('Tab');
	let id = `kitui-tabs-tab-${generateId()}`;
	let tabRef: HTMLElement | null = null;

	onMount(() => {
		$context.registerTab(tabRef);
		return () => $context.unregisterTab(tabRef);
	});

	$: myIndex = tabRef ? $context.tabs.indexOf(tabRef) : -1;
	$: selected = myIndex === $context.selectedIndex;

	function handleKeyDown(e: CustomEvent) {
		let event = e as any as KeyboardEvent;
		let list = $context.tabs.filter(Boolean) as HTMLElement[];
		if (event.key === Keys.Space || event.key === Keys.Enter) {
			event.preventDefault();
			event.stopPropagation();
			$context.setSelectedIndex(myIndex);
			return;
		}
		switch (event.key) {
			case Keys.Home:
			case Keys.PageUp:
				event.preventDefault();
				event.stopPropagation();
				return focusIn(list, Focus.First);
			case Keys.End:
			case Keys.PageDown:
				event.preventDefault();
				event.stopPropagation();
				return focusIn(list, Focus.Last);
		}
		return match($context.orientation, {
			vertical() {
				if (event.key === Keys.ArrowUp) return focusIn(list, Focus.Previous | Focus.WrapAround);
				if (event.key === Keys.ArrowDown) return focusIn(list, Focus.Next | Focus.WrapAround);
				return;
			},
			horizontal() {
				if (event.key === Keys.ArrowLeft) return focusIn(list, Focus.Previous | Focus.WrapAround);
				if (event.key === Keys.ArrowRight) return focusIn(list, Focus.Next | Focus.WrapAround);
				return;
			}
		});
	}

	function handleFocus() {
		tabRef?.focus();
	}

	function handleSelection() {
		if (disabled) return;
		tabRef?.focus();
		$context.setSelectedIndex(myIndex);
	}

	function handleSetHovered() {
		$context.setHoveredIndex(myIndex);
	}

	$: myPanelRef = $context.panels[myIndex]?.ref;
	$: props = {
		id,
		role: 'tab',
		'aria-controls': $myPanelRef ? $context.panels[myIndex]?.id : undefined,
		'aria-selected': selected,
		tabIndex: selected ? 0 : -1,
		disabled: disabled ? true : undefined
	};
</script>

<svelte:element
	this={element}
	bind:this={tabRef}
	class={twMerge(
		cn(
			// Root
			twMerge(
				`font-medium h-fit w-fit py-2 px-4
        cursor-pointer
      `,
				styleOverrides?.root
			),
			{
				[`border-b-2 border-primary-500`]: selected
			}
		),
		_class
	)}
	on:keydown={handleKeyDown}
	on:click={handleSelection}
	on:focus={$context.activation === 'manual' ? handleFocus : handleSelection}
	on:mouseenter={handleSetHovered}
	{...props}
>
	<slot />
</svelte:element>
