<template>
  <v-container class="main-container text-center">
    <p class="title">Sign up using email</p>

    <v-container>
      <v-row class="py-0">
        <v-col class="py-0">
          <v-text-field
            v-model="firstName"
            label="First name"
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>
        <v-col class="py-0">
          <v-text-field
            v-model="lastName"
            label="Last name"
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-text-field
        class="py-0"
        v-model="email"
        label="Email"
        :rules="[rules.required, rules.email]"
      ></v-text-field>

      <v-row class="py-0">
        <v-col class="py-0">
          <v-text-field
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            label="Password"
            @click:append="showPassword = !showPassword"
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>
        <v-col class="py-0">
          <v-text-field
            :append-icon="showConfirmed ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showConfirmed ? 'text' : 'password'"
            v-model="confirmedPassword"
            label="Confirm"
            @click:append="showConfirmed = !showConfirmed"
            :rules="[rules.required]"
          >
          </v-text-field>
        </v-col>
      </v-row>

      <v-container>
        <v-btn @click="signup()">
          Sign up
        </v-btn>
      </v-container>
    </v-container>

    <v-container>
      <p>
        Already have an account ?
        <a class="link white--text text-center text-md-start" href="/#/login"
          >Log in</a
        >
      </p>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "SignUpForm",
  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmedPassword: "",
    showPassword: false,
    showConfirmed: false,
    rules: {
      required: value => !!value || "Required.",
      counter: value => value.length <= 20 || "Max 20 characters",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      }
    }
  }),
  methods: {
    signUp: function() {
      //todo
    }
  }
};
</script>

<style scoped>
.main-container {
  max-width: 600px;
}
</style>
