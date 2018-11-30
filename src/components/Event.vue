<template>
  <div class="event">
    <div 
      class="close" 
      @click="$emit('close')">X</div>
    <div class="content">
      <div class="info-wrapper">
        <div class="info">
          <!--  TODO: add support -->
          <h2>
            {{ data.venue.venue }}<br>
            {{ data.venue.address }}<br>
            {{ data.venue.zip }} {{ data.venue.city }}
          </h2>
          <h2>
            Einlass: {{ entry }}
            <!--  TODO: add Beginn -->
          </h2>
          <div class="links">
            <!--  TODO: style arrow and link -->
            <!--  TODO: add Anfahrt -->
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
    entry() {
      return moment(this.data.start_date).format('HH:mm');
    },
  },
};
</script>

<style lang="scss" scoped>
.event {
  border: 4px solid black;
  padding: 4px 10px 10px 10px;
  @include breakpoint($md) {
    padding: 4px 20px 20px 20px;
    flex-direction: row;
  }
  .close {
    text-align: right;
    cursor: pointer;
  }
  .content {
    text-align: left;
    display: flex;
    font-weight: 300;
    flex-direction: column;
    @include breakpoint($md) {
      flex-direction: row;
    }
  }
  .info-wrapper {
    flex-basis: 20%;
    margin-bottom: 8px;
    h2 {
      font-size: $font-size-base;
      margin-bottom: 12px;
    }
    flex-shrink: 0;
    .links {
      a {
        display: block;
        color: black;
      }
    }
  }
  .description {
    font-weight: 300;
    font-size: $font-size-base;
  }
}
</style>
