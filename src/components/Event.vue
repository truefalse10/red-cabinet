<template>
  <div class="event">
    <div 
      class="close" 
      @click="$emit('close')">X</div>
    <div class="info-wrapper">
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
  flex-direction: column;
  border: 4px solid black;
  padding: 4px 10px 10px 10px;
  @include breakpoint($md) {
    flex-direction: row;
  }
  > div {
    flex-basis: 50%;
  }
  .close {
    text-align: right;
    cursor: pointer;
  }
  .info-wrapper {
    margin-bottom: 8px;
    h2 {
      font-size: $font-size-base;
      margin-bottom: 12px;
    }
    flex-shrink: 0;
    .info {
      @include breakpoint($md) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 10px;
        > :nth-child(even) {
          text-align: right;
        }
      }
    }
    .links {
      > a {
        display: block;
      }
    }
  }
  .description {
    font-weight: 300;
    font-size: $font-size-base;
  }
}
</style>
