import { createStore } from 'vuex'
import Movies from './../assets/mock-data.json'

export default createStore({
  state: {
    movies: Movies
  },
  getters: {
    filterMovies: (state) => (input) => {
      return state.movies.filter(movie => movie.title.toLowerCase().includes(input.toLowerCase()))
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
