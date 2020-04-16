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
      <v-container v-if="followingUser" class="d-flex justify-center justify-md-end">
        <v-btn v-on:click="unfollow(user.id)">
          UNFOLLOW
        </v-btn>
      </v-container>
      <v-container v-else class="d-flex justify-center justify-md-end">
        <v-btn v-on:click="follow(user.id)">
          FOLLOW
        </v-btn>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import { getCurrentUserTokenInfo, followUserWithID, unfollowUserWithID } from "../../api/api";

export default {
  name: "UserHeader",
  props: ["user"],
  data: function() {
    return {
      isCurrentUser: true,
      followingUser: false,
      currentUserTokenInfo: null
    };
  },
  async created() {
    await this.setIsCurrentUser();
    this.followingUser = this.isFollowingUser();
  },
  async updated() {
    await this.setIsCurrentUser();
    this.followingUser = this.isFollowingUser();
  },
  methods: {
    setIsCurrentUser: async function() {
      this.currentUserTokenInfo = await getCurrentUserTokenInfo();
      this.isCurrentUser = this.currentUserTokenInfo.id === this.user.id;
    },
    follow: async function(ID) {
      await followUserWithID(ID);
      this.followingUser = true;
    },
    unfollow: async function(ID) {
      await unfollowUserWithID(ID);
      this.followingUser = false;
    },
    isFollowingUser: function() {
      return this.currentUserTokenInfo.following.map(user => user.id).includes(this.user.id.toString());
    }
  }
};
</script>

<style scoped></style>
