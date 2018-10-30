import React from 'react';

import Song from "./Song";

const TopChartList = ({charts}) => {

    const chartItems = charts.map (data =>
        <Song key={data.id.attributes['im:id']} title={data.title.label} artist={data['im:artist'].label} album={data['im:collection']['im:name'].label} preview={data.link[1]} picture={data['im:image'][2]}></Song>
        )

    return(
        <div className="top-charts-list">
            {chartItems}
        </div>
    );

}

export default TopChartList;