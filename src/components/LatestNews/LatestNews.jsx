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

const cachedUrls = localStorage.getItem("newsUrls") ? JSON.parse(localStorage.getItem("newsUrls")) : {};

const LatestNews = props => {
    const [urls, setUrls] = useState(cachedUrls);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchUrls = async () => {
            const newsUrls = await latestNewsFetcher();
            localStorage.setItem("newsUrls", JSON.stringify(newsUrls));
            setUrls(newsUrls);
            setIsLoading(false);
        };
        fetchUrls();
    }, []);

    const renderLatestNews = channels.map(({ name, urlKey }) => (
        <div key={urlKey} className={`station-item latest-news ${isLoading ? "cached" : ""}`} onClick={() => props.onLatestNewsClick(name, urls[urlKey])}>
            {name}
        </div>
    ));

    if (Object.keys(urls).length === 0) {
        return null;
    }
    return <>{renderLatestNews}</>;
};

export default LatestNews;
