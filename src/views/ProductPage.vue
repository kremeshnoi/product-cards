<template>

	<section class='product-page'>
		<h1 class='product-page__title'>
			Товар
		</h1>
		<div class='product-page__container'>

			<div class='product-page__image-container'>
				<img :alt='product["SKU"]'
					  :src='product["Image URL"]'
					  class='product-page__image'>
			</div>

			<div class='product-page__info'>
			<span class='product-page__type'>
				{{ product['Type'] }}
			</span>
				<span class='product-page__sku'>
				{{ product['SKU'] }}
			</span>
				<span class='product-page__quantity'>
				Количество товара: {{ product['Total Stock'] }}
			</span>
				<span class='product-page__price'>
				{{ product['Retail Price'] }}
			</span>
				<span class='product-page__description'>
				{{ product['Description'] }}
			</span>
			</div>
		</div>

		<div class='product-page__related related'>
			<h2 class='related__title'>
				Похожие товары
			</h2>
			<div class='related__container'>
				<product-card
					v-for='(productData, productIndex) in related.slice(0, 3)'
					:productsPropData='productData'
					class='related__card'/>
			</div>
		</div>

	</section>

</template>

<script>

	// IMPORTS

	import {products} from '@/utils/products';

	// COMPONENT OPTIONS

	import router from '@/router';
	import ProductCard from '@/components/ProductCard';

	export default {
		name: 'ProductPage',
		components: {
			ProductCard
		},
		data: () => {
			return {
				product: {},
				related: []
			}
		},
		created() {
			const SKU = router.app.$route.params.SKU;
			this.setProducts(SKU);
		},
		beforeRouteUpdate(to, from, next) {
			const SKU = to.params.SKU;
			this.setProducts(SKU);
			next(true);
		},
		methods: {
			setProducts(SKU) {
				this.product = products.find(product => product.SKU === SKU.toUpperCase());
				this.related = products.filter(product => product.Type === this.product.Type);
			}
		}
	}

</script>

<style lang='scss' scoped>

	// IMPORTS

	@import '../assets/styles/utils/vars';

	// PRODUCT PAGE STYLES

	.product-page {
		margin: 52px auto 108px auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 1200px;

		span {
			margin: 4px 0;
		}

		&__title {
			font-size: 40px;
			font-weight: 400;
			color: $color-turquoise;
		}

		&__container {
			display: flex;
			max-width: 900px;
			width: 100%;
		}

		&__info {
			margin: 0 0 0 40px;
			display: flex;
			flex-direction: column;
		}

		&__image-container {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 20px;
			border-radius: 6px;
			border: 2px solid $color-grey-light;
		}

		&__image {
			width: 100%;
			max-width: 500px;
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
			font-size: 32px;
		}

		&__price {
			font-weight: 600;
			font-size: 26px;
			color: $color-green;
			text-align: start;
		}
	}

	// RELATED STYLES

	.related {
		width: 100%;
		max-width: 900px;

		&__container {
			display: flex;
			justify-content: space-between;
		}

		&__title {
			font-size: 30px;
			font-weight: 400;
			color: $color-turquoise-bright;
		}

		&__card {
			width: 100%;
			margin: 0 20px 0 0;

			&:last-of-type {
				margin: 0;
			}
		}
	}

</style>
