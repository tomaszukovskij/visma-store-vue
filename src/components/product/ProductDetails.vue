<template>
  <section id="product-single">
    <div class="container">
      <h1 class="content-center">{{ item.title }}</h1>
      <figure class="product-single__image">
        <img :src="item.details.imageUrl" :alt="item.title" />
      </figure>
      <p>{{ item.details.fullText }}</p>
    </div>
  </section>
</template>
<script>
import Http from "../../api/apiInterface.js";
import t from "vue-types";
export default {
  props: {
    id: t.number,
  },
  data() {
    return {
      item: "",
    };
  },
  methods: {
    async fetchProductData() {
      this.item = await Http.getSingle("/api/products/", this.id);
    },
  },
  mounted() {
    this.fetchProductData();
  },
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 900px;
}
.product-single__image {
  padding: 50px 0;

  img {
    width: 100%;
  }
}

p {
  font-size: 1.2em;
  line-height: 2em;
  font-family: "Montserrat", sans-serif;
  padding: 0 50px;
}
</style>
