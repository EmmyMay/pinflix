<template>
  <div id="bnav">
    <v-bottom-navigation fixed>
      <v-btn to="/" value="recent">
        <span>Home</span>
        <v-icon color="pink">mdi-home</v-icon>
      </v-btn>
      <v-btn to="/maintwi" value="twitter">
        <span>Twitter</span>
        <v-icon color="blue">mdi-twitter</v-icon>
      </v-btn>

      <v-btn to="/maintik" value="tiktok">
        <span>TikTok</span>
        <v-icon color="black">mdi-music-note-sixteenth</v-icon>
      </v-btn>

      <v-switch @change="goDark" v-model="switch1" inset label>
        <v-icon v-if="!this.switch1">{{icon.darkness}}</v-icon>
        <v-icon v-if="this.switch1">{{icon.light}}</v-icon>
      </v-switch>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  props: {
    switch1: {
      type: Boolean
    }
  },
  data() {
    return {
      icon: {
        darkness: "mdi-weather-night",
        light: "mdi-weather-sunny"
      }
    };
  },

  computed: {},
  methods: {
    goDark() {
      if (this.switch1) {
        console.log(this.switch1);
        this.$vuetify.theme.dark = true;
        localStorage.setItem("mode", "dark");
      } else {
        console.log(this.switch1);
        this.$vuetify.theme.dark = false;
        localStorage.setItem("mode", "light");
      }
    }
  }
};
</script>

<style scoped>
.v-btn:not(.v-btn--round).v-size--default {
  height: 60px;
}
</style>
