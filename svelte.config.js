import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter(),

        // Copier le dossier admin tel quel (sans le traiter comme une route)
        files: {
            assets: 'static'
        }
    }
};

export default config;

