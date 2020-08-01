import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const requireContext = require.context("./", true, /.*\.(js)$/);

let modules = {};

requireContext.keys().forEach((file) => {
  const name = file.replace("./", "").replace("/index.js", "");
  const Module = requireContext(file);

  if (name !== "index.js") {
    modules[name] = Module.default;
    modules[name].namespaced = true;
  }
});

export default new Vuex.Store({
  modules,
});
