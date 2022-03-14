import React from "react";
import Artist from "./Artist";
import Lyrics from "./Lyrics";
import Message from "./Message";
import SearchSomething from "./SearchSomething";

const Content = ({ search, artist, lyrics }) => {
  if (!artist || !lyrics) return <SearchSomething />;
  return (
    <div className="content">
      {artist.artists ? (
        <Artist artist={artist.artists[0]} song={search.song} />
      ) : (
        <Message msg={`Cant find artist ${search.artist} `} />
      )}

      {lyrics.error ? (
        <Message
          msg={`Error: ${lyrics.status} - song ${search.song} ${lyrics.statusText} `}
        />
      ) : (
        <Lyrics lyrics={lyrics} />
      )}
    </div>
  );
};

export default Content;
