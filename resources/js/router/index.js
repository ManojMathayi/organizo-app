import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Dashboard from '../pages/Dashboard.vue'
import Tasks from '../pages/Tasks.vue'
import Categories from '../pages/Categories.vue'
import Reports from '../pages/Reports.vue'
import Settings from '../pages/Settings.vue'

const routes = [
    { path: '/', component: Home },
    {
        path: '/dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
    },
    {
        path: '/tasks',
        component: Tasks,
        meta: { requiresAuth: true }
    },
    {
        path: '/categories',
        component: Categories,
        meta: { requiresAuth: true }
    },
    {
        path: '/reports',
        component: Reports,
        meta: { requiresAuth: true }
    },
    {
        path: '/settings',
        component: Settings,
        meta: { requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// Route guard - check authentication
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

    if (requiresAuth && !token) {
        // Redirect to home with a message
        next({ path: '/', query: { auth: 'required' } })
    } else if (to.path === '/' && token) {
        // If user is logged in and tries to access home, redirect to dashboard
        next('/dashboard')
    } else {
        next() // Proceed
    }
})

export default router