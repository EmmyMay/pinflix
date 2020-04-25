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
      <v-btn v-if="!this.darkState" @click="goDark" v-model="dark" value="tiktok">
        <span>Dark Mode</span>
        <v-icon color="black">mdi-weather-night</v-icon>
      </v-btn>
      <v-btn v-if="this.darkState" @click="goLight" value="tiktok">
        <span>Make it bright</span>
        <v-icon color="yellow">mdi-weather-sunny</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      dark: false
    };
  },

  computed: {
    ...mapGetters(["darkState"])
  },
  methods: {
    ...mapActions(["setappmode"]),
    goDark() {
      localStorage.setItem("mode", "dark");
      if (localStorage.getItem("mode") == "dark") {
        this.dark = true;
        this.setappmode(this.dark);
        this.$vuetify.theme.dark = true;
      }
    },
    goLight() {
      localStorage.setItem("mode", "light");
      if (localStorage.getItem("mode") == "light") {
        this.dark = false;
        this.setappmode(this.dark);
        this.$vuetify.theme.dark = false;
      }
    }
  }
};
</script>

