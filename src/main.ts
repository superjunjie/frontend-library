import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { SButton } from './components/button'

createApp(App)
  .use(router)
  .use(SButton)
  .mount('#app')
