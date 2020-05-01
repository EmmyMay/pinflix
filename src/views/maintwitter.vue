<template>
  <v-container>
    <v-row class="btmspace">
      <v-col cols="12" lg="4" md="6" sm="6" v-for="data in visibletweets" :key="data.firsthref">
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
      <v-pagination
        :length="theLength"
        v-model="page"
        circle
        color="blue"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
        @input="updatevisibletweets"
      ></v-pagination>
    </v-row>

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
      pageSize: 6,
      visibletweets: [],
      page: 1
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
        console.log(this.page);
        this.visibletweets = this.tweetPins.slice(
          tp * this.pageSize,
          tp * this.pageSize + this.pageSize
        );
      }

      console.log(this.visibletweets);
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
    this.getTweets().then(() => {
      this.updatevisibletweets();
    });
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
