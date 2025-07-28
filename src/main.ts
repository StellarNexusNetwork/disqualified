import './assets/main.css'
import Ripple from 'primevue/ripple';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: '.app-dark',
      cssLayer: false
    }
  }
});

app.directive('ripple', Ripple);

app.mount('#app')
