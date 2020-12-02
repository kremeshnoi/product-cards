<template>

	<nav class='navigation'>
		<button
			v-if='getUserInfo.length === 0'
			class='navigation__button'>
			Войти в аккаунт
		</button>

		<div
			v-if='getUserInfo === true'
			class='navigation__title'>
			Продукция
		</div>

		<button
			v-if='getUserInfo === true'
			@click='logout()'
			class='navigation__button'>
			Выйти из системы
		</button>
	</nav>

</template>

<script>

	import { mapMutations, mapGetters } from 'vuex'
	import router from '@/router';

	export default {
		name: 'MainNav',
		computed: {
			...mapGetters(['getUserInfo'])
		},
		methods: {
			...mapMutations(['CLEAR_USER_INFO']),
			logout() {
				this.CLEAR_USER_INFO();
				router.push('/login');
			}
		}
	}

</script>

<style lang='scss' scoped>

	// IMPORTS

	@import '../assets/styles/utils/vars';

	.navigation {
		margin: 0 0 0 10%;
		display: flex;
		justify-content: space-between;
		width: 100%;

		&__title {
			color: $color-white;
		}

		&__button {
			background: none;
			padding: 0;
			margin: 0;
			color: $color-white;
			border: none;
			outline: none;
			cursor: pointer;
		}
	}

</style>
