<template>
  <div class="legal imprint">
    <vue-markdown :source="file"/>		
  </div>
</template>

<script>
import file from 'raw-loader!@/texts/imprint.md';

export default {
  name: 'Imprint',
  data: () => ({ file }),
};
</script>
