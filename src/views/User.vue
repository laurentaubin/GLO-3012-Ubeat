<template>
  <v-container>
    <user-header v-bind:user="user" />
    <v-tabs slider-color="rgb(88,86,214)" color="white">
      <v-tab>
        Playlist
      </v-tab>
      <v-tab>
        Following
      </v-tab>
      <v-tab-item>
        <v-container v-if="!playlistsLoading">
          <div v-bind:key="playlist.id" v-for="playlist in playlists">
            <playlist-card v-bind:playlist="playlist" class="my-auto" />
          </div>
        </v-container>
        <v-container class="d-flex justify-center" v-else>
          <v-progress-circular
            class="mt-6 justify-center"
            size="50"
            :indeterminate="true"
            color="rgb(88,86,214)"
          ></v-progress-circular>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-card>
          <v-card-text v-bind:key="follower.id" v-for="follower in user.following">
            <v-btn :to="`/user/${follower.id}`" > {{ follower.name }} </v-btn>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
import { getUserById, getUserPlaylists, isConnected } from "../api/api";
import PlaylistCard from "../components/playlist/PlaylistCard";
import UserHeader from "../components/user/UserHeader";

export default {
  name: "User",
  data() {
    return {
      user: {
        email: "",
        name: "",
        id: "",
        following: []
      },
      playlists: [],
      playlistsLoading: true
    };
  },
  created: async function() {
    if (isConnected()) {
      await this.getUser().then(async () => {
        await this.getUserPlaylists();
      });
    }
  },
  methods: {
    getUser: async function() {
      this.user = await getUserById(this.$route.params.id);
    },
    getUserPlaylists: async function() {
      this.playlistsLoading = true;
      const playlists = await getUserPlaylists(this.$route.params.id);
      if (playlists !== null) {
        this.playlists = playlists;
        this.playlistsLoading = false;
      }
    }
  },
  components: {
    playlistCard: PlaylistCard,
    userHeader: UserHeader
  }
};
</script>

<style scoped></style>
