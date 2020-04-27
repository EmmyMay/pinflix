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

      <v-btn v-if="!this.darkState" @click="goDark" v-model="light">
        <span>Dark Mode</span>
        <v-icon color="black">mdi-weather-night</v-icon>
      </v-btn>
      <v-btn v-if="this.darkState" @click="goLight" v-model="light">
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
    return {};
  },

  computed: {
    ...mapGetters(["darkState"]),

    light: {
      get() {
        return this.darkState;
      },
      set(value) {
        // console.log("I am VALUE    " + value);
        this.setAppMode(value);
      }
    }
  },

  methods: {
    ...mapActions(["setAppMode"]),
    goDark() {
      localStorage.setItem("light-mode", this.light);

      this.$vuetify.theme.dark = true;
    },
    goLight() {
      localStorage.setItem("light-mode", this.light);
      this.$vuetify.theme.dark = false;
    }
  }
};
</script>

