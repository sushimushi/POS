import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://your-production-url.com"
    : "http://localhost:3000";

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
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJhM2Y4NjVhLThhZGEtNDBiMi1iNTA0LWYwZDU4Y2Y5ZjdmNSIsImlhdCI6MTcwOTQ1NzcwMiwiZXhwIjoxNzA5NDc5MzAyfQ.o7-3g4IubuFwFCp1chUCW7_om5YLYa8pDV5xlN3wRVM`;
    if (authToken) {
      // config.headers.Authorization = `Bearer ${authToken}`;
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
    if (res.status == 401) {
      window.location.href = axiosClient.baseURL + "/login";
    }
    console.error("Looks like there was a problem. Status Code: " + res.status);
    return Promise.reject(error);
  }
);

export default axiosClient;
