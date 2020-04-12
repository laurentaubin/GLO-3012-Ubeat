<template>
  <v-autocomplete
    v-model="select"
    prepend-inner-icon="mdi-magnify"
    append-icon=""
    :loading="loading"
    :items="items"
    :search-input.sync="search"
    cache-items
    class="mx-4"
    flat
    hide-no-data
    hide-details
    label="Search albums"
    solo-inverted
  ></v-autocomplete>
</template>

<script>
import { searchArtists, searchAlbums } from "../../api/api.js";

export default {
  name: "Autocomplete",
  props: ["type"],
  data: () => ({
    select: null,
    loading: false,
    items: [],
    search: null
  }),
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    }
  },
  methods: {
    querySelections: async function(query) {
      this.loading = true;
      this.items = [];

      await this.updateAutocomplete(query);

      this.loading = false;
    },
    updateAutocomplete: async function(query) {
      switch (this.type) {
        case "artist":
          await this.updateArtistNames(query);
          break;
        case "album":
          await this.updateAlbumNames(query);
          break;
      }
    },
    updateArtistNames: async function(query) {
      const artists = await searchArtists(query);
      // eslint-disable-next-line no-unused-vars
      for (const artist of artists) {
        this.items.push(artist.artistName);
      }
    },
    updateAlbumNames: async function(query) {
      const albums = await searchAlbums(query);
      // eslint-disable-next-line no-unused-vars
      for (const album of albums) {
        this.items.push(album.collectionName);
      }
    }
  }
};
</script>

<style></style>
