<template>
  <nav class="unda-header__navbar">
    <ul class="unda-header__nav">
      <li class="unda-header__item"><router-link to="/"> Home </router-link></li>
      <li class="unda-header__item"><router-link to="Contact"> Contact us </router-link></li>
    </ul>

  </nav>
</template>
<style lang="scss">
/*COLOR SCHEME*/
$primary: #B8E1DE !default;
$secondary: #1F2625 !default;
$tertiary: #151A19 !default;

.unda-header {
  &__navbar {
    position: relative;
    display: flex;
    padding: .5rem 1rem;

    @media (min-width: 992px) {
      flex-flow: row nowrap;
      -ms-flex-pack: start;
      justify-content: flex-start;
    }

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

      &:hover {
        text-decoration: none;
        color: $secondary;
      }
    }



  }
}


</style>
