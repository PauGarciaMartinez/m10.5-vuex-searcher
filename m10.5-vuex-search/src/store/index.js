import { createStore } from 'vuex'
import Movies from './../assets/mock-data.json'

export default createStore({
  state: {
    movies: Movies,
    empty: false
  },
  getters: {
    filterMovies: (state) => (input, available, check) => {
      if (input.length < 3) {
        const allMovies = state.movies
        if (check) {
          return allMovies.filter(movie => movie.available === available)
        } else if (!check) {
          return allMovies.filter(movie => movie.available !== available)
        }
      } else {
        const movieList = state.movies.filter(movie => movie.title.toLowerCase().includes(input.toLowerCase()))
        if (check) {
          const availableMovies = movieList.filter(movie => movie.available === available)
          if (availableMovies.length !== 0) {
            state.empty = false
            return availableMovies
          } else {
            state.empty = true
          }
        } else if (!check) {
          const unavailableMovies = movieList.filter(movie => movie.available !== available)
          if (unavailableMovies.length !== 0) {
            state.empty = false
            return unavailableMovies
          } else {
            state.empty = true
          }
        }
      }
    },
    checkEmpty: (state) => {
      return state.empty
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
