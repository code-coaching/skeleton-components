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
        },
        {
          path: 'avatar',
          name: 'avatar',
          component: () => import('../views/AvatarView.vue'),
        },
        {
          path: 'progress-ring',
          name: 'progress-ring',
          component: () => import('../views/ProgressRingView.vue'),
        },
        {
          path: 'navigation',
          name: 'navigation',
          component: () => import('../views/NavigationView.vue'),
        },
      ],
    },
  ],
});

export default router;
