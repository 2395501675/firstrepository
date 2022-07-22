import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
setupRouter(app);
app.use(ElementPlus)
app.mount('#app')
