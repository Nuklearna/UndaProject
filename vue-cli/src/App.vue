<template>
  <div id="app" class="unda-kafka">

    <app-header></app-header>

    <div class="unda-kafka-logo">
      <img src="./assets/andy-warhol-franz-kafka-logo.png" alt="Franz Kafka">
    </div>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    appHeader: Header
  }
}
</script>

<style lang="scss">
@import "./scss/variables";

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

*, *::before, *::after {
	box-sizing: border-box;
}

body {
  margin: 0 auto;
  padding: 0;
  background-color: $primary;
  font-family: 'Roboto', sans-serif;
}

#app {
  margin: 0 auto;
  width: 100%;

  .unda-kafka-logo {
      margin: 0 auto;
      text-align: center;
      width: 100%;

    @media screen and (max-width: $break-small){
      margin: 2rem auto;
    }

      img {
        width: 15rem;
        height: 15rem;
        object-fit: cover;

        @media screen and (max-width: $break-small) {
          width: 25rem;
          height: 25rem;
        }


      }
  }

/*ANIMATION TRANSITION*/
  .slide-leave-active {
       transition: opacity .7s ease;
       opacity: 0;
       animation: slide-out .7s ease-out forwards;
   }

   .slide-leave {
       opacity: 1;
       transform: translateX(0);
   }

   .slide-enter-active {
       animation: slide-in .7s ease-out forwards;
   }

   @keyframes slide-out {
       0% {
           transform: translateY(0);
       }
       100% {
           transform: translateY(-30px);
       }
   }

   @keyframes slide-in {
       0% {
           transform: translateY(-30px);
       }
       100% {
           transform: translateY(0);
       }
   }
}
</style>
