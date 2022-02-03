import axios from "axios";
require("dotenv").config();
const token = localStorage.access_token;
axios.defaults.headers.common = { Authorization: `bearer ${token}` };
const instance = axios.create({
  baseURL: "https://api.ciptopup.ng",
});

export default instance;
