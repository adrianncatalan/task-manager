const dashboardRoute = {
    path: 'dashboard',
    component: () => import(/* webpackChunkName: "Dashboard" */ '@/modules/dashboard/pages/DashboardPage.vue'),
    meta: { requiresAuth: true }
}

export default dashboardRoute;