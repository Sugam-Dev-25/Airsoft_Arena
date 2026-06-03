import axios from "axios";

const API = axios.create({
  baseURL: "https://subhadeep.ahaanmedia.com/wp-json/wp/v2",
});

export default API;