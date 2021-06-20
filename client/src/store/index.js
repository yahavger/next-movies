import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedMovie: [],
    moviesList: [],
  },
  mutations: {
    setSelectedMovie(state, movies) {
      const [movie] = movies;
      state.selectedMovie = movie;
    },
    setMovies(state, movies) {
      state.moviesList = movies;
    },
  },
  actions: {
    async fetchSelectedMovieById({ commit }, id) {
      const res = await axios.get(`http://localhost:3000/movies/${id}`);
      commit('setSelectedMovie', res.data);
    },
    async fetchMovies({ commit }) {
      const res = await axios.get('http://localhost:3000/movies');
      commit('setMovies', res.data);
    },
  },
  getters: {
    getMoviesList: (state) => state.moviesList,
    getMoviesListLength: (state) => state.moviesList.length,
    getMoviesByRange: (state) => (start, end) => state.moviesList.slice(start, end),
    getSelectedMovie: (state) => state.selectedMovie,
  },
});
