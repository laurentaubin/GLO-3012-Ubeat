<template>
  <template v-slot:selection="data">
    <v-chip
      v-bind="data.attrs"
      :input-value="data.selected"
      close
      @click="data.select"
      @click:close="remove(data.item)"
    >
      <v-avatar left>
        <v-img :src="data.item.avatar"></v-img>
      </v-avatar>
      {{ data.item.name }}
    </v-chip>
  </template></template
>

<script>
export default {
  name: "AucocompleteGroup"
};
</script>

<style></style>
