<template>
<v-container>
  <v-facebook-login v-model="model" @login="handleLogin" @sdk-init="handleSdkInit" :login-options="loginOptions" app-id="2803239359903011"></v-facebook-login>
    <!-- <button v-if="scope.logout && model.connected" @click="scope.logout">
      Logout
    </button> -->
</v-container>
</template>

<script>
  import VFacebookLogin from 'vue-facebook-login-component'
import { logInWithFacebookV2 } from './api/api'

  export default {
    name: "mylogin",
    components: {
      "v-facebook-login": VFacebookLogin
    },
    data: () => ({
      FB: {},
      model: {},
      scope: {},
      loginOptions: {scope: "email"}
    }),
    methods: {
      handleSdkInit({ FB, scope }) {
        this.FB = FB
        this.scope = scope
        console.log(scope)
      },
      handleLogin(){
        // await this.FB.login(function(response){
        //   console.log(response)
        // })
        this.FB.api('/me?fields=name,id,email', async function(response) {
          const response2 = await logInWithFacebookV2(response.name, response.email, response.email+response.id);
          console.log(response2)
        });

        
        // const response2 = await signUp(response.name, response.email, response.email+response.name);
      } 
      }
    }
</script>