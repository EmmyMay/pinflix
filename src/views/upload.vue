<template>
  <div id="cont">
    <v-tabs v-model="tab" background-color="black" dark slider-color="yellow" :centered="centered">
      <v-tab keep-alive @click="component = 'twitter'">Twitter</v-tab>
      <v-tab @click="component = 'tiktok'">TikTok</v-tab>
      <v-tab-item>
        <component :is="component"></component>
      </v-tab-item>
      <v-tab-item>
        <component :is="component"></component>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import twitter from "@/components/twitter.vue";
import tiktok from "@/components/tiktok.vue";
export default {
  components: {
    twitter,
    tiktok
  },
  data() {
    return {
      component: "twitter",
      tab: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      icons: false,
      centered: true,
      grow: false,
      vertical: false,
      prevIcon: false,
      nextIcon: false,
      right: false,
      tabs: 3
    };
  }
};
</script>

<style scoped>
#cont {
  display: flex;
  align-items: unset;
}

#tabb {
}
#ad {
}
</style>