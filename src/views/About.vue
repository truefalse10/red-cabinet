<template>
  <div class="about">
    <p>Kunst entdecken, Musik erleben, Gemeinschaft spüren und Extase fühlen.</p>
    <p>Ob Konzerte oder unsere besonderen Red Cabinet Events. Wir präsentieren Euch außergewöhnliche Abende an außergewöhnlichen Orten.</p>
    <p>Neugierig geworden?</p>
  </div>
</template>
<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 18px;
    font-weight: normal;
    text-align: center;
    max-width: 700px;
    margin-bottom: 20px;
    line-height: 1.1;
    @include breakpoint($md) {
      font-size: 30px;
    }
  }
}
</style>
