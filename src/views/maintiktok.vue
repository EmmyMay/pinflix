<template>
  <v-container>
    <v-row class="btmspace">
      <v-col
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
      <v-pagination
        :length="theLength"
        v-model="page"
        value
        circle
        color="black"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
        @input="updatevisibletiks"
      ></v-pagination>
    </v-row>

    <bnav></bnav>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import bnav from "@/components/btmnav";
export default {
  name: "tiktokview",
  components: {
    bnav
  },
  data() {
    return {
      pageSize: 6,

      visibletiks: [],
      page: 1
    };
  },

  methods: {
    ...mapActions(["getTiks"]),

    // putting some of the tikPins into an empty array
    updatevisibletiks() {
      if (this.page == 1) {
        this.visibletiks = this.tikPins.slice(
          this.page * 0 * this.pageSize,
          this.page * 0 * this.pageSize + this.pageSize
        );
      }

      if (this.page > 1) {
        var tp = this.page - 1;
        console.log(this.page);
        this.visibletiks = this.tikPins.slice(
          tp * this.pageSize,
          tp * this.pageSize + this.pageSize
        );
      }

      console.log(this.visibletiks);
    },
    refireScript() {
      let tiktokScript = document.createElement("script");
      tiktokScript.setAttribute("src", "https://www.tiktok.com/embed.js");
      tiktokScript.setAttribute("type", "text/javascript");
      tiktokScript.setAttribute("charset", "utf-8");
      tiktokScript.async = true;
      document.head.appendChild(tiktokScript);
    }
  },

  computed: {
    ...mapGetters(["tikPins"]),
    theLength() {
      return Math.ceil(this.tikPins.length / this.pageSize);
    }
  },
  created() {
    this.getTiks().then(() => {
      this.updatevisibletiks();
    });
  },

  mounted() {
    let tiktokScript = document.createElement("script");
    tiktokScript.setAttribute("src", "https://www.tiktok.com/embed.js");
    tiktokScript.setAttribute("type", "text/javascript");
    tiktokScript.setAttribute("charset", "utf-8");
    tiktokScript.async = true;
    document.head.appendChild(tiktokScript);
    this.updatevisibletiks();
  },
  beforeUpdate() {
    this.refireScript();
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
