<script>
export default {
  props: {
    product_data: Object,
  },
};
</script>

<template>
  <li>
    <img :src="product_data.src" alt="" />
    <h2>{{ product_data.titolo }}</h2>
  </li>
</template>

<style lang="scss" scoped>
li {
  width: calc(25% - 20px);
  background-color: white;
  margin: 10px;
  padding: 15px;
}
</style>
