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
// import ContainerPage from './components/Container.vue'
import PreloaderPage from './components/Preloader.vue'
import CategoryPage from './components/Category.vue'
import NotFoundPage from './components/exception/NotFoundPage.vue'
import ErrorPage from './components/exception/ErrorPage.vue'
import SearchPage from './components/SearchPage.vue'
import TagPage from './components/TagPage.vue'
import CategorysPage from './components/Categorys.vue'
import HomePage from './components/Home.vue'
import ManagerNewsPage from './components/ManagerNewsPage.vue'

const routes = [
  {
    path: '/',
    components: {
      preloader: PreloaderPage,
      container: HomePage,
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
      container: HomePage,
      header: HeaderPage,
      postsFilterBar: PostsFilterBar,
      newsTicker: NewsTicker,
      footer: FooterPage
    }
  },
  {
    path: '/manager/news',
    components: {
      preloader: PreloaderPage,
      container: ManagerNewsPage,
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
    path: '/categorys',
    components: {
      preloader: PreloaderPage,
      container: CategorysPage,
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
    path: '/search',
    components: {
      preloader: PreloaderPage,
      container: SearchPage,
      header: HeaderPage,
      postsFilterBar: PostsFilterBar,
      newsTicker: NewsTicker,
      footer: FooterPage
    }
  },
  {
    path: '/tag',
    components: {
      preloader: PreloaderPage,
      container: TagPage,
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