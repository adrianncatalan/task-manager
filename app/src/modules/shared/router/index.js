const alwaysGoToLoginRoute = {
    path: '/',
    redirect: '/login'
}

const registerRoute = {
    path: '/register',
    component: () => import(/* webpackChunkName: "Register" */ '@/modules/shared/pages/RegisterPage.vue')
}

const noPageFoundRoute = {
    path: '/:pathMatch(.*)*',
    component: () => import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/pages/NoPageFound.vue')
}

export { alwaysGoToLoginRoute, registerRoute, noPageFoundRoute };