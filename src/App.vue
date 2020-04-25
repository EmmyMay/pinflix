<template>
  <v-app app id="app">
    <router-view :key="$route.path"></router-view>
    <bnav v-show="bnavShow" :switch1="switch1"></bnav>
  </v-app>
</template>


<script>
import bnav from "@/components/btmnav";
export default {
  components: {
    bnav
  },
  data() {
    return {
      switch1: false,
      bnavShow: false
    };
  },
  mounted() {
    if (localStorage.getItem("mode") == "dark") {
      this.switch1 = true;
      this.$vuetify.theme.dark = true;
    } else if (localStorage.getItem("mode") == "light") {
      this.switch1 = false;
      this.$vuetify.theme.dark = false;
    }
    this.bnavShow = false;
  },

  destroyed() {
    this.bnavShow = true;
    console.log(this.bnavShow);
  }
};
</script>

<style>
#vapp div:nth-child(1) {
  justify-content: center !important;
}
</style>