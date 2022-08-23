import { readable } from 'svelte/store';

type Screen = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const screens = {
	sm: '640px',
	md: '768px',
	lg: '1024px',
	xl: '1280px',
	'2xl': '1536px'
};

export const mediaQueryMatch = (screen: Screen) => {
	return readable<boolean>(false, (set) => {
		let stop = () => {
			return;
		};
		if (typeof window != 'undefined') {
			const mediaQuery = window.matchMedia(`(min-width: ${screens[screen]})`);
			// Define a function that sets the store to match the media query
			const setMatches = () => set(mediaQuery.matches);
			// Call it once now
			setMatches();
			// Call it on changes
			mediaQuery.addEventListener('change', setMatches);
			// Set the stop function which will be returned
			stop = () => mediaQuery.removeEventListener('change', setMatches);
		}
		return stop;
	});
};
