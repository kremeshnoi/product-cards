import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store, { isUser } from '../store'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		meta: {
			layout: 'MainLayout'
		},
		component: () => import('../views/Home.vue'),
		beforeEnter: (to, from, next) => {
			const currentUser = isUser();
			if(!currentUser) {
				next('/login')
			}

			next();

		}
	},
	{
		path: '/login',
		name: 'Login',
		meta: {
			layout: 'MainLayout'
		},
		component: () => import('../views/auth/Login.vue'),
		beforeEnter: (to, from, next) => {
			const currentUser = isUser();
			if(currentUser) {
				next('/')
			}

			next();
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
