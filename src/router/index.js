import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		meta: {
			layout: 'MainLayout'
		},
		component: () => import('../views/Home.vue')
	},
	{
		path: '/login',
		name: 'Login',
		meta: {
			layout: 'MainLayout'
		},
		component: () => import('../views/auth/Login.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

// router.beforeEach((to,from, next) => {
// 	const currentUser = store.getters.getUserInfo;
//
// 	if(!currentUser) {
// 		next('/login');
// 	} else {
// 		next();
// 	}
// });

export default router
