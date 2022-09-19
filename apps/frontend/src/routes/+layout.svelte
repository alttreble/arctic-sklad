<script lang='ts'>
	import { createTheme } from '../lib/styles/createTheme';
	import setThemeContext from '../lib/styles/setThemeContext';
	import '../app.css';
	import PageTransition from '../components/PageTransition.svelte';
	import { beforeNavigate } from '$app/navigation';

	/** @type {import('./$types').LayoutData} */
	export let data;
	let transitionDirection: 'forward' | 'backwards';
	const theme = createTheme({
		components: {
			Button: {
				defaultProps: {
					color: 'accent',
				}
			}
		}
	});
	setThemeContext(theme);

	beforeNavigate(({ from, to }) => {
		transitionDirection = to.pathname.includes(from.pathname) ? "forward" : "backwards";
	});
</script>

<PageTransition pathname={data.pathname} {transitionDirection}>
	<slot />
</PageTransition>
