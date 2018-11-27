<template>
  <div class="legal privacy">
    <vue-markdown :source="file"/>		
  </div>
</template>

<script>
import file from 'raw-loader!@/texts/privacy.md';

export default {
  name: 'Privacy',
  data: () => ({ file }),
};
</script>
