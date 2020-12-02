import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router';

Vue.use(Vuex)

function authUser() {
	return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
}

export function isUser() {
	return !!localStorage.getItem('user');
}

function saveUser(user) {
	localStorage.setItem('user', JSON.stringify(user));
}

function clearUser() {
	localStorage.setItem('user', []);
}

export default new Vuex.Store({
	state: {
		userInfo: authUser()
	},
	mutations: {
		SET_USER_INFO(state, userInfo) {
			state.userInfo = userInfo;
			saveUser(userInfo);
		},
		CLEAR_USER_INFO(state) {
			state.userInfo = [];
			clearUser();
		}
	},
	actions: {
		addUserStatus(ctx, data) {
			ctx.commit('SET_USER_INFO', data);
		},
		computeRoute(ctx, result) {
			try {
				const title = result['SKU']
					.split('/')
					.splice(-1, 1)[0]
					.toLowerCase()
					.split('_')
					.join('-');
				router.push({ name: 'Product', params: { title, result } });
			} catch (error) {
				throw new Error(error);
			}
		}
	},
	getters: {
		getUserInfo: state => state.userInfo
	}
})
