export default {
  name: "Movies",
  props: ["inputSearch"],
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
    }
  }
}