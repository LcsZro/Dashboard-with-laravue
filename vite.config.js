import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    laravel({
      // Set the correct entry point for your application
      input: 'resources/js/app.js',
      refresh: true,
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
  ],
  build: {
    // Set the correct output directory for your built assets
    outDir: 'public/build',
    // Specify the name of the entry point (if different from 'app')
    rollupOptions: {
      input: {
        app: 'resources/js/app.js',
        // Add any additional entry points if needed
      },
    },
  },
});
