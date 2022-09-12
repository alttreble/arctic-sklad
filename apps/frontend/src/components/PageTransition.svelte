<script>
	import { fly } from 'svelte/transition';
	export let pathname = '';
	export let transitionDirection;
	const pageTransitionDuration = 200;
</script>

{#key pathname}
	<div
		in:fly={{ x: transitionDirection === "backwards" ? -5 : 5, duration: pageTransitionDuration, delay: pageTransitionDuration}}
		out:fly={{ x: transitionDirection === "backwards" ? 5 : -5, duration: pageTransitionDuration }}
		class='h-full'
	>
		<slot />
	</div>
{/key}
