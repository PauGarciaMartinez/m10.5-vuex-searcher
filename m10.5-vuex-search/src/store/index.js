import { createStore } from 'vuex'
import Movies from './../assets/mock-data.json'

export default createStore({
  state: {
    movies: Movies
  },
  getters: {
    filterMovies: (state) => (input, available, check) => {
      const movieList = state.movies.filter(movie => movie.title.toLowerCase().includes(input.toLowerCase()))
      if (check && input.length >= 3) {
        return movieList.filter(movie => movie.available === available)
      } else if (!check) {
        return movieList.filter(movie => movie.available !== available)
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
