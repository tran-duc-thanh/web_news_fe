import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import CKEditor from '@ckeditor/ckeditor5-vue';
import store from './store/index';

const app = createApp(App)
app.use(router)
app.use(CKEditor)
app.use(store)
app.mount('#app')

// createApp(App).mount('#app')
