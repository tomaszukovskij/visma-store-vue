<template>
  <the-modal>
    <div class="modal__delete">
      <p>Are you sure want to delete?</p>
      <div>
        <base-button
          type="submit"
          class="btn btn--secondary"
          @click.prevent.native="deleteProductHandler"
        >
          Delete
        </base-button>
        <base-button class="btn" @click.prevent.native="hideModalHandler">
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
import Http from "../../api/apiInterface.js";
export default {
  inject: ["fetchProductData"],
  props: {
    productData: t.object,
  },
  components: {
    TheModal,
    BaseButton,
  },
  methods: {
    hideModalHandler() {
      this.$emit("toggle-modal", false);
    },
    deleteProductHandler() {
      Http.delete("api/products/" + this.productData.data);

      this.hideModalHandler();
      this.fetchProductData();
    },
  },
};
</script>
