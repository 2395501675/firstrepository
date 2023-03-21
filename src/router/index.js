import { createRouter, createWebHashHistory } from 'vue-router';
const zhiyiChildren= [
    {
        path: 'jichu',
        name: 'jichu',
        component: () => import('@/pages/zhiyi/jichu/jichu.vue'),
        meta: {
            title: '中医基础理论',
        },
    },
    {
        path: 'zhenduan',
        name: 'zhenduan',
        component: () => import('@/pages/zhiyao/yao2/yao2.vue'),
        meta: {
            title: '中医诊断学',
        },
    },
    {
        path: 'zhongyaoxue',
        name: 'zhongyaoxue',
        component: () => import('@/pages/zhiyao/yaozong/yaozong.vue'),
        meta: {
            title: '中药学',
        },
    },
    {
        path: 'fangjixue',
        name: 'fangjixue',
        component: () => import('@/pages/zhiyao/fagui/fagui.vue'),
        meta: {
            title: '方剂学',
        },
    },
    {
        path: 'zhongyijingdian',
        name: 'zhongyijingdian',
        component: () => import('@/pages/zhiyao/fagui/fagui.vue'),
        meta: {
            title: '中医经典',
        },
    },
    {
        path: 'zhongyineikexue',
        name: 'zhongyineikexue',
        component: () => import('@/pages/zhiyao/fagui/fagui.vue'),
        meta: {
            title: '中医内科学',
        },
    },
    {
        path: 'zhongyiwaikexue',
        name: 'zhongyiwaikexue',
        component: () => import('@/pages/zhiyao/fagui/fagui.vue'),
        meta: {
            title: '中医外科学',
        },
    },
    {
        path: 'zhongyifukexue',
        name: 'zhongyifukexue',
        component: () => import('@/pages/zhiyao/fagui/fagui.vue'),
        meta: {
            title: '中医妇科学',
        },
    },
    {
        path: 'zhongnyierkexue',
        name: 'zhongnyierkexue',
        component: () => import('@/pages/zhiyao/fagui/fagui.vue'),
        meta: {
            title: '中医儿科学',
        },
    },
    {
        path: 'zhenjiuxue',
        name: 'zhenjiuxue',
        component: () => import('@/pages/zhiyao/fagui/fagui.vue'),
        meta: {
            title: '针灸学',
        },
    },
    {
        path: 'zhenduanjichuxue',
        name: 'zhenduanjichuxue',
        component: () => import('@/pages/zhiyao/fagui/fagui.vue'),
        meta: {
            title: '诊断基础学',
        },
    },
    {
        path: 'neikexue',
        name: 'neikexue',
        component: () => import('@/pages/zhiyao/fagui/fagui.vue'),
        meta: {
            title: '内科学',
        },
    },
    {
        path: 'chuanranbingxue',
        name: 'chuanranbingxue',
        component: () => import('@/pages/zhiyao/fagui/fagui.vue'),
        meta: {
            title: '传染病学',
        },
    },
    {
        path: 'yixuelunlixue',
        name: 'yixuelunlixue',
        component: () => import('@/pages/zhiyao/fagui/fagui.vue'),
        meta: {
            title: '医学伦理学',
        },
    },
    {
        path: 'weishengfagui',
        name: 'weishengfagui',
        component: () => import('@/pages/zhiyao/fagui/fagui.vue'),
        meta: {
            title: '卫生法规',
        },
    },
]
const zhiyaoChildren= [
    {
        path: 'yao1',
        name: 'yao1',
        component: () => import('@/pages/zhiyao/yao1/yao1.vue'),
        meta: {
            title: '药1',
        },
    },
    {
        path: 'yao2',
        name: 'yao2',
        component: () => import('@/pages/zhiyao/yao2/yao2.vue'),
        meta: {
            title: '药2',
        },
    },
    {
        path: 'yaozong',
        name: 'yaozong',
        component: () => import('@/pages/zhiyao/yaozong/yaozong.vue'),
        meta: {
            title: '药综',
        },
    },
    {
        path: 'fagui',
        name: 'fagui',
        component: () => import('@/pages/zhiyao/fagui/fagui.vue'),
        meta: {
            title: '法规',
        },
    },
]
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
        path: '/zhiyao',
        name: 'zhiyao',
        component: () => import('@/pages/zhiyao/index.vue'),
        meta: {
            title: 'zhiyao',
        },
        children:[
            ...zhiyaoChildren
        ]
    },
    {
        path: '/zhiyi',
        name: 'zhiyi',
        component: () => import('@/pages/zhiyi/index.vue'),
        meta: {
            title: 'zhiyao',
        },
        children:[
            ...zhiyiChildren
        ]
    },
    
]

export {zhiyiChildren,zhiyaoChildren}
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