import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Video from './views/Video.vue'
import Edit from './views/Edit.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/watch/:id',
            name: 'video',
            component: Video,
            props: true
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: Edit,
            props: true
        }
    ]
})
