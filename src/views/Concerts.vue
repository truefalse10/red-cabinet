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
        <h1>{{ concert.date }}<br>{{ concert.title }} * {{ concert.venue.venue }}</h1>
      </h1></li>		
    </ul>
  </div>
</template>

<script>
import axios from "axios";

const API_ENDPOINT = "http://redcabinet.de/wp-json/tribe/events/v1/events";
export default {
  name: "Concerts",
  data: () => ({ concerts: {} }),
  async mounted() {
    this.concerts = (await axios.get(API_ENDPOINT)).data.events;
  }
};
</script>

<style lang="scss" scoped>
.concerts {
  .svg-filter {
    position: absolute;
  }
  .concert {
    text-align: center;
    > img {
      width: 100%;
      filter: grayscale(1);
    }
    &:hover {
      > img {
        filter: url(#colorMask1);
      }
    }
  }
}
</style>
