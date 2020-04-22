<template>
  <div id="container">
    <div class="hidden-sm-and-down" id="mcont">
      <div v-for="data in tikPins" :key="data.vidID" id="blckqt">
        <blockquote
          class="tiktok-embed tikcont"
          :cite="data.cite"
          :data-video-id="data.vidID"
          style="max-width: 605px;min-width: 325px;"
        >
          <section></section>
        </blockquote>
      </div>
    </div>

    <div class="hidden-md-and-up" id="mcontsmall">
      <div v-for="data in tikPins" :key="data.vidID" id="blckqtsmall">
        <blockquote
          class="tiktok-embed tikcont"
          :cite="data.cite"
          :data-video-id="data.vidID"
          style="max-width: 605px;min-width: 300px;"
        >
          <section></section>
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
    return {};
  },

  methods: {
    ...mapActions(["getTiks"])
  },

  computed: {
    ...mapGetters(["tikPins"])
  },
  created() {
    this.getTiks();
  }
};
</script>

<style scoped >
#container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  justify-content: space-evenly;
  max-height: 650px;
}
#mcontsmall {
  display: flex;
  flex-direction: column;
  grid-area: body;
  align-items: center;
  max-height: 300px;
  margin-right: 4rem;
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
