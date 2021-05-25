<template>
  <a href="" class="products-list__item">
    <figure class="products-list__image">
      <img :src="item.imageUrl" :alt="item.title" />
    </figure>
    <h3>{{ item.title }}</h3>
    <p>{{ item.text }}</p>
    <div class="products-list__controls">
      <span class="products-list__price">{{ item.price }} USD</span>
      <div>
        <base-button
          class="btn--primary btn--xs-full js-edit-product"
          :value="item.id"
          @click.prevent.native="sendEditDataToModal"
        >
          Edit
        </base-button>
        <base-button
          class="btn--secondary btn--xs-full js-delete-product"
          :value="item.id"
          @click.prevent.native="sendDeleteDataToModal"
          >Delete</base-button
        >
      </div>
    </div>
  </a>
</template>
<script>
import BaseButton from "../base/BaseButton.vue";
import t from "vue-types";
export default {
  props: {
    item: t.Object,
  },
  components: {
    BaseButton,
  },
  methods: {
    sendEditDataToModal() {
      const data = {
        modalType: "form",
        data: this.item,
      };
      this.$emit("edit", data);
    },
    sendDeleteDataToModal() {
      const data = {
        modalType: "delete",
        data: this.item.id,
      };
      this.$emit("edit", data);
    },
  },
};
</script>
