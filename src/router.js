// router.js
import {
  createRouter,
  createWebHistory
} from 'vue-router';

// Import các component tương ứng
import LoginPage from './components/Login.vue';
import HomePage from './components/Home.vue';

const routes = [{
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;