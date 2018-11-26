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
        class="concert"
        @click="toggleDetails(concert.id)">
        <div class="hover-wrapper">
          <img 
            :src="concert.image.url"
            class="image" 
            alt="">
          <h1 
            :class="{active: active === concert.id}"
            class="headline">{{ parseDate(concert.start_date) }} &#8901; {{ concert.title }} &#8901; {{ concert.venue.venue }}</h1>
        </div>
        <transition name="fade">
          <div 
            v-if="active === concert.id"
            class="details"
          >
            <event 
              v-if="active === concert.id"
              :data="concert"
              @close="toggleDetails(concert.id)"/>
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
    h1 {
      font-size: $font-size-base;
      margin-bottom: 12px;
    }
    .hover-wrapper:hover {
      cursor: pointer;
      .image {
        filter: url(#colorMask1);
      }
    }
    .image {
      width: 100%;
      margin-bottom: 5px;
    }
    .headline {
      transition: color 300ms ease-out;
      cursor: pointer;
      &.active {
        color: $primary-color;
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
