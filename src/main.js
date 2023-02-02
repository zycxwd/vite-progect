import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import router from './router'
import libs from './lib/index'
import { useREM } from './utils/flexible'
useREM()
const app = createApp(App).use(router).use(libs).mount('#app')
