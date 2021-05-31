<template>
  <section id="product-single" v-if="item">
    <div class="container">
      <h1 class="content-center">{{ item.title }}</h1>
      <figure class="product-single__image">
        <img :src="item.details.imageUrl" :alt="item.title" />
      </figure>
      <p>{{ item.details.fullText }}</p>

      <div class="product-single__tabs">
        <router-link :to="{ name: 'gallery' }">Gallery</router-link>
        <router-link :to="{ name: 'quotes' }">Quotes</router-link>
      </div>
      <div class="product-single__tabs-view">
        <router-view />
      </div>
    </div>
  </section>
  <section v-else-if="error">
    <div class="container">{{ error }}</div>
  </section>
</template>
<script>
import Http from "../../api/apiInterface.js";
import t from "vue-types";
export default {
  props: {
    id: t.any,
  },
  data() {
    return {
      item: null,
      error: "",
    };
  },
  async mounted() {
    try {
      this.item = await Http.getSingle("/products", this.id);
    } catch (err) {
      this.error = err.statusText;
    }
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

.product-single__tabs {
  margin-top: 40px;
  border-bottom: 1px solid #7e7e7e;
}

.product-single__tabs a {
  padding: 10px;
  text-decoration: none;
  display: inline-block;

  &:first-child {
    padding-left: 0;
  }

  &:hover {
    color: #92c064;
  }
}

.product-single__tabs a.active {
  color: #92c064;
}

.product-single__tabs-view {
  margin-top: 40px;
}
</style>
