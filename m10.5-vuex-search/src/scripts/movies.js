export default {
  name: "Movies",
  data() {
    return {
      
    }

  },
  methods: {

  },
  computed: {
    movies() {
      return this.$store.state.movies
    }
  }
}