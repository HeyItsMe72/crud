import React from 'react';

const SongArtist = ({artist}) => {
    return ( 
        <section>
            <h3>{artist.strArtist}</h3>
            <img src={artist.strArtistThumb} alt={artist.strArtist} />
            <p>{artist.intBornYear}-{artist.intdeadYear || "Present"}</p>
            <p>{artist.strCountry}</p>
            <p>{artist.strGenre}-{artist.strStyle}</p>
            <a href={`https://${artist.strWebSite}`} target='_blank' rel='noreferer'>
                Official Web Site
            </a>
            <p>{artist.strBiographyEN}</p>
        </section>
     );
}
 
export default SongArtist;