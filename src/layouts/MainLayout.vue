<template>

	<div class='main-layout'>
		<main-header/>
		<main>
			<router-view/>
		</main>
		<main-footer/>
	</div>

</template>

<script>

	import MainHeader from '@/components/MainHeader';
	import MainFooter from '@/components/MainFooter';

	export default {
		name: 'MainLayout',
		components: {
			MainFooter, MainHeader
		}
	}

</script>

<style scoped>

	.main-layout {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1;
	}

</style>
