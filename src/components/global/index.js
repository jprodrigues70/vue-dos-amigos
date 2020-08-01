import Vue from "vue";

const requireContext = require.context("./", true, /.*\.(vue)$/);

requireContext.keys().forEach((file) => {
  const Component = requireContext(file).default;

  if (Component.name) {
    Vue.component(Component.name, Component);
  }
});
