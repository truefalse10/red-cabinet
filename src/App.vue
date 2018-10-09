<template>
  <div id="app">
    <nav>
      <div class="left">
        <span>RED CABINET</span>
      </div>
      <div class="right">
        <router-link to="/concerts">CONCERTS</router-link>
        <router-link to="/cabinet">CABINET</router-link>
      </div>
    </nav>
    <router-view/>
    <footer>
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/imprint">IMPRINT</router-link>
    </footer>
  </div>
</template>

<style lang="scss">
$primary-color: rgb(187, 40, 48);
* {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  text-align: center;
  color: black;
  height: 100%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
}
a {
  color: black;
  text-decoration: none;
  transition: color 300ms ease-out;
  &:hover,
  &:active {
    color: $primary-color;
  }
  &:first-child {
    margin-right: 30px;
  }
}
nav {
  display: flex;
  justify-content: space-between;
  font-size: 30px;
}
footer {
}
</style>
