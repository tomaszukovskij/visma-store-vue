import Vue from "vue";
import VueRouter from "vue-router";

import Wrapper from "../pages/Wrapper.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Wrapper,
    children: [
      {
        path: "",
        component: () => import("../pages/Home.vue"),
      },
      {
        path: "/product/:id",
        name: "ProductDetails",
        component: () => import("../components/product/ProductDetails.vue"),
        props: true,
        children: [
          {
            path: "gallery",
            name: "gallery",
            component: () =>
              import("../components/product/ProductDetailsGallery.vue"),
          },
          {
            path: "quotes",
            name: "quotes",
            component: () =>
              import("../components/product/ProductDetailsQuotes.vue"),
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
  linkActiveClass: "active",
});

export default router;
