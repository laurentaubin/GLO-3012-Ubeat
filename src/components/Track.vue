<template>
  <v-hover v-slot:default="{ hover }">
    <v-row
      v-bind:id="track.trackId"
      :class="{
        'track mx-0 px-0': $vuetify.breakpoint.xs,
        track: $vuetify.breakpoint.smAndUp
      }"
      v-on:click="trackSelected()"
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
        <div class="text-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <a class="white--text" v-on="on">
                <p v-if="hover" class="py-0 my-0">
                  •••
                </p>
              </a>
            </template>

            <v-list width="175">
              <v-list-item v-on:click="goToArtist()">
                <v-list-item-title>Go to artist</v-list-item-title>
              </v-list-item>
              <v-list-item v-on:click="goToAlbum()">
                <v-list-item-title>Go to album</v-list-item-title>
              </v-list-item>
              <v-list-item v-on:click="addToPlaylist()">
                <v-list-item-title>Add to playlist </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-col>
      <v-col cols="1" class="d-flex align-center">{{
        millisToMinutesAndSeconds(track.trackTimeMillis)
      }}</v-col>
    </v-row>
  </v-hover>
</template>

<script>
export default {
  name: "Track",
  props: ["track", "trackNumber"],
  data: () => ({}),
  methods: {
    trackSelected() {
      this.$emit("select-track", this.track.trackId);
    },
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
