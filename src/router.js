// router.js
import {
  createRouter,
  createWebHistory
} from 'vue-router';

// Import các component tương ứng
import HeaderPage from './components/Headers.vue'
import FooterPage from './components/Footer.vue'
import PostsFilterBar from './components/body/PostsFilterBar'
import NewsTicker from './components/body/NewsTicker'
import LoginPage from './components/Login.vue';
import NewsSinglePage from './components/NewsSingle.vue'
import ContainerPage from './components/Container.vue'
import PreloaderPage from './components/Preloader.vue'

const routes = [{
    path: '/',
    components: {preloader: PreloaderPage, container: ContainerPage, header: HeaderPage, postsFilterBar: PostsFilterBar, newsTicker: NewsTicker, footer: FooterPage}
  },
  {
    path: '/login',
    components: {preloader: PreloaderPage, login: LoginPage}
  },
  {
    path: '/detail',
    components: {preloader: PreloaderPage, container: NewsSinglePage, header: HeaderPage, postsFilterBar: PostsFilterBar, newsTicker: NewsTicker, footer: FooterPage}
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;