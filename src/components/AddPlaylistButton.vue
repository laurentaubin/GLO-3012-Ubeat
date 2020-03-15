<template>
  <v-container>
    <v-dialog v-model="createPlaylistDialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
        <v-btn class="my-6" v-on="on">
          <v-icon class="ml-0 mr-2">mdi-plus-circle-outline</v-icon>
          New playlist
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          Create a playlist
          <v-spacer />
          <v-hover v-slot:default="{ hover }">
            <v-icon
              :color="hover ? 'white' : 'grey'"
              size="24"
              @click="createPlaylistDialog = false"
              >mdi-close
            </v-icon>
          </v-hover>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="playlistName"
            label="Name"
            placeholder="My playlist"
          ></v-text-field>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn
            @click="
              createPlaylist(playlistName, 'test@francis.com');
              playlistName = null;
              createPlaylistDialog = false;
            "
            >Create playlist</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="invalidPlaylistName" max-width="500">
      <v-card>
        <v-card-title>
          The playlist name was invalid. Please try again.
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
      console.log("create playlist");
      if (!isPlaylistNameValid(name)) {
        console.log("invalid name");
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
