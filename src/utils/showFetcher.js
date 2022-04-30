import axios from "axios";

const backendUrls = {
    emisijePovijestCetvrtkom: "https://croatian-radio-next.vercel.app/api/legacy/history"
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
