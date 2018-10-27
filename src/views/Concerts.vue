<template>
  <div class="concerts">
    <ul class="concerts">
      <li
        v-for="(concert, index) in concerts" 
        :key="`concert-${index}`" 
        class="concert">
        <h1 
          :class="{active: active === concert.id}"
          class="headline" 
          @click="toggleDetails(concert.id)">{{ parseDate(concert.start_date) }}<br>{{ concert.title }} &#8901; {{ concert.venue.venue }}</h1>
        <transition name="fade">
          <div 
            v-if="active === concert.id"
            class="details"
          >
            <div 
              class="close" 
              @click="toggleDetails(concert.id)">X</div>
            <event 
              v-if="active === concert.id"
              :data="concert"/>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import Event from '@/components/Event';

moment.locale('de');

const API_ENDPOINT = '//redcabinet.de/wp-json/tribe/events/v1/events';
export default {
  name: 'Concerts',
  components: {
    Event,
  },
  data: () => ({ concerts: {}, active: null }),
  async mounted() {
    this.concerts = (await axios.get(API_ENDPOINT)).data.events;
    // TODO: cache concerts
  },
  methods: {
    toggleDetails(id) {
      if (this.active === id) {
        this.active = null;
      } else {
        this.active = id;
      }
    },
    parseDate: date => moment(date).format('dd DD.MM.YY'),
  },
};
</script>

<style lang="scss" scoped>
.concerts {
  // flex: 1 0 auto;
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
    .headline {
      transition: color 300ms ease-out;
      cursor: pointer;
      &.active {
        color: $primary-color;
      }
    }
    .close {
      text-align: right;
      margin-bottom: 10px;
      cursor: pointer;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
