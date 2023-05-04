import axios from "axios";

// should come from env variables
const API_URL = "https://jsonplaceholder.typicode.com";

export const ApiInstance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
