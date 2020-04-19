<template>
  <v-container>
    <GlobalResults :query="query" />
  </v-container>
</template>

<script>
import GlobalResults from "../components/search/GlobalResults";
import { emitTrackUp, emitTrackIdUp } from "../utils/emitUtils";

export default {
  name: "GlobalResultPage",
  components: {
    GlobalResults
  },
  data: () => ({
    query: ""
  }),
  created() {
    this.query = this.$route.params.query;
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

<style></style>
