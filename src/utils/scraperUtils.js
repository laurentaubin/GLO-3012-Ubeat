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
  try {
    return artistArtwork[0].children[0].srcset;
  } catch (err) {
    return "https://scontent.fymq2-1.fna.fbcdn.net/v/t1.0-9/12227187_10205387613596953_1755837016739161183_n.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=BDwzRPHnPfoAX-ANhSP&_nc_ht=scontent.fymq2-1.fna&oh=96c3e7fb4e1539f0de3ef29c68d6dcb8&oe=5EC250F9";
  }
}

function getSrcFromSrcSet(srcSet) {
  return srcSet.split(" ")[0];
}
