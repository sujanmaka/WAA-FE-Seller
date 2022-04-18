import axios from "axios";
import { AppUtils } from "../utils/appUtils";
import { IS_SESSION_EXPIRED } from "../utils/constants";
import { SessionStorage } from "../utils/storage/sessionStorage";
 
export const LOCAL_CONSTANTS = {
 BASE_URL: "http://localhost:8080/api/v1/",
};
 
const BASE_URL = LOCAL_CONSTANTS.BASE_URL;
 
const loginUser = { id : 1};
 
export const API_URL = {
 login: BASE_URL + "auth",
 user: BASE_URL + "users",
 changePassword: BASE_URL + "change-password",
 logout: BASE_URL + "logout",
};
 
const WAA = axios.create({
 baseURL: BASE_URL,
 headers: {
   Accept: "application/json",
   "Content-Type": "application/json",
 },
});
 
WAA.interceptors.request.use(
 (config) => {
   if (config.baseURL === BASE_URL && !config.headers.Authorization) {
     var authToken = AppUtils.getAuthToken();
     if (authToken) {
       config.headers.Authorization = authToken;
     }
   }
   return config;
 },
 (error) => Promise.reject(error)
);
 
WAA.interceptors.response.use(
 (response) => {
   return response;
 },
 (error) => {
   if (error.response) {
     if (error.response.status === 401 || error.response.status === 403) {
       AppUtils.removeUserRef();
       SessionStorage.setItem(IS_SESSION_EXPIRED, "true");
       window.location.href = "/";
     }
   } else {
     return Promise.reject(error);
   }
 }
);
 
export default WAA;