import { createApp } from 'vue'
import App from './App.vue'
import router from './modules/router'
import './assets/reset.scss'

createApp(App).use(router).mount('#app')
