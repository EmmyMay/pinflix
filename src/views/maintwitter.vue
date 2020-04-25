<template>
  <v-container>
    <v-row class="btmspace">
      <v-col cols="12" lg="4" md="6" sm="6" v-for="data in tweetPins" :key="data.firsthref">
        <v-card tile>
          <blockquote class="twitter-tweet">
            <p lang="en" dir="ltr">
              {{data.caption}}
              <a :href="data.firsthref"></a>
              {{data.handle}}
            </p>
            <a :href="data.secondhref">{{data.date}}</a>
          </blockquote>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
// import bnav from "@/components/btmnav";

export default {
  // components: {
  //   bnav
  // },

  data() {
    return {
      bottomNav: "recent",
      dark: false
    };
  },
  methods: {
    ...mapActions(["getTweets"])
  },
  computed: {
    ...mapGetters(["tweetPins"])
  },
  created() {
    this.getTweets();
  },

  mounted() {
    let twitterScript = document.createElement("script");
    twitterScript.setAttribute(
      "src",
      "https://platform.twitter.com/widgets.js"
    );
    twitterScript.setAttribute("type", "text/javascript");
    twitterScript.setAttribute("charset", "utf-8");
    twitterScript.async = true;
    document.head.appendChild(twitterScript);

    // if (localStorage.getItem("reloaded")) {
    //   // The page was just reloaded. Clear the value from local storage
    //   // so that it will reload the next time this page is visited.
    //   localStorage.removeItem("reloaded");
    // } else {
    //   // Set a flag so that we know not to reload the page twice.

    //   localStorage.setItem("reloaded", "1");
    //   location.reload();
    // }
  }
};
</script>

<style scoped >
#container {
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 100px;
  grid-template-areas:
    "body body body"
    "body body body"
    "nav nav nav";
}

#mcont {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  grid-area: body;
  justify-content: space-around;
  max-height: 650px;
}
#mcontsmall {
  display: flex;
  flex-direction: column;
  grid-area: body;
  align-items: center;
  max-height: 300px;
}

#bnav {
  grid-area: nav;
}

#blckqt {
  width: 20rem;
}
#blckqtsmall {
  width: 15rem;
}
.btmspace {
  margin-bottom: 5rem;
}
</style>
