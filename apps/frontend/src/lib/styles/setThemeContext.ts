import type { ThemeOptions } from '../types';
import { setContext } from 'svelte';
import { themeContextKey } from '../utils/consts';

export default function setThemeContext(theme: ThemeOptions) {
	setContext(themeContextKey, theme);
}
