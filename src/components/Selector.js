import React from 'react';

const Selector = ({charts, onGenreSelected}) => {

    const genres = charts.feed.entry.map((genre, index) => {
        return <option value={index} key={index}>{genre.category.attributes.label}</option>
    })

    function handleChange(event){
        onGenreSelected(event.target.value);
    }

    return(
        <select id="genre-selector" defaultvalue="default" onChange={handleChange}>
        <option disabled value="default">Choose a Genre... </option>
        {genres}
        </select>
    );
}

export default Selector;
