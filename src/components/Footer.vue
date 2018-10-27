<template>
  <footer>
    <div class="link"><router-link to="/about">ABOUT</router-link></div> 
    <div class="link"><router-link to="/imprint">SUBSCRIBE</router-link></div> 
    <div class="link"><router-link to="/imprint">IMPRESSUM</router-link></div> 
    <div class="link"><router-link to="/imprint">ARCHIVE</router-link></div> 
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
footer {
  font-family: $font-family-header;
  font-size: 20px;
  a {
    color: black;
    text-decoration: none;
    transition: color 150ms ease-out;
    margin: 0 5px;
    &:hover,
    &:active {
      color: $primary-color;
    }
  }
}
</style>
