import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Loader from "./components/Loader";
import "./css/App.css";
import { http } from "./helpers/fetchData";

function App() {
  // ----------------------------------
  // STATE
  // ----------------------------------
  // search state, contains artist name and song name
  const [search, setSearch] = React.useState(null);
  // artistInfo contains artist response from the API
  const [artistInfo, setArtistInfo] = React.useState(null);
  // songLyrics contains lyrics response from the API
  const [songLyrics, setSongLyrics] = React.useState(null);
  // loader will show loader while we get response from API
  const [loader, setLoader] = React.useState(false);

  // ----------------------------------
  // EFFECT
  // ----------------------------------
  React.useEffect(() => {
    if (search === null) return;

    const getData = async () => {
      const { artist, song } = search;

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let lyricsUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      setLoader(true);

      const [artistRes, songRes] = await Promise.all([
        http(artistUrl),
        http(lyricsUrl),
      ]);

      setArtistInfo(artistRes);
      setSongLyrics(songRes);
      setLoader(false);
    };
    getData();
  }, [search]);

  // HANDLE SEARCH
  // gets artist name and song name from Search form
  const handleSearch = (data) => {
    setSearch(data);
  };

  return (
    <div className="app">
      <div>
        <Header title="Lyrics Finder" handleSearch={handleSearch} />
        {loader ? (
          <Loader />
        ) : (
          <Content search={search} artist={artistInfo} lyrics={songLyrics} />
        )}
      </div>
    </div>
  );
}

export default App;
