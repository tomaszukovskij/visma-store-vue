<template>
  <header>
    <div class="container">
      <div class="header__top">
        <div class="header__logo">
          <a href="/">Logo</a>
        </div>
        <div class="header__controls">
          <base-button id="search">Search</base-button>
          <base-button class="btn--primary">Login</base-button>
        </div>
      </div>
      <nav>
        <ul>
          <li><a href="" class="active">Shop</a></li>
          <li><a href="">Collections</a></li>
          <li><a href="">News</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Contacts</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
import BaseButton from "../base/BaseButton.vue";
export default {
  components: {
    BaseButton,
  },
};
</script>
