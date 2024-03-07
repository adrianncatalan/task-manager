import dashboardRoute from '@/modules/dashboard/router/index.js'

const loginRoute = {
    path: '/login',
    component: () => import(/* webpackChunkName: "Login" */ '@/modules/login/pages/LoginPage.vue'),
    children: [
        dashboardRoute
    ]
}

export default loginRoute;