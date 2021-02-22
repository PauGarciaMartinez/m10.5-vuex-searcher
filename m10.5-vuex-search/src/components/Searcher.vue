<!-- TEMPLATE -->
<template>

  <h1>{{ title }}</h1>

  <div class="search-container">
    <input 
      type="text"
      v-model="inputSearch"
      :placeholder="placeholder"
      class="search-bar"> 
  </div>

  <div class="radio-container">
    <label for="available">{{ availableMsg }}</label>
      <input 
        type="radio" 
        id="available" 
        name="available"
        class="radio-btn"
        v-model="availableT"
        :value="true">
    <label for="unavailable">{{ unavailable }}</label>
      <input 
        type="radio" 
        id="unavailable" 
        name="unavailable"
        class="radio-btn"
        v-model="availableT"
        :value="false">
  </div>

  <div class="movies-wrapper">
    <Movies/>
  </div>

  <transition name="no-movies">
    <div v-if="checkEmpty" class="no-movies-container">
      <p>{{ msg }}</p>
    </div>
  </transition>

</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./../scripts/searcher.js"></script> /

<!-- STYLE -->
<style src="./../styles/css/searcher.css"></style>