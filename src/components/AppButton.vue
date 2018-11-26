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
  font-size: 28px;
  text-transform: uppercase;
  padding: 0 18px;
  font-weight: normal;
  &.white {
    color: white;
    border-color: white;
  }
}
</style>
