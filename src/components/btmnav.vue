<template>
  <div id="bnav">
    <v-bottom-navigation shift fixed>
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

      <v-btn v-if="!this.$vuetify.theme.dark" @click="goDark">
        <span>Dark Mode</span>
        <v-icon color="black">mdi-weather-night</v-icon>
      </v-btn>
      <v-btn v-if="this.$vuetify.theme.dark" @click="goLight">
        <span>Make it bright</span>
        <v-icon color="yellow">mdi-weather-sunny</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultState: null
    };
  },

  computed: {},

  methods: {
    goDark() {
      localStorage.setItem("light-mode", this.$vuetify.theme.dark);

      this.$vuetify.theme.dark = true;
    },
    goLight() {
      localStorage.setItem("light-mode", this.$vuetify.theme.dark);
      this.$vuetify.theme.dark = false;
    }
  },
  mounted() {}
};
</script>

