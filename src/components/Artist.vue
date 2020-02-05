<template>
  <div class="artist">
    <!--- TODO replace hardcoded image with some sort of api call -->
    <v-img
      class="artist-image"
      src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/1e/78/99/1e789927-28e6-c55a-204f-94ad4f7940ae/pr_source.png/570x570cc.jpg"
      contain
      height="250px"
      width="250px"
    ></v-img>

    <div class="artist-info">
      <h1>{{ this.artist.artistName }}</h1>
      <p>{{ this.artist.primaryGenreName }}</p>
    </div>

    <div v-bind:key="album.collectionId" v-for="album in albums">
      <album v-bind:album="album" />
    </div>
  </div>
</template>

<script>
import Album from "./Album.vue";

export default {
  name: "Artist",
  components: {
    album: Album
  },
  props: ["albums"],
  data: function() {
    return {
      artist: this.getArtistInfo(1)
    };
  },
  methods: {
    getArtist: function(id) {
      // To avoid eslint error
      if (id == 0) {
        return 0;
      }

      // Hardcoded artist, will eventually be api call
      return {
        resultCount: 1,
        results: [
          {
            wrapperType: "artist",
            artistType: "Artist",
            artistName: "Kesha",
            artistLinkUrl:
              "https://music.apple.com/us/artist/kesha/334854763?uo=4",
            artistId: 334854763,
            amgArtistId: 2035613,
            primaryGenreName: "Pop",
            primaryGenreId: 14
          }
        ]
      };
    },
    getArtistInfo: function(id) {
      const artist = this.getArtist(id);
      this.artist = artist.results[0];
      return artist.results[0];
    }
  }
};
</script>

<style>
.artist-image {
  border-radius: 50%;
}
</style>
