import React from "react";

const Artist = ({ artist, song }) => {
  return (
    <div className="artist">
      <h1>
        {artist.strArtist} - {song}
      </h1>
      <div className="artist-content">
        <div className="artist-content_image">
          <img src={artist.strArtistThumb} alt={artist.strArtist} />
        </div>
        <div className="artist-content_info">
          <p>
            <b>Genre:</b> {artist.strGenre}
          </p>
          <p>
            <b>Country:</b> {artist.strCountry}
          </p>
          <p>
            <b>Formed:</b> {artist.intFormedYear}
          </p>
          <p>
            <b>Active:</b> {artist.intBornYear} -
            {artist.intDiedYear === null ? "Present" : artist.intDiedYear}
          </p>
          <p>
            <b>Website:</b>
            {artist.strWebsite === null ? "No info" : artist.strWebsite}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Artist;
