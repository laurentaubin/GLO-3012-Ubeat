<template>
  <v-hover v-slot:default="{ hover }">
    <v-row
      v-bind:id="track.trackId"
      :class="{
        'track mx-0 px-0': $vuetify.breakpoint.xs,
        track: $vuetify.breakpoint.smAndUp
      }"
      v-on:click="$emit('select-track', track.trackId)"
    >
      <v-col cols="1" class="d-flex align-center justify-center py-0">
        <span class="track-nb">{{ trackNumber }}</span>
        <v-btn class="play-btn" icon v-on:click="$emit('play-track', track)">
          <v-icon>mdi-play</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="9" class="d-flex align-center">
        <span>{{ track.trackName }}</span>
      </v-col>
      <v-col cols="1">
        <track-menu
          :hover="hover"
          :artistId="track.artistId"
          :collectionId="track.collectionId"
        />
      </v-col>
      <v-col cols="1" class="d-flex align-center">{{
        millisToMinutesAndSeconds(track.trackTimeMillis)
      }}</v-col>
    </v-row>
  </v-hover>
</template>

<script>
import TrackMenu from "./TrackMenu.vue";

export default {
  name: "Track",
  props: ["track", "trackNumber"],
  components: {
    "track-menu": TrackMenu
  },
  data: () => ({}),
  methods: {
    millisToMinutesAndSeconds(millis) {
      const minutes = Math.floor((millis / 1000 / 60) << 0);
      let seconds = Math.floor((millis / 1000) % 60);

      // To avoid times like 4:0 and 3:2
      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      return minutes + ":" + seconds;
    }
  }
};
</script>

<style scoped>
.track-nb {
  display: inline-block;
}
.play-btn {
  display: none !important;
  height: 30px;
  width: 30px;
}
.track:hover {
  background: #212121;
}
.track:hover .track-nb {
  display: none;
}

.track:hover .play-btn {
  display: inline-block !important;
}
.selected-track {
  background: #313131 !important;
}
.play-btn:focus {
  display: inline-block;
}

.play-btn-active {
  display: inline-block !important;
}
.track-nb-hidden {
  display: none !important;
}
</style>
