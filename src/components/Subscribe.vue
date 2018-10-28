<template>
  <div
    class="subscribe-modal">
    <form>
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
      <button type="submit">SUBSCRIBE</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Subscribe',
  data() {
    return {
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
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    input {
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
  }
}
</style>
