<template>
  <div class="unda-kafka-form">

    <h2 class="unda-kafka-form__heading">{{ msgContact }}</h2>

    <form class="unda-kafka-form__form" method="post">
      <input type="email" name="email" placeholder="Enter your email">
      <textarea name="text" rows="4" minlenght="30" placeholder="Enter your message"></textarea>
      <button type="button" name="submit">Send a message</button>
    </form>


  </div>
</template>

<script>


export default {
  data () {
    return {
      msgContact: 'Contact us'
    }
  }
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
