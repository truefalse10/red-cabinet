<template>
  <footer>
    <div class="link"><router-link to="/about">ABOUT</router-link></div> 
    <div 
      class="link" 
      @click="showSubscribe">SUBSCRIBE</div> 
    <div class="link"><router-link to="/privacy">PRIVACY</router-link></div> 
    <div class="link"><router-link to="/faq">FAQ</router-link></div> 
    <div class="link"><router-link to="/imprint">IMPRINT</router-link></div> 
    <modal 
      name="subscribe" 
      adaptive
      width="500px"
      height="400px">
      <iframe 
        frameborder="0" 
        scrolling="no" 
        marginheight="0" 
        marginwidth="0" 
        src="https://email-marketing.ionos.de/widget/iframe/3tUu/a3X" 
        width="100%" 
        height="100%"/>
        <!-- <subscribe/> -->
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
    font-weight: normal;
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
