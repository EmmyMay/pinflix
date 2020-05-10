<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card flat id="logo" height="30rem" width="73rem" class="yellow" tile>
          <div class="cardd">
            <v-card-text>
              <div class="text-center">
                <span id="joke">Pin</span>
                <span id="flix" class="red--text">Flix</span>
              </div>
            </v-card-text>
          </div>
          <v-card-actions>
            <v-btn to="/maintwi" outlined x-large color="black">
              <span id="watch">Watch</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col :class="'shift'" cols="12" v-for="(intro, i) in intros" :key="(i)">
        <v-card :color="intro.color" outlined height="20rem">
          <v-card-title class="text--disabled" primary-title>
            <v-icon color="black">{{intro.icon}}</v-icon>
            <span class="ml-5 display-1">{{intro.title}}</span>
          </v-card-title>
          <v-card-text>
            <span class="introbody subtitle-1">{{intro.body}}</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  metaInfo: {
    title: "Pinflix",

    titleTemplate: "%s | Home "
  },
  data() {
    return {
      intros: [
        {
          title: "Discover",
          icon: "mdi-circle",
          body: `Discover exciting Twitter and Tiktok accounts`,
          color: "red lighten-2"
        },
        {
          title: "Entertaining",
          icon: "mdi-circle",
          body: `Amazing content to keep you entertained`,
          color: "blue accent-4"
        },
        {
          title: "Comfortable",
          icon: "mdi-circle",
          body: `All your favorite comedy skits in one place`,
          color: "green darken-2"
        }
      ]
    };
  },
  mounted() {
    if (localStorage.getItem("light-mode") == "false") {
      this.$vuetify.theme.dark = true;
    } else if (localStorage.getItem("light-mode") == "true") {
      this.$vuetify.theme.dark = false;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Bowlby+One+SC|Russo+One|Spicy+Rice|Titan+One&display=swap");
#logo {
  display: grid;
  place-items: center;
}
#joke {
  font-size: 4rem;
  font-weight: bolder;
  font-family: "Spicy Rice", cursive;
}
.shift {
  margin-top: 9rem;
}
.shiftmd {
  margin-top: 9rem;
}
#flix {
  font-size: 4rem;
  font-weight: bolder;
  font-family: "Spicy Rice", cursive;
}

#watch {
  color: black;
}
.introbody {
  position: relative;
  left: 10%;
}
</style>