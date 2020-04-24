<template>
  <v-app app id="app">
    <router-view :key="$route.path"></router-view>
  </v-app>
</template>



<style>
#vapp div:nth-child(1) {
  justify-content: center !important;
  background-color: black;
}
</style>