import React from "react";

import stations from "../../constants/stations";

const StationList = (props) => {
    const renderList = stations.map(({name, url}) => {
        return (
            <div className="station-item" key={url} onClick={() => props.onStationChange(name, url)}>
                {name}
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
