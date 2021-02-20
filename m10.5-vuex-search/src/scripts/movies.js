import gsap from "gsap"

export default {
  name: "Movies",
  props: ["inputSearch", "check"],
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
    filterMovies() {
      return this.$store.getters.filterMovies(this.inputSearch, true, this.check)
    }
  }
}