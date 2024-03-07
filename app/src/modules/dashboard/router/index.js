const dashboardRoute = {
    path: 'dashboard',
    component: () => import(/* webpackChunkName: "Dashboard" */ '@/modules/dashboard/pages/DashboardPage.vue'),
}

export default dashboardRoute;