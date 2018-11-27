<template>
  <div class="cabinet">
    <p class="next">Next Cabinet:<br>19.01.19</p>
    <vue-markdown :source="file"/>
    <app-button 
      white 
      @click="showSubscribe">Subscribe</app-button>
  </div>
</template>

<script>
import file from 'raw-loader!@/texts/cabinet.md';
export default {
  name: 'Cabinet',
  data: () => ({ file }),
  methods: {
    showSubscribe() {
      this.$modal.show('subscribe');
    },
  },
};
</script>

<style lang="scss" scoped>
.cabinet {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding-top: 30px;
  padding-bottom: 30px;
  .next {
    margin-bottom: 80px;
  }
  & /deep/ {
    p {
      margin-bottom: 20px;
      font-weight: normal;
      margin-bottom: 30px;
      text-align: center;
      line-height: 1.1;
      font-size: 24px;
      max-width: 800px;
      @include breakpoint($md) {
        font-size: 40px;
      }
    }
  }
}
</style>
