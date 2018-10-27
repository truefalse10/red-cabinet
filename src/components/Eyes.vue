<template>
  <div class="eyes">
    <svg 
      ref="svg"
      view-box="0 0 200 100" 
      width="200"
      height="100"
      fill="white"
    >
      <circle 
        :r="radius" 
        :stroke-width="stroke" 
        :cx="cx"
        :cy="cy"
        stroke="black"
      />
      <circle 
        :r="radiusPupil" 
        :stroke-width="stroke" 
        :cx="cxPupil"
        :cy="cyPupil"
        fill="black"
      />
      <circle 
        :r="radius" 
        :stroke-width="stroke" 
        cx="150"
        cy="50"
        stroke="black"
      />
      <circle 
        :r="radiusPupil" 
        :stroke-width="stroke" 
        :cx="cxPupil + 103"
        :cy="cyPupil"
        fill="black"
      />
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
		document.body.addEventListener('mousemove', this.coordinates);
	},
  methods: {
    coordinates(e) {
      const { left, top, bottom } = this.$refs.svg.getBoundingClientRect();
      const x = e.clientX;
      const y = e.clientY;
      this.cxPupil = Math.max(
        left + this.stroke,
        Math.min(x, left + 2 * this.radius - 2 * this.stroke - this.radiusPupil)
      );
      this.cyPupil = Math.max(
        this.stroke + 4 + this.radiusPupil,
        Math.min(
          bottom - top - this.stroke,
          y - top - this.stroke - this.radiusPupil
        )
      );
      // window.requestAnimationFrame(this.coordinates);
    },
	},
};
</script>

<style lang="scss" scoped>
.eyes {
  > svg {
    background: grey;
  }
}
</style>
