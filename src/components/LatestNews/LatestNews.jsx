import React, { useState, useEffect } from "react";
import latestNewsFetcher from "../../utils/latestNewsFetcher";

const channels = [
    {
        name: "Zadnje vijesti HR1",
        urlKey: "hr1NewsUrl"
    },
    {
        name: "Županijski dnevnik Pula",
        urlKey: "pulaNewsUrl"
    }
];

const LatestNews = props => {
    const [urls, setUrls] = useState({});
    useEffect(() => {
        const fetchUrl = async () => {
            const newsUrls = await latestNewsFetcher();
            setUrls(newsUrls);
        };
        fetchUrl();
    }, []);

    const renderLatestNews = channels.map(({ name, urlKey }) => (
        <div key={urlKey} className="station-item latest-news" onClick={() => props.onLatestNewsClick(name, urls[urlKey])}>
            {name}
        </div>
    ));

    if (Object.keys(urls).length === 0) {
        return null;
    }
    return <>{renderLatestNews}</>;
};

export default LatestNews;
