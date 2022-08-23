<script lang="ts">
	import getTabsContext from '../contexts/tabs';
	import cn from 'classnames';

	let context = getTabsContext('TabList');
	let highlighterRef: HTMLDivElement | null;
	let width = 0;
	let height = 0;
	let offsetLeft = 0;
	function updateHighlighter(hoveredIndex: number | null) {
		if (hoveredIndex === null) return;
		const hoveredTabRef = $context.tabs[hoveredIndex];
		offsetLeft = hoveredTabRef.offsetLeft;
		width = hoveredTabRef.clientWidth || 0;
	}

	$: updateHighlighter($context.hoveredIndex);
</script>

<div
	aria-hidden="true"
	class={cn(
		`absolute h-full left-0 bg-gray-800/5 rounded-lg
    pointer-events-none transition-all`,
		{
			'opacity-0': $context.hoveredIndex === null
		}
	)}
	bind:this={highlighterRef}
	style="width: {width}px; transform: translateX({offsetLeft}px)"
/>
