<!-- TEMPLATE -->
<template>
  
  <div class="movie-container" v-for="movie in filterMovies" :key="movie">
    <p class="movie-title">{{ movie.title }}</p>
    <small>Available: {{ movie.available }}</small>
    <p class="movie-description">{{ movie.description }}</p> 
  </div>
  
</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./../scripts/movies.js"></script>

<!-- STYLE -->
<style src="./../styles/css/movies.css"></style>