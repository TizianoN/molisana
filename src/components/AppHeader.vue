<script>
import AppLogo from "./AppLogo.vue";
import AppMenu from "./AppMenu.vue";

export default {
  data() {
    return {
      myClass: "container-fluid",
    };
  },

  components: { AppLogo, AppMenu },

  props: {
    appmotto: String,
    links: Array,
  },
};
</script>

<template>
  <header class="container" :class="myClass">
    <AppLogo :motto="appmotto" />
    <AppMenu :links="links" alignment="horizontal" />
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/_mixins.scss" as *;

header {
  text-align: center;

  ul {
    @include flex-center();
    margin-top: 15px;
    li {
      display: inline-block;
      margin: 0 0.5rem;
      padding: 0.5rem;

      a {
        color: black;
        text-decoration: none;
      }

      &.active {
        background-color: rgb(180, 204, 226);
      }
    }
  }
}
</style>
