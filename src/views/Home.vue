<template>
  <v-container>
    <v-container>
      <h1 class="font-weight-bold display-2 mb-3 pb-10">Home</h1>
    </v-container>
    <v-container
      v-if="loading"
      style="width: 225px; height: 150px;"
    >
      <v-progress-circular
        class="mt-6"
        style="left: 38%;"
        size="50"
        :indeterminate="true"
        color="rgb(88,86,214)"
      ></v-progress-circular>
    </v-container>

    <v-container
      v-for="style in Object.keys(artistsByStyle)"
      v-bind:key="style"
    >
      <v-row no-gutters>
        <h1 class="title font-weight-bold">Top {{ style }} Artists For You</h1>
      </v-row>
      <v-divider class="pb-3" />
      <v-row no-gutter class="d-flex">
        <v-card
          class="mr-3 mb-3"
          v-for="artist in artistsByStyle[style]"
          v-bind:key="artist.artistId"
        >
          <v-row>
            <v-col class="d-flex mx-3 my-sm-1">
              <v-img
                contain
                v-bind:src="artist.artwork"
                height="200px"
                width="200px"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-center">
              <a :href="`/artist/${artist.artistId}`" class="link white--text">
                {{ artist.artistName }}
              </a>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { getArtists } from "../api/api";
import { getArtistArtworkUrl } from "../utils/scraperUtils";

export default {
  name: "Home",
  data: () => {
    return {
      artistsByStyle: {},
      loading: false
    };
  },
  async created() {
    this.artistsByStyle = await this.getArtistsByStyle();
  },
  methods: {
    getArtistsByStyle: async function() {
      let artistsByStyle = {};
      const results = await getArtists();
      if (results !== null) {
        this.loading = true;
        const artists = results.results;
        // eslint-disable-next-line no-unused-vars
        for (let artist of artists) {
          if (artist.primaryGenreName in artistsByStyle) {
            artistsByStyle[artist.primaryGenreName].push(artist);
          } else {
            artistsByStyle[artist.primaryGenreName] = [artist];
          }
        }
        artistsByStyle = this.removeRandomStyles(artistsByStyle);
        artistsByStyle = this.sortRecommendations(artistsByStyle);

        // eslint-disable-next-line no-unused-vars
        for (let style of Object.keys(artistsByStyle)) {
          artistsByStyle[style] = artistsByStyle[style].slice(0, 3);
          for (let i = 0; i < artistsByStyle[style].length; i++) {
            artistsByStyle[style][i]["artwork"] = await getArtistArtworkUrl(
              artistsByStyle[style][i].artistId
            );
          }
        }
        this.loading = false;
        return artistsByStyle;
      }
    },
    sortRecommendations: function(artistsByStyle) {
      Object.keys(artistsByStyle).forEach(key => {
        artistsByStyle[key] = this.shuffle(artistsByStyle[key]);
      });
      return artistsByStyle;
    },
    shuffle: function(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    },
    removeRandomStyles: function(artistsByStyle) {
      const entries = Object.entries(artistsByStyle);
      let newStyles = {};
      for (let i = 0; i < 5; i++) {
        newStyles[entries[i][0]] = entries[i][1];
      }
      return newStyles;
    }
  }
};
</script>

<style />
