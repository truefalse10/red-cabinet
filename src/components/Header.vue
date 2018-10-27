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
    <div class="right">
      <div class="link">
        <router-link to="/concerts">CONCERTS</router-link>
      </div>
      <div class="link">
        <router-link to="/cabinet">CABINET</router-link>
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

export default {
  name: 'Header',
  components: {
    Glitch,
    Eyes,
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  font-size: 40px;
  margin-bottom: 30px;
  font-family: $font-family-header;
  a,
  .link {
    color: black;
    text-decoration: none;
    transition: color 150ms ease-out;
    &:hover,
    &:active {
      color: $primary-color;
    }
    &:first-child {
      margin-right: 30px;
    }
  }
  .right {
    display: flex;
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
