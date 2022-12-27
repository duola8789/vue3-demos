<template>
  <ul>
    <li><router-link to="/a">A</router-link></li>
    <li><router-link to="/b">B</router-link></li>
  </ul>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { getIdleTimeFrame } from './utils';
</script>

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
