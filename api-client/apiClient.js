import axios from "axios";

const apiClient = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://simple-crud-app-api.herokuapp.com"
      : "http://localhost:5000",
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
  },
});

export default apiClient;
