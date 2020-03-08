<template>
  <v-container class="px-0 mx-0">
    <v-subheader class="subtitle-1 font-weigth">Playlists</v-subheader>
    <!-- TODO Find a way to have dynamic max-height -->
    <vue-custom-scrollbar class="scroll-area" :settings="settings">
      <v-list dense class="px-0 mx-0 overflow-y-auto">
        <v-list-item-group>
          <v-list-item
            class=""
            v-for="playlist in playlists"
            :key="playlist.id"
            :to="`/playlist/${playlist.id}`"
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
    </vue-custom-scrollbar>
  </v-container>
</template>

<script>
import vueCustomScrollbar from "vue-custom-scrollbar";
import { getPlaylists } from "../api/api.js";

export default {
  name: "PlaylistBar",
  components: {
    vueCustomScrollbar
  },
  data: function() {
    return {
      playlists: [],
      settings: {
        maxScrollbarLength: 60
      }
    };
  },
  created() {
    this.getPlaylists();
  },
  methods: {
    getPlaylists: async function() {
      const playlists = await getPlaylists();
      this.playlists = playlists;
    }
  }
};
</script>

<style scoped>
v-list__tile {
  padding: 0;
  margin: 0;
}
.scroll-area {
  position: relative;
  margin: auto;
  width: 225px;
  height: 300px;
}
</style>
