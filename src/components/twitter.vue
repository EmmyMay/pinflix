<template>
  <div id="container">
    <div id="info">
      <p>1. Click or Tap the right arrow of that video you like on Twitter</p>
      <p>2. Click the "Embed" option</p>
      <p>3. Copy the code given to you and paste it in the box below then hit the upload button</p>
    </div>
    <v-spacer></v-spacer>
    <div id="twitter-box">
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="blockquote"
            width="40rem"
            label="Paste Code Here"
            persistent-hint
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-btn @click="parseCode" color="blue accent-4">
        <span class="text--white">Upload</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "twitter",
  data() {
    return {
      blockquote: "",
      twitterObject: {
        caption: "",
        handle: "",
        firsthref: "",
        date: "",
        secondhref: ""
      }
    };
  },
  methods: {
    ...mapActions(["createTweet"]),
    parseCode: function(htmltag) {
      var parser = new DOMParser();
      htmltag = this.blockquote;
      var doc = parser.parseFromString(htmltag, "text/html");
      var thePTag = doc.all[4];
      var video = "Video";
      this.twitterObject.caption =
        thePTag.childNodes[0].nodeValue != null
          ? thePTag.childNodes[0].nodeValue
          : video;

      this.twitterObject.firsthref = thePTag.lastElementChild.getAttribute(
        "href"
      );
      this.twitterObject.secondhref = doc.all[3].lastElementChild.getAttribute(
        "href"
      );
      this.twitterObject.date = doc.all[3].lastElementChild.innerText;
      this.twitterObject.handle = doc.all[4].nextSibling.wholeText;
      console.log(this.twitterObject);
      this.createTweet(this.twitterObject);
      // axios.post("http://localhost:8080/pin/twitter", this.twitterObject);
    }
  }
};
</script>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  padding-left: 4rem;
  padding-right: 4rem;
}

#twitter-box {
  display: flex;
  flex-direction: column;
  position: relative;
  top: 5rem;
}
#info p {
  font-size: 1.5rem;
}

@media only screen and (max-width: 500px) {
  #info p {
    font-size: 1rem;
  }
}

@media only screen and (min-width: 700px) {
  #twitter-box {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 5rem;
    width: 25rem;
  }
}
</style>