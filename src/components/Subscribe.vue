<template>
  <div
    class="subscribe-modal">
    <div class="close-x">
      <img 
        src="@/assets/close-x.svg" 
        alt="close-icon" 
        type="button"
        @click="$modal.hide('subscribe')">
    </div>
    <form 
      v-if="!registered"
      ref="form" 
      :action="endpoint" 
      target="_blank"
      method="post"
      @submit="submit">
      <input 
        v-model="name" 
        type="text"
        placeholder="Name"
        name="FNAME"
        required>
      <input 
        v-model="mail"
        type="email" 
        placeholder="Mail"
        name="EMAIL"
        required>
      <input 
        v-model="phone"
        type="tel" 
        name="MERGE4"
        placeholder="Phone">
      <label 
        class="gdpr">
        <input 
          type="checkbox" 
          required
          name="gdpr[26759]">
        Ja, ich stimme den <span 
class="agb" 
                                 @click.prevent="goToPrivacy">AGB und Datenschutzbestimmungen</span> von Red Cabinet zu. 
      </label>
      <app-button 
        class="button-subscribe" 
        type="submit">SUBSCRIBE</app-button>
      <vue-markdown 
        :source="file" 
        class="disclaimer"/>
    </form>
    <div 
      v-else 
      class="success">
      VIELEN DANK FÜR DEINE ANMELDUNG!<br><br>
      IN KÜRZE ERHÄLST DU EINE BESTÄTIGUNGSMAIL UM DIE REGISTRIERUNG VOLLENDS ABZUSCHLIESSEN.
    </div>
  </div>
</template>

<script>
import Close from '@/components/BurgerMenu';
import file from 'raw-loader!@/texts/subscribe.md';

const MAILCHIMP_URL =
  'https://redcabinet.us19.list-manage.com/subscribe/post?u=f908a8b86cd587299bacb8ff7&id=f0fc013b31';

export default {
  name: 'Subscribe',
  components: {
    Close,
  },
  data() {
    return {
      file,
      endpoint: MAILCHIMP_URL,
      registered: false,
      name: '',
      mail: '',
      phone: '',
    };
  },
  methods: {
    submit() {
      this.$ga.event('subscribe', 'click', 'form');
      if (window.localStorage)
        window.localStorage.setItem('subscribed', 'true');
      this.registered = true;
    },
    goToPrivacy() {
      this.$router.push({ name: 'Privacy Policy' });
      this.$modal.hide('subscribe');
    },
  },
};
</script>

<style lang="scss" scoped>
.subscribe-modal {
  color: black;
  height: 100%;
  padding: 20px;
  text-align: center;
  .close-x {
    text-align: right;
    img {
      width: 20px;
      cursor: pointer;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    input[type='text'],
    input[type='email'],
    input[type='tel'] {
      font-size: 28px;
      line-height: 1.2;
      text-align: center;
      margin-bottom: 20px;
      background: white;
      color: black;
      border: 0;
      border-bottom: 5px solid black;
      width: 100%;
      &::placeholder {
        color: grey;
      }
    }
    .gdpr {
      font-weight: normal;
      margin-bottom: 20px;
      .agb {
        text-decoration: underline;
        cursor: pointer;
      }
    }
    .disclaimer {
      margin-top: 30px;
      font-size: 12px;
      text-align: left;
      font-weight: normal;
      & /deep/ p {
        margin-bottom: 10px;
      }
    }
  }
  .success {
    font-family: $font-family-header;
    font-size: 35px;
  }
}
</style>
