<template>
  <div>
    <carousel-list
      v-if="productList.length"
      :carousel-list="carouselListData"
    />
    <product-list :product-list="productList" />
  </div>
</template>
<script>
import ProductList from "../components/product/ProductList.vue";
import CarouselList from "../components/carousel/CarouselList.vue";
import Http from "../api/apiInterface.js";
export default {
  components: {
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
      this.productList = await Http.get("/products");
    },
  },

  created() {
    this.fetchProductData();
  },
};
</script>
