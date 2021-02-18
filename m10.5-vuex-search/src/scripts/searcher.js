import Movies from "./../components/Movies.vue"

export default {
  name: "Searcher",
  data() {
    return {
      title: "Search for a movie",
      placeholder: "Choose a movie to see if it's available",
      available: "Available",
      unavailable: "Unavailable",
      input: ""
    }
  },
  methods: {

  },
  computed: {

  },
  components: {
    Movies
  }
}