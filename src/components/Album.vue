<template>
  <div>
    <header class="album-header">
      <v-img
        class="album-image"
        src="https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/100x100bb.jpg"
        height="300px"
        width="300px"
        clear="left"
      ></v-img>
      <div class="album-info">
        <span class="album-year">{{ this.getAlbumYear() }}</span>
        <h1 class="album-name">{{ this.albumInfo.collectionName }}</h1>
      </div>
    </header>

    <div class="song-list">
      <header class="songs-header">
        <span>#</span>
        <span>Title</span>
        <span>Duration</span>
      </header>
      <v-hover v-slot:default="{ hover }">
        <v-list>
          <v-list-item v-bind:key="track.trackId" v-for="track in tracks">
            <v-icon :class="{ 'show-btn': hover }" left dark color="transparent"
              >mdi-play-circle</v-icon
            >
            <span>{{ track.trackNumber }}</span>
            <span>{{ track.trackName }}</span>
            <span>{{ millisToMinutesAndSeconds(track.trackTimeMillis) }}</span>
          </v-list-item>
        </v-list>
      </v-hover>
    </div>
  </div>
</template>

<script>
export default {
  name: "Album",
  props: ["album"],
  data: function() {
    return {
      tracks: this.getTracksInfo(),
      albumInfo: this.getAlbumInfo(),
      transparent: "rgba(255, 255, 255, 0)"
    };
  },
  methods: {
    getAlbumInfo: function(id) {
      const album = this.getAlbum(id);
      return album.results[0];
    },
    getAlbum: function(id) {
      // To avoid eslint error
      if (id == 0) {
        return 0;
      }
      // Will eventually be api call
      return {
        resultCount: 1,
        results: [
          {
            wrapperType: "collection",
            collectionType: "Album",
            artistId: 334854763,
            collectionId: 1484385866,
            amgArtistId: 2035613,
            artistName: "Kesha",
            collectionName: "High Road",
            collectionCensoredName: "High Road",
            artistViewUrl:
              "https://music.apple.com/us/artist/kesha/334854763?uo=4",
            collectionViewUrl:
              "https://music.apple.com/us/album/high-road/1484385866?uo=4",
            artworkUrl60:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/60x60bb.jpg",
            artworkUrl100:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/100x100bb.jpg",
            collectionPrice: 10.99,
            collectionExplicitness: "explicit",
            contentAdvisoryRating: "Explicit",
            trackCount: 15,
            copyright: "℗ 2019 Kemosabe Records",
            country: "USA",
            currency: "USD",
            releaseDate: "2020-01-10T08:00:00Z",
            primaryGenreName: "Pop"
          }
        ]
      };
    },
    getAlbumYear: function() {
      const date = new Date(this.albumInfo.releaseDate);
      return date.getFullYear();
    },
    getTracksInfo: function() {
      // const albumId = this.albumInfo.collectionId;
      const albumId = 1;
      const tracks = this.getTracks(albumId);
      return tracks.results;
    },
    getTracks: function(id) {
      // To avoid eslint error
      if (id == 0) {
        return 0;
      }

      // Will evetually be api call
      return {
        resultCount: 15,
        results: [
          {
            wrapperType: "track",
            kind: "song",
            artistId: 334854763,
            collectionId: 1484385866,
            trackId: 1484385867,
            artistName: "Kesha",
            collectionName: "High Road",
            trackName: "Tonight",
            collectionCensoredName: "High Road",
            trackCensoredName: "Tonight",
            artistViewUrl:
              "https://music.apple.com/us/artist/kesha/334854763?uo=4",
            collectionViewUrl:
              "https://music.apple.com/us/album/tonight/1484385866?i=1484385867&uo=4",
            trackViewUrl:
              "https://music.apple.com/us/album/tonight/1484385866?i=1484385867&uo=4",
            previewUrl:
              "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/32/a5/c4/32a5c4ee-a31f-51cd-a963-212f02a57c54/mzaf_11840614684647455797.plus.aac.p.m4a",
            artworkUrl30:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/30x30bb.jpg",
            artworkUrl60:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/60x60bb.jpg",
            artworkUrl100:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/100x100bb.jpg",
            collectionPrice: 10.99,
            trackPrice: 1.29,
            releaseDate: "2020-01-28T08:00:00Z",
            collectionExplicitness: "explicit",
            trackExplicitness: "explicit",
            discCount: 1,
            discNumber: 1,
            trackCount: 15,
            trackNumber: 1,
            trackTimeMillis: 195200,
            country: "USA",
            currency: "USD",
            primaryGenreName: "Pop",
            contentAdvisoryRating: "Explicit",
            isStreamable: true
          },
          {
            wrapperType: "track",
            kind: "song",
            artistId: 334854763,
            collectionId: 1484385866,
            trackId: 1484385868,
            artistName: "Kesha",
            collectionName: "High Road",
            trackName: "My Own Dance",
            collectionCensoredName: "High Road",
            trackCensoredName: "My Own Dance",
            artistViewUrl:
              "https://music.apple.com/us/artist/kesha/334854763?uo=4",
            collectionViewUrl:
              "https://music.apple.com/us/album/my-own-dance/1484385866?i=1484385868&uo=4",
            trackViewUrl:
              "https://music.apple.com/us/album/my-own-dance/1484385866?i=1484385868&uo=4",
            previewUrl:
              "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/2d/77/40/2d77403b-637e-2218-6ee2-79f6f3254a61/mzaf_18420941688950122235.plus.aac.p.m4a",
            artworkUrl30:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/30x30bb.jpg",
            artworkUrl60:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/60x60bb.jpg",
            artworkUrl100:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/100x100bb.jpg",
            collectionPrice: 10.99,
            trackPrice: 1.29,
            releaseDate: "2019-11-21T08:00:00Z",
            collectionExplicitness: "explicit",
            trackExplicitness: "explicit",
            discCount: 1,
            discNumber: 1,
            trackCount: 15,
            trackNumber: 2,
            trackTimeMillis: 161173,
            country: "USA",
            currency: "USD",
            primaryGenreName: "Pop",
            contentAdvisoryRating: "Explicit",
            isStreamable: true
          },
          {
            wrapperType: "track",
            kind: "song",
            artistId: 334854763,
            collectionId: 1484385866,
            trackId: 1484385869,
            artistName: "Kesha",
            collectionName: "High Road",
            trackName: "Raising Hell (feat. Big Freedia)",
            collectionCensoredName: "High Road",
            trackCensoredName: "Raising Hell (feat. Big Freedia)",
            artistViewUrl:
              "https://music.apple.com/us/artist/kesha/334854763?uo=4",
            collectionViewUrl:
              "https://music.apple.com/us/album/raising-hell-feat-big-freedia/1484385866?i=1484385869&uo=4",
            trackViewUrl:
              "https://music.apple.com/us/album/raising-hell-feat-big-freedia/1484385866?i=1484385869&uo=4",
            previewUrl:
              "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/b0/4a/3c/b04a3c05-d38d-9183-ef34-04c9b7fa8c84/mzaf_12378437392253983796.plus.aac.p.m4a",
            artworkUrl30:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/30x30bb.jpg",
            artworkUrl60:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/60x60bb.jpg",
            artworkUrl100:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/100x100bb.jpg",
            collectionPrice: 10.99,
            trackPrice: 1.29,
            releaseDate: "2019-10-24T07:00:00Z",
            collectionExplicitness: "explicit",
            trackExplicitness: "explicit",
            discCount: 1,
            discNumber: 1,
            trackCount: 15,
            trackNumber: 3,
            trackTimeMillis: 169693,
            country: "USA",
            currency: "USD",
            primaryGenreName: "Pop",
            contentAdvisoryRating: "Explicit",
            isStreamable: true
          },
          {
            wrapperType: "track",
            kind: "song",
            artistId: 334854763,
            collectionId: 1484385866,
            trackId: 1484385870,
            artistName: "Kesha",
            collectionName: "High Road",
            trackName: "High Road",
            collectionCensoredName: "High Road",
            trackCensoredName: "High Road",
            artistViewUrl:
              "https://music.apple.com/us/artist/kesha/334854763?uo=4",
            collectionViewUrl:
              "https://music.apple.com/us/album/high-road/1484385866?i=1484385870&uo=4",
            trackViewUrl:
              "https://music.apple.com/us/album/high-road/1484385866?i=1484385870&uo=4",
            previewUrl:
              "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/8d/19/6a/8d196a39-64fa-6f8d-cf54-4d801520c76a/mzaf_17919097302906576811.plus.aac.p.m4a",
            artworkUrl30:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/30x30bb.jpg",
            artworkUrl60:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/60x60bb.jpg",
            artworkUrl100:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/100x100bb.jpg",
            collectionPrice: 10.99,
            trackPrice: 1.29,
            releaseDate: "2020-01-31T08:00:00Z",
            collectionExplicitness: "explicit",
            trackExplicitness: "explicit",
            discCount: 1,
            discNumber: 1,
            trackCount: 15,
            trackNumber: 4,
            trackTimeMillis: 199947,
            country: "USA",
            currency: "USD",
            primaryGenreName: "Pop",
            contentAdvisoryRating: "Explicit",
            isStreamable: true
          },
          {
            wrapperType: "track",
            kind: "song",
            artistId: 334854763,
            collectionId: 1484385866,
            trackId: 1484385873,
            artistName: "Kesha",
            collectionName: "High Road",
            trackName: "Shadow",
            collectionCensoredName: "High Road",
            trackCensoredName: "Shadow",
            artistViewUrl:
              "https://music.apple.com/us/artist/kesha/334854763?uo=4",
            collectionViewUrl:
              "https://music.apple.com/us/album/shadow/1484385866?i=1484385873&uo=4",
            trackViewUrl:
              "https://music.apple.com/us/album/shadow/1484385866?i=1484385873&uo=4",
            previewUrl:
              "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/24/ec/b2/24ecb2db-d968-1284-08bf-77fb96c658d7/mzaf_16760480973040913415.plus.aac.p.m4a",
            artworkUrl30:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/30x30bb.jpg",
            artworkUrl60:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/60x60bb.jpg",
            artworkUrl100:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/100x100bb.jpg",
            collectionPrice: 10.99,
            trackPrice: 1.29,
            releaseDate: "2020-01-31T08:00:00Z",
            collectionExplicitness: "explicit",
            trackExplicitness: "explicit",
            discCount: 1,
            discNumber: 1,
            trackCount: 15,
            trackNumber: 5,
            trackTimeMillis: 213853,
            country: "USA",
            currency: "USD",
            primaryGenreName: "Pop",
            contentAdvisoryRating: "Explicit",
            isStreamable: true
          },
          {
            wrapperType: "track",
            kind: "song",
            artistId: 334854763,
            collectionId: 1484385866,
            trackId: 1484385874,
            artistName: "Kesha",
            collectionName: "High Road",
            trackName: "Honey",
            collectionCensoredName: "High Road",
            trackCensoredName: "Honey",
            artistViewUrl:
              "https://music.apple.com/us/artist/kesha/334854763?uo=4",
            collectionViewUrl:
              "https://music.apple.com/us/album/honey/1484385866?i=1484385874&uo=4",
            trackViewUrl:
              "https://music.apple.com/us/album/honey/1484385866?i=1484385874&uo=4",
            previewUrl:
              "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/17/ee/78/17ee7839-427d-0b60-14e7-9ee059ee426e/mzaf_2725571444469446908.plus.aac.p.m4a",
            artworkUrl30:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/30x30bb.jpg",
            artworkUrl60:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/60x60bb.jpg",
            artworkUrl100:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/100x100bb.jpg",
            collectionPrice: 10.99,
            trackPrice: 1.29,
            releaseDate: "2020-01-31T08:00:00Z",
            collectionExplicitness: "explicit",
            trackExplicitness: "explicit",
            discCount: 1,
            discNumber: 1,
            trackCount: 15,
            trackNumber: 6,
            trackTimeMillis: 201333,
            country: "USA",
            currency: "USD",
            primaryGenreName: "Pop",
            contentAdvisoryRating: "Explicit",
            isStreamable: true
          },
          {
            wrapperType: "track",
            kind: "song",
            artistId: 334854763,
            collectionId: 1484385866,
            trackId: 1484385875,
            artistName: "Kesha",
            collectionName: "High Road",
            trackName: "Cowboy Blues",
            collectionCensoredName: "High Road",
            trackCensoredName: "Cowboy Blues",
            artistViewUrl:
              "https://music.apple.com/us/artist/kesha/334854763?uo=4",
            collectionViewUrl:
              "https://music.apple.com/us/album/cowboy-blues/1484385866?i=1484385875&uo=4",
            trackViewUrl:
              "https://music.apple.com/us/album/cowboy-blues/1484385866?i=1484385875&uo=4",
            previewUrl:
              "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/8f/7f/c9/8f7fc96e-1d8f-80d4-3f97-14c8a2e261aa/mzaf_1073792274928436942.plus.aac.p.m4a",
            artworkUrl30:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/30x30bb.jpg",
            artworkUrl60:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/60x60bb.jpg",
            artworkUrl100:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/100x100bb.jpg",
            collectionPrice: 10.99,
            trackPrice: 1.29,
            releaseDate: "2020-01-31T08:00:00Z",
            collectionExplicitness: "explicit",
            trackExplicitness: "explicit",
            discCount: 1,
            discNumber: 1,
            trackCount: 15,
            trackNumber: 7,
            trackTimeMillis: 240693,
            country: "USA",
            currency: "USD",
            primaryGenreName: "Pop",
            contentAdvisoryRating: "Explicit",
            isStreamable: true
          },
          {
            wrapperType: "track",
            kind: "song",
            artistId: 334854763,
            collectionId: 1484385866,
            trackId: 1484386116,
            artistName: "Kesha",
            collectionName: "High Road",
            trackName:
              "Resentment (feat. Brian Wilson, Sturgill Simpson & Wrabel)",
            collectionCensoredName: "High Road",
            trackCensoredName:
              "Resentment (feat. Brian Wilson, Sturgill Simpson & Wrabel)",
            artistViewUrl:
              "https://music.apple.com/us/artist/kesha/334854763?uo=4",
            collectionViewUrl:
              "https://music.apple.com/us/album/resentment-feat-brian-wilson-sturgill-simpson-wrabel/1484385866?i=1484386116&uo=4",
            trackViewUrl:
              "https://music.apple.com/us/album/resentment-feat-brian-wilson-sturgill-simpson-wrabel/1484385866?i=1484386116&uo=4",
            previewUrl:
              "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/8c/c5/d3/8cc5d33a-943f-1565-7a66-b9957f0cdd77/mzaf_13101547644715644325.plus.aac.p.m4a",
            artworkUrl30:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/30x30bb.jpg",
            artworkUrl60:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/60x60bb.jpg",
            artworkUrl100:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/100x100bb.jpg",
            collectionPrice: 10.99,
            trackPrice: 1.29,
            releaseDate: "2019-12-12T08:00:00Z",
            collectionExplicitness: "explicit",
            trackExplicitness: "explicit",
            discCount: 1,
            discNumber: 1,
            trackCount: 15,
            trackNumber: 8,
            trackTimeMillis: 172227,
            country: "USA",
            currency: "USD",
            primaryGenreName: "Pop",
            contentAdvisoryRating: "Explicit",
            isStreamable: true
          },
          {
            wrapperType: "track",
            kind: "song",
            artistId: 334854763,
            collectionId: 1484385866,
            trackId: 1484386117,
            artistName: "Kesha",
            collectionName: "High Road",
            trackName: "Little Bit of Love",
            collectionCensoredName: "High Road",
            trackCensoredName: "Little Bit of Love",
            artistViewUrl:
              "https://music.apple.com/us/artist/kesha/334854763?uo=4",
            collectionViewUrl:
              "https://music.apple.com/us/album/little-bit-of-love/1484385866?i=1484386117&uo=4",
            trackViewUrl:
              "https://music.apple.com/us/album/little-bit-of-love/1484385866?i=1484386117&uo=4",
            previewUrl:
              "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/8b/d3/95/8bd3955c-d152-7e6b-890f-a814cc694df9/mzaf_3963277220121032774.plus.aac.p.m4a",
            artworkUrl30:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/30x30bb.jpg",
            artworkUrl60:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/60x60bb.jpg",
            artworkUrl100:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/100x100bb.jpg",
            collectionPrice: 10.99,
            trackPrice: 1.29,
            releaseDate: "2020-01-31T08:00:00Z",
            collectionExplicitness: "explicit",
            trackExplicitness: "explicit",
            discCount: 1,
            discNumber: 1,
            trackCount: 15,
            trackNumber: 9,
            trackTimeMillis: 142347,
            country: "USA",
            currency: "USD",
            primaryGenreName: "Pop",
            contentAdvisoryRating: "Explicit",
            isStreamable: true
          },
          {
            wrapperType: "track",
            kind: "song",
            artistId: 334854763,
            collectionId: 1484385866,
            trackId: 1484386118,
            artistName: "Kesha",
            collectionName: "High Road",
            trackName: "Birthday Suit",
            collectionCensoredName: "High Road",
            trackCensoredName: "Birthday Suit",
            artistViewUrl:
              "https://music.apple.com/us/artist/kesha/334854763?uo=4",
            collectionViewUrl:
              "https://music.apple.com/us/album/birthday-suit/1484385866?i=1484386118&uo=4",
            trackViewUrl:
              "https://music.apple.com/us/album/birthday-suit/1484385866?i=1484386118&uo=4",
            previewUrl:
              "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/a3/5b/a3/a35ba3d7-fd84-ac19-12c5-4649bf2cf0f3/mzaf_2157473435052610577.plus.aac.p.m4a",
            artworkUrl30:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/30x30bb.jpg",
            artworkUrl60:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/60x60bb.jpg",
            artworkUrl100:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/100x100bb.jpg",
            collectionPrice: 10.99,
            trackPrice: 1.29,
            releaseDate: "2020-01-31T08:00:00Z",
            collectionExplicitness: "explicit",
            trackExplicitness: "explicit",
            discCount: 1,
            discNumber: 1,
            trackCount: 15,
            trackNumber: 10,
            trackTimeMillis: 176773,
            country: "USA",
            currency: "USD",
            primaryGenreName: "Pop",
            contentAdvisoryRating: "Explicit",
            isStreamable: true
          },
          {
            wrapperType: "track",
            kind: "song",
            artistId: 334854763,
            collectionId: 1484385866,
            trackId: 1484386119,
            artistName: "Kesha",
            collectionName: "High Road",
            trackName: "Kinky (feat. Ke$ha)",
            collectionCensoredName: "High Road",
            trackCensoredName: "Kinky (feat. Ke$ha)",
            artistViewUrl:
              "https://music.apple.com/us/artist/kesha/334854763?uo=4",
            collectionViewUrl:
              "https://music.apple.com/us/album/kinky-feat-ke%24ha/1484385866?i=1484386119&uo=4",
            trackViewUrl:
              "https://music.apple.com/us/album/kinky-feat-ke%24ha/1484385866?i=1484386119&uo=4",
            previewUrl:
              "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/c1/b6/4d/c1b64ddf-611f-76d7-2061-0dc70a5f1528/mzaf_15361581405438850533.plus.aac.p.m4a",
            artworkUrl30:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/30x30bb.jpg",
            artworkUrl60:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/60x60bb.jpg",
            artworkUrl100:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/100x100bb.jpg",
            collectionPrice: 10.99,
            trackPrice: 1.29,
            releaseDate: "2020-01-31T08:00:00Z",
            collectionExplicitness: "explicit",
            trackExplicitness: "explicit",
            discCount: 1,
            discNumber: 1,
            trackCount: 15,
            trackNumber: 11,
            trackTimeMillis: 205293,
            country: "USA",
            currency: "USD",
            primaryGenreName: "Pop",
            contentAdvisoryRating: "Explicit",
            isStreamable: true
          },
          {
            wrapperType: "track",
            kind: "song",
            artistId: 334854763,
            collectionId: 1484385866,
            trackId: 1484386120,
            artistName: "Kesha",
            collectionName: "High Road",
            trackName: "The Potato Song (Cuz I Want To)",
            collectionCensoredName: "High Road",
            trackCensoredName: "The Potato Song (Cuz I Want To)",
            artistViewUrl:
              "https://music.apple.com/us/artist/kesha/334854763?uo=4",
            collectionViewUrl:
              "https://music.apple.com/us/album/the-potato-song-cuz-i-want-to/1484385866?i=1484386120&uo=4",
            trackViewUrl:
              "https://music.apple.com/us/album/the-potato-song-cuz-i-want-to/1484385866?i=1484386120&uo=4",
            previewUrl:
              "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/15/59/36/155936d2-a8a5-9b79-413d-569d10798429/mzaf_17936263493253388920.plus.aac.p.m4a",
            artworkUrl30:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/30x30bb.jpg",
            artworkUrl60:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/60x60bb.jpg",
            artworkUrl100:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/100x100bb.jpg",
            collectionPrice: 10.99,
            trackPrice: 1.29,
            releaseDate: "2020-01-31T08:00:00Z",
            collectionExplicitness: "explicit",
            trackExplicitness: "explicit",
            discCount: 1,
            discNumber: 1,
            trackCount: 15,
            trackNumber: 12,
            trackTimeMillis: 213867,
            country: "USA",
            currency: "USD",
            primaryGenreName: "Pop",
            contentAdvisoryRating: "Explicit",
            isStreamable: true
          },
          {
            wrapperType: "track",
            kind: "song",
            artistId: 334854763,
            collectionId: 1484385866,
            trackId: 1484386122,
            artistName: "Kesha",
            collectionName: "High Road",
            trackName: "BFF (feat. Wrabel)",
            collectionCensoredName: "High Road",
            trackCensoredName: "BFF (feat. Wrabel)",
            artistViewUrl:
              "https://music.apple.com/us/artist/kesha/334854763?uo=4",
            collectionViewUrl:
              "https://music.apple.com/us/album/bff-feat-wrabel/1484385866?i=1484386122&uo=4",
            trackViewUrl:
              "https://music.apple.com/us/album/bff-feat-wrabel/1484385866?i=1484386122&uo=4",
            previewUrl:
              "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/7b/52/80/7b528056-df33-97c2-76f0-4b462438fbef/mzaf_15752048661430049128.plus.aac.p.m4a",
            artworkUrl30:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/30x30bb.jpg",
            artworkUrl60:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/60x60bb.jpg",
            artworkUrl100:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/100x100bb.jpg",
            collectionPrice: 10.99,
            trackPrice: 1.29,
            releaseDate: "2020-01-31T08:00:00Z",
            collectionExplicitness: "explicit",
            trackExplicitness: "explicit",
            discCount: 1,
            discNumber: 1,
            trackCount: 15,
            trackNumber: 13,
            trackTimeMillis: 251813,
            country: "USA",
            currency: "USD",
            primaryGenreName: "Pop",
            contentAdvisoryRating: "Explicit",
            isStreamable: true
          },
          {
            wrapperType: "track",
            kind: "song",
            artistId: 334854763,
            collectionId: 1484385866,
            trackId: 1484386123,
            artistName: "Kesha",
            collectionName: "High Road",
            trackName: "Father Daughter Dance",
            collectionCensoredName: "High Road",
            trackCensoredName: "Father Daughter Dance",
            artistViewUrl:
              "https://music.apple.com/us/artist/kesha/334854763?uo=4",
            collectionViewUrl:
              "https://music.apple.com/us/album/father-daughter-dance/1484385866?i=1484386123&uo=4",
            trackViewUrl:
              "https://music.apple.com/us/album/father-daughter-dance/1484385866?i=1484386123&uo=4",
            previewUrl:
              "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/dc/0c/61/dc0c61b7-5c44-3adf-818d-9e4c68ad2bba/mzaf_5301763213679816594.plus.aac.p.m4a",
            artworkUrl30:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/30x30bb.jpg",
            artworkUrl60:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/60x60bb.jpg",
            artworkUrl100:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/100x100bb.jpg",
            collectionPrice: 10.99,
            trackPrice: 1.29,
            releaseDate: "2020-01-31T08:00:00Z",
            collectionExplicitness: "explicit",
            trackExplicitness: "explicit",
            discCount: 1,
            discNumber: 1,
            trackCount: 15,
            trackNumber: 14,
            trackTimeMillis: 157253,
            country: "USA",
            currency: "USD",
            primaryGenreName: "Pop",
            contentAdvisoryRating: "Explicit",
            isStreamable: true
          },
          {
            wrapperType: "track",
            kind: "song",
            artistId: 334854763,
            collectionId: 1484385866,
            trackId: 1484386124,
            artistName: "Kesha",
            collectionName: "High Road",
            trackName: "Chasing Thunder",
            collectionCensoredName: "High Road",
            trackCensoredName: "Chasing Thunder",
            artistViewUrl:
              "https://music.apple.com/us/artist/kesha/334854763?uo=4",
            collectionViewUrl:
              "https://music.apple.com/us/album/chasing-thunder/1484385866?i=1484386124&uo=4",
            trackViewUrl:
              "https://music.apple.com/us/album/chasing-thunder/1484385866?i=1484386124&uo=4",
            previewUrl:
              "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/17/cb/87/17cb879c-2401-8fa3-e8f0-3d8460d7d3a9/mzaf_604827042135135891.plus.aac.p.m4a",
            artworkUrl30:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/30x30bb.jpg",
            artworkUrl60:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/60x60bb.jpg",
            artworkUrl100:
              "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/64/69/a9/6469a996-9a78-819d-3967-2c00a2a5c33a/source/100x100bb.jpg",
            collectionPrice: 10.99,
            trackPrice: 1.29,
            releaseDate: "2020-01-31T08:00:00Z",
            collectionExplicitness: "explicit",
            trackExplicitness: "explicit",
            discCount: 1,
            discNumber: 1,
            trackCount: 15,
            trackNumber: 15,
            trackTimeMillis: 221347,
            country: "USA",
            currency: "USD",
            primaryGenreName: "Pop",
            contentAdvisoryRating: "Explicit",
            isStreamable: true
          }
        ]
      };
    },
    millisToMinutesAndSeconds(millis) {
      const minutes = Math.floor((millis / 1000 / 60) << 0);
      const seconds = Math.floor((millis / 1000) % 60);

      return minutes + ":" + seconds;
    }
  }
};
</script>

<style>
.album-image {
  float: left;
}
.album-info {
  display: inline;
}

.album-name {
  display: inline;
}
.show-btn {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
