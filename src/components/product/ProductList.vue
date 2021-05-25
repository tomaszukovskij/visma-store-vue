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
      v-if="toggleEditModal"
      :productData="productToEdit"
      @toggleModal="toggleEditModalFn"
    ></modal-add-edit>
    <modal-delete
      v-if="toggleDeleteModal"
      :productData="productToEdit"
      @toggleModal="toggleDeleteModalFn"
    ></modal-delete>
    <add-new-product-btn @data="openAddProductModal"></add-new-product-btn>
  </section>
</template>

<script>
import ProductItem from "./ProductListItem.vue";
import ModalAddEdit from "../modal/ModalAddEdit.vue";
import ModalDelete from "../modal/ModalDelete.vue";
import AddNewProductBtn from "../actions/AddNewProductBtn.vue";
import t from "vue-types";

export default {
  props: {
    productList: t.Array,
  },
  components: {
    ProductItem,
    ModalAddEdit,
    ModalDelete,
    AddNewProductBtn,
  },
  data() {
    return {
      productToEdit: "",
      toggleEditModal: false,
      toggleDeleteModal: false,
    };
  },
  methods: {
    sendProductDataEditToModal(value) {
      this.productToEdit = value;
      if (value.modalType === "form") {
        this.toggleEditModal = !this.toggleEditModal;
      } else if (value.modalType === "delete") {
        this.toggleDeleteModal = !this.toggleDeleteModal;
      }
    },

    openAddProductModal(value) {
      this.productToEdit = value;
      this.toggleEditModal = !this.toggleEditModal;
    },

    toggleEditModalFn(val) {
      this.toggleEditModal = val;
    },
    toggleDeleteModalFn(val) {
      this.toggleDeleteModal = val;
    },
  },
};
</script>
