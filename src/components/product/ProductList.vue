<template>
  <section id="products">
    <div class="container">
      <h2 class="content-center">Featured</h2>
      <div class="products-list">
        <product-item
          v-for="item in productList"
          :key="item.id"
          :item="item"
          @edit="sendProductDataEditToModal"
        ></product-item>
      </div>
    </div>
    <modal-add-edit
      v-if="isEditModalVisible"
      :productData="productToEdit"
      @toggle-modal="toggleEditModalFn"
    ></modal-add-edit>
    <modal-delete
      v-if="isDeleteModalVisible"
      :productData="productToEdit"
      @toggle-modal="toggleDeleteModalFn"
    ></modal-delete>
    <div id="product-control">
      <div class="product-control__icon" @click="createNewProductHandler">
        +
      </div>
    </div>
  </section>
</template>

<script>
import ProductItem from "./ProductListItem.vue";
import ModalAddEdit from "../modal/ModalAddEdit.vue";
import ModalDelete from "../modal/ModalDelete.vue";
import t from "vue-types";

export default {
  props: {
    productList: t.array,
  },
  components: {
    ProductItem,
    ModalAddEdit,
    ModalDelete,
  },
  data() {
    return {
      productToEdit: null,
      isEditModalVisible: false,
      isDeleteModalVisible: false,
    };
  },
  methods: {
    sendProductDataEditToModal(value) {
      this.productToEdit = value;
      if (value.modalType === "form") {
        this.isEditModalVisible = !this.isEditModalVisible;
      } else if (value.modalType === "delete") {
        this.isDeleteModalVisible = !this.isDeleteModalVisible;
      }
    },

    createNewProductHandler() {
      const data = {
        modalType: "form",
      };
      this.productToEdit = data;
      this.isEditModalVisible = !this.isEditModalVisible;
    },

    openAddProductModal(value) {
      this.productToEdit = value;
      this.isEditModalVisible = !this.isEditModalVisible;
    },

    toggleEditModalFn(val) {
      this.isEditModalVisible = val;
    },
    toggleDeleteModalFn(val) {
      this.isDeleteModalVisible = val;
    },
  },
};
</script>
