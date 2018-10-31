import React from 'react';

import Preview from "./Preview";
import Picture from "./Picture";

const Song = ({title, artist, album, preview, picture}) => {

    return(
        <div className="song">
        <p>Title: {title}</p>
        <p>Artist: {artist}</p>
        <p>Album: {album}</p>
            <Picture picture={picture}></Picture>
            <br></br>
            <Preview preview={preview.attributes.href}></Preview>
            <hr></hr>
        </div>
    );
}

export default Song;