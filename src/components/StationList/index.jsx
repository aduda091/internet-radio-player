import React from "react";

import stations from "../../constants/stations";

const StationList = (props) => {
    const renderList = Object.entries(stations).map(([station, url]) => {
        return (
            <div className="station-item" key={url} onClick={() => props.onStationChange(station, url)}>
                {station}
            </div>
        );
    });
    return (
        <>
            <h2 className="station-heading">Postaje</h2>
            <div className="station-list">{renderList}</div>
        </>
    );
};

export default StationList;
