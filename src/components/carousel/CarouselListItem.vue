<template>
  <a href="" class="carousel-list__item">
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
    item: t.object,
  },
};
</script>
