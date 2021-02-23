import MovieItem from "./../components/MovieItem.vue"
import gsap from "gsap"
import { mapGetters } from "vuex";

export default {
  name: "MovieList",
  setup() {
    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(100px)"
    }
    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: done,
        delay: el.dataset.index * 0.1
      })
    }
    return { beforeEnter, enter }
  },
  computed: {
    ...mapGetters([
      'filterMovies'
    ])
  },
  components: {
    MovieItem
  }
}