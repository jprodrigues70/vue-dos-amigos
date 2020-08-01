const black = localStorage.black === "true";
export default {
  state: { black },
  actions: {
    changeBlack({ commit }, payload) {
      commit("setBlack", payload);
    },
  },
  mutations: {
    setBlack(state, black) {
      console.log("black", black);
      localStorage.black = black ? "true" : "false";
      state.black = black;
    },
  },
};
