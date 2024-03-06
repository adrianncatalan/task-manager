import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "Login" */ '@/modules/login/pages/LoginPage.vue')
    },
    {
        path: '/create-user',
        component: () => import(/* webpackChunkName: "Login" */ '@/modules/create_user/pages/createUserPage.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/pages/NoPageFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
