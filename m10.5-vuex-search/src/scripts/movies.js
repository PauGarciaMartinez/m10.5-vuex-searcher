export default {
  name: "Movies",
  props: ["inputSearch", "check"],
  computed: {
    filterMovies() {
      return this.$store.getters.filterMovies(this.inputSearch, true, this.check)
    }
  }
}