<template>
  <footer :class="{menu}">
    <div
      class="small">
      <div class="link">
        <router-link to="/concerts">CONCERTS</router-link>
      </div>
      <div class="link">
        <router-link to="/cabinet">CABINET</router-link>
      </div>
    </div>
    <div class="all">
      <div class="link">
        <router-link to="/about">ABOUT</router-link>
      </div>
      <div 
        class="link" 
        @click="showSubscribe">SUBSCRIBE</div>
      <div class="link">
        <a 
          href="https://www.facebook.com/redcabinet/" 
          target="_blank"
          @click="$ga.event('facebook', 'click', 'footer')">FACEBOOK</a>
      </div>
      <div class="link">
        <a 
          href="https://www.instagram.com/red_cabinet/" 
          target="_blank"
          @click="$ga.event('instagram', 'click', 'footer')">INSTAGRAM</a>
      </div>
      <div class="link">
        <router-link to="/privacy">PRIVACY POLICY</router-link>
      </div>
      <div class="link">
        <router-link to="/faq">FAQ</router-link>
      </div>
      <div class="link">
        <router-link to="/imprint">IMPRINT</router-link>
      </div>

    </div>
    <modal 
      v-if="!menu"
      name="subscribe" 
      width="450px" 
      height="auto"
      scrollable
      adaptive>
      <subscribe/>
    </modal>
  </footer>
</template>

<script>
import Subscribe from '@/components/Subscribe';

export default {
  name: 'Footer',
  components: {
    Subscribe,
  },
  props: {
    menu: Boolean,
  },
  mounted() {
    let isSubscribed = false;
    if (window.localStorage)
      isSubscribed = window.localStorage.getItem('subscribed');
    if (!isSubscribed) setTimeout(() => this.$modal.show('subscribe'), 10000);
  },
  methods: {
    showSubscribe() {
      this.$ga.event('subscribe', 'click', 'footer');
      this.$modal.show('subscribe');
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  .link,
  a {
    font-family: $font-family-header;
    font-weight: normal;
    font-size: 20px;
    cursor: pointer;
    color: black;
    color: inherit;
    text-decoration: none;
    transition: color 150ms ease-out;
    margin: 0 5px;
    &.router-link-active {
      text-decoration: underline;
    }
    &:hover {
      color: $primary-color;
    }
  }
  .small {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .link,
    a {
      font-size: 40px;
    }
    @include breakpoint($md) {
      display: none;
    }
  }
  .all {
    display: none;
    @include breakpoint($md) {
      display: flex;
    }
  }
  &.menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    .small {
      display: none;
    }
    .all {
      display: block;
    }
    .link,
    a {
      margin: 0 !important;
      font-size: 35px;
      &:hover {
        color: black;
      }
    }
  }
}
</style>
<style lang="scss">
.v--modal-overlay {
  background: transparent;
}
.v--modal {
  border-radius: 0;
  border: 8px solid black;
}
</style>
