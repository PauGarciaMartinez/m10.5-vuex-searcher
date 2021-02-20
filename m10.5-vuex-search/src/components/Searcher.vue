<!-- TEMPLATE -->
<template>

  <h1>{{ title }}</h1>

  <div class="search-container">
    <input 
      type="text"
      v-model="input" 
      :placeholder="placeholder"
      class="search-bar"> 
  </div>

  <div class="radio-container">
    <label for="available">{{ available }}</label>
      <input 
        type="radio" 
        id="available" 
        name="available"
        class="radio-btn"
        :checked="check1"
        @click="toggleCheck1">
    <label for="unavailable">{{ unavailable }}</label>
      <input 
        type="radio" 
        id="unavailable" 
        name="unavailable"
        class="radio-btn"
        :checked="check2"
        @click="toggleCheck2">
  </div>

  <div class="movies-wrapper">
    <Movies 
      :inputSearch="input" 
      :check="check1" />
  </div>

  <div v-show="checkEmpty" class="no-movies-container">
    <p>{{ msg }}</p>
  </div>

</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./../scripts/searcher.js"></script> /

<!-- STYLE -->
<style src="./../styles/css/searcher.css"></style>