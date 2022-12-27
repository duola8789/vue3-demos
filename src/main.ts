import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { getCommitInfo } from './utils';
import App from './App.vue';

import CompA from './components/A.vue';
import CompB from './components/B.vue';

const routes = [
  { path: '/a', component: CompA },
  { path: '/b', component: CompB },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});
window.__COMMIT_HASH__ = getCommitInfo();
console.log(window.__COMMIT_HASH__, 123123);

createApp(App).use(router).mount('#app');
