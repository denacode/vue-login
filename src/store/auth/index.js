import authService from "../../services/auth";
import router from "../../router";

export const namespaced = true;

export const state = {
  id: 0,
  email: "",
  name: "",
  api_token: ""
};

export const mutations = {
  SET_USER(state, dados) {
    state.id = dados.id;
    state.email = dados.email;
    state.name = dados.name;
    state.api_token = dados.api_token;
  },

  CLEAR_USER(state) {
    state.id = "";
    state.email = "";
    state.name = "";
    state.api_token = "";
  }
};

export const actions = {
  async login({ commit, dispatch }, user) {
    await authService
      .login(user)
      .then(response => {
        commit("SET_USER", response.data);
        dispatch("alert/showSuccess", "Login realizado com sucesso!");
        router.push({ name: "home" });
      })
      .catch(error => {
        dispatch("alert/showAPIError", error, { root: true });
      });
  },

  loginFake({ commit }) {
    const user = {
      id: 1,
      name: "Caio",
      email: "cdenadaisouza@gmail.com",
      api_token: "123"
    };

    commit("SET_USER", user);
    router.push({ name: "home" });
  },

  async logout({ commit }) {
    commit("CLEAR_USER");
    router.push({ name: "welcome" });
  }
};

export const getters = {
  auth: state => state,
  name: state => state.name,
  loggedIn: state => state.api_token != "",
  api_token: state => state.api_token
};
