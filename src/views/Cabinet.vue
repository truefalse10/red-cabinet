<template>
  <div class="cabinet">
    <p class="next">Red Cabinet @ Rote Sonne<br>07.09.19<br>22:00 - 07:00 Uhr</p>
    <vue-markdown :source="file"/>
    <p class="small">Subscribe for further information</p>
    <div class="buttons">
      <app-button 
        white 
        @click="tickets">FB-Event</app-button>
      <app-button 
        white 
        @click="showSubscribe">Subscribe</app-button>
    </div>
  </div>
</template>

<script>
import file from 'raw-loader!@/texts/cabinet.md';
export default {
  name: 'Cabinet',
  data: () => ({ file }),
  methods: {
    showSubscribe() {
      this.$ga.event('subscribe', 'click', 'cabinet');
      this.$modal.show('subscribe');
    },
    tickets() {
      window.open(
        '//www.facebook.com/events/420491892141732/',
        '_blank'
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.cabinet {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding-top: 30px;
  padding-bottom: 30px;
  .next {
    margin-bottom: 80px;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    @include breakpoint($md) {
      flex-direction: row;
    }
  }
  & /deep/ {
    p {
      margin-bottom: 20px;
      font-weight: normal;
      margin-bottom: 30px;
      text-align: center;
      line-height: 1.1;
      font-size: 24px;
      max-width: 800px;
      @include breakpoint($md) {
        font-size: 40px;
      }
      &.small {
        font-size: 24px;
        font-weight: 100;
        @include breakpoint($md) {
          font-size: 26px;
        }
      }
    }
  }
}
</style>
