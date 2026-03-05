import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import md from 'vite-plugin-svelte-md';

export default defineConfig({
    plugins: [
        sveltekit(),
        md()
    ]
});


