<template>
  <div class="event">
    <div class="info-wrapper">
      <img 
        :src="data.image.url"
        class="image" 
        alt="">

      <div class="info">
        <h2>
          {{ date }}<br>
          {{ data.title }}
        </h2>
        <h2>
          {{ data.venue.venue }}<br>
          {{ data.venue.address }}<br>
          {{ data.venue.zip }} {{ data.venue.city }}
        </h2>
        <h2>
          Einlass: {{ entry }}<br>
          Beginn: {{ entry }}
        </h2>
        <div class="links">
          <h2><a 
            v-if="data.website" 
            :href="data.website">Tickets</a></h2>
          <h2><a 
            href="http://facebook.com">Facebook</a></h2>
        </div>
      </div>
    </div>
    <p
      class="description" 
      v-html="data.description"/>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Event',
  props: {
    data: Object,
  },
  computed: {
    date() {
      return moment(this.data.start_date).format('dd DD.MM.YY');
    },
    entry() {
      return moment(this.data.start_date).format('hh:mm');
    },
  },
};
</script>

<style lang="scss" scoped>
.event {
  text-align: left;
  display: flex;
  font-weight: 300;
  > div {
    flex-basis: 50%;
  }
  .info-wrapper {
    flex-shrink: 0;
    .info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 10px;
      > :nth-child(even) {
        text-align: right;
      }
    }
    .image {
      width: 100%;
      margin-bottom: 10px;
    }
    .links {
      > a {
        display: block;
      }
    }
  }
  .description {
    font-weight: 300;
    margin-left: 30px;
  }
}
</style>
