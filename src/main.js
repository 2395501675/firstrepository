import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import request from './util/request'
const app = createApp(App)
setupRouter(app);
app.config.globalProperties.$request = request
app.use(ElementPlus)
app.mount('#app')
