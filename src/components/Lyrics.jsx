import React from "react";

const Lyrics = ({ lyrics, song }) => {
  return (
    <div className="lyrics">
      <h2>{song}</h2>
      <p className="lyrics-wrap">{lyrics.lyrics}</p>
    </div>
  );
};

export default Lyrics;
