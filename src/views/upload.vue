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
    <v-btn @click="logOut" class="logout" color="success">Logout</v-btn>
  </div>
</template>

<script>
import twitter from "@/components/twitter.vue";
import tiktok from "@/components/tiktok.vue";
import { mapActions } from "vuex";
export default {
  components: {
    twitter,
    tiktok
  },
  data() {
    return {
      component: "twitter",
      tab: null,
      centered: true
    };
  },
  methods: {
    ...mapActions("auth", ["logoutUser"]),
    logOut() {
      this.logoutUser().then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>

<style scoped>
#cont {
  display: flex;
  align-items: unset;
  flex-direction: column;
}

.logout {
  align-self: flex-start;
  position: relative;
  top: 9%;
}
</style>