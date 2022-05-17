import { login } from '@/views/login/request';
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';

const Home = () => import('../views/home/index.vue');
const Login = () => import('@/views/login/index.vue');
/**
 * 定义路由
 * 每个路由都需要映射到一个组件
 *
 */

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/home', component: Home, name: 'home' },
  { path: '/login', component: Login, name: 'login' },
];

/**
 * 创建路由实例并传递'routes '配置
 *
 */
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
