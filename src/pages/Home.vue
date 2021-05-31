<template>
  <div>
    <carousel-list
      v-if="getCarouselList.length"
      :carousel-list="getCarouselList"
    />
    <product-list v-if="getProductList.length" :product-list="getProductList" />
  </div>
</template>
<script>
import ProductList from "../components/product/ProductList.vue";
import CarouselList from "../components/carousel/CarouselList.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    ProductList,
    CarouselList,
  },
  computed: {
    getProductList() {
      return this.$store.state.productList;
    },
    ...mapGetters(["getCarouselList"]),
  },
  methods: {
    ...mapActions({
      fetchProductData: "fetchProductList",
    }),
  },

  created() {
    this.fetchProductData();
  },
};
</script>
