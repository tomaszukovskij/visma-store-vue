import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

new Vue({
  render: (h) => h(App),
}).$mount("#app");

Vue.use(VueRouter);
