<template>

	<section class="product-page">
		<h1 class="product-page__title">
			Product
		</h1>
		<router-link class="product-page__back" to="/">
			back to homepage
		</router-link>
		<div class="product-page__container">
			<div class="product-page__image-container">
				<img
					:alt="product['SKU']"
					:src="product['Image URL']"
					class="product-page__image">
			</div>

			<div class="product-page__info">
				<span class="product-page__type">
					{{ product["Type"] }}
				</span>

				<span class="product-page__sku">
					{{ product["SKU"] }}
				</span>

				<span>
					Quantity: {{ product["Total Stock"] }}
				</span>

				<span class="product-page__price">
					{{ product["Retail Price"] }}
				</span>

				<span>
					{{ product["Description"] }}
				</span>
			</div>
		</div>

		<div class="related">
			<h2 class="related__title">
				Similar Products
			</h2>

			<div class="related__container">
				<product-card
					:key="productIndex"
					class="related__card"
					:productsPropData="productData"
					v-for="(productData, productIndex) in related.slice(0, 3)"/>
			</div>
		</div>

	</section>

</template>

<script>

	import router from "@/router"
	import { products } from "@/utils/products"
	import ProductCard from "@/components/ProductCard"

	export default {
		name: "ProductPage",
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
			const SKU = router.app.$route.params.SKU
			this.setProducts(SKU)
		},
		beforeRouteUpdate(to, from, next) {
			const SKU = to.params.SKU
			this.setProducts(SKU)
			next(true)
		},
		methods: {
			setProducts(SKU) {
				this.product = products.find(product => product.SKU === SKU.toUpperCase())
				this.related = products.filter(product => product.Type === this.product.Type)
			}
		}
	}

</script>

<style lang="sass" scoped>

	@import "../assets/styles/utils/vars"
	@import "../assets/styles/utils/mixins"

	.product-page
		display: flex
		max-width: 1200px
		align-items: center
		flex-direction: column
		+mq(phone-wide, max)
			margin: 24px 0 54px 0

		&__title
			font-size: 40px
			font-weight: 400
			margin: 40px 0 0 0
			color: $color-grey-dark
			text-transform: uppercase
			+mq(phone-wide, max)
				font-size: 32px

		&__back
			color: $color-grey-dark
			text-decoration: none
			margin: 30px 0 40px 0

		&__container
			width: 100%
			display: flex
			max-width: 900px
			+mq(phone-wide, max)
				flex-direction: column

		&__info
			display: flex
			margin: 0 0 0 40px
			flex-direction: column
			+mq(phone-wide, max)
				margin: 10px 0 0 0

		&__image-container
			display: flex
			padding: 20px
			border-radius: 6px
			align-items: center
			justify-content: center
			border: 2px solid $color-grey-light

		&__image
			width: 100%
			max-width: 500px

		&__type
			font-size: 20px
			text-align: start
			color: $color-grey-dark

		&__sku
			font-size: 32px
			font-weight: 600
			text-align: start

		&__price
			font-size: 26px
			font-weight: 600
			text-align: start
			color: $color-green

	.related
		width: 100%
		max-width: 900px

		&__container
			display: flex
			justify-content: space-between
			+mq(phone-wide, max)
				flex-wrap: wrap

		&__title
			font-size: 30px
			font-weight: 400
			color: $color-grey-dark

		&__card
			width: 100%
			margin: 0 20px 0 0
			&:last-of-type
				margin: 0
			+mq(phone-wide, max)
				margin: 10px 0 10px 0

</style>
