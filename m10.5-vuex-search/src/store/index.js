import { createStore } from 'vuex'
import Movies from './../assets/mock-data.json'

export default createStore({
  state: {
    movies: Movies,
    empty: false,
    filter: {
      input: "",
      availableT: true
    }
  },
  getters: {
    filterMovies: (state) => {
      if (state.filter.input.length < 3) {
        state.empty = false
        const allMovies = state.movies
        if (state.filter.availableT) {
          return allMovies.filter(movie => movie.available === state.filter.availableT)
        } else if (!state.filter.availableT) {
          return allMovies.filter(movie => movie.available !== state.filter.availableT)
        }
      } else {
        const movieList = state.movies.filter(movie => movie.title.toLowerCase().includes(state.filter.input.toLowerCase()))
        if (state.filter.availableT) {
          const availableMovies = movieList.filter(movie => movie.available === state.filter.availableT)
          if (availableMovies.length !== 0) {
            state.empty = false
            return availableMovies
          } else {
            state.empty = true
          }
        } else if (!state.filter.availableT) {
          const unavailableMovies = movieList.filter(movie => movie.available !== state.filter.availableT)
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
    setSearch(state, search) {
      state.filter.input = search
    },
    setAvailable(state) {
      state.filter.availableT = !state.filter.availableT
    }
  },
  actions: {
  },
  modules: {
  }
})
