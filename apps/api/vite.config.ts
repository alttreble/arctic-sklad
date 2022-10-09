import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
	test: {
		globals: true
	},
	resolve: {
		alias: {
			'@app': resolve(__dirname, './src')
		}
	}
});
