import React, {useEffect, useState} from 'react';

import {apiService} from "../../services/apiService";
import {url} from "../../constants/urls";
import Album from "./Album";

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        apiService.get(url.albums.base).then(({data})=> setAlbums(data));
    }, []);
    return (
        <div>
            {
                albums.map(album => <Album key={album.id} album={album}/>)
            }
        </div>
    );
};

export default Albums;