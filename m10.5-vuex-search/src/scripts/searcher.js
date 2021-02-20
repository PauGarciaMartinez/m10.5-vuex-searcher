import Movies from "./../components/Movies.vue"

export default {
  name: "Searcher",
  data() {
    return {
      title: "Search for a movie",
      placeholder: "Choose a movie to see if it's available",
      available: "Available",
      unavailable: "Unavailable",
      input: "",
      check1: true,
      check2: false,
      msg: "No movies available"
    }
  },
  methods: {
    toggleCheck1() {
      this.check2 ? this.check1 = !this.check1 : this.check1
      this.check2 ? this.check2 = !this.check2 : this.check2
    },
    toggleCheck2() {
      this.check1 ? this.check2 = !this.check2 : this.check2
      this.check1 ? this.check1 = !this.check1 : this.check1
    }
  },
  computed: {
    checkEmpty() {
      return this.$store.getters.checkEmpty
    }
  },
  components: {
    Movies
  }
}