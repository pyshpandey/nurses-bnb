export const authAction = {
  load: "USER_LOGIN_CHECK",
  success: "USER_LOGIN_SUCCESS",
  failure: "USER_LOGIN_FAIL",
  reset: "RESET_FORM_SUBMISSION",
  logout: "USER_LOGOUT"
};

export const loaderAction = {
  load: "LOADER_INITIATE",
  success: "LOADER_SUCCESS",
};

export const listProduct = {
  get: "GET_PRODUCT_LIST",
  set: "SET_PRODUCT_LIST",
};

//image Upload//
export const basicInfoUploadImages = {
  load: "BASIC_INFO_UPLOAD_IMAGES",
  success: "BASIC_INFO_UPLOAD_IMAGES_SUCCESS",
  failure: "BASIC_INFO_UPLOAD_IMAGES_ERROR",
};

//create basic info//
export const createBasicInfo = {
  load: "CREATE_BASIC_INFO",
  success: "CREATE_BASIC_INFO_SUCCESS",
  failure: "CREATE_BASIC_INFO_ERROR",
};

//create property info//
export const createPropertyInfo = {
  load: "CREATE_PROPERTY_INFO",
  success: "CREATE_PROPERTY_INFO_SUCCESS",
  failure: "CREATE_PROPERTY_INFO_ERROR",
};

//create lease signor//
export const createLeaseSignor = {
  load: "CREATE_LEASE_SIGNOR",
  success: "CREATE_LEASE_SIGNOR_SUCCESS",
  failure: "CREATE_LEASE_SIGNOR_ERROR",
};

//load property info//
export const loadPropertyInfo = {
  load: "LOAD_PROPERTY_INFO",
  success: "LOAD_PROPERTY_INFO_SUCCESS",
  failure: "LOAD_PROPERTY_INFO_ERROR",
};

//load Review details//
export const loadReviewDetails = {
  load: "LOAD_REVIEW_DETAILS",
  success: "LOAD_REVIEW_DETAILS_SUCCESS",
  failure: "LOAD_REVIEW_DETAILS_ERROR",
};

//create bank info//
export const createBankAccountInfo = {
  load: "ADD_BANK_ACCOUNT_INFO",
  success: "ADD_BANK_ACCOUNT_INFO_SUCCESS",
  failure: "ADD_BANK_ACCOUNT_INFO_ERROR",
};

//load home page//
export const loadHomePage = {
  load: "LOAD_HOME_PAGE",
  success: "LOAD_HOME_PAGE_SUCCESS",
  failure: "LOAD_HOME_PAGE_ERROR",
};
export const createUserDetails = {
  load: "CREATE_USER_DETAILS",
  success: "CREATE_USER_DETAILS_SUCCESS",
  failure: "CREATE_USER_DETAILS_ERROR",
  fetchRequest: "FETCH_USER_DETAIL",
  fetchSuccess: "FETCH_USER_DETAIL_SUCCESS",
  update: "UPDATE_USER_PROFILE",
  updateSuccess: "UPDATE_USER_PROFILE_SUCCESS",
  updateImage: "UPDATE_USER_PROFILE_IMAGE",
  updateImageSuccess: "UPDATE_USER_PROFILE_IMAGE_SUCCESS"
};

export const otpAction = {
  load: "OTP_CHECK",
  success: "OTP_SUCCESS",
  failure: "OTP_FAIL",
};

export const completeProfileAction = {
  load: "COMPLETE_PROFILE",
  success: "COMPLETE_PROFILE_SUCCESS",
  failure: "COMPLETE_PROFILE_FAIL",
};

export const displayMessage = {
  reset: "RESET_MESSAGE",
  success: "DISPLAY_MESSAGE"
}
