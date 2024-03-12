import React, { useState } from 'react';
import SongForm from './SongForm';
import SongDetails from './SongDetail';
import SongArtist from './SongArtist';

const SongSearch = () => {
    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = data => {
        console.log(data);
        setSearch(data);
    }

    return ( 
        <div>
            <h2>Song Search</h2>
            <SongForm handleSearch={handleSearch}/>
            <SongDetails search={search} lyric={lyric} bio={bio}/>
            <SongArtist/>
        </div>

     );
}
 
export default SongSearch;