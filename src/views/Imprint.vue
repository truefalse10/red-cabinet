<template>
  <div class="imprint">
    <vue-markdown :source="file"/>		
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import file from 'raw-loader!@/texts/imprint.md';

export default {
  name: 'Imprint',
  components: {
    VueMarkdown,
  },
  data: () => ({ file }),
};
</script>

<style lang="scss" scoped>
.imprint {
  padding-top: 30px;
  padding-bottom: 30px;
  font-size: 13px;
  font-weight: normal;
  & /deep/ {
    h3 {
      margin-bottom: 4px;
    }
    p {
      margin-bottom: 10px;
    }
  }
}
</style>
