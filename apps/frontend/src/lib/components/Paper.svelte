<script lang="ts">
	import getThemeContext from '../styles/getThemeContext';
	import { twMerge } from 'tailwind-merge';
	import deriveElevation from '../utils/deriveElevation';

	const theme = getThemeContext();
	const { defaultProps, styleOverrides } = theme.components.Paper;

	// Forward classes
	let _class = '';
	export { _class as class };
	export let element = defaultProps.element;
	export let elevation = defaultProps.elevation;

	$: elevationClass = deriveElevation(elevation);
</script>

<svelte:element
	this={element}
	class={twMerge('rounded-xl bg-white', elevationClass, styleOverrides?.root, _class)}
>
	<slot />
</svelte:element>
