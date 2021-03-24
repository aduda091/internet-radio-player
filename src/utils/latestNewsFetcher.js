import axios from "axios";

const hrtPageUrl = "https://hrt1-latest-news.glitch.me/latest-news";

const latestNewsFetcher = () => {
  const targetUrl = hrtPageUrl;
  return new Promise((resolve, reject) => {
    axios.get(targetUrl).then((res) => {
      const url = res.data.url;
      resolve(url);
    });
  });
};

export default latestNewsFetcher;
