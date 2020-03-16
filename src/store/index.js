import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    user: '',
    lovedMovies: [],
    watchlist: [],
  },
  getters: {
    getDrawer: state => state.drawer,
    getUser: state => state.user,
    getLovedMovies: state => state.lovedMovies,
    getWatchlist: state => state.watchlist,
  },
  mutations: {
    changeDrawer: (state, status) => (state.drawer = status),
    settingUser: (state, user) => (state.user = user),
    addingLovedMovie: (state, movie) => state.lovedMovies.push(movie),
    removingLovedMovie: (state, index) => state.lovedMovies.splice(index, 1),
    addingWatchlist: (state, movie) => state.watchlist.push(movie),
    removingWatchlist: (state, index) => state.watchlist.splice(index, 1),
    clearingMovies: state => {
      state.lovedMovies = []
      state.watchlist = []
    },
  },
  actions: {
    hideDrawer: ({ commit }) => commit('changeDrawer', false),
    showDrawer: ({ commit }) => commit('changeDrawer', true),
    setUser: ({ commit }, user) => commit('settingUser', user),
    addLovedMovie: ({ commit }, movie) => commit('addingLovedMovie', movie),
    removeLovedMovie: ({ commit }, index) => commit('removingLovedMovie', index),
    addWatchlist: ({ commit }, movie) => commit('addingWatchlist', movie),
    removeWatchlist: ({ commit }, index) => commit('removingWatchlist', index),
    clearMovies: ({ commit }) => commit('clearingMovies'),
  },
  plugins: [createPersistedState()],
})