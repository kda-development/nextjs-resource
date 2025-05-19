/* eslint-disable no-undef */
/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import Cookies from "js-cookie";
import config from "./index";

const constan = {
  token: "appsname-token",
  profile: "appsname-profile",
  urlRefresh: "auth/refresh-token",
  pathLogin: '/login'
};
const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = config.apiUrl;
axiosInstance.defaults.headers.common["Content-Type"] = "application/json";
axiosInstance.defaults.headers.common.Authorization = `Bearer ${Cookies.get(
  constan?.token
)}`;
const pendingRequests = [];
let isRefreshingToken = false;
const fnLogout = () => {
  localStorage.setItem(constan?.profile, "");
  Cookies.remove(constan?.token);
  Cookies.remove("is_secure");
  window.location.replace(constan?.pathLogin);
};

const setToken = (token) => {
  if (token) {
    Cookies.set(constan?.token, token);
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common.Authorization;
  }
};

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      if (!isRefreshingToken) {
        isRefreshingToken = true;
        const refreshToken = Cookies.get(constan?.token);
        try {
          return axios
            .post(
              `${config.apiUrl + constan?.urlRefresh}`,
              {
                token: `Bearer ${refreshToken}`,
              },
              {
                headers: {
                  Authorization: `Bearer ${refreshToken}`,
                },
              }
            )
            .then((res) => {
              const accessToken = res.data?.result?.token;
              Cookies.set(constan?.token, accessToken);
              setToken(accessToken);
              // Process pending requests and wire responses back through promise.
              if (pendingRequests.length > 0) {
                pendingRequests.forEach((pendingRequest) => {
                  const updatedRequest = { ...pendingRequest.request };

                  updatedRequest.headers.Authorization = `Bearer ${accessToken}`;

                  axios(updatedRequest)
                    .then((res) => pendingRequest.resolve(res))
                    .catch((err) => pendingRequest.reject(err));
                });
              }

              // Update auth and process original request
              pendingRequests.length = 0;
              isRefreshingToken = false;

              const updatedRequest = { ...error.config };
              updatedRequest.headers.Authorization = `Bearer ${accessToken}`;

              return axios(updatedRequest);
            })
            .catch((error) => {
              console.error("error refresh", error);
              if (
                error.response.data.message ===
                  "Token could not be parsed from the request." ||
                error.response.data.message ===
                  "Token could not be parsed from the request." ||
                error.response.data.message ===
                  "Refresh token tidak ditemukan" ||
                error.response.data.message ===
                  "The token has been blacklisted" ||
                error.response.status === 401
              ) {
                fnLogout();
                Cookies.remove(constan?.token);
              } else {
                return Promise.reject(error);
              }
            });
        } catch (error) {
          return Promise.reject(error);
        }
      } else {
        console.error("interceptors.isRefreshingToken: true");
        return new Promise((resolve, reject) => {
          pendingRequests.push({
            resolve,
            reject,
            request: error.config,
          });
        });
      }
    }
    return Promise.reject(error);
  }
);
const defaultPrefix = "";

export default {
  get: (url, params, prefix) =>
    axiosInstance({
      method: "get",
      url: `${prefix || defaultPrefix}${url}`,
      params,
    }),
  post: (url, data, params, prefix) =>
    axiosInstance({
      method: "post",
      url: `${prefix || defaultPrefix}${url}`,
      data,
      params,
    }),
  put: (url, data, params, prefix) =>
    axiosInstance({
      method: "put",
      url: `${prefix || defaultPrefix}${url}`,
      data,
      params,
    }),
  delete: (url, data, params, prefix) =>
    axiosInstance({
      method: "delete",
      url: `${prefix || defaultPrefix}${url}`,
      data,
      params,
    }),
  download: (url, data, params, prefix) =>
    axiosInstance({
      method: "post",
      responseType: "blob",
      url: `${prefix || defaultPrefix}${url}`,
      data,
      params,
    }),
  setToken,
  fnLogout,
};
