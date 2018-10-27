<template>
  <div class="eyes">
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      view-box="0 0 200 100" 
      width="200"
      height="100"
      fill="white"
      @mousemove="coordinates"
    >
      <g
        :style="style">
        <circle 
          :r="radius" 
          :stroke-width="stroke" 
          :cx="cx"
          :cy="cy"
          stroke="black"
        />
        <circle 
          ref="eye" 
          :r="radiusPupil" 
          :stroke-width="stroke"
          :cx="cx"
          :cy="cy - 20"
          fill="black"
        />
      </g>
      <g
        :style="style">
        <circle 
          :r="radius" 
          :stroke-width="stroke" 
          :cx="cx + 100"
          :cy="cy"
          stroke="black"
        />
        <circle 
          :r="radiusPupil" 
          :stroke-width="stroke"
          :cx="cx + 100"
          :cy="cy - 20"
          fill="black"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Eyes',
  data: () => ({
    radius: 40,
    radiusPupil: 18,
    stroke: 8,
    cx: 47,
    cy: 50,
    cxPupil: 47,
    cyPupil: 50,
    style: 'transform: rotate(0deg)',
    boundingRect: null,
  }),
  computed: {
    // cxPupil() {
    //   return this.cx;
    // },
    // cyPupil() {
    //   return this.cy;
    // },
  },
  mounted() {
    // document.body.addEventListener('mousemove', this.coordinates);
    this.boundingRect = this.$refs.eye.getBoundingClientRect();
  },
  methods: {
    coordinates(e) {
      const { left, top } = this.boundingRect;
      const x = e.clientX;
      const y = e.clientY;
      const rad = Math.atan2(
        x - left - this.radiusPupil,
        y - top - this.radiusPupil
      );
      const rot = rad * (180 / Math.PI) * -1 + 180;
      this.style = `transform: rotate(${rot}deg)`;
    },
  },
};
</script>

<style lang="scss" scoped>
.eyes {
  > svg {
    g {
      transform-origin: 25% 50%;
      &:nth-child(2) {
        transform-origin: 75% 50%;
      }
    }
  }
}
</style>
