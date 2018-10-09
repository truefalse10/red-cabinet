<template>
  <nav class="header">
    <div class="left">
      <glitch 
        class="link" 
        label="RED CABINET"/>
    </div>
    <div class="right">
      <div class="link">
        <router-link to="/concerts">CONCERTS</router-link>
      </div>
      <div class="link">
        <router-link to="/cabinet">CABINET</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import Glitch from "@/components/Glitch";
export default {
  name: "Header",
  components: {
    Glitch
  }
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  font-size: 30px;
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
}
</style>
