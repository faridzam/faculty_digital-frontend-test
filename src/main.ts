import { createPinia } from 'pinia';
import { createApp, markRaw } from 'vue';
import { Router } from 'vue-router';
import App from './App.vue';
import router from './core/router';
import './style.css';

declare module 'pinia' {
  export interface PiniaCustomProperties {
    router: Router;
  }
}

const pinia = createPinia();
pinia.use(({store}) => {
  store.router = markRaw(router)
})

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
