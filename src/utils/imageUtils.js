export function getHighResArtwork(artworkUrl, res) {
  const width = res[0];
  const height = res[1];

  const updatedResArtworkUrl =
    artworkUrl.substring(0, artworkUrl.lastIndexOf("/") + 1) +
    `${width}x${height}bb.jpg`;
  return updatedResArtworkUrl;
}