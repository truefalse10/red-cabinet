<template>
  <button 
    :class="{ white }" 
    class="app-button" 
    @click="$emit('click')">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    white: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.app-button {
  color: black;
  border: 3px solid black;
  font-family: $font-family-header;
  font-size: 34px;
  text-transform: uppercase;
  padding: 0 30px;
  font-weight: normal;
  transition: all 300ms ease-out;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  min-width: 200px;
  @include breakpoint($md) {
    font-size: 50px;
  }
  &:hover {
    border-color: $primary-color;
    color: $primary-color;
  }
  &.white {
    color: white;
    border-color: white;
    &:hover {
      border-color: $primary-color;
      color: $primary-color;
    }
  }
}
</style>
