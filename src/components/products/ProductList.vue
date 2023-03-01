<script>
import ProductCard from "./ProductCard.vue";

export default {
  props: {
    products: Array,
  },

  components: { ProductCard },
};
</script>

<template>
  <section class="container">
    <h1>Lista prodotti</h1>

    <AppAlert type="danger">
      <h2>Hai una lista di errori:</h2>

      <ul>
        <li>Errore 1</li>
        <li>Errore 2</li>
        <li>Errore 3</li>
      </ul>
    </AppAlert>

    <ul class="product-list">
      <ProductCard v-for="product in products" :product_data="product" />
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/_mixins.scss" as *;
@use "../../assets/scss/partials/_variables.scss" as *;

section {
  text-align: center;

  h1 {
    font-size: 3rem;
    padding: 15px 0;
    color: $primary_color;
  }

  .product-list {
    // ! Allineare solo orizzontalmente
    @include flex-center("horizontal");
    flex-wrap: wrap;
  }
}
</style>
