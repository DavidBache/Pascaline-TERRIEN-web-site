import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { markdown } from 'vite-plugin-markdown';

export default defineConfig({
    plugins: [
        sveltekit(),
        markdown({ mode: 'html' })
    ]
});
