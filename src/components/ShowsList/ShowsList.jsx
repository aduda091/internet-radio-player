import React, { useState, useEffect } from "react";
// import showFetcher from "../../utils/showFetcher";
import showsMockData from "../../mock/shows";

const showsList = [
    {
        name: "Povijest četvrtkom",
        urlKey: "emisijePovijestCetvrtkom",
        showList: showsMockData.emisijePovijestCetvrtkom
    }
]

const ShowsList = props => {
    const [shows, setShows] = useState(showsList);

    /*
    useEffect(() => {
        const fetchUrls = async (urlKey) => {
            const showUrls = await showFetcher(urlKey);
            return showUrls;
        };

        shows.forEach(async show => {
            const showUrls = await fetchUrls(show.urlKey);
            show.showList = showUrls;

            const updatedShows = {...shows, ...show};
            setShows(updatedShows);
        })
        
        
    }, []);
    */
    
    const renderList = showList => showList.map(({name, show_url}) => {
        return (
            <div className="station-item" key={show_url} onClick={() => props.onStationChange(name, show_url)}>
                {name}
            </div>
        );
    });

    const renderShows = shows.map(show => {
        return (
            <div key={show.name}>
                <h4>{show.name}</h4>
                {show.showList ? renderList(show.showList) : "Učitavanje..."}
            </div>
        )
    })

    return (
        <>
            <h2 className="station-heading">Emisije</h2>
            <div className="station-list">
                {shows && renderShows}
            </div>
        </>
    );
};

export default ShowsList;
