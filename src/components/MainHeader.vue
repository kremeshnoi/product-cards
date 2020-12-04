<template>

	<header class='header'>
		<div class='header__container'>
			<router-link class='header__logo'
							 to='/'>
				Логотип
			</router-link>
			<main-nav/>
		</div>
	</header>

</template>

<script>

	// IMPORTS

	import MainNav from '@/navigation/MainNav';

	// COMPONENT OPTIONS

	export default {
		name: 'MainHeader',
		components: {
			MainNav
		}
	}

</script>

<style lang='scss' scoped>

	// IMPORTS

	@import '../assets/styles/utils/vars';

	// HEADER STYLES

	.header {
		background-color: $color-turquoise;
		padding: 12px 30px;
		position: sticky;
		top: 0;
		width: 100%;
		display: flex;
		justify-content: center;

		&__container {
			display: flex;
			width: 100%;
			max-width: 1200px;
			align-items: center;
		}

		&__logo {
			color: $color-white;
			font-size: 24px;
			text-decoration: none;
		}
	}

</style>
