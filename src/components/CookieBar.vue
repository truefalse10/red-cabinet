<template>
  <div 
    :class="{ hidden }" 
    class="cookie-bar row">
    <div class="copy">
      Um unsere Webseite für Sie optimal zu gestalten und fortlaufend verbessern zu können, verwenden wir Cookies. Weitere Informationen zu Cookies erhalten Sie in unserer <router-link :to="{ name: 'Privacy Policy'}">Datenschutzerklärung</router-link>.
    </div>
    <div class="buttons">
      <div 
        class="button-ok" 
        @click="close">OK</div>
    </div>
  </div>
</template>

<script>
const cookiesAccepted = window.localStorage
  ? window.localStorage.getItem('cookies-accepted')
  : false;

export default {
  name: 'CookieBar',
  data: () => ({ hidden: true }),
  mounted() {
    if (!cookiesAccepted)
      setTimeout(() => {
        this.hidden = false;
      }, 1000);
  },
  methods: {
    close() {
      if (window.localStorage)
        window.localStorage.setItem('cookies-accepted', 'true');
      this.hidden = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.cookie-bar {
  width: 100%;
  background-color: rgba(215, 216, 214, 0.97);
  position: absolute;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 500ms ease-out;
  top: 77px;
  .copy {
    font-weight: normal;
    font-size: 12px;
    padding-right: 20px;
  }
  .button-ok {
    font-size: 12px;
    cursor: pointer;
    display: inline-block;
    border: 2px solid black;
    padding: 4px 20px;
  }
  &.hidden {
    opacity: 0;
  }
}
</style>
