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
    <figure
      v-for="(concert, index) in concerts" 
      :key="`concert-${index}`" 
      class="concert">
      <img 
        :src="concert.image" 
        :alt="concert.title">
      <figcaption>{{ concert.title }}</figcaption>
    </figure>		
  </div>
</template>

<script>
const concerts = [
  {
    title: "Concert1",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ae8584287da6fac5895bbe4fb80f9f5f&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Concert1",
    image:
      "https://images.unsplash.com/photo-1528774147780-f5b8582dffcf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6e6167b47d523c4ae049b7efa99282ec&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Concert1 with long name",
    image:
      "https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7ed355dbd6d0efe1d3c158d01f89d833&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Some other concert",
    image:
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3c81d64e81415fca6fde564e483f858d&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Concert1",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=be465b88fdf21a6e05ab522458452344&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Concert1",
    image:
      "https://images.unsplash.com/photo-1527618802231-5054ec72758b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=13caae29a50969022f0daa37e59fecbf&auto=format&fit=crop&w=800&q=60"
  }
];

export default {
  name: "Concerts",
  data: () => ({ concerts })
};
</script>

<style lang="scss" scoped>
.concerts {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
  @include breakpoint($md) {
    grid-template-columns: 1fr 1fr;
  }
  @include breakpoint($lg) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .svg-filter {
    position: absolute;
  }
  .concert {
    margin: 0;
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
