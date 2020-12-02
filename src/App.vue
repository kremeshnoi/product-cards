<template>

	<div id="app">
		<component :is="layout">
			<router-view/>
		</component>
	</div>

</template>

<script>

	// IMPORTS

	import MainLayout from "@/layouts/MainLayout";

	// COMPONENT OPTIONS

	export default {
		components: {
			MainLayout
		},
		computed: {
			layout() {
				return this.$route.meta.layout;
			}
		}
	}

</script>

<style lang="scss">

	* {
		box-sizing: border-box;
	}

	body {
		margin: 0;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
	}

</style>
