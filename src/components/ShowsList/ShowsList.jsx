import React, { useState, useEffect } from "react";
import showFetcher from "../../utils/showFetcher";
//import showsMockData from "../../mock/shows";

const showsList = [
    {
        name: "Povijest četvrtkom",
        urlKey: "emisijePovijestCetvrtkom",
        showList: []
    }
];

const ShowsList = props => {
    const [shows, setShows] = useState(showsList);

    useEffect(() => {
        const fetchUrls = async urlKey => {
            const showUrls = await showFetcher(urlKey);
            return showUrls;
        };

        shows.forEach(async show => {
            const showUrls = await fetchUrls(show.urlKey);
            const showsCopy = [...shows];
            const showCopy = {...show};
            showCopy.showList = showUrls;
            const currentShowId = showsCopy.findIndex(s => s.urlKey === show.urlKey);
            showsCopy.splice(currentShowId, 1, showCopy);
            setShows(showsCopy);
        });
    }, []);

    const renderList = showList =>
        showList.map(({ title, audioFile, id }) => {
            return (
                <div className="station-item" key={id} onClick={() => props.onStationChange(title, audioFile)}>
                    {title}
                </div>
            );
        });

    const renderShows = shows ? shows.map(show => {
        return (
            <div key={show.name}>
                <h4>{show.name}</h4>
                {show.showList && show.showList.length ? renderList(show.showList) : "Učitavanje..."}
            </div>
        );
    }) : null;

    return (
        <>
            <h2 className="station-heading">Emisije</h2>
            <div className="station-list">{renderShows}</div>
        </>
    );
};

export default ShowsList;
