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
      <label for="gdpr[26759]">
        <input 
          type="checkbox" 
          required
          name="gdpr[26759]">
        Ja, ich stimme den <router :to="{ name: 'Privacy Policy' }">AGB und Datenschutzbestimmungen</router> von Red Cabinet zu. 
      </label>
      <button 
        class="button-subscribe" 
        type="submit">SUBSCRIBE</button>
      <vue-markdown 
        :source="file" 
        class="legal"/>
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
      this.registered = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.subscribe-modal {
  background: black;
  color: white;
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
    input {
      font-size: 40px;
      text-align: center;
      margin-bottom: 20px;
      background: black;
      color: white;
      border: 0;
      border-bottom: 2px dotted grey;
      font-size: 20px;
      &::placeholder {
        color: grey;
      }
    }
    .button-subscribe {
      font-family: $font-family-header;
      font-size: 35px;
      color: white;
      margin-bottom: 20px;
    }
    .legal {
      font-size: 12px;
      text-align: left;
      color: rgba(255, 255, 255, 0.8);
      font-weight: normal;
    }
  }
  .success {
    font-family: $font-family-header;
    font-size: 35px;
  }
}
</style>
