import React from 'react';

const Picture = ({picture}) => {

    return(
        <img src={picture.label}></img>
    );
}

export default Picture;