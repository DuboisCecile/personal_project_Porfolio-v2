import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/', // Base public path when served in development or production. base: './' will set the assets as relative, which will lead to an error "Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of “text/html”. Strict MIME type checking is enforced for module scripts per HTML spec" when the app is served in production, and the assets are not served from the root path (when trying to reload a page or access a page directly).
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    server: {
        port: 5173, // Vite's default : 5173 but you can replace this port with any port. Note if the port is already being used, Vite will automatically try the next available port, is strictPort: true is not defined, so this may not be the actual port the server ends up listening on.
        host: true, // Specify which IP addresses the server should listen on. Set this to 0.0.0.0 or true to listen to all addresses, including LAN and public addresses.
        strictPort: true, // The strictPort option is set to true, which means that the application will only listen on the specified port and will not fall back to a different port if the specified port is unavailable
        // origin: 'http://0.0.0.0:8080', // Defines the origin of the generated asset URLs during development. This is useful when you want to serve assets from a different host or port.
        watch: {
            usePolling: true,
        },
        // hmr: {
        //     overlay: false,
        // },
    },
    build: {
        outDir: 'dist', // Explicit output directory
        target: 'es2020', // Match your TypeScript target
        // Increase the limit of the chunk size warning to 1000kb
        chunkSizeWarningLimit: 1000,

        // Code splitting configuration
        rollupOptions: {
            output: {
                manualChunks(id) {
                    // Split node_modules dependencies into a separate chunk
                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }
                },
            },
        },
    },
});
