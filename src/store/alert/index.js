export const namespaced = true;

export const state = {
  alert: {
    show: false,
    text: "Alerta",
    type: "error" // error, success
  }
};

export const mutations = {
  SET_ALERT(state, alert) {
    state.alert = {
      show: alert.show,
      text: alert.text,
      type: alert.type
    };
  },

  CLEAR_ALERT(state) {
    state.alert = [
      {
        show: false,
        text: "Alerta",
        type: "error"
      }
    ];
  }
};

export const actions = {
  setAlert({ commit }, alert) {
    commit("SET_ALERT", alert);
  },

  showSuccess({ commit }, text) {
    commit("SET_ALERT", {
      show: true,
      text: text,
      type: "success"
    });
  },

  showError({ commit }, text) {
    commit("SET_ALERT", {
      show: true,
      text: text,
      type: "error"
    });
  },

  showAPIError({ dispatch }, error) {
    let errorMessage = "Falha no servidor";

    errorMessage = error.response?.data?.message || errorMessage;

    if (error.response.status === 422) {
      const { errors } = error.response.data;

      const campos = Object.keys(errors);

      for (const campo of campos) {
        dispatch("showError", errors[campo][0]);
      }
    } else {
      dispatch("showError", errorMessage);
    }
  },

  clear({ commit }) {
    commit("CLEAR_ALERT");
  }
};

export const getters = {
  alert: state => state.alert
};
