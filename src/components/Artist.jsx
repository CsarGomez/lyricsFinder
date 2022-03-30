import React from "react";

const Artist = ({ artist }) => {
  return (
    <div className="artist">
      <h2>{artist.strArtist}</h2>
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
            <b>Website: </b>
            {artist.strWebsite ? (
              <a
                href={`http://${artist.strWebsite}`}
                target="_blank"
                rel="noreferrer"
              >
                Official Website
              </a>
            ) : (
              " No website info"
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Artist;
