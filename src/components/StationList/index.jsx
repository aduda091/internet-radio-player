import React from "react";

import stations from "../../constants/stations";
import LatestNews from "../LatestNews/LatestNews";

const StationList = (props) => {
    const renderList = stations.map(({name, url, mount}) => {
        return (
            <div className="station-item" key={url} onClick={() => props.onStationChange(name, url, mount)}>
                {name}
            </div>
        );
    });
    return (
        <>
            <h2 className="station-heading">Postaje</h2>
            <div className="station-list">
                {renderList}
                <LatestNews onLatestNewsClick={props.onStationChange} />
            </div>
        </>
    );
};

export default StationList;
