import { createRouter, createWebHistory } from 'vue-router';
import loginRoute from '@/modules/login/router/index.js';
import { alwaysGoToLoginRoute, registerRoute, noPageFoundRoute } from '@/modules/shared/router/index.js';

const routes = [
    alwaysGoToLoginRoute,
    loginRoute,
    registerRoute,
    noPageFoundRoute
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
