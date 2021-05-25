<template>
  <the-modal>
    <form class="modal__form">
      <input-group title="Title">
        <input type="text" name="title" id="title" v-model="title" />
      </input-group>
      <input-group title="Price">
        <input
          type="number"
          name="price"
          id="price"
          step=".01"
          v-model.number="price"
        />
      </input-group>
      <input-group title="Image url">
        <input type="text" name="image-url" id="image-url" v-model="imageUrl" />
      </input-group>
      <input-group title="Text">
        <textarea name="text" id="text" v-model="text"></textarea>
      </input-group>
      <input-group title="Is highlighted?">
        <input type="checkbox" id="isHighlighted" v-model="isHighlighted" />
      </input-group>
      <div class="form-group">
        <base-button
          type="submit"
          id="submit-product"
          class="btn--primary"
          @click.prevent.native="editProductHandler"
          >{{ submitButtonText }}
        </base-button>
        <base-button class="btn" @click.prevent.native="hideModalHandler"
          >Cancel
        </base-button>
      </div>
    </form>
  </the-modal>
</template>
<script>
import t from "vue-types";
import InputGroup from "../form/InputGroup.vue";
import TheModal from "../modal/TheModal.vue";
import BaseButton from "../base/BaseButton.vue";
import Http from "../../api/apiInterface.js";
export default {
  inject: ["fetchProductData"],
  props: {
    productData: t.object,
  },
  components: {
    InputGroup,
    TheModal,
    BaseButton,
  },
  watch: {
    productData: {
      immediate: true,
      handler() {
        if (this.productData.data !== undefined) {
          this.title = this.productData.data.title;
          this.price = this.productData.data.price;
          this.text = this.productData.data.text;
          this.imageUrl = this.productData.data.imageUrl;
          this.isHighlighted = this.productData.data.isHighlighted;
        }
      },
    },
  },
  data() {
    return {
      showModal: false,
      title: "",
      price: "",
      text: "",
      imageUrl: "",
      isHighlighted: "",
    };
  },
  computed: {
    submitButtonText() {
      return this.productData.data !== undefined
        ? "Edit product"
        : "Add product";
    },
  },
  methods: {
    hideModalHandler() {
      this.$emit("toggle-modal", false);
    },
    editProductHandler() {
      // let isValid;

      // for (const property in this.$refs) {
      //   const provider = await this.$refs[property];
      //   const valid = await provider.validate();
      //   isValid = valid.valid;
      // }

      // if (!isValid) return;
      const data = {
        title: this.title,
        price: this.price,
        imageUrl: this.imageUrl,
        text: this.text,
        isHighlighted: this.isHighlighted,
      };

      if (this.productData.data !== undefined) {
        Http.put("/api/products/" + this.productData.data.id, data);
      } else {
        Http.post("/api/products/", data);
      }

      this.hideModalHandler();
      this.fetchProductData();
    },
  },
};
</script>
