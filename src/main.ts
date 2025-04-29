import '@/styles/index.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { setupI18n } from '@/locale'
import { setupRouter } from '@/router'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
setupI18n(app)
setupRouter(app)

app.mount('#app')
