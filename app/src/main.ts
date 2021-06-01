// import "core-js/stable";
// import "regenerator-runtime/runtime";
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import './styles/index.css';

// TODO::DOMContentLoadedの必要性を検討
document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(App);
  app.use(router);
  app.mount('#app');
});
