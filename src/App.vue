<template>
  <div>
    <the-header></the-header>
    <main>
      <product-list :product-list="productList"></product-list>
    </main>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import ProductList from "./components/product/ProductList.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    ProductList,
  },
  data() {
    return {
      productList: [],
      justText: "Text here",
    };
  },
  provide() {
    return {
      fetchProductData: this.fetchProductData,
    };
  },
  methods: {
    async fetchProductData() {
      const response = await fetch("api/products");

      if (!response.ok) {
        throw response;
      }

      const data = await response.json();
      this.productList = data;
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
