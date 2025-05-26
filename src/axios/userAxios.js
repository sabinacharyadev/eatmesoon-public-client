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
