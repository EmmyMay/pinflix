<template>
  <div id="container">
    <div id="info">
      <p>1. Click or Tap the right arrow of that video you like on TikTok</p>
      <p>2. Click the "Embed" option</p>
      <p>3. Copy the code given to you and paste it in the box below then hit the upload button</p>
    </div>
    <v-spacer></v-spacer>
    <div id="tiktok-box">
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
      <v-progress-circular v-if="sending" class="progress" indeterminate color="primary"></v-progress-circular>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      blockquote: "",
      tiktokObject: {
        cite: "",
        vidID: ""
      },
      message: "",
      sending: false
    };
  },

  computed: {
    ...mapGetters(["getmsg"])
  },

  methods: {
    ...mapActions(["createTik"]),
    parseCode: function(htmltag) {
      this.sending = true;
      var parser = new DOMParser();
      htmltag = this.blockquote;
      var doc = parser.parseFromString(htmltag, "text/html");
      this.tiktokObject.cite = doc.all[3].getAttribute("cite");
      this.tiktokObject.vidID = doc.all[3].dataset.videoId;
      this.createTik(this.tiktokObject)
        .then(() => {
          this.sending = false;
        })
        .catch(err => {
          alert(err);
        });
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

#tiktok-box {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 11rem;
  top: 5rem;
}
#info p {
  font-size: 1.5rem;
}

.progress {
  position: relative;
  top: 10%;
  left: 48%;
}

@media only screen and (max-width: 500px) {
  #info p {
    font-size: 1rem;
  }
}

@media only screen and (min-width: 700px) {
  #tiktok-box {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 5rem;
    width: 25rem;
  }
}
</style>