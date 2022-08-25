import { defineConfig, Alias } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

const Paths: Alias[] = [];

const AppPath: Alias = {
  find: '@',
  replacement: path.resolve(__dirname, './src'),
};

const AssetsPath: Alias = {
  find: '@assets',
  replacement: path.resolve(__dirname, './src/assets'),
};

Paths.push(AppPath);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envPrefix: 'APP_',
  resolve: {
    alias: Paths,
  },
});
