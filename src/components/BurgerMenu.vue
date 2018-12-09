<template>
  <div class="wrapper">
    <div 
      :class="{ 'menu-on': open }" 
      class="burger-menu"
      @click="open = !open">
      <div class="burger"/>	
    </div>
    <div 
      :class="{ open }" 
      class="overlay">
      <app-footer menu/>
    </div>
  </div>
</template>

<script>
import AppFooter from '@/components/Footer';
export default {
  name: 'BurgerMenu',
  components: { AppFooter },
  props: {
    menuItems: {
      type: Array,
    },
  },
  data: () => ({ open: false }),
  watch: {
    $route() {
      this.open = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  background: rgba(187, 40, 48, 0.9);
  // background: radial-gradient(
  //   circle,
  //   rgba(187, 40, 48, 0.9) 64%,
  //   rgba(0, 0, 0, 0.9) 100%
  // );
  width: 100%;
  left: 0;
  transition: all 500ms ease-out;
  height: 0;
  overflow: hidden;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &.open {
    height: 100vh;
  }
  .menu-link {
    a {
      text-decoration: none;
      color: black;
      &:hover,
      &:active {
        color: black;
        text-decoration: underline;
      }
    }
    &.active a {
      text-decoration: underline;
      pointer-events: none;
    }
  }
}
.burger-menu {
  position: relative;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transform: scale(0.5);
  z-index: 3;
}
.burger {
  position: absolute;
  background: rgba(0, 0, 0, 1);
  width: 100%;
  height: 10px;
  top: 50%;
  right: 0px;
  margin-top: -5px;
  opacity: 1;
}
.burger::before {
  position: absolute;
  background: rgba(0, 0, 0, 1);
  width: 50px;
  height: 10px;
  top: 20px;
  content: '';
  display: block;
}
.burger::after {
  position: absolute;
  background: rgba(0, 0, 0, 1);
  width: 50px;
  height: 10px;
  bottom: 20px;
  content: '';
  display: block;
}
.burger::after,
.burger::before,
.burger {
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
}
.burger-menu.menu-on .burger::after {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  bottom: 0px;
}
.burger-menu.menu-on .burger::before {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  top: 0px;
}
.burger-menu.menu-on .burger {
  background: rgba(0, 0, 0, 0);
}
</style>
