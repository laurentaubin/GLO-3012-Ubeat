<template>
  <v-container>
    <v-container class="d-block align-self-center ml-0 ml-md-8">
      <p
        class="body-2 font-weight-thin mb-0 mt-sm-2 text-center text-md-start"
      >
        USER
      </p>
      <p
        class="font-weight-bold text-center text-md-start"
        v-bind:class="[$vuetify.breakpoint.smAndUp ? 'display-1' : 'headline']"
      >
        {{ user.name }}
      </p>
      <p class="font-weight-regular subtitle-2 text-center text-md-start mb-1">
        {{ user.email }}
      </p>
    </v-container>
    <v-container v-if="!isCurrentUser" class="d-flex ">
      <v-container class="d-flex justify-center justify-md-end">
        <v-btn>
          FOLLOW
        </v-btn>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import { getCurrentUserTokenInfo } from "../../api/api";

export default {
  name: "UserHeader",
  props: ["user"],
  data: function() {
    return {
      isCurrentUser: true
    };
  },
  async created() {
    await this.setIsCurrentUser();
  },
  async updated() {
    await this.setIsCurrentUser();
  },
  methods: {
    setIsCurrentUser: async function() {
      const currentUserTokenInfo = await getCurrentUserTokenInfo();
      this.isCurrentUser = currentUserTokenInfo.id === this.user.id;
    }
  }
};
</script>

<style scoped></style>
