<template>
  <nav class="header">
    <div 
      class="left"
      @click="() => $router.push('/')">
      <glitch 
        class="link" 
        label="RED CABINET"
      />
    </div>
    <burger-menu 
      :menu-items="menuItems" 
      class="mobile-menu" />
    <div class="right">
      <div 
        v-for="(item, index) in menuItems" 
        :key="index"
        :class="{ active: $route.path === item.to }"
        class="link">
        <router-link 
          :to="item.to">{{ item.label }}</router-link>
      </div>
    </div>
    <eyes 
      :class="{ large: $route.name === 'home' }"
      class="eyes"/>
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
  .link a {
    color: black;
    text-decoration: none;
    transition: color 150ms ease-out;
    &:hover,
    &:active {
      text-decoration: underline;
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
  .eyes {
    position: absolute;
    transform: scale(0.3);
    top: -4px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    transition: all 500ms ease-out;
    pointer-events: none;
    &.large {
      transform: scale(1);
      top: 40%;
    }
  }
}
</style>
