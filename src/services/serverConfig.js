import axios from "axios";

export const serverApi = axios.create({
  baseURL: "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com",
});
