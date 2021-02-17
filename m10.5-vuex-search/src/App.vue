<!-- TEMPLATE -->
<template>
  <Searcher>
  </Searcher>
</template>


<!-- SCRIPT -->
<script>
import Searcher from "./components/Searcher.vue"
import Movies from "./components/Movies.vue"

export default {
  name: 'App',
  components: {
    Searcher,
    Movies
  }
}
</script>

<!-- STYLE -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
