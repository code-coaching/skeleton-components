import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/components',
      children: [
        {
          path: 'switch',
          name: 'switch',
          component: () => import('../views/SwitchView.vue'),
        },
        {
          path: 'progress',
          name: 'progress',
          component: () => import('../views/ProgressView.vue'),
        },
        {
          path: 'app-bar',
          name: 'app-bar',
          component: () => import('../views/AppBarView.vue'),
        }
      ],
    },
  ],
});

export default router;
