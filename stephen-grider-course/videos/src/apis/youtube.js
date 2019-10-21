import axios from "axios";

const KEY = "AIzaSyCQPCoweT8Wc6G9Os3ecmuQ5i-uuaA06BI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
