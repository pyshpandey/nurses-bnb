import axios from "axios";
import { apiConstants } from "../../constants/api_constants";

export function requestCreateUserDetails(data) {
  return axios.post(apiConstants.CREATE_USER_DETAILS, data.user);
}

export function requestOtpCheck(data) {
  return axios.post(apiConstants.CHECK_OTP, data);
}

export function requestCompleteProfile(data) {
  return axios.put(apiConstants.USER_UPDATE, data);
}

export function requestFetchUserDetails(){
  return axios.get(apiConstants.FETCH_USER_DETAIL);
}

export function requestUpdateUserDetails(data){
  return axios.put(apiConstants.FETCH_USER_DETAIL, {...data});
}

export function requestUpdateUserProfileImage(image) {
  return axios.post(apiConstants.FETCH_USER_DETAIL, image);
}
