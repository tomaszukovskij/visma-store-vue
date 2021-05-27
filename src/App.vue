<template>
  <div>
    <the-header></the-header>
    <main>
      <carousel-list
        v-if="carouselListData.length"
        :carousel-list="carouselListData"
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
    };
  },
  provide() {
    return {
      fetchProductData: this.fetchProductData,
    };
  },
  computed: {
    carouselListData() {
      return this.productList.filter((d) => d.isHighlighted);
    },
  },
  methods: {
    async fetchProductData() {
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
