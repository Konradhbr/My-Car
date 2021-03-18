import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null,
      firstOpenDashboard: true,
      activeCar: null
    }
  },
  getters: {
    user(state) {
      return state.user;
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    SET_FIRST_OPEN_DASHBOARD(state, value) {
      state.user.firstOpenDashboard = value;
    },
    SET_ACTIVE_CAR(state, value) {
      state.user.activeCar = value;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    },
    fetchChoosenCar({ commit }, value) {
      commit("SET_FIRST_OPEN_DASHBOARD", value);
    },
    fetchActivedCar({ commit }, value) {
      commit("SET_ACTIVE_CAR", value);
    }
  },
  modules: {}
});
