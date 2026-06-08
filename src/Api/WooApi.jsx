import axios from "axios";

const WooAPI = axios.create({
  baseURL: "https://subhadeep.ahaanmedia.com/wp-json/wc/store/v1",
});

export default WooAPI;