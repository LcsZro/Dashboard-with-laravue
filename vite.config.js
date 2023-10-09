import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js', // O caminho para o ponto de entrada do seu aplicativo Vue.js
            refresh: true,
        }),
        vue(),
    ],
    build: {
        outDir: 'public/build', // O diretório onde os ativos compilados serão gerados
    },
    server: {
        host: 'localhost', // O host onde o servidor de desenvolvimento do Vite será executado
        port: 3000, // A porta para o servidor de desenvolvimento do Vite
    },
});
