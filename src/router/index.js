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
        path: '/bencao-shennong',
        name: 'bencao-shennong',
        component: () => import('@/pages/bencao-shennong/index.vue'),
        meta: {
            title: 'bencao-shennong',
        },
    },
    {
        path: '/huangdineijing-suwen',
        name: 'huangdineijing',
        component: () => import('@/pages/huangdineijing-suwen/index.vue'),
        meta: {
            title: 'huangdineijing',
        },
    },
    {
        path: '/jingui',
        name: 'jingui',
        component: () => import('@/pages/jingui/index.vue'),
        meta: {
            title: 'jingui',
        },
    },
    {
        path: '/shanghan',
        name: 'shanghan',
        component: () => import('@/pages/shanghan/index.vue'),
        meta: {
            title: 'shanghan',
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
    {
        path: '/yaozong',
        name: 'yaozong',
        component: () => import('@/pages/yaozong/yaozong.vue'),
        meta: {
            title: 'yaozong',
        },
    },
    {
        path: '/fagui',
        name: 'fagui',
        component: () => import('@/pages/fagui/fagui.vue'),
        meta: {
            title: 'fagui',
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