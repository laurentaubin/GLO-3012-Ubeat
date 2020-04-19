<template>
  <v-container>
    <v-container v-if="loading">
      <v-progress-circular
        class="mt-6"
        style="left: 38%;"
        size="50"
        :indeterminate="true"
        color="rgb(88,86,214)"
      ></v-progress-circular>
    </v-container>
    <v-row>
      <v-col v-for="(album, i) in shownAlbums" :key="i">
        <AlbumCard style="display: inline;" :album="album" />

        <v-menu bottom left style="display: inline;">
          <template v-slot:activator="{ on }">
            <v-btn dark icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <AlbumMenu :tracks="tracksArray[i]" />
        </v-menu>
      </v-col>
    </v-row>
    <v-btn @click="seeMore()" v-if="albumsToShow < results.length">
      See more
    </v-btn>
  </v-container>
</template>

<script>
import AlbumCard from "../album/AlbumCard";
import AlbumMenu from "../album/AlbumMenu";
import { searchAlbums, getTracks } from "../../api/api.js";

export default {
  name: "AlbumResults",
  props: ["query"],
  components: {
    AlbumCard,
    AlbumMenu
  },
  data: () => ({
    results: [],
    shownAlbums: [],
    tracksArray: [],
    albumsToShow: 7,
    loading: true
  }),
  created: async function() {
    await this.updateResults();
    this.shownAlbums = this.results.slice(0, this.albumsToShow);
    await this.updateTracks();
    this.loading = false;
  },
  methods: {
    updateResults: async function() {
      const results = await searchAlbums(this.query);
      if (results !== null) {
        this.results = results.results;
      }
    },
    getAlbumTracks: async function(albumId) {
      const results = await getTracks(albumId);
      if (results !== null) {
        return results.results;
      }
    },
    updateTracks: async function() {
      // eslint-disable-next-line no-unused-vars
      for (const album of this.results) {
        const tracks = await this.getAlbumTracks(album.collectionId);
        if (tracks !== null) {
          this.tracksArray.push(tracks);
        }
      }
    },
    seeMore: function() {
      this.albumsToShow += 7;
      this.shownAlbums = this.results.slice(0, this.albumsToShow);
    }
  }
};
</script>
