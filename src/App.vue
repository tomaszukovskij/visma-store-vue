<template>
  <div>
    <the-header></the-header>
    <main>
      <carousel-list
        v-if="productList.length"
        :carousel-list="carouselList"
      ></carousel-list>
      <product-list :product-list="productList"></product-list>
    </main>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import ProductList from "./components/product/ProductList.vue";
import CarouselList from "./components/carousel/CarouselList.vue";
import Http from "./api/apiInterface.js";

export default {
  components: {
    TheHeader,
    TheFooter,
    ProductList,
    CarouselList,
  },
  data() {
    return {
      productList: [],
      carouselList: [],
    };
  },
  provide() {
    return {
      fetchProductData: this.fetchProductData,
    };
  },
  methods: {
    async fetchProductData() {
      this.carouselList = [];
      const response = await fetch("api/products");

      if (!response.ok) {
        throw response;
      }

      const data = await response.json();
      this.productList = data;

      // Filter data what is highlighted and push to data, to show it on carousel
      data
        .filter((d) => d.isHighlighted)
        .forEach((item) => {
          this.carouselList.push(item);
        });
      this.productList = await Http.get("/api/products");
    },
  },

  created() {
    this.fetchProductData();
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
