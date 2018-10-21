<template>
  <div id="app">
    <app-header/>
    <router-view/>
    <footer>
      <div class="link"><router-link to="/about">ABOUT</router-link></div> 
      <div class="link"><router-link to="/imprint">IMPRINT</router-link></div> 
    </footer>
  </div>
</template>

<script>
import { TweenMax } from 'gsap';
import AppHeader from '@/components/Header';

export default {
  components: {
    AppHeader,
  },
  mounted() {
    TweenMax.staggerFrom(
      '.link',
      0.5, // duration
      { y: '+=30', opacity: 0, delay: 0.2 },
      0.5 // stagger
    );
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  color: black;
  height: 100%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
}
footer {
  display: flex;
  justify-content: center;
}
</style>
