<script lang="ts">
	import deriveTypographyElement from '../utils/deriveTypographyElement';
	import { twMerge } from 'tailwind-merge';
	import typographyVariant from '../utils/typographyVariant';
	import type { TypographyProps } from '../types';

	let _class = '';
	export { _class as class };

	export let element: TypographyProps['element'] = null;
	export let variant: TypographyProps['variant'] = 'body1';
	let computedElement = deriveTypographyElement(element, variant);

	const typographyClasses = twMerge(typographyVariant(variant), _class);
</script>

<svelte:element this={computedElement} class={typographyClasses}>
	<slot />
</svelte:element>
