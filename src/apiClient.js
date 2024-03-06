import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://your-production-url.com"
    : "http://localhost:3005";

console.log(baseURL);
const axiosClient = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    let res = error.response;
    if (res && res.status === 401) {
      // Redirect to login page if user is not authenticated
      window.location.href = "/login";
    }
    console.error("Looks like there was a problem. Status Code: " + res.status);
    return Promise.reject(error);
  }
);

// axiosClient.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     let res = error.response;
//     if (res.status == 401) {
//       window.location.href = axiosClient.baseURL + "/login";
//     }
//     console.error("Looks like there was a problem. Status Code: " + res.status);
//     return Promise.reject(error);
//   }
// );

export default axiosClient;
