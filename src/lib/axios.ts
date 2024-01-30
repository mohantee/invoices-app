import Axios from "axios";

export const axios = Axios.create({
  baseURL: "http://localhost:5173",
});

axios.interceptors.response.use((response) => response.data);
