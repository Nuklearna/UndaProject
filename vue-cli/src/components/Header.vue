<template>
  <nav class="unda-header__navbar">
    <ul class="unda-header__nav">
      <li class="unda-header__item"><router-link to="/"> Home </router-link></li>
      <li class="unda-header__item"><router-link to="Contact"> Contact us </router-link></li>
    </ul>

  </nav>
</template>
<style lang="scss" scoped>
@import "../scss/variables";

.unda-header {
  &__navbar {
    position: relative;
    display: flex;
    padding: .5rem 1rem;
  }

  &__nav {
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  &__item {
    padding: 1rem;
    a {
      color: $tertiary;
      text-decoration: none;
      font-weight: 600;

      // @media screen and (min-width: $mobile-360) {
      //   font-size: 2rem;
      // }

      &:hover {
        text-decoration: none;
        color: #0073B6;
        transition: .5s ease-out;
      }
    }



  }
}


</style>
