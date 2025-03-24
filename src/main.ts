import '@app/styles/main.css'
import '@app/styles/normalize.css'
import '@app/styles/scss/scrollbar.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app/App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
