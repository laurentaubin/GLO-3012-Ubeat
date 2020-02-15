export function emitTrackUp(track) {
  console.log('album emit');
  this.$emit('play-track', track);
}

export function emitTrackIdUp(trackId) {
  this.$emit('select-track', trackId);
}
