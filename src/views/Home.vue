<template>
  <v-container id="cont">
    <v-row v-if="$vuetify.breakpoint.mdAndUp">
      <v-col>
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
      </v-col>
    </v-row>

    <div v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn to="/maintwi" id="btnbrdr" large outlined color="black">
        <span class="btntxt">Laugh</span>
      </v-btn>
    </div>

    <v-row v-if="$vuetify.breakpoint.mdAndUp" id="infobox">
      <v-col cols="12" v-for="intro in intros" :key="`${intro.title}`">
        <v-card>
          <v-card-title :prepend-icon="intro.icon">{{intro.title}}</v-card-title>
          <v-card-text>{{intro.body}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- ********************************************************* -->

    <v-row id="cont2" v-if="$vuetify.breakpoint.smAndDown">
      <v-col>
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
      </v-col>
    </v-row>

    <div class="bbx2" v-if="$vuetify.breakpoint.smAndDown">
      <v-btn to="/maintwi" id="btnbrdr" large outlined color="black">
        <span class="btntxt">Laugh</span>
      </v-btn>
    </div>

    <v-row id="infobox2" v-if="$vuetify.breakpoint.smAndDown">
      <v-col cols="12" v-for="intro in intros" :key="`${intro.title}`">
        <v-card>
          <v-card-title :prepend-icon="intro.icon">{{intro.title}}</v-card-title>
          <v-card-text>{{intro.body}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      intros: [
        {
          title: "Lorem",
          icon: "mdi-circle",
          body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quis sapiente.
   Aspernatur fugit repellendus repellat nemo vel perferendis, quaerat enim, 
  necessitatibus id consectetur accusamus soluta dolores dicta ullam dolorem cum.`
        },
        {
          title: "Lorem",
          icon: "mdi-circle",
          body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quis sapiente.
   Aspernatur fugit repellendus repellat nemo vel perferendis, quaerat enim, 
  necessitatibus id consectetur accusamus soluta dolores dicta ullam dolorem cum.`
        },
        {
          title: "Lorem",
          icon: "mdi-circle",
          body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quis sapiente.
   Aspernatur fugit repellendus repellat nemo vel perferendis, quaerat enim, 
  necessitatibus id consectetur accusamus soluta dolores dicta ullam dolorem cum.`
        }
      ]
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Bowlby+One+SC|Russo+One|Spicy+Rice|Titan+One&display=swap");

#infobox {
  position: relative;
  top: 10%;
}
#infobox2 {
  position: relative;
  top: 45%;
}
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
  justify-content: flex-end;
  align-items: center;
  position: relative;
  top: 10%;
  height: 100vh;
}
#cont2 {
  position: relative;
  top: 30%;
  height: 100vh;
}
.bbx {
  position: relative;
  top: 5%;
}

.bbx2 {
  position: relative;
  top: 35%;
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