import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

/* exported app */
const app = createApp(App).use(store);
app.mount('#app')
