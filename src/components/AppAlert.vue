<script>
export default {
  props: {
    type: String,
  },
};
</script>

<template>
  <div class="alert" :class="type">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.alert {
  border: 1px solid currentColor;
  color: black;
  background-color: white;
  padding: 1rem;
  border-radius: 5px;

  &.success {
    color: green;
  }

  &.warning {
    color: goldenrod;
  }

  &.danger {
    color: red;
  }

  &:hover {
    text-decoration: underline;
  }
}
</style>
