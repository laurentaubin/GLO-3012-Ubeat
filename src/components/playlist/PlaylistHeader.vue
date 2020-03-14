<template>
  <v-container>
    <v-container>
      <v-container>
        <p
          class="body-2 font-weight-thin mb-0 pl-1 mt-sm-2 text-center"
        >
          Playlist
        </p>
        <p
          class="font-weight-bold text-center"
          v-bind:class="[
            $vuetify.breakpoint.smAndUp ? 'display-3' : 'display-1'
          ]"
        >
          {{ playlist.name }}
        </p>
      </v-container>
      <v-container class="d-flex flex-wrap justify-space-around ">

          <v-btn
            v-on:click="dialog = !dialog"
            color="rgb(88,86,214)"
            class="mb-2 d-flex justify-center"
          >Edit playlist</v-btn
          >
          <v-btn v-on:click="deletePlaylistTrigger = !deletePlaylistTrigger"
          >Delete playlist</v-btn>
      </v-container>
      <v-dialog v-model="deletePlaylistTrigger" max-width="290">
        <v-card class="d-block">
          <p>
            Are you sure you want to delete this playlist? This action cannot be
            undone
          </p>
          <v-container class="d-flex justify-center">
            <v-btn v-on:click="deletePlaylist" color="rgb(255,69,58)">OK</v-btn>
          </v-container>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-text-field
            v-model="this.newPlaylistName"
            label="Enter new playlist name"
          ></v-text-field>
        </v-card>
        <v-btn v-on:click="changePlaylistName" color="rgb(48,209,88)">OK</v-btn>
      </v-dialog>
    </v-container>
    <v-divider />
  </v-container>
</template>

<script>
import { deletePlaylist, editPlaylistName } from "../../api/api";

export default {
  name: "PlaylistHeader",
  props: ["playlist"],
  data: () => {
    return {
      newPlaylistName: "",
      deletePlaylistTrigger: false,
      dialog: false
    };
  },
  methods: {
    changePlaylistName: async function() {
      this.playlist = await editPlaylistName(
        this.playlist.id,
        this.playlist,
        this.newPlaylistName
      );
      this.dialog = false;
    },
    deletePlaylist: async function() {
      await deletePlaylist(this.playlist.id);
      this.deletePlaylistTrigger = false;
      // redirects to home page ??
    }
  }
};
</script>

<style scoped>
.edit-btn {
  background-color: rgb(88, 86, 214);
}
</style>
