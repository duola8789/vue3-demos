import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createHtmlPlugin } from 'vite-plugin-html';

const { getCommitInfo } = require('./gitUtil.js');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          commitInfo: getCommitInfo(),
        },
      },
    }),
  ],
  define: {
    'process.env.commitInfo': JSON.stringify(getCommitInfo()),
  },
});
