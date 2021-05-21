<template>
  <div id="product-control">
    <div class="product-control__icon" @click="createNewProductHandler"></div>
  </div>
</template>
<script>
export default {
  methods: {
    createNewProductHandler() {
      const data = {
        modalType: "form",
      };
      this.$emit("data", data);
    },
  },
};
</script>
