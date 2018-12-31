<template>
  <div 
    id="app" 
    ref="app"
    :class="{ cabinet: $route.name === 'Cabinet', 'no-bg': $route.name !== 'Cabinet'}">
    <app-header/>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <app-footer/>
  </div>
</template>

<script>
// import { TweenMax } from 'gsap';
import AppHeader from '@/components/Header';
import AppFooter from '@/components/Footer';

const BACKGROUND_INTERVAL = 3000; //ms

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  mounted() {
    let currentImage = 0;
    setInterval(() => {
      this.$refs.app.style = `background-image: url("/img/cabinet/bg${currentImage}.jpg"`;
      currentImage === 5 ? (currentImage = 0) : currentImage++;
    }, BACKGROUND_INTERVAL);
    // DISABLE ANIMATION FOR NOW, causes troubles on mobile
    // TweenMax.staggerFrom(
    //   '.link',
    //   0.5, // duration
    //   { y: '+=30', opacity: 0, delay: 0.2 },
    //   0.5 // stagger
    // );
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: $font-family-name;
  font-display: swap;
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
  &.no-bg {
    background: none !important;
  }
  &.cabinet {
    background-image: url('./assets/kbb_small.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    transition: background-image 500ms ease;
    color: white;
  }
}
footer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
  a {
    word-break: break-all;
  }
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
