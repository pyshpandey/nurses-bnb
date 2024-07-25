import axios from "axios";
import { apiConstants } from "../../constants/api_constants";

export function requestCreateBasicInfo(data) {
  return axios.post(apiConstants.CREATE_BASIC_INFO, { ...data });
}

//Create Property Info
export function requestCreatePropertyInfo(data) {
  return axios.put(apiConstants.CREATE_PROPERTY_INFO, { ...data });
}

//Load Property Info
export const requestLoadPropertyInfo = () => {
  return axios.get(apiConstants.LOAD_PROPERTY_INFO);
};

//Create Lease Signor
export const requestCreateLeaseSignor = (data) => {
  return axios.post(apiConstants.CREATE_LEASE_SIGNOR, data);
};
//Load Review Details
export const requestLoadReviewDetails = (property_id) => {
  return axios.get(`${apiConstants.LOAD_PREVIEW_LIST}${property_id}`);
};

//Load Home Page
export const requestLoadHomePage = () => {
  return axios.get(`${apiConstants.LOAD_HOME_PAGE}`);
};
