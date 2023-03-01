<script>
import AppHeader from "./components/AppHeader.vue";
import ProductList from "./components/products/ProductList.vue";
import AppFooter from "./components/AppFooter.vue";

import { productsList, headerLinks, footerMenus } from "./data";

export default {
  data() {
    return {
      slogan: "Molisana, pasta per te!!!",

      productsList,
      headerLinks,
      footerMenus,
    };
  },

  components: { AppHeader, ProductList, AppFooter },
};
</script>

<template>
  <AppHeader appmotto="Molisana" :links="headerLinks" />
  <main>
    <ProductList :products="productsList" />
  </main>
  <AppFooter :appmotto="slogan" :menus="footerMenus" />
</template>

<style lang="scss">
@use "./assets/scss/general.scss";

main {
  background-image: url("/bg-prods.jpg");
  margin: 5rem 0;
}
</style>
