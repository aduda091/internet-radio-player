import axios from "axios";

const backendUrl = "https://hrt1-latest-news.glitch.me/latest-news";


const latestNewsFetcher = () => {
  const targetUrl = backendUrl;
  return new Promise((resolve, reject) => {
    axios.get(targetUrl).then((res) => {
      const urls = res.data;
      resolve(urls);
    });
  });
};

export default latestNewsFetcher;
