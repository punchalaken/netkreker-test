import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: () => import('@/pages/FilmsPage.vue'), name: 'home' },
        {
            path: '/:pathMatch(.*)',
            component: () => import('@pages/NotFound.vue'),
            name: 'not-found',
        },
        {
            path: '/movie/:id',
            component: () => import('@/pages/MoviePage.vue'),
            name: 'movie-page',
        },
    ],
})

export default router
