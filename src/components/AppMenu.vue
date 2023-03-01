<script>
export default {
  props: {
    links: Array,
    alignment: String,
  },
};
</script>

<template>
  <div>
    <slot> </slot>
    <ul>
      <li
        v-for="link in links"
        :class="{
          active: link.focus,
          horizontal: alignment == 'horizontal',
        }"
      >
        <a :href="link.url">{{ link.text }}</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul li {
  padding: 10px;

  &.horizontal {
    display: inline-block;
  }

  a {
    color: black;
    text-decoration: none;
  }

  &.active {
    background-color: rgb(180, 204, 226);
  }
}
</style>
