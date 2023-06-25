import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import * as mutations from "./mutations.js";
import * as getters from "./getters.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tabs: [
      { icon: "fa-clipboard-list", name: "task" },
      { icon: "fa-location-dot", name: "location" },
    ],
    acess_token:null,
    selectedtab: "task",
    tasks: [],
    checke_ins:[]
  },
  getters,
  mutations,
  actions: {
    set_tab({ commit }, payload) {
      commit("setTab", payload); 
    },
  },
  modules: {},
});
