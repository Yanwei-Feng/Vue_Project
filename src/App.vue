<script setup lang="ts">
import headerCardVue from './components/content/headerCard.vue';
import './assets/font/style.css';
</script>

<template>
  <headerCardVue message="message" />
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
