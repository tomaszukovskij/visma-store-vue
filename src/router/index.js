import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/Home.vue";
import Wrapper from "../pages/Wrapper.vue";

const ProductDetails = () => import("../components/product/ProductDetails.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Wrapper,
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "/product/:id",
        name: "ProductDetails",
        component: ProductDetails,
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
