<template>
  <v-container class="px-0 mx-0">
    <v-subheader class="subtitle-1 font-weigth">Playlists</v-subheader>
    <v-list dense class="px-0 mx-0">
      <v-list-item-group>
        <v-list-item
          class=""
          v-for="playlist in playlists"
          :key="playlist.id"
          :to="`/playlists/${playlist.id}`"
        >
          <v-list-item-content class="py-0 my-0">
            <v-list-item-title
              class="subtitle-1 py-0 my-0"
              v-text="playlist.name"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script>
import { getPlaylists } from "../api/api.js";

export default {
  name: "PlaylistBar",
  data: function() {
    return {
      playlists: []
    };
  },
  created() {
    this.getPlaylists();
  },
  methods: {
    getPlaylists: async function() {
      const playlists = await getPlaylists();
      console.log(playlists.slice(0, 5));
      this.playlists = playlists.slice(0, 10);
    }
  }
};
</script>

<style scoped>
v-list__tile {
  padding: 0;
  margin: 0;
}
</style>
