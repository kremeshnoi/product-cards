<template>

	<div class='main-layout'>
		<main-header/>
		<main class="main-layout__main">
			<router-view :key='this.$route.path'/>
		</main>
		<main-footer/>
	</div>

</template>

<script>

	// IMPORTS

	import MainHeader from '@/components/MainHeader';
	import MainFooter from '@/components/MainFooter';

	// COMPONENT OPTIONS

	export default {
		name: 'MainLayout',
		components: {
			MainFooter, MainHeader
		}
	}

</script>

<style lang="scss" scoped>

	// MAIN LAYOUT STYLES

	.main-layout {
		height: 100%;
		display: flex;
		flex-direction: column;

		&__main {
			flex: 1;
		}
	}

</style>
