<template>
  <div id="container">
    <div class="hidden-sm-and-down" id="mcont">
      <div v-for="data in tweetPins" :key="data.firsthref" id="blckqt">
        <blockquote class="twitter-tweet">
          <p lang="en" dir="ltr">
            {{data.caption}}
            <a :href="data.firsthref"></a>
            {{data.handle}}
          </p>
          <a :href="data.secondhref">{{data.date}}</a>
        </blockquote>
      </div>
    </div>

    <!-- <div class="d-md-flex-d-lg-none" id="mcontmedium">
      <div v-for="data in tweetPins" :key="data.firsthref" id="blckqtmedium">
        <blockquote class="twitter-tweet">
          <p lang="en" dir="ltr">
            {{data.caption}}
            <a :href="data.firsthref"></a>
            {{data.handle}}
          </p>
          <a :href="data.secondhref">{{data.date}}</a>
        </blockquote>
      </div>
    </div>-->

    <div class="hidden-md-and-up" id="mcontsmall">
      <div v-for="data in tweetPins" :key="data.firsthref" id="blckqtsmall">
        <blockquote class="twitter-tweet">
          <p lang="en" dir="ltr">
            {{data.caption}}
            <a :href="data.firsthref"></a>
            {{data.handle}}
          </p>
          <a :href="data.secondhref">{{data.date}}</a>
        </blockquote>
      </div>
    </div>
    <bnav></bnav>
  </div>
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
</style>
