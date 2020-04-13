<template>
  <div id="container">
    <h1>dnekjn</h1>
    <!-- <blockquote class="twitter-tweet">
      <p lang="und" dir="ltr">
        <a href="https://t.co/5Od5bqfQma">pic.twitter.com/5Od5bqfQma</a>
      </p>&mdash; Honey👅 (@honeyJuiceee)
      <a
        href="https://twitter.com/honeyJuiceee/status/1248174721432240128?ref_src=twsrc%5Etfw"
      >April 9, 2020</a>
    </blockquote>-->
    <blockquote class="twitter-tweet">
      <p lang="en" dir="ltr">
        {{docP}}
        <a
          href="https://twitter.com/hashtag/bustyversion?src=hash&amp;ref_src=twsrc%5Etfw"
        >#bustyversion</a> 😜
        <a href="https://t.co/4u89hVLnBS">pic.twitter.com/4u89hVLnBS</a>
      </p>&mdash; Rhonda - onlyonerhonda (@onlyonerhonda)
      <a
        href="https://twitter.com/onlyonerhonda/status/1248798053227728898?ref_src=twsrc%5Etfw"
      >April 11, 2020</a>
    </blockquote>

    <v-btn @click="parsequote" color="success">text</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: `      <blockquote class="twitter-tweet"><p lang="en" dir="ltr">
      🍈🍈 Did the Don’t Rush challenge solo. <a href="https://twitter.com/hashtag/bustyversion?src=hash&amp;ref_src=twsrc%5Etfw">
      #bustyversion</a> 😜 <a href="https://t.co/4u89hVLnBS">pic.twitter.com/4u89hVLnBS</a></p>&mdash; Rhonda - onlyonerhonda (@onlyonerhonda) 
      <a href="https://twitter.com/onlyonerhonda/status/1248798053227728898?ref_src=twsrc%5Etfw">April 11, 2020</a>
      </blockquote>
      `,
      quote2: `
      <blockquote class="twitter-tweet">
      <p lang="en" dir="ltr">This was very hard (for me especially because I stupid) but the girls cute <a href="https://twitter.com/hashtag/dontrushchallenge?src=hash&amp;ref_src=twsrc%5Etfw">#dontrushchallenge</a> <a href="https://twitter.com/LyciaKhan?ref_src=twsrc%5Etfw">@LyciaKhan</a> <a href="https://twitter.com/isha_fernandez?ref_src=twsrc%5Etfw">@isha_fernandez</a> <a href="https://twitter.com/CheyenneGosein?ref_src=twsrc%5Etfw">@CheyenneGosein</a> <a href="https://twitter.com/alyssa_anne29?ref_src=twsrc%5Etfw">@alyssa_anne29</a> <a href="https://twitter.com/tiff_charless?ref_src=twsrc%5Etfw">@tiff_charless</a> <a href="https://t.co/Gd8ZbctW7U">pic.twitter.com/Gd8ZbctW7U</a></p>&mdash; Wholesome Cel 💫💫 (@d0uglaqueen) <a href="https://twitter.com/d0uglaqueen/status/1249091437704220674?ref_src=twsrc%5Etfw">April 11, 2020</a></blockquote>
   
      `,
      docP: ""
    };
  },

  methods: {
    parsequote: function(htmltag, htag) {
      var parser = new DOMParser();
      htmltag = this.quote;
      htag = this.quote2;

      var doc = parser.parseFromString(htmltag, "text/html");
      var docP = doc.all[4].innerText;
      this.docP = docP;
      console.log(docP);
      var doc2 = parser.parseFromString(htag, "text/html");
      console.log(doc.all);
      console.log(doc);
      console.log(doc2.all);
      // console.log(doc2.all[4].lastElementChild);
      console.log(doc2);
      console.log(doc.all[5].getAttribute("href"));
      console.log(doc.all[3].lastElementChild.getAttribute("href"));
      console.log(doc.all[3].lastElementChild.innerText);
      console.log(doc.all[4].nextSibling);
    }
  }
};
</script>

<style scoped >
</style>