import React from "react";

const Lyrics = ({ lyrics }) => {
  return (
    <div className="lyrics">
      <p className="lyrics-wrap">{lyrics.lyrics}</p>
    </div>
  );
};

export default Lyrics;
