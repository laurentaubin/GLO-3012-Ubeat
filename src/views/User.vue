<template>
  <v-container>
    <v-card>
      <v-card-title>
        {{ this.user.name }}
      </v-card-title>
      <v-card-text>
        {{ this.user.email }}
      </v-card-text>
    </v-card>
    <v-container>
      <p class="body-1 font-weight-bold mb-0 mt-5">Your playlists</p>
    </v-container>
    <div v-bind:key="playlist.id" v-for="playlist in playlists">
      <playlist-card v-bind:playlist="playlist" />
    </div>
  </v-container>
</template>

<script>
import { getUserById, getUserPlaylists, isConnected } from "../api/api";
import PlaylistCard from "../components/playlist/PlaylistCard";


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
      playlists: []
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
      const playlists = await getUserPlaylists(this.$route.params.id);
      if (playlists !== null) {
        console.log(playlists);
        this.playlists = playlists;
      }
    }
  },
  components: {
    playlistCard: PlaylistCard
  }
};
</script>

<style scoped></style>
