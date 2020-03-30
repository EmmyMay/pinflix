<template>
  <v-app align-center>
    <v-container id="container" fluid>
      <v-row justify="space-around" no-gutters>
        <v-col id="col" align="center" sm="4">
          <v-card md="12" height="100px" class="pa-2 yellow" tile>
            <div class="cardd">
              <v-card-title>
                <span id="joke">Joke</span>
                <span id="flix" class="red--text">Flix</span>
              </v-card-title>
            </div>
          </v-card>

          <div class="jcard">
            <v-btn id="btnbrdr" large outlined color="black">
              <span class="btntxt">Log In</span>
            </v-btn>

            <v-btn id="btnbrdr" large outlined color="black">
              <span class="btntxt">Sign up</span>
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <v-row align-content="center">
        <v-col v-for="content in contents" :key="content.text" cols="12" lg="4" md="4" sm="4">
          <v-card height="200px">
            <div>
              <v-card-text>{{content.text}}</v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
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
#container {
  position: absolute;
  top: 60%;
  left: 40%;
  transform: translate(-40%, -40%);
}
#roww {
  border: 0.2rem solid red;
}
/* .v-application {
  border: 0.2rem solid red;
} */
.jcard {
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 300px;
}
.cardd {
  display: flex;
  justify-content: center;
}
#joke {
  font-size: 4rem;
  font-weight: bolder;
}
.btntxt {
  color: black;
}
#flix {
  font-size: 4rem;
  font-weight: bolder;
}
#btnbrdr {
  /* border-top: none;
  border-right: none;
  border-left: none; */
}

@media screen and (max-width: 870px) {
  #joke {
    font-size: 3rem;
    font-weight: bolder;
  }
  #flix {
    font-size: 3rem;
  }
  #container {
    position: absolute;
    top: 75%;
    left: 40%;
    transform: translate(-40%, -40%);
  }
}

/* @media screen and (min-height: 1300px) {
  #joke {
    font-size: 3rem;
    font-weight: bolder;
  }
  #flix {
    font-size: 3rem;
  }
  #container {
    position: absolute;
    top: 53%;
    left: 40%;
    transform: translate(-40%, -40%);
  }
} */
</style>