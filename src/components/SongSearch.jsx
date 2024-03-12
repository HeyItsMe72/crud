import React, { useEffect, useState } from 'react';
import SongForm from './SongForm';
import SongDetails from './SongDetail';
import SongArtist from './SongArtist';
import {helpHttp} from '../helpers/helpHttp';


const SongSearch = () => {
    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(search === null) return; 
        const fetchData = async () => {
            const {artist, song} = search; 
            let artistURL = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist.toLowerCase()}`,
            songURL = `https://api.lyrics.ovh/v1/${artist}/${song}`;

            setLoading(true);

            const [artistRes, songRes] = await Promise.all([
                helpHttp().get(artistURL),
                helpHttp().get(songURL)
            ])
            console.log(artistRes);
            console.log(artistURL);
            console.log(songRes);
            setBio(artistRes);
            setLyric(songRes);
            setLoading(false);
        }; fetchData();
    }, [search]);

    const handleSearch = data => {
        console.log(data);
        setSearch(data);
    }

    return ( 
        <div>
            <h2>Song Search</h2>
            <SongForm handleSearch={handleSearch}/>
            <SongDetails search={search} lyric={lyric} bio={bio}/>
        </div>

     );
}
 
export default SongSearch;