<template>

  <div class="card" @click="computeRoute(productsPropData)">
    <div class="card__container">
      <img :src="productsPropData['Image URL']"
          alt="product"
          class="card__image">

      <span class="card__type">
        {{ productsPropData["Type"] }}
      </span>

      <span class="card__sku">
        {{ productsPropData["SKU"] }}
      </span>

      <span class="card__price">
        {{ productsPropData["Retail Price"] }} UAH
      </span>
    </div>
  </div>

</template>

<script>

  import { mapActions } from "vuex"

  export default {
    name: "ProductCard",
    props: ["productsPropData"],
    methods: {
      ...mapActions(["computeRoute"])
    }
  }

</script>

<style lang="sass" scoped>

  @import "../assets/styles/utils/vars"
  @import "../assets/styles/utils/mixins"

  .card
    padding: 20px
    cursor: pointer
    border-radius: 6px
    border: 2px solid $color-grey-light
    &:hover
      transition: 0.4s ease-in-out
      box-shadow: 1px 2px 15px -1px rgba(0, 0, 0, 0.4)

    &__container
      display: flex
      flex-direction: column

    &__image
      width: 100%
      max-width: 200px
      align-self: center

    &__type
      margin: 20px 0 0 0
      text-align: start
      color: $color-grey-dark

    &__sku
      font-weight: 600
      text-align: start

    &__price
      font-size: 20px
      text-align: end
      font-weight: 600
      margin: 8px 0 0 0
      color: $color-green
      +mq(tablet, max)
        text-align: start

</style>
