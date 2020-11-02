import axios from "axios";
import { LoginUtil, TOKEN_KEY } from "../utils";

//import utils
import { errorMessage, successMessage } from "../utils/messages";

//var cors = require("cors");
// import cors  from 'cors';
//cors.use(cors());

// axios.defaults.baseURL = "http://2.186.229.181:7580/api";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "http://localhost:3000"
axios.defaults.headers.common["Access-Control-Allow-Methods"] = "HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE";

// axios.defaults.headers.common["Access-Control-Allow-Headers"] = "Content-Type, Authorization";

// axios.defaults.headers.common["X-Auth "] = TOKEN_KEY;

console.log(axios.defaults.headers.common);

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("Logging the", error);
    errorMessage("An unexpected error occurred, Try again");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
