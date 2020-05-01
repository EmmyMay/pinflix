<template>
  <v-app app id="app">
    <router-view :key="$route.path"></router-view>
  </v-app>
</template>


<script>
export default {
  // beforeDestroy() {
  //   localStorage.setItem("light-mode", this.$vuetify.dark.theme);
  // }
};
</script>

<style>
#vapp div:nth-child(1) {
  justify-content: center !important;
}
</style>