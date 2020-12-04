<template>

	<section class='products'>
		<h1 class='products__title'>
			Наша продукция
		</h1>
		<div class='products__container'>
			<product-card class='products__card'
				v-for='(productsData, productsIndex) in products'
				:key='productsIndex'
				:productsPropData='productsData'/>
		</div>
	</section>

</template>

<script>

	// IMPORTS

	import { products } from '@/utils/products';
	import ProductCard from '@/components/ProductCard';

	// COMPONENT OPTIONS

	export default {
		name: 'Products',
		components: {
			ProductCard
		},
		data:() => {
			return {
				products: products
			}
		}
	}

</script>

<style lang='scss' scoped>

	// IMPORTS

	@import '../assets/styles/utils/vars';

	// PRODUCTS STYLES

	.products {
		margin: 52px 0 108px 0;
		display: flex;
		flex-direction: column;
		align-items: center;

		&__container {
			display: grid;
			grid-gap: 10px;
			grid-template-columns: repeat(3, minmax(auto, 360px));
		}

		&__title {
			font-size: 40px;
			font-weight: 400;
			color: $color-turquoise;
		}
	}

</style>
