<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import getThemeContext from '../styles/getThemeContext';
	import cn from 'classnames';
	import type { DrawerProps } from '../types';

	const theme = getThemeContext();

	const { defaultProps, styleOverrides } = theme.components.Drawer;

	let _class = '';
	export { _class as class };

	export let element: DrawerProps['element'] = defaultProps.element;
	export let variant: DrawerProps['variant'] = defaultProps.variant;
	export let direction: DrawerProps['direction'] = defaultProps.direction;
	export let open: DrawerProps['open'] = defaultProps.open;

	console.log(direction);
	console.log(variant);

	const dispatch = createEventDispatcher();

	function handleClose() {
		dispatch('close');
	}
</script>

{#if variant === 'temporary' && open}
	<div>
		<svelte:element
			this={element}
			class={twMerge(
		cn('bg-slate-100', {
			[`absolute bg-slate-100 overflow-hidden z-drawer transition-all duration-200`]: variant === 'temporary',
       ['top-0 left-0 h-full']: variant === 'temporary' && direction === "left",
       ['top-0 right-0 h-full']: variant === 'temporary' && direction === "right",
       ['top-0 left-0 w-full']: variant === 'temporary' && direction === "top",
       ['bottom-0 left-0 w-full']: variant === 'temporary' && direction === "bottom"
		}),
		_class
	)}
			{...$$restProps}
		>
			<slot />
		</svelte:element>
		<span
			in:fade={{ duration: 200 }}
			out:fade={{ duration: 200 }}
			on:click|stopPropagation={handleClose}
			class="absolute w-screen h-screen top-0 left-0 bg-gray-900/20"></span>
	</div>
{/if}
