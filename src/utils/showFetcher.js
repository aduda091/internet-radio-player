import axios from "axios";

const backendUrls = {
    emisijePovijestCetvrtkom: "https://parsehub.com/api/v2/projects/tQTfkFbKW7mw/last_ready_run/data?api_key=tT6q4g4kt5JT",
};

const showFetcher = showKey => {
    const targetUrl = backendUrls[showKey];
    return new Promise((resolve, reject) => {
        axios.get(targetUrl).then((res) => {
          const urls = res.data[showKey];
          resolve(urls);
        });
      });
};

export default showFetcher;