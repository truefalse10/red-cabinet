<template>
  <div class="home">
    <eyes/>
  </div>
</template>

<script>
import Eyes from '@/components/Eyes';
export default {
  name: 'Home',
  components: {
    Eyes,
  },
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
}
</style>
