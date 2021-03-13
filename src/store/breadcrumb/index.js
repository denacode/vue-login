export const namespaced = true;

export const state = {
  items: [
    {
      text: "Home",
      disabled: false,
      href: "/"
    }
  ]
};

export const mutations = {
  SET_BREADCRUMB(state, items) {
    state.items = items;
  },

  CLEAR_BREADCRUMB(state) {
    state.items = [
      {
        text: "Home",
        disabled: false,
        href: "/"
      }
    ];
  }
};

export const actions = {
  setBreadcrumb({ commit }, items) {
    commit("SET_BREADCRUMB", items);
  },

  clear({ commit }) {
    commit("CLEAR_BREADCRUMB");
  }
};

export const getters = {
  items: state => state.items
};
