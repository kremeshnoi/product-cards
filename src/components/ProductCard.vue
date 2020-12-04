<template>

	<div class='card'
	     @click='computeRoute(productsPropData)'>
		<div class='card__container'>
			<img class='card__image'
				alt='product'
				:src='productsPropData["Image URL"]'>

			<div class='card__type'>
				{{ productsPropData['Type'] }}
			</div>
			<div class='card__sku'>
				{{ productsPropData['SKU'] }}
			</div>
			<div class='card__price'>
				{{ productsPropData['Retail Price'] }} грн
			</div>
		</div>
	</div>

</template>

<script>

	// IMPORTS

	import { mapActions } from 'vuex';

	// COMPONENT OPTIONS

	export default {
		name: 'ProductCard',
		props: ['productsPropData'],
		methods: {
			...mapActions(['computeRoute'])
		}
	}

</script>

<style lang='scss' scoped>

	// IMPORTS

	@import '../assets/styles/utils/vars';

	// CARD STYLES

	.card {
		border-radius: 6px;
		border: 2px solid $color-grey-light;
		padding: 20px;
		cursor: pointer;
		&:hover {
			transition: 0.4s ease-in-out;
			box-shadow: 1px 2px 15px -1px rgba(0,0,0,0.4);
		}

		&__container {
			display: flex;
			flex-direction: column;
		}

		&__image {
			width: 100%;
			max-width: 200px;
			align-self: center;
		}

		&__type {
			margin: 4px 0;
			color: $color-grey-dark;
			text-align: start;
		}

		&__sku {
			margin: 4px 0;
			font-weight: 600;
			text-align: start;
		}

		&__price {
			font-weight: 600;
			font-size: 20px;
			color: $color-green;
			text-align: end;
		}
	}

</style>
