import Vue from "vue";
import Vuex from "vuex";
import Http from "../api/apiInterface.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    productList: [],
  },
  mutations: {
    setProductList(state, payload) {
      state.productList = payload;
    },
  },
  actions: {
    async fetchProductList(context) {
      try {
        let data = [];
        data = await Http.get("/products");
        context.commit("setProductList", await data);
      } catch (err) {
        console.log(err.statusText);
      }
    },
  },
  getters: {
    getCarouselList(state) {
      return state.productList.filter((d) => d.isHighlighted);
    },
  },
});

export default store;
