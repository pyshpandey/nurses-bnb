export const apiEndPoint =
  process.env.REACT_APP_API_URL || "http://localhost:3000";
// "https://property-service-dot-extreme-pixel-330416.uc.r.appspot.com";

export const apiConstants = {
  UPLOAD_PROPERTY_IMAGES: `${apiEndPoint}property/uploadfile`,
  CREATE_BASIC_INFO: `${apiEndPoint}property/`,
  CREATE_PROPERTY_INFO: `${apiEndPoint}property/`,
  LOAD_PROPERTY_INFO: `${apiEndPoint}property/getallitems`,
  CREATE_LEASE_SIGNOR: `${apiEndPoint}property/leasesignors`,
  CREATE_BANK_INFO: `${apiEndPoint}property/createbankinfo`,
  LOAD_PREVIEW_LIST: `${apiEndPoint}property/`,
  CREATE_USER_DETAILS: `${apiEndPoint}user/register`,
  USER_LOGIN_CHECK: `${apiEndPoint}user/login`,
  CHECK_OTP: `${apiEndPoint}user/otp_verification`,
  USER_UPDATE: `${apiEndPoint}user/update`,
  LOAD_HOME_PAGE: `${apiEndPoint}property/recently_added`,
  FETCH_USER_DETAIL: `${apiEndPoint}user/profile`,
};
