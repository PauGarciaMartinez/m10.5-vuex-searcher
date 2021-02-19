export default {
  name: "Movies",
  props: ["inputSearch", "check"],
  data() {
    return {
      
    }

  },
  methods: {

  },
  computed: {
    movies() {
      return this.$store.state.movies
    },
    filterMovies() {
      return this.$store.getters.filterMovies(this.inputSearch)
    },
    filterAvailableMovies() {
      return this.$store.getters.filterAvailableMovies(true, this.check)
    }
  }
}