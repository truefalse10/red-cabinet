<template>
  <nav class="header">
    <div 
      class="left" 
      @click="() => $router.push('/')">
      <glitch 
        class="link" 
        label="RED CABINET"/>
    </div>
    <burger-menu 
      :menu-items="menuItems" 
      class="mobile-menu"/>
    <div class="right">
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        :class="{ active: $route.path === item.to }"
        class="link"
      >
        <router-link :to="item.to">{{ item.label }}</router-link>
      </div>
    </div>
    <div 
      :class="{ top: $route.name !== 'home' }" 
      class="eyes-wrapper">
      <eyes 
        :class="{ large: $route.name === 'home' }" 
        class="eyes"/>
    </div>
  </nav>
</template>

<script>
import Glitch from '@/components/Glitch';
import Eyes from '@/components/Eyes';
import BurgerMenu from '@/components/BurgerMenu';

const menuItems = [
  {
    to: '/concerts',
    label: 'CONCERTS',
  },
  {
    to: '/cabinet',
    label: 'CABINET',
  },
];

export default {
  name: 'Header',
  components: {
    Glitch,
    Eyes,
    BurgerMenu,
  },
  data: () => ({ menuItems }),
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  font-size: 40px;
  margin-bottom: 30px;
  font-family: $font-family-header;
  font-weight: normal;
  .link a {
    color: black;
    color: inherit;
    transition: color 150ms ease-out;
    text-decoration: none;
    &.router-link-active {
      text-decoration: underline;
    }
    &:hover,
    &:active {
      color: $primary-color;
    }
    &:first-child {
      margin-right: 30px;
    }
  }
  .mobile-menu {
    @include breakpoint($md) {
      display: none;
    }
  }
  .right {
    display: none;
    @include breakpoint($md) {
      display: flex;
    }
  }
  .eyes-wrapper {
    position: absolute;
    align-items: center;
    top: -4px;
    left: 0;
    transform: translateY(40vh);
    width: 100%;
    display: flex;
    justify-content: center;
    pointer-events: none;
    transition: all 500ms ease-out;
    &.top {
      transform: translateY(0);
      opacity: 0;
      @include breakpoint($md) {
        opacity: 1;
      }
    }
  }
  .eyes {
    transform: scale(0.6);
    transition: all 500ms ease-out;
    @media screen and (max-width: 768px) {
      display: none;
    }
    &.large {
      display: flex;
      transform: scale(1.4);
    }
  }
}
</style>
