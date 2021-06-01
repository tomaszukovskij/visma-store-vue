<template>
  <div>
    <carousel-list
      v-if="getCarouselList.length"
      :carousel-list="getCarouselList"
    />
    <product-list v-if="productList.length" :product-list="productList" />
  </div>
</template>
<script>
import ProductList from "../components/product/ProductList.vue";
import CarouselList from "../components/carousel/CarouselList.vue";
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  components: {
    ProductList,
    CarouselList,
  },
  computed: {
    ...mapState(["productList"]),
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
