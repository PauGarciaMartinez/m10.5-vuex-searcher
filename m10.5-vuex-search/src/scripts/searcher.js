import MovieList from "./../components/MovieList.vue"
import { mapGetters } from "vuex"

export default {
  name: "Searcher",
  data() {
    return {
      title: "Search for a movie",
      placeholder: "Choose a movie to see if it's available",
      availableMsg: "Available",
      unavailable: "Unavailable",
      msg: "No movies available"
    }
  },
  computed: {
    ...mapGetters([
      'checkEmpty'
    ]),
    inputSearch: {
      get() {
        return this.$store.state.filter.input
      },
      set(search) {
        this.$store.commit("setSearch", search)
      }
    },
    availableT: {
      get() {
        return this.$store.state.filter.availableT
      },
      set() {
        this.$store.commit("setAvailable")
      }
    }
  },
  components: {
    MovieList
  }
}