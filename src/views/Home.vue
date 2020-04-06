<template>
  <v-container fluid>
    <div id="cont">
      <v-card id="logo" height="7rem" width="20rem" class="yellow" tile>
        <div class="cardd">
          <v-card-text>
            <div class="text-center">
              <span id="joke">Joke</span>
              <span id="flix" class="red--text">Flix</span>
            </div>
          </v-card-text>
        </div>
      </v-card>

      <div class="bbx">
        <!-- Button Box  -->

        <v-btn to="/home" id="btnbrdr" large outlined color="black">
          <span class="btntxt">Laugh</span>
        </v-btn>
      </div>

      <div id="coll">
        <v-card
          class="ma-3 text-center"
          id="carrd"
          v-for="content in contents"
          :key="content.text"
          height="15rem"
        >
          <div>
            <v-card-text>{{content.text}}</v-card-text>
          </div>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      contents: [
        {
          text: "Find funny videos from your favorite Skit-Makers"
        },
        {
          text: "Find funny videos from your favorite Skit-Makers"
        },
        {
          text: "Find funny videos from your favorite Skit-Makers"
        }
      ]
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Bowlby+One+SC|Russo+One|Spicy+Rice|Titan+One&display=swap");

#logo {
  display: grid;
  place-items: center;
}
#coll {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  top: 28rem;
}
#carrd {
  padding: 2rem;
}

.vroww {
  flex-direction: row;
  align-items: center;
  justify-items: center;
}

#cont {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 30rem;
}
.bbx {
  position: relative;
  top: 5%;
}
#joke {
  font-size: 4rem;
  font-weight: bolder;
  font-family: "Spicy Rice", cursive;
}

#flix {
  font-size: 4rem;
  font-weight: bolder;
  font-family: "Spicy Rice", cursive;
}

@media only screen and (min-device-width: 640px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
  #coll {
    position: relative;
    top: 22rem;
  }
}
</style>