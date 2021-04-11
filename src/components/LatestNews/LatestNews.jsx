import React, { useState, useEffect } from "react";
import latestNewsFetcher from "../../utils/latestNewsFetcher";

const name = "Zadnje vijesti";

const LatestNews = (props) => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    const fetchUrl = async () => {
      const newsUrl = await latestNewsFetcher();
      setUrl(newsUrl);
    };
    fetchUrl();
  }, []);

  if (!url) {
      return null;
  }
  return (
    <div
      className="station-item latest-news"
      onClick={() => props.onLatestNewsClick(name, url)}
    >
      {name}
    </div>
  );
};

export default LatestNews;
