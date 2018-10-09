<template>
  <span
    ref="button" 
    class="glitch-btn">
    <div class="label">{{ label }}</div>
    <div class="mask"><span>{{ label }}</span></div>
    <div class="mask"><span>{{ label }}</span></div>
    <div class="mask"><span>{{ label }}</span></div>
    <div class="mask"><span>{{ label }}</span></div>
    <div class="mask"><span>{{ label }}</span></div>
    <audio ref="audio">
      <source src="/buzz2.mp3">
    </audio>
  </span>
</template>

<script>
export default {
  name: "Glitch",
  props: {
    label: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.$refs.button.addEventListener("mouseenter", () => {
      this.$refs.audio.play();
    });
  }
};
</script>

<style lang="scss" scoped>
@mixin jitter($steps: 10, $strX: 10, $strY: 10) {
  @keyframes jitter-#{$steps}-#{$strX}-#{$strY} {
    $i: $steps;
    @while $i > 0 {
      #{$i/$steps*100}% {
        $effectFalloff: 1-$i/$steps;
        $x: (random($strX) - $strX/2) * $effectFalloff + px;
        $y: (random($strY) - $strY/2) * $effectFalloff + px;
        transform: translate($x, $y);
      }
      $i: $i - 1;
    }
  }
}
@include jitter(20, 20, 8);
@include jitter(20, 21, 8);
@include jitter(20, 22, 8);
@include jitter(20, 23, 8);
@include jitter(20, 24, 8);

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

a {
  text-decoration: none;
  color: black;
}

.glitch-btn {
  user-select: none;
  cursor: pointer;
  display: inline-block;
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  transform: translate(0, 0);
  font-size: 36px;
  letter-spacing: 0.1em;
  line-height: 1.4;
  text-transform: uppercase;
  z-index: 1;

  $hoverDur: 0.8s;
  transition: all $hoverDur ease-out;
  &:hover {
    color: red;
  }

  // to prevent jank when :before div slides away from pointer
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: -18px;
    background: rgba(black, 0);
    width: 100%;
    height: 100%;
    padding: 0 15px;
  }

  // glitch effect
  //
  .mask {
    position: absolute;
    -webkit-backface-visibility: hidden;

    height: 20%;
    width: 100%;
    overflow: hidden;
    display: none;
    span {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
    }
  }

  $i: 6;
  $steps: $i;
  @while $i > 1 {
    .mask:nth-child(#{$i}) {
      top: ($i - 1) * 20%;
      span {
        top: -($i - 1) * 100%;
      }
    }
    $i: $i - 1;
  }

  &:hover {
    .label {
      animation: fade-in 0.8s both;
    }
    .mask {
      display: block;
    }

    $j: 6;
    $steps: $j;
    @while $j > 1 {
      .mask:nth-child(#{$j}) {
        animation: jitter-20-#{19 + $j}-8 0.3s both;
      }
      $j: $j - 1;
    }
  }
}
</style>
