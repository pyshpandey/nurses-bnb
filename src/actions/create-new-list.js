import {
  createBasicInfo,
  createLeaseSignor,
  createPropertyInfo,
  loadHomePage,
  loadPropertyInfo,
  loadReviewDetails,
} from "../actionTypes";

// basic info //
export const create_basic_info = (basicInfo, navigate) => ({
  type: createBasicInfo.load,
  payload: { basicInfo, navigate },
});
export const create_basic_info_success = (data) => ({
  type: createBasicInfo.success,
  payload: data,
});
export const create_basic_info_error = (data) => ({
  type: createBasicInfo.failure,
  payload: data,
});

// Load property info //
export const load_property_info = () => ({
  type: loadPropertyInfo.load,
});
export const load_property_info_success = (data) => ({
  type: loadPropertyInfo.success,
  payload: data,
});
export const load_property_info_error = (data) => ({
  type: loadPropertyInfo.failure,
  payload: data,
});

// property info //
export const create_property_info = (propertyInfo, navigate) => ({
  type: createPropertyInfo.load,
  payload: { propertyInfo, navigate },
});
export const create_property_info_success = (data) => ({
  type: createPropertyInfo.success,
  payload: data,
});
export const create_property_info_error = (data) => ({
  type: createPropertyInfo.failure,
  payload: data,
});

// lease signor //
export const create_lease_signor = (leaseSignor, navigate) => ({
  type: createLeaseSignor.load,
  payload: { leaseSignor, navigate },
});
export const create_lease_signor_success = (data) => ({
  type: createLeaseSignor.success,
  payload: data,
});
export const create_lease_signor_error = (data) => ({
  type: createLeaseSignor.failure,
  payload: data,
});

// get review list //
export const load_review_details = (property_id) => ({
  type: loadReviewDetails.load,
  payload: { property_id },
});
export const load_review_details_success = (data) => ({
  type: loadReviewDetails.success,
  payload: data,
});
export const load_review_details_error = (data) => ({
  type: loadReviewDetails.failure,
  payload: data,
});

// load home page //
export const load_home_page = (id) => ({
  type: loadHomePage.load,
  payload: id,
});
export const load_home_page_success = (data) => ({
  type: loadHomePage.success,
  payload: data,
});
export const load_home_page_error = (data) => ({
  type: loadHomePage.failure,
  payload: data,
});
