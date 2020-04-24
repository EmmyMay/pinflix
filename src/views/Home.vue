<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card flat id="logo" height="30rem" width="73rem" class="yellow" tile>
          <div class="cardd">
            <v-card-text>
              <div class="text-center">
                <span id="joke">Pin</span>
                <span id="flix" class="red--text">Flix</span>
              </div>
            </v-card-text>
          </div>
          <v-card-actions>
            <v-btn to="/maintwi" outlined x-large color="black">
              <span id="watch">Watch</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col :class="'shift'" cols="12" v-for="(intro, i) in intros" :key="(i)">
        <v-card :color="intro.color" outlined height="20rem">
          <v-card-title primary-title>{{intro.title}}</v-card-title>
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
  necessitatibus id consectetur accusamus soluta dolores dicta ullam dolorem cum.`,
          color: "yellow darken-2"
        },
        {
          title: "Lorem",
          icon: "mdi-circle",
          body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quis sapiente.
   Aspernatur fugit repellendus repellat nemo vel perferendis, quaerat enim, 
  necessitatibus id consectetur accusamus soluta dolores dicta ullam dolorem cum.`,
          color: "yellow accent-4"
        },
        {
          title: "Lorem",
          icon: "mdi-circle",
          body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quis sapiente.
   Aspernatur fugit repellendus repellat nemo vel perferendis, quaerat enim, 
  necessitatibus id consectetur accusamus soluta dolores dicta ullam dolorem cum.`,
          color: "yellow darken-2"
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
#joke {
  font-size: 4rem;
  font-weight: bolder;
  font-family: "Spicy Rice", cursive;
}
.shift {
  margin-top: 9rem;
}
.shiftmd {
  margin-top: 9rem;
}
#flix {
  font-size: 4rem;
  font-weight: bolder;
  font-family: "Spicy Rice", cursive;
}

#watch {
  color: black;
}
</style>