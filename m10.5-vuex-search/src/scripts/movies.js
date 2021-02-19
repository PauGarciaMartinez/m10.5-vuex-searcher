export default {
  name: "Movies",
  props: ["inputSearch", "check"],
  computed: {
    movies() {
      return this.$store.state.movies
    },
    filterMovies() {
      return this.$store.getters.filterMovies(this.inputSearch, true, this.check)
    }
  }
}