<template>
  <div class="concerts">
    <svg class="svg-filter">
      <defs>
        <filter id="colorMask1">
          <feFlood 
            flood-color="#bb2830" 
            result="flood" />
          <feComposite 
            in="SourceGraphic" 
            in2="flood" 
            operator="arithmetic" 
            k1="1" 
            k2="0" 
            k3="0" 
            k4="0" />
        </filter>
      </defs>
    </svg>
    <ul class="concerts">
      <li
        v-for="(concert, index) in concerts" 
        :key="`concert-${index}`" 
        class="concert">
        <!-- <img 
        :src="concert.image.url" 
        :alt="concert.title"> -->
        <h1>{{ parseDate(concert.start_date) }}<br>{{ concert.title }} * {{ concert.venue.venue }}</h1>
        <event 
          :data="concert"/>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import Event from '@/components/Event';

moment.locale('de');

const API_ENDPOINT = 'http://redcabinet.de/wp-json/tribe/events/v1/events';
export default {
  name: 'Concerts',
  components: {
    Event,
  },
  data: () => ({ concerts: {} }),
  async mounted() {
    this.concerts = (await axios.get(API_ENDPOINT)).data.events;
  },
  methods: {
    parseDate: date => moment(date).format('dd DD.MM.YY'),
  },
};
</script>

<style lang="scss" scoped>
.concerts {
  .svg-filter {
    position: absolute;
  }
  .concerts {
    list-style: none;
    max-width: 1000px;
    margin: 0 auto;
  }
  .concert {
    text-align: center;
    border-bottom: 1px dotted lightgray;
    padding: 20px 0;
    > img {
      width: 100%;
      filter: grayscale(1);
    }
    &:hover {
      > img {
        filter: url(#colorMask1);
      }
    }
    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
