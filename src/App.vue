<template>
  <div>
    <the-header />
    <main></main>
    <router-view></router-view>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
