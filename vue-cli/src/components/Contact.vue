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
      <input type="email" name="email" placeholder="Enter your email" required>
      <textarea name="text" rows="4" maxlength="300" minlength="30" placeholder="Enter your message. Please enter the message that is longer than 30 characters" required></textarea>
      <button>Send a message</button>
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
<style lang="scss" scoped>
@import "../scss/variables";

  .unda-kafka-form {
    width: 50%;
    margin: 0 auto;

    // @media screen and (max-width: $break-small) {
    //   width: 80%;
    // }

    &__heading {
      text-align: center;
      color: $tertiary;
      font-size: 3rem;
    }

    &__form {
      display: flex;
      flex-direction: column;

      input, textarea {
        margin: 1rem;
        padding: .5rem;
        border: 1px solid transparent;
        border-left: 2px solid;
        border-right: 2px solid;
        transition: border-color .5s ease-out;

        // @media screen and (max-width: $break-small){
        //   padding: 1.5rem;
        //   font-size: 2rem;
        // }
      }

      input:required, textarea:required {
        border-left-color: palegreen;
        border-right-color: palegreen;
      }
      input:invalid, textarea:invalid {
        border-left-color: $tertiary;
        border-right-color: $tertiary;
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

        // @media screen and (max-width: $break-small) {
        //   padding: 1.5rem;
        //   font-size: 2rem;
        // }

        &:hover {
          color: $primary;
          background-color: $secondary;
        }
      }
    }
  }
</style>
