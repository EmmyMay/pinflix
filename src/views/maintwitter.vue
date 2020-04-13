<template>
  <div id="container">
    <div class="hidden-sm-and-down" id="mcont">
      <div v-for="data in Dataset" :key="data.firsthref" id="blckqt">
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
      <div v-for="data in Dataset" :key="data.firsthref" id="blckqtmedium">
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
      <div v-for="data in Dataset" :key="data.firsthref" id="blckqtsmall">
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
import bnav from "@/components/btmnav";
export default {
  components: {
    bnav
  },
  data() {
    return {
      bottomNav: "recent",
      Dataset: [
        {
          caption: " A short Lockdown story 😂😂😭😭😂😂",
          handle: " MÓŃKELE ❤️ (@_Taaooma)",
          secondhref:
            "https://twitter.com/_Taaooma/status/1247087432421519362?ref_src=twsrc%5Etfw",
          date: "April 6, 2020",
          firsthref: "https://t.co/uS88mxNGpo"
        },
        {
          caption: " Full Service ⛽️🍑 ",
          handle: " The Curvy Thick (@TheCurvyThick)",
          secondhref:
            "https://twitter.com/TheCurvyThick/status/1247998077593628672?ref_src=twsrc%5Etfw",
          date: "April 8, 2020",
          firsthref: "https://t.co/P5XwQdudlr"
        },
        {
          caption: " Full Service ⛽️🍑 ",
          handle: " The Curvy Thick (@TheCurvyThick)",
          secondhref:
            "https://twitter.com/TheCurvyThick/status/1247998077593628672?ref_src=twsrc%5Etfw",
          date: "April 8, 2020",
          firsthref: "https://t.co/P5XwQdudlr"
        },
        {
          caption: " A short Lockdown story 😂😂😭😭😂😂",
          handle: " MÓŃKELE ❤️ (@_Taaooma)",
          secondhref:
            "https://twitter.com/_Taaooma/status/1247087432421519362?ref_src=twsrc%5Etfw",
          date: "April 6, 2020",
          firsthref: "https://t.co/uS88mxNGpo"
        },
        {
          caption: " Full Service ⛽️🍑 ",
          handle: " The Curvy Thick (@TheCurvyThick)",
          secondhref:
            "https://twitter.com/TheCurvyThick/status/1247998077593628672?ref_src=twsrc%5Etfw",
          date: "April 8, 2020",
          firsthref: "https://t.co/P5XwQdudlr"
        },
        {
          caption: " Full Service ⛽️🍑 ",
          handle: " The Curvy Thick (@TheCurvyThick)",
          secondhref:
            "https://twitter.com/TheCurvyThick/status/1247998077593628672?ref_src=twsrc%5Etfw",
          date: "April 8, 2020",
          firsthref: "https://t.co/P5XwQdudlr"
        },
        {
          caption: " Full Service ⛽️🍑 ",
          handle: " The Curvy Thick (@TheCurvyThick)",
          secondhref:
            "https://twitter.com/TheCurvyThick/status/1247998077593628672?ref_src=twsrc%5Etfw",
          date: "April 8, 2020",
          firsthref: "https://t.co/P5XwQdudlr"
        },
        {
          caption: " Full Service ⛽️🍑 ",
          handle: " The Curvy Thick (@TheCurvyThick)",
          secondhref:
            "https://twitter.com/TheCurvyThick/status/1247998077593628672?ref_src=twsrc%5Etfw",
          date: "April 8, 2020",
          firsthref: "https://t.co/P5XwQdudlr"
        }
      ]
    };
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
