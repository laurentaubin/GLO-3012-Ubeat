<template>
  <v-container>
    <v-container>
      <p class="title">Artists</p>
      <ArtistResults :query="query" />
    </v-container>

    <v-container>
      <p class="title">Albums</p>
      <AlbumResults :query="query" />
    </v-container>

    <v-container>
      <p class="title">Tracks</p>
      <TrackResults :query="query" />
    </v-container>
  </v-container>
</template>

<script>
import AlbumResults from "../search/AlbumResults";
import ArtistResults from "../search/ArtistResults";
import TrackResults from "../search/TrackResults";
import { emitTrackUp, emitTrackIdUp } from "../../utils/emitUtils";

export default {
  name: "GlobalResults",
  props: ["query"],
  components: {
    AlbumResults,
    ArtistResults,
    TrackResults
  },
  methods: {
    emitTrackUp(track) {
      emitTrackUp(this, track);
    },
    emitTrackIdUp(trackId) {
      emitTrackIdUp(this, trackId);
    }
  }
};
</script>
