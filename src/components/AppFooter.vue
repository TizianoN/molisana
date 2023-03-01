<script>
import AppLogo from "./AppLogo.vue";
import AppMenu from "./AppMenu.vue";

export default {
  components: { AppLogo, AppMenu },

  props: {
    appmotto: String,
    menus: Array,
  },
};
</script>

<template>
  <footer>
    <div class="container">
      <AppLogo :motto="appmotto" />

      <AppMenu v-for="menu in menus" :links="menu.links" alignment="vertical">
        <h3>{{ menu.title }}</h3>
      </AppMenu>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/mixins" as *;
@use "../assets/scss/partials/variables" as *;

footer {
  h3 {
    color: $primary_color;
  }

  padding-bottom: 150px;
  background-image: url("../assets/images/footer.jpg");
  background-size: 100% 150px;
  background-position: bottom;
  background-repeat: no-repeat;
  .container {
    @include flex-center("vertical");
    justify-content: space-between;
    padding: 30px;
  }
}
</style>
