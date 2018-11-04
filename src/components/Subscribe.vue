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
      @submit.prevent="registered = true">
      <input 
        v-model="name" 
        type="text"
        placeholder="Name"
        required>
      <input 
        v-model="mail"
        type="email" 
        placeholder="Mail"
        required>
      <input 
        v-model="phone"
        type="tel" 
        placeholder="Phone">
      <button 
        class="button-subscribe" 
        type="submit">SUBSCRIBE</button>
      <p class="legal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repudiandae nemo veniam molestiae facilis, maiores quod sed excepturi sint eaque nesciunt. Itaque adipisci inventore possimus blanditiis nihil exercitationem vel ipsum.</p>
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
export default {
  name: 'Subscribe',
  components: {
    Close,
  },
  data() {
    return {
      registered: false,
      name: '',
      mail: '',
      phone: '',
    };
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
