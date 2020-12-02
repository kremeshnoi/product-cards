<template>

	<footer class="footer"></footer>

</template>

<script>

	export default {
		name: "MainFooter"
	}

</script>

<style lang="scss" scoped>

	// IMPORTS

	@import "../assets/styles/utils/vars";

	.footer {
		background-color: $color-turquoise;
		padding: 24px;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
	}

</style>
