<template>

  <section class="products">
    <h1 class="products__title">
      Products
    </h1>

    <div class="products__container">
      <product-card
        :key="productsIndex"
        :productsPropData="productsData"
        v-for="(productsData, productsIndex) in products"/>
    </div>
  </section>

</template>

<script>

  import { products } from "@/utils/products"
  import ProductCard from "@/components/ProductCard"

  export default {
    name: "Products",
    components: {
      ProductCard
    },
    data: () => {
      return {
        products: products
      }
    }
  }

</script>

<style lang="sass" scoped>

  @import "../assets/styles/utils/vars"
  @import "../assets/styles/utils/mixins"

  .products
    display: flex
    align-items: center
    flex-direction: column
    +mq(phone-wide, max)
      margin: 24px 0 54px 0

    &__title
      font-size: 40px
      font-weight: 400
      color: $color-grey-dark
      text-transform: uppercase
      +mq(phone-wide, max)
        font-size: 32px

    &__container
      display: grid
      grid-gap: 20px
      margin: 0 20px
      grid-template-columns: repeat(3, minmax(auto, 360px))
      +mq(phone-wide, max)
        grid-template-columns: repeat(2, minmax(auto, 360px))

</style>
