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
          <v-text-field width="40rem" label="Paste Code Here" persistent-hint outlined></v-text-field>
        </v-col>
      </v-row>

      <v-btn color="blue accent-4">
        <span class="text--white">Upload</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {};
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
  #tiktok-box {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 5rem;
    width: 25rem;
  }
}
</style>