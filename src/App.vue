<template>
  <div 
    id="app" 
    :class="{ cabinet: $route.name === 'Cabinet'}">
    <app-header/>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <app-footer/>
  </div>
</template>

<script>
import { TweenMax } from 'gsap';
import AppHeader from '@/components/Header';
import AppFooter from '@/components/Footer';

export default {
  components: {
    AppHeader,
    AppFooter,
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
@font-face {
  font-family: $font-family-header;
  src: url('./assets/fonts/fledgling-sb.ttf') format('truetype');
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html,
body {
  min-height: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  color: black;
  min-height: 100vh;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  transition: background 300ms ease-out;
  &.cabinet {
    background-color: $primary-color;
  }
}
footer {
  display: flex;
  justify-content: center;
}
button,
input[type='submit'],
input[type='reset'] {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}
.legal {
  padding-top: 30px;
  padding-bottom: 30px;
  font-size: 13px;
  font-weight: normal;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  h1 {
    text-align: center;
    margin-bottom: 12px;
  }
  h3 {
    margin-bottom: 4px;
  }
  p {
    margin-bottom: 10px;
  }
  ol {
    font-weight: bold;
    margin-bottom: 8px;
  }
}
</style>
