<template>
  <v-container>
    <div v-if="!arrived" class="row">
      <v-skeleton-loader
        v-for="(i) in 6"
        :key="i"
        class="mx-auto skeletonwidth"
        max-width="500"
        type="card"
      ></v-skeleton-loader>
    </div>
    <!-- The layout after data has arrived and skeleeton loader is gone begins here -->
    <transition>
      <!-- wrapping it all up in a transition stops the bottom nav from animating -->

      <v-row class="btmspace">
        <transition-group
          v-if="$vuetify.breakpoint.mdAndUp"
          name="slide-fade"
          tag="div"
          class="row"
          appear
        >
          <v-col cols="12" lg="4" md="6" sm="6" v-for="data in visibletweets" :key="data.firsthref">
            <v-card tile>
              <v-card-text>
                <blockquote class="twitter-tweet">
                  <p lang="en" dir="ltr">
                    {{data.caption}}
                    <a :href="data.firsthref"></a>
                    {{data.handle}}
                  </p>
                  <a :href="data.secondhref">{{data.date}}</a>
                </blockquote>
              </v-card-text>
            </v-card>
          </v-col>
        </transition-group>
        <transition-group
          v-if="$vuetify.breakpoint.smAndDown"
          name="slide-fade"
          tag="div"
          class="col"
          appear
        >
          <v-skeleton-loader v-if="!arrived" class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
          <v-col cols="12" lg="4" md="6" sm="6" v-for="data in visibletweets" :key="data.firsthref">
            <v-card flat>
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
        </transition-group>
        <v-pagination
          :length="theLength"
          v-model="page"
          circle
          total-visible="5"
          color="blue"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
          @input="updatevisibletweets"
        ></v-pagination>
      </v-row>
    </transition>
    <bnav></bnav>
  </v-container>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    bnav: () => import(/* webpackPrefetch: true */ "../components/btmnav")
  },
  metaInfo: {
    title: "Twitter Pins",

    titleTemplate: "%s | Twitter Tweets Embed Flix PinFlix "
  },
  data() {
    return {
      pageSize: 6,
      visibletweets: [],
      page: 1,
      arrived: false
    };
  },
  methods: {
    ...mapActions(["getTweets"]),
    updatevisibletweets() {
      if (this.page == 1) {
        this.visibletweets = this.tweetPins.slice(
          this.page * 0 * this.pageSize,
          this.page * 0 * this.pageSize + this.pageSize
        );
      }

      if (this.page > 1) {
        var tp = this.page - 1;

        this.visibletweets = this.tweetPins.slice(
          tp * this.pageSize,
          tp * this.pageSize + this.pageSize
        );
      }
    },
    refireScript() {
      let twitterScript = document.createElement("script");
      twitterScript.setAttribute(
        "src",
        "https://platform.twitter.com/widgets.js"
      );
      twitterScript.setAttribute("type", "text/javascript");
      twitterScript.setAttribute("charset", "utf-8");
      twitterScript.async = true;
      document.head.appendChild(twitterScript);
    }
  },
  computed: {
    ...mapGetters(["tweetPins"]),
    theLength() {
      return Math.ceil(this.tweetPins.length / this.pageSize);
    }
  },
  created() {
    setTimeout(() => {
      this.updatevisibletweets();
      this.arrived = true;
    }, 3000);

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
  },
  beforeUpdate() {
    this.refireScript();
  }
};
</script>

<style scoped >
.skeletonwidth {
  width: 20rem;
  margin-top: 1rem;
}
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
/*  transitions */

.slide-fade-enter {
  transform: translateY(100px);
}
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-to {
  transform: translateY(-100px);
}
</style>
