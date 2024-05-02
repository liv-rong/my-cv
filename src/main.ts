import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import 'virtual:uno.css'
import router from '@/router/router.ts'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
