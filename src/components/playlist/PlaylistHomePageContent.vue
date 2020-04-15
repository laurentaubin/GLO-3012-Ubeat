<template>
  <div>
    <div v-if="playlistsLoading" class="d-flex justify-center">
      <v-progress-circular
        class="mt-6"
        size="50"
        :indeterminate="true"
        color="rgb(88,86,214)"
      ></v-progress-circular>
    </div>
    <div v-else v-bind:key="playlist.id" v-for="playlist in playlists">
      <playlist-card v-bind:playlist="playlist" />
    </div>
  </div>
</template>

<script>
import { getCurrentUserTokenInfo, getPlaylists } from "../../api/api";
import PlaylistCard from "./PlaylistCard";

export default {
  name: "PlaylistHomePageContent",
  data: () => {
    return {
      playlists: [],
      playlistsLoading: true
    };
  },
  async created() {
    this.playlists = await this.getPlaylists();
  },
  components: {
    playlistCard: PlaylistCard
  },
  methods: {
    getPlaylists: async function() {
      this.playlistsLoading = true;
      const playlists = await getPlaylists();
      const userInfo = await getCurrentUserTokenInfo();
      if (playlists !== null && userInfo !== null) {
        this.playlists = playlists.filter(
          playlist => playlist.owner.id === userInfo.id
        );
        this.playlistsLoading = false;
        return this.playlists;
      }
    }
  }
};
</script>

<style scoped></style>
