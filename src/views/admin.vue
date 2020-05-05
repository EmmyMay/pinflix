<template>
  <v-form>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" lg="7" sm="6">
          <v-text-field
            v-model="userObject.email"
            name="email"
            label="Email"
            hint="Enter E-mail Address"
            class="input-group--focused"
          ></v-text-field>
        </v-col>

        <v-col cols="12" lg="7" sm="6">
          <v-text-field
            v-model="userObject.password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show = !show"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-col id="buttonwrapper">
        <v-btn @click="login" color="purple">Go In</v-btn>
      </v-col>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      show: false,
      userObject: {
        email: "",
        password: ""
      },

      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match"
      }
    };
  },
  methods: {
    ...mapActions("auth", ["loginUser"]),
    login() {
      this.loginUser(this.userObject).then(() => {
        this.$router.push({ name: "Parser" });
      });
    }
  }
};
</script>

<style scoped >
#buttonwrapper {
  position: relative;
  left: 47%;
}
</style>