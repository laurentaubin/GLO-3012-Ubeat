<template>
  <v-container>
    <v-dialog v-model="createPlaylistDialog" persistent max-width="460">
      <template v-slot:activator="{ on }">
        <v-btn class="my-6" v-on="on">
          <v-icon class="ml-0 mr-2">mdi-plus-circle-outline</v-icon>
          New playlist
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          Create a new playlist
        </v-card-title>
        <v-card-text class="pb-0">
          <v-text-field
            v-model="playlistName"
            placeholder="Enter playlist name..."
          ></v-text-field>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn
            @click="
              playlistName = '';
              createPlaylistDialog = false;
            "
            >Cancel</v-btn
          >
          <v-spacer />
          <v-btn
            @click="
              createPlaylist(playlistName, 'test@francis.com');
              playlistName = '';
              createPlaylistDialog = false;
            "
            color="green darken-2"
            >OK</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="invalidPlaylistName" max-width="500">
      <v-card>
        <v-card-title class="pb-0">
          The playlist name was invalid.
        </v-card-title>
        <v-card-title class="pt-0">
          Please try again.
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn
            v-on:click="invalidPlaylistName = false"
            color="green darken-2"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { createPlaylist } from "../api/api.js";
import { isPlaylistNameValid } from "../utils/validationUtils.js";
import router from "../router/index.js";

export default {
  name: "AddPlaylistButton",
  data: () => ({
    createPlaylistDialog: false,
    playlistName: "",
    invalidPlaylistName: false
  }),
  methods: {
    createPlaylist: async function(name, owner) {
      if (!isPlaylistNameValid(name)) {
        this.invalidPlaylistName = true;
        return;
      }
      const playlist = await createPlaylist(name, owner);
      router.push(`/playlist/${playlist.id}`);
      router.go(1);
    }
  }
};
</script>

<style></style>
