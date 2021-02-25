<template>

	<div id="app">
		<router-view/>
	</div>

</template>

<script>

	export default {
		computed: {
			layout() {
				return this.$route.meta.layout
			}
		}
	}

</script>

<style lang="sass">

	*
		box-sizing: border-box

	#app
		height: 100%
		font-family: "Montserrat", sans-serif

</style>
