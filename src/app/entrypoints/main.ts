import { createPinia } from 'pinia';
import { createApp } from 'vue';
import '../styles/style.css';
import App from './App.vue';

const pinia = createPinia();

createApp(App).use(pinia).mount('#app');
