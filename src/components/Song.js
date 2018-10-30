import React from 'react';

import Preview from "./Preview";
import Picture from "./Picture";

const Song = ({title, artist, album, preview, picture}) => {

    return(
        <div>
        <p>Title: {title}</p>
        <p>Artist: {artist}</p>
        <p>Album: {album}</p>
            <Picture picture={picture}></Picture>
            <Preview preview={preview.attributes.href}></Preview>
        </div>
    );
}

export default Song;