import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from '@zerodevx/svelte-img/vite';

/** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [sveltekit(), imagetools()]
});
