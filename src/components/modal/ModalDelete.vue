<template>
  <the-modal>
    <div class="modal__delete">
      <p>Are you sure want to delete?</p>
      <div>
        <base-button
          type="submit"
          id="delete-product"
          class="btn btn--secondary"
          @click.prevent.native="deleteProductHandler"
        >
          Delete
        </base-button>

        <base-button
          type="button"
          class="btn js-cancel"
          @click.prevent.native="hideModalHandler"
        >
          Cancel
        </base-button>
      </div>
    </div>
  </the-modal>
</template>
<script>
import t from "vue-types";
import TheModal from "../modal/TheModal.vue";
import BaseButton from "../base/BaseButton.vue";
export default {
  inject: ["fetchProductData"],
  props: {
    productData: t.Object,
  },
  components: {
    TheModal,
    BaseButton,
  },
  methods: {
    hideModalHandler() {
      this.$emit("toggleModal", false);
    },
    async deleteProductHandler() {
      const response = await fetch("api/products/" + this.productData.data, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw response;
      }

      this.hideModalHandler();
      this.fetchProductData();
    },
  },
};
</script>
