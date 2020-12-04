import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';

Vue.use(Vuex);

const authUser = function () {
	return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
};

export const isUser = function () {
	return !!localStorage.getItem('user');
};

const saveUser = function (user) {
	localStorage.setItem('user', JSON.stringify(user));
};

const clearUser = function () {
	localStorage.setItem('user', []);
};

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
				const SKU = result['SKU']
					.split('/')
					.splice(-1, 1)[0]
					.toLowerCase()
					.split('_')
					.join('-');
				router.push({name: 'Product', params: {SKU}});
			} catch (error) {
				throw new Error(error);
			}
		}
	},
	getters: {
		getUserInfo: state => state.userInfo
	}
})
