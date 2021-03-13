import Vue from "vue";
import Vuex from "vuex";

import * as alert from "./alert";
import * as auth from "./auth";
import * as breadcrumb from "./breadcrumb";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    alert,
    auth,
    breadcrumb
  }
});
