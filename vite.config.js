import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    // Defina todas as propriedades como true para forçar URLs absolutas com HTTPS
                    base: true,
                    includeAbsolute: true,
                },
            },
        }),
    ],
    build: {
        outDir: 'public/build',
    },
});
