import Vue from "vue";
import Vuex from 'vuex';
import cart from "@/vuex/modules/cart";
Vue.use(Vuex);
export default new Vuex.Store({
  modules:{
    cart: cart
  }
})