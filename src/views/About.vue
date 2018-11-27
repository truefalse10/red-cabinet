<template>
  <div class="about">
    <vue-markdown :source="file"/>
    <app-button 
      @click="showSubscribe">Subscribe</app-button>
  </div>
</template>
<script>
import file from 'raw-loader!@/texts/about.md';

export default {
  name: 'About',
  data: () => ({ file }),
  methods: {
    showSubscribe() {
      this.$modal.show('subscribe');
    },
  },
};
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
  & /deep/ p {
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
