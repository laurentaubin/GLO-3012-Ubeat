<template>
  <div>
    <div v-bind:key="playlist.id" v-for="playlist in playlists">
      <playlist-card v-bind:playlist="playlist" />
    </div>
  </div>
</template>

<script>
import { getPlaylists } from "../../api/api";
import PlaylistCard from "./PlaylistCard";

export default {
  name: "PlaylistHomePageContent",
  data: () => {
    return {
      playlists: []
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
      const playlists = await getPlaylists();
      this.playlists = playlists.filter(
        playlist => playlist.owner.email === "test@francis.com"
      );
      return this.playlists;
    }
  }
};
</script>

<style scoped></style>
