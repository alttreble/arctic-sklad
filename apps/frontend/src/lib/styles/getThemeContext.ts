import { getContext } from 'svelte';
import { themeContextKey } from '../utils/consts';
import type { ThemeOptions } from '../types';

export default function getThemeContext() {
	const theme = getContext<ThemeOptions>(themeContextKey);

	if (!theme) {
		throw new Error("You haven't defined a theme context!");
	}

	return theme;
}
