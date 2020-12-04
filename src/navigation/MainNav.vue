<template>

	<nav class='navigation'>
		<div
			v-if='getUserInfo.length === 0'
			class='navigation__title'>
			Войти в аккаунт
		</div>

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

	// IMPORTS

	import { mapMutations, mapGetters } from 'vuex'
	import router from '@/router';

	// COMPONENT OPTIONS

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

	// NAVIGATION STYLES

	.navigation {
		margin: 0 0 0 10%;
		display: flex;
		justify-content: space-between;
		width: 100%;

		&__title {
			color: $color-white;
			font-size: 14px;
		}

		&__button {
			background: none;
			padding: 0;
			margin: 0;
			color: $color-white;
			border: none;
			outline: none;
			cursor: pointer;
			font-size: 14px;
		}
	}

</style>
