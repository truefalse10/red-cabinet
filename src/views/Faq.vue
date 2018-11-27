<template>
  <div class="legal faq">
    <vue-markdown :source="faq"/>
  </div>
</template>

<script>
import faq from 'raw-loader!@/texts/faq.md';

export default {
  name: 'Faq',
  data: () => ({ faq }),
};
</script>
