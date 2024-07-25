import { createUserDetails, otpAction, completeProfileAction } from "../actionTypes";
export const create_user_details = (user, navigate) => ({
  type: createUserDetails.load ,
  payload: { user, navigate},
});
export const create_user_detailsSuccess = (data) => ({
  type: createUserDetails.success ,
  payload: data,
});

export const check_otp = (data) => ({
  type: otpAction.load ,
  payload: data,
});

export const check_otp_error = (data) => ({
  type: otpAction.failure ,
  payload: data,
});

export const check_otp_success = (data) => ({
  type: otpAction.success,
  payload: data,
});


export const complete_profile = (data) => ({
  type: completeProfileAction.load ,
  payload: data,
});

export const complete_profile_error = (data) => ({
  type: completeProfileAction.failure ,
  payload: data,
});

export const complete_profile_success = (data) => ({
  type: completeProfileAction.success,
  payload: data,
});

export const fetch_user_detail = (data) => ({
  type: createUserDetails.fetchRequest,
  payload: data,
})

export const fetch_user_detail_success = (data) => ({
  type: createUserDetails.fetchSuccess,
  payload: data,
})

export const update_user_profile = (data) =>({
  type: createUserDetails.update,
  payload: data,
})

export const update_user_profile_success = (data) =>({
  type: createUserDetails.updateSuccess,
  payload: data,
})

export const create_user_profile_image = (data) =>({
  type: createUserDetails.updateImage,
  payload: data,
})

export const create_user_profile_image_success = (data) =>({
  type: createUserDetails.updateImageSuccess,
  payload: data,
})
