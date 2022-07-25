import { createRouter, createWebHashHistory } from 'vue-router';

const basicRoutes = [
    {
        path: '/',
        name: 'Root',
        component: () => import('@/components/layout.vue'),
        meta: {
            title: 'Root',
        },
    },
    {
        path: '/yao1',
        name: 'yao1',
        component: () => import('@/pages/yao1/yao1.vue'),
        meta: {
            title: 'yao1',
        },
    },
    {
        path: '/yao2',
        name: 'yao2',
        component: () => import('@/pages/yao2/yao2.vue'),
        meta: {
            title: 'yao2',
        },
    },
]


export const router = createRouter({
    // 创建一个 hash 历史记录。
    history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
    // 应该添加到路由的初始路由列表。
    routes: basicRoutes,
    // 是否应该禁止尾部斜杠。默认为假
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }),
  });

export function setupRouter(app) {
    app.use(router);
  }