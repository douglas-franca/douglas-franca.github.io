<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
  <v-app>
    <!-- <v-main class="custom-main"> -->
      <NavBar/>
    <!-- </v-main> -->
  </v-app>
</template>

<style scoped>
.custom-main {
  --v-layout-top: 0px !important;
}
</style>
