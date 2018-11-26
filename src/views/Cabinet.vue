<template>
  <div class="cabinet">
    <h1>Next Cabinet<br>19.11.18</h1>
    <h1>For further<br>informations<br>and entry:</h1>
    <app-button white>Subscribe</app-button>
  </div>
</template>

<script>
export default {
  name: 'Cabinet',
};
</script>

<style lang="scss" scoped>
.cabinet {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  h1 {
    font-weight: normal;
    margin-bottom: 20px;
    text-align: center;
    line-height: 1.1;
    font-size: 24px;
    @include breakpoint($md) {
      font-size: 40px;
    }
  }
}
</style>
