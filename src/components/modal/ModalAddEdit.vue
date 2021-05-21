<template>
  <the-modal>
    <form class="modal__form">
      <input-group :title="'Title'">
        <input type="text" name="title" id="title" v-model="title" />
      </input-group>
      <input-group :title="'Price'">
        <input
          type="number"
          name="price"
          id="price"
          step=".01"
          v-model.number="price"
        />
      </input-group>
      <input-group :title="'Image url'">
        <input type="text" name="image-url" id="image-url" v-model="imageUrl" />
      </input-group>
      <input-group :title="'Text'">
        <textarea name="text" id="text" v-model="text"></textarea>
      </input-group>
      <input-group :title="'Is highlighted?'">
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
        <base-button
          type="button"
          class="btn js-cancel"
          @click.prevent.native="hideModalHandler"
          >Cancel
        </base-button>
      </div>
      <input type="hidden" name="hidden-id" id="hidden-id" />
    </form>
  </the-modal>
</template>
<script>
import t from "vue-types";
import InputGroup from "../form/InputGroup.vue";
import TheModal from "../modal/TheModal.vue";
import BaseButton from "../base/BaseButton.vue";
export default {
  inject: ["fetchProductData"],
  props: {
    productData: t.Object,
  },
  components: {
    InputGroup,
    TheModal,
    BaseButton,
  },
  watch: {
    productData: {
      immediate: true,
      handler(value) {
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
      this.$emit("toggleModal", false);
    },
    async editProductHandler() {
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

      let resData;

      if (this.productData.data.id !== undefined) {
        const response = await fetch(
          "api/products/" + this.productData.data.id,
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        if (!response.ok) {
          throw response;
        }
        resData = await response.json();
      } else {
        const response = await fetch("api/products/", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw response;
        }
        resData = await response.json();
      }

      this.hideModalHandler();
      this.fetchProductData();
      return resData;
    },
  },
};
</script>
