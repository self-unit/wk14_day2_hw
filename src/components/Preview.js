import React from 'react';

const Preview = ({preview}) => {

    return(
        <audio controls>
            <source src={preview} type="audio/x-m4a" />
        </audio>
    );
}

export default Preview;