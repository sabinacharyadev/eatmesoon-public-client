import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = import.meta.env.PROD
  ? import.meta.env.VITE_PROD_BASE_URL
  : import.meta.env.VITE_LOCAL_BASE_URL;

const USER_ENDPOINT = "/api/v1/users";

const USER_API_URL = `${BASE_URL}${USER_ENDPOINT}`;

// PUBLIC ROUTES
// Signup | CREATE | POST
export const createUser = (userObject) => {
  const response = axios
    .post(USER_API_URL, userObject)
    .then((res) => res.data)
    .catch((error) => {
      toast(error.message);
      console.log(error);
    });
  return response;
};

// Verify | PATCH
export const verifyUserAxios = (patchObject) => {
  const response = axios
    .patch(USER_API_URL, patchObject)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });
  return response;
};

// Login | POST
export const loginUserAxios = (loginObject) => {
  const response = axios
    .post(USER_API_URL + "/login", loginObject)
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return response;
};

// Private EndPoint
// GET User | GET
export const getUserAxios = () => {
  const response = axios
    .get(USER_API_URL, {
      headers: {
        Authorization: sessionStorage.getItem("accessJWT"),
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));

  return response;
};
