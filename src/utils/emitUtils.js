export function emitTrackUp(context, track) {
  context.$emit("play-track", track);
}

export function emitTrackIdUp(context, trackId) {
  context.$emit("select-track", trackId);
}

export function emitUpdatedName(context, updatedName) {
  context.$emit("updated-name", updatedName);
}
