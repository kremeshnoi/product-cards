import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		meta: {layout: ''},
		component: () => import('../views/Home.vue')
	},
	{
		path: '/login',
		name: 'Login',
		meta: {layout: ''},
		component: () => import('../views/auth/Login.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
