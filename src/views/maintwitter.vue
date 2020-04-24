<template>
  <v-container>
    <v-row class="btmspace">
      <v-col cols="12" lg="4" v-for="data in tweetPins" :key="data.firsthref">
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

    <!-- <v-row v-if="$vuetify.breakpoint.mdAndDown" id="mcontsmall">
      <v-col v-for="data in tweetPins" :key="data.firsthref" id="blckqtsmall">
        <blockquote class="twitter-tweet">
          <p lang="en" dir="ltr">
            {{data.caption}}
            <a :href="data.firsthref"></a>
            {{data.handle}}
          </p>
          <a :href="data.secondhref">{{data.date}}</a>
        </blockquote>
      </v-col>
    </v-row>-->

    <!-- <v-row class="hidden-md-and-up">
      <v-col v-for="data in tweetPins" :key="data.firsthref">
        <blockquote class="twitter-tweet">
          <p lang="en" dir="ltr">
            {{data.caption}}
            <a :href="data.firsthref"></a>
            {{data.handle}}
          </p>
          <a :href="data.secondhref">{{data.date}}</a>
        </blockquote>
      </v-col>
    </v-row>-->
    <bnav></bnav>
  </v-container>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import bnav from "@/components/btmnav";

export default {
  components: {
    bnav
  },
  data() {
    return {
      bottomNav: "recent"
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
    if (localStorage.getItem("reloaded")) {
      // The page was just reloaded. Clear the value from local storage
      // so that it will reload the next time this page is visited.
      localStorage.removeItem("reloaded");
    } else {
      // Set a flag so that we know not to reload the page twice.

      localStorage.setItem("reloaded", "1");
      location.reload();
    }
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
