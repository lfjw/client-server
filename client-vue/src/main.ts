import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "normalize.css"

import "@/router/verification";
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
createApp(App).use(store).use(ElementPlus).use(router).mount('#app')

