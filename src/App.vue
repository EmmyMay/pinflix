<template>
  <v-app app id="app">
    <router-view :key="$route.path"></router-view>
  </v-app>
</template>


<script>
export default {
  beforeMount() {
    if (localStorage.getItem("light-mode") == false) {
      console.log("hello");
    } else if (localStorage.getItem("light-mode") == true) {
      console.log("Adele");
    }
  }
};
</script>

<style>
#vapp div:nth-child(1) {
  justify-content: center !important;
}
</style>