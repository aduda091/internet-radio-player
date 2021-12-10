import axios from "axios";

const backendUrls = {
    emisijePovijestCetvrtkom: "https://hrt1-latest-news.glitch.me/history"
};

const showFetcher = showKey => {
    const targetUrl = backendUrls[showKey];
    return new Promise((resolve, reject) => {
        axios.get(targetUrl).then(res => {
            const urls = res.data;
            resolve(urls);
        });
    });
};

export default showFetcher;
