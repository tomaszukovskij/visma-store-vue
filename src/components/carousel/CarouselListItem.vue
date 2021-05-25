<template>
  <a href="" :class="carouselClass">
    <figure class="carousel-list__image">
      <img :src="item.imageUrl" :alt="item.title" />
    </figure>
    <div class="carousel-list__info">
      <span>{{ item.title }}</span>
    </div>
  </a>
</template>
<script>
import t from "vue-types";
export default {
  props: {
    item: t.Object,
    index: t.Number,
  },
  computed: {
    carouselClass() {
      return {
        "carousel-list__item carousel-list__item--active": this.index === 0,
        "carousel-list__item ": this.index !== 0,
      };
    },
  },
};
</script>
