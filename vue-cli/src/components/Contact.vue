<template>
  <div class="unda-kafka-form">

    <h2 class="unda-kafka-form__heading">{{ msgContact }}</h2>

    <!-- <p class="unda-kafka-form__error" v-if="error">{{ error }}</p>

    <div class="unda-kafka-form__form" >
      <input type="email" name="email" placeholder="Enter your email" v-model="email">
      <textarea name="text" rows="4" minlenght="30" placeholder="Enter your message" v-model="text"></textarea>
      <button v-on:click="createContact">Send a message</button>
    </div> -->
    <p class="unda-kafka-form__error" v-if="error">{{ error }}</p>

    <form class="unda-kafka-form__form" >
      <input type="email" name="email" placeholder="Enter your email">
      <textarea name="text" rows="4" maxlength="300" minlength="30" placeholder="Enter your message"></textarea>
      <button >Send a message</button>
    </form>


  </div>
</template>

<script>
// import ContactService from '../contactService.js'

export default {
  name: 'Contact',
  data () {
    return {
      msgContact: 'Contact us',
      contacts: [],
      error: '',
      email: '',
      text: ''
    }
  },
  // async created() {
  //   try {
  //     this.contacts = await ContactService.getContact();
  //   } catch (err) {
  //     this.error = err.message;
  //   }
  // },
  // methods: {
  //   async createContact() {
  //     await ContactService.insertContact(this.text);
  //     this.contacts = await ContactService.getContact();
  //   }
  // }
}
</script>
<style lang="scss">
/*COLOR SCHEME*/
$primary: #B8E1DE !default;
$secondary: #1F2625 !default;
$tertiary: #151A19 !default;
  .unda-kafka-form {
    width: 50%;
    margin: 0 auto;

    &__heading {
      text-align: center;
      color: $tertiary;
    }

    &__form {
      display: flex;
      flex-direction: column;

      input {
        margin: 1rem;
        padding: .5rem;
      }
      textarea {
        margin: 1rem;
        padding: .5rem;
      }

      button {
        margin: 1rem;
        background-color: $tertiary;
        border: none;
        color: #fff;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        cursor: pointer;

        &:hover {
          color: $primary;
          background-color: $secondary;
        }
      }
    }
  }
</style>
