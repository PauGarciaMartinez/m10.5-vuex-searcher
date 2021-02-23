<!-- TEMPLATE -->
<template>

    <div class="movies-wrapper">
      <transition-group  
      appear 
      @before-enter="beforeEnter"
      @enter="enter">
        <MovieItem  
          v-for="(movie, index) in filterMovies" 
          :movie="movie"
          :key="movie" 
          :data-index="index"/>
      </transition-group>
    </div>

</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./../scripts/movieList.js"></script>

<!-- STYLE -->
<style src="./../styles/css/movie-list.css"></style>