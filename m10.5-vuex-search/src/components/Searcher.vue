<!-- TEMPLATE -->
<template>
  <h1>{{ title }}</h1>
  
  <input 
    type="text" 
    :placeholder="placeholder"
    class="search-bar">
  <div class="radio-container">
    <label for="available">{{ available }}</label>
      <input 
        type="radio" 
        id="available" 
        name="available"
        class="radio-btn">
    <label for="unavailable">{{ unavailable }}</label>
      <input 
        type="radio" 
        id="unavailable" 
        name="unavailable"
        class="radio-btn">
  </div>

</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./../scripts/searcher.js"></script> /

<!-- STYLE -->
<style src="./../styles/css/searcher.css"></style>