<template>
  <footer>
    <div class="link"><router-link to="/about">ABOUT</router-link></div> 
    <div 
      class="link" 
      @click="showSubscribe">SUBSCRIBE</div> 
    <div class="link"><router-link to="/imprint">IMPRESSUM</router-link></div> 
    <div class="link"><router-link to="/imprint">ARCHIVE</router-link></div> 
    <modal 
      name="subscribe" 
      adaptive
      width="400px"
      height="auto">
      <subscribe/>
    </modal>
  </footer>
</template>

<script>
import Subscribe from '@/components/Subscribe';

export default {
  name: 'Footer',
  components: {
    Subscribe,
  },
  methods: {
    showSubscribe() {
      this.$modal.show('subscribe');
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  .link,
  a {
    font-family: $font-family-header;
    font-size: 20px;
    cursor: pointer;
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
