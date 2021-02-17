<!-- TEMPLATE -->
<template>
  <h1>{{ title }}</h1>
  
  <input 
    type="text" 
    :placeholder="placeholder">
  
  <div>
    <label for="available"></label>
      <input 
        type="radio" 
        id="available" 
        name="available">
    <label for="unavailable"></label>
      <input 
        type="radio" 
        id="unavailable" 
        name="unavailable">
  </div>

</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./../scripts/searcher.js"></script> /

<!-- STYLE -->
<style src="./../styles/css/searcher.css"></style>