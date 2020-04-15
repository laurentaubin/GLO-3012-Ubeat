export async function getArtistArtworkUrl(artistId) {
  const htmlPage = await getHtmlPage(
    `https://itunes.apple.com/artist/${artistId}`
  );
  const artistArtworkSrcSet = getArtworkSrcSet(htmlPage);
  const artistArtworkUrl = getSrcFromSrcSet(artistArtworkSrcSet);
  return artistArtworkUrl;
}

export async function getArtistBiography(artistId) {
  const htmlPage = await getHtmlPage(
    `https://itunes.apple.com/artist/${artistId}`
  );
  const artistBiography = getBiography(htmlPage);
  return artistBiography;
}

async function getHtmlPage(url) {
  try {
    const response = await fetch(url);
    const data = await response.text();
    return data;
  } catch (err) {
    return err;
  }
}

function getBiography(htmlPage) {
  const dummyElem = document.createElement("html");
  dummyElem.innerHTML = htmlPage;
  const biography = dummyElem.getElementsByTagName("p")[1].innerText;
  return biography;
}

function getArtworkSrcSet(htmlPage) {
  const dummyElem = document.createElement("html");
  dummyElem.innerHTML = htmlPage;
  const artistArtwork = dummyElem.getElementsByClassName(
    "we-artwork ember-view we-artist-header__background we-artwork--round we-artwork--no-border"
  );
  return artistArtwork[0].children[0].srcset;
}

function getSrcFromSrcSet(srcSet) {
  return srcSet.split(" ")[0];
}
