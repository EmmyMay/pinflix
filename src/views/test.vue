<template>
  <div id="container">
    <h1>dnekjn</h1>
    <!-- <blockquote class="twitter-tweet">
      <p lang="und" dir="ltr">
        Sexy
        <a href="https://t.co/5Od5bqfQma">pic.twitter.com/5Od5bqfQma</a>
      </p>&mdash; Honey👅 (@honeyJuiceee)
      <a
        href="https://twitter.com/honeyJuiceee/status/1248174721432240128?ref_src=twsrc%5Etfw"
      >April 9, 2020</a>
    </blockquote>-->
    <blockquote class="twitter-tweet">
      <p lang="en" dir="ltr">
        {{data.docP}}
        <a
          href="https://twitter.com/hashtag/bustyversion?src=hash&amp;ref_src=twsrc%5Etfw"
        >#bustyversion</a> 😜
        <a href="https://t.co/4u89hVLnBS">pic.twitter.com/4u89hVLnBS</a>
      </p>&mdash; Rhonda - onlyonerhonda (@onlyonerhonda)
      <a
        href="https://twitter.com/onlyonerhonda/status/1248798053227728898?ref_src=twsrc%5Etfw"
      >April 11, 2020</a>
    </blockquote>
    <blockquote
      class="tiktok-embed"
      cite="https://www.tiktok.com/@queenritaibeh/video/6788068427639590149"
      data-video-id="6788068427639590149"
      style="max-width: 605px;min-width: 325px;"
    >
      <section>
        <a
          target="_blank"
          title="@queenritaibeh"
          href="https://www.tiktok.com/@queenritaibeh"
        >@queenritaibeh</a>
        <p>Sexy Queen</p>
        <a
          target="_blank"
          title="♬ original sound - queenritaibeh"
          href="https://www.tiktok.com/music/original-sound-6785562068192856838"
        >♬ original sound - queenritaibeh</a>
      </section>
    </blockquote>
    <blockquote
      class="tiktok-embed tikcont"
      :cite="data.cite"
      :data-video-id="data.vidID"
      style="max-width: 605px;min-width: 325px;"
    >
      <section></section>
    </blockquote>

    <v-btn @click="parsequote" color="success">text</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: `       <blockquote
      class="tiktok-embed"
      cite="https://www.tiktok.com/@queenritaibeh/video/6788068427639590149"
      data-video-id="6788068427639590149"
      style="max-width: 605px;min-width: 325px;"
    >
      <section>
        <a
          target="_blank"
          title="@queenritaibeh"
          href="https://www.tiktok.com/@queenritaibeh"
        >@queenritaibeh</a>
        <p></p>
        <a
          target="_blank"
          title="♬ original sound - queenritaibeh"
          href="https://www.tiktok.com/music/original-sound-6785562068192856838"
        >♬ original sound - queenritaibeh</a>
      </section>
    </blockquote>
      `,
      quote2: `  <blockquote
      class="tiktok-embed"
      cite="https://www.tiktok.com/@andreaandlewis/video/6814148750047448326"
      data-video-id="6814148750047448326"
      style="max-width: 605px;min-width: 325px;"
    >
      <section>
        <a
          target="_blank"
          title="@andreaandlewis"
          href="https://www.tiktok.com/@andreaandlewis"
        >@andreaandlewis</a>
        <p>
          lord help me 😩
          <a
            title="eggcellentweek"
            target="_blank"
            href="https://www.tiktok.com/tag/eggcellentweek"
          >##eggcellentweek</a>
          <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp">##fyp</a>
          <a
            title="targetpractice"
            target="_blank"
            href="https://www.tiktok.com/tag/targetpractice"
          >##targetpractice</a>
          <a
            title="dontrushchallenge"
            target="_blank"
            href="https://www.tiktok.com/tag/dontrushchallenge"
          >##dontrushchallenge</a>
          <a title="viral" target="_blank" href="https://www.tiktok.com/tag/viral">##viral</a>
        </p>
        <a
          target="_blank"
          title="♬ original sound - thehodgmeister"
          href="https://www.tiktok.com/music/original-sound-6800024744432290566"
        >♬ original sound - thehodgmeister</a>
      </section>
    </blockquote>

      `,
      data: {
        docP: "",
        cite: "",
        vidID: "",
        handle: "",
        osound: "",
        flink: "",
        sclink: ""
      }
    };
  },

  methods: {
    parsequote: function(htmltag, htag) {
      var parser = new DOMParser();
      htmltag = this.quote;
      htag = this.quote2;

      var doc = parser.parseFromString(htmltag, "text/html");
      var doc2 = parser.parseFromString(htag, "text/html");
      console.log(doc.all);
      console.log(doc2.all);
      console.log(doc2.all[3].getAttribute("cite"));
      console.log(doc2.all[3].dataset.videoId);
      console.log(doc2.all[4].firstElementChild.innerText);
      console.log(doc2.all[4].lastElementChild.innerText);
      console.log(doc2.all[4].firstElementChild.href);
      console.log(doc2.all[4].lastElementChild.href);
      this.data.cite = doc2.all[3].getAttribute("cite");
      this.data.vidID = doc2.all[3].dataset.videoId;
      this.data.handle = doc2.all[4].firstElementChild.innerText;
      this.data.osound = doc2.all[4].lastElementChild.innerText;
      this.data.flink = doc2.all[4].firstElementChild.href;
      this.data.sclink = doc2.all[4].lastElementChild.href;
      var block = document.getElementsByClassName("tikcont");
      console.log(block[0].innerHTML);
      console.log(this.data.flink);
    }
  },
  created() {
    var parser = new DOMParser();
    // var htmltag = this.quote;
    var htag = this.quote2;

    // var doc = parser.parseFromString(htmltag, "text/html");
    var doc2 = parser.parseFromString(htag, "text/html");

    this.data.cite = doc2.all[3].getAttribute("cite");
    this.data.vidID = doc2.all[3].dataset.videoId;
    this.data.handle = doc2.all[4].firstElementChild.innerText;
    this.data.osound = doc2.all[4].lastElementChild.innerText;
    this.data.flink = doc2.all[4].firstElementChild.href;
    this.data.sclink = doc2.all[4].lastElementChild.href;
  }
};
</script>

<style scoped >
</style>