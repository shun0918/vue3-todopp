import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Index from '@src/pages/Index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
