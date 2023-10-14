// router.js
import { createRouter, createWebHistory } from 'vue-router';

// Import các component tương ứng
import LoginPage from './components/Login.vue';

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
