import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import * as mutations from "./mutations.js";
import * as getters from "./getters.js";
import * as actions from "./actions.js";
import * as state from "./state.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {},
});
