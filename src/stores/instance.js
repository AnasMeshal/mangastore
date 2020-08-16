import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:8000",
  baseURL: "https://gentle-shore-83533.herokuapp.com",
});

export default instance;
