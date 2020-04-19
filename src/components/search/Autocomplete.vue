<template>
  <v-autocomplete
    v-model="select"
    prepend-inner-icon="mdi-magnify"
    :loading="loading"
    append-icon=""
    loader-height="4px"
    color="rgb(88,86,214)"
    :items="items"
    v-on:keyup.enter="goToResultPage(search)"
    :search-input.sync="search"
    cache-items
    class="mx-4"
    item-text="name"
    item-value="url"
    flat
    hide-no-data
    hide-details
    label="Search"
    solo-inverted
  >
    <template v-slot:item="{ item }">
      <v-list-item-content>
        <a :href="item.url" style="text-decoration: none; color: white;">
          <v-list-item-title v-text="getItemName(item)"></v-list-item-title>
        </a>
      </v-list-item-content>
    </template>
  </v-autocomplete>
</template>

<script>
import { searchArtists, searchAlbums, searchAll } from "../../api/api.js";
import { isConnected } from "../../api/api";

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

      await this.updateAutocomplete(query);

      this.loading = false;
    },
    updateAutocomplete: async function(query) {
      if (isConnected()) {
        switch (this.type) {
          case "artist":
            await this.updateArtistNames(query);
            break;
          case "album":
            await this.updateAlbumNames(query);
            break;
          case "global":
            await this.updateNames(query);
        }
      }
    },
    updateArtistNames: async function(query) {
      if (isConnected()) {
        const artists = await searchArtists(query);
        // eslint-disable-next-line no-unused-vars
        for (const artist of artists.results) {
          artist.name = this.getItemName(artist);
          artist.url = this.getItemUrl(artist);
          this.items.push(artist);
        }
        this.items.push({
          name: "See all results for " + query,
          url: `/search/artists/${query}`
        });
      }
    },
    updateAlbumNames: async function(query) {
      if (isConnected()) {
        const albums = await searchAlbums(query);
        // eslint-disable-next-line no-unused-vars
        for (const album of albums.results) {
          album.name = this.getItemName(album);
          album.url = this.getItemUrl(album);
          this.items.push(album);
        }
        this.items.push({
          name: "See all results for " + query,
          url: `/search/albums/${query}`
        });
      }
    },
    updateNames: async function(query) {
      if (isConnected()) {
        const items = await searchAll(query);
        // eslint-disable-next-line no-unused-vars
        for (const item of items.results) {
          item.name = this.getItemName(item);
          item.url = this.getItemUrl(item);
          this.items.push(item);
        }
        this.items.push({
          name: "See all results for " + query,
          url: `/search/global/${query}`
        });
      }
    },
    getItemName: function(item) {
      switch (item.wrapperType) {
        case "track":
          return item.trackName + " • " + item.artistName;
        case "artist":
          return item.artistName;
        case "collection":
          return item.collectionName + " • " + item.artistName;
        default:
          return item.name;
      }
    },
    getItemUrl: function(item) {
      switch (item.wrapperType) {
        case "track":
          return `/album/${item.collectionId}#${item.trackId}`;
        case "artist":
          return `/artist/${item.artistId}`;
        case "collection":
          return `/album/${item.collectionId}`;
        default:
          return item.name;
      }
    },
    goToResultPage: function(search) {
      let url = `/search/global/${search}`;
      // eslint-disable-next-line no-unused-vars
      for (const item of this.items) {
        if (search === item.name) {
          url = item.url;
        }
      }
      this.$router.push(url);
    }
  }
};
</script>
