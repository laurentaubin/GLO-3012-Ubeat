<template>
  <v-list dense>
    <!-- Home -->
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          <router-link to="/">Home</router-link>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <!-- album -->
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          <router-link to="/album">Album</router-link>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <!-- artist -->
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          <router-link to="/artist">Artist</router-link>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <!-- playlist -->
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          <router-link to="/playlist">Playlist</router-link>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <!-- user -->
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          <router-link to="/user">User</router-link>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <!-- settings -->
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          <router-link to="/settings">Settings</router-link>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
