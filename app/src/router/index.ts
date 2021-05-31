import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Index from '@src/pages/Index.vue';
import Hoge from '@src/pages/Hoge.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/hoge',
    name: 'Hoge',
    component: Hoge,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
