import axios from "axios";
import { apiConstants } from "../../constants/api_constants";

export function requestUserLogin(data) {
  return axios.post(apiConstants.USER_LOGIN_CHECK,  { ...data });
}
