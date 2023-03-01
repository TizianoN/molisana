<script>
export default {
  props: {
    motto: String,
  },
};
</script>

<template>
  <figure>
    <img src="../assets/images/logo.png" alt="Logo" />
    <figcaption>{{ motto }}</figcaption>
  </figure>
</template>

<style lang="scss" scoped>
figcaption {
  text-align: center;
}
</style>
