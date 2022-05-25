import axios from "axios";

const url = "http://localhost:3000/";

export const API = axios.create({
  baseURL: url,
});
