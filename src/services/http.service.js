import axios from "axios";

const http = axios.create({
  baseURL: "http://192.168.0.107:3000",
});
export default http;
