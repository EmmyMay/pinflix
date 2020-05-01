<template>
  <v-container>
    <v-row class="btmspace">
      <v-col
        :currentPage="currentPage"
        :visibletiks="visibletiks"
        cols="12"
        lg="4"
        md="6"
        sm="6"
        v-for="data in visibletiks"
        :key="data.vidID"
      >
        <v-card hover width="20rem" tile>
          <blockquote
            class="tiktok-embed tikcont"
            :cite="data.cite"
            :data-video-id="data.vidID"
            style="max-width: 605px;min-width: 325px;"
          >
            <section></section>
          </blockquote>
        </v-card>
      </v-col>
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
      pageSize: 3,
      currentPage: 0,
      visibletiks: []
    };
  },

  methods: {
    ...mapActions(["getTiks"]),
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.updatevisibletiks();
    },
    updatevisibletiks() {
      this.visibletiks = this.tikPins.slice(
        this.currentPage * this.pageSize,
        this.currentPage * this.pageSize + this.pageSize
      );
      console.log(this.visibletiks);

      if (this.visibletiks.length == 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage - 1);
      }
    }
  },

  computed: {
    ...mapGetters(["tikPins"])
  },
  created() {
    this.getTiks();
  },

  beforeMount() {
    this.updatevisibletiks();
  },

  mounted() {
    let tiktokScript = document.createElement("script");
    tiktokScript.setAttribute("src", "https://www.tiktok.com/embed.js");
    tiktokScript.setAttribute("type", "text/javascript");
    tiktokScript.setAttribute("charset", "utf-8");
    tiktokScript.async = true;
    document.head.appendChild(tiktokScript);
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
.tiktok-embed {
  width: 20rem;
  height: 34rem;
}
.btmspace {
  margin-bottom: 5rem;
}
</style>
