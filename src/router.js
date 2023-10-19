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
import CategoryPage from './components/Category.vue'
import NotFoundPage from './components/exception/NotFoundPage.vue'
import ErrorPage from './components/exception/ErrorPage.vue'

const routes = [
  {
    path: '/',
    components: {
      preloader: PreloaderPage,
      container: ContainerPage,
      header: HeaderPage,
      postsFilterBar: PostsFilterBar,
      newsTicker: NewsTicker,
      footer: FooterPage
    }
  },
  {
    path: '/home',
    components: {
      preloader: PreloaderPage,
      container: ContainerPage,
      header: HeaderPage,
      postsFilterBar: PostsFilterBar,
      newsTicker: NewsTicker,
      footer: FooterPage
    }
  },
  {
    path: '/login',
    components: {
      preloader: PreloaderPage,
      login: LoginPage
    }
  },
  {
    path: '/category',
    components: {
      preloader: PreloaderPage,
      container: CategoryPage,
      header: HeaderPage,
      postsFilterBar: PostsFilterBar,
      newsTicker: NewsTicker,
      footer: FooterPage
    }
  },
  {
    path: '/detail',
    components: {
      preloader: PreloaderPage,
      container: NewsSinglePage,
      header: HeaderPage,
      postsFilterBar: PostsFilterBar,
      newsTicker: NewsTicker,
      footer: FooterPage
    }
  },
  {
    path: '/:catchAll(.*)',
    components: {
      preloader: PreloaderPage,
      exception: NotFoundPage
    }
  },
  {
    path: '/error',
    components: {
      preloader: PreloaderPage,
      exception: ErrorPage
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;