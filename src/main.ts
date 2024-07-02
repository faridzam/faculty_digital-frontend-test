import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';
import { createApp, markRaw } from 'vue';
import App from './App.vue';
import router from './core/router';
import './style.css';

const pinia = createPinia();
pinia.use(piniaPersist)
pinia.use(({store}) => {
  store.$router = markRaw(router)
})

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
