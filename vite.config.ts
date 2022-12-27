import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const commitHash = require('child_process').execSync('git rev-parse --short HEAD').toString();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    __COMMIT_HASH__: '123',
  },
});
