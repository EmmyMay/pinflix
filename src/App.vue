<template>
  <v-app app id="app">
    <transition name="slide-fade" mode="in-out">
      <router-view :key="$route.path"></router-view>
    </transition>
  </v-app>
</template>


<script>
export default {
  name: "App",
  metaInfo: {
    title: "Pin Flix",

    titleTemplate: "%s | Twitter and Tiktok embed viewing site "
  }
};
</script>

<style>
#vapp div:nth-child(1) {
  justify-content: center !important;
}

/*  transitions */

.slide-fade-enter {
  opacity: 0;
  transform: translateY(20px);
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>