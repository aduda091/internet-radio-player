import axios from "axios";

const backendUrl = "https://croatian-radio-next.vercel.app/api/legacy/latest-news";


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
