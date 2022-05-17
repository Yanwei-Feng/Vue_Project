import { createApp } from 'vue';
import App from './App.vue';
//ui库
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
//路由
import router from './router';

const app = createApp(App);

app.use(ElementPlus);
app.use(router);

app.mount('#app');
