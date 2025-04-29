import '@/styles/index.css'
import { createApp } from 'vue'

import { setupI18n } from '@/locale'
import { setupRouter } from '@/router'
import { setupStore } from '@/stores'
import App from './App.vue'

const app = createApp(App)

setupStore(app)
setupI18n(app)
setupRouter(app)

app.mount('#app')
