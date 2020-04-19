<template>
  <v-container>
    <GlobalResults :query="query" />
  </v-container>
</template>

<script>
import GlobalResults from "../components/search/GlobalResults";

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
  }
};
</script>

<style></style>
