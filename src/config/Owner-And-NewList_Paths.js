export const OWNER_PATHS = {
  REDIRECT: "/app/owner-listing",
  OWNER_LISTING: "/owner-listing",
  OWNER_FEATURE_LISTING: "/owner-listing/feature-listing",
  OWNER_BOOKINGS: "/owner-bookings",
  OWNER_PAYMENT_MANAGEMENT: "/owner-payment-managements",
  OWNER_MESSAGES: "/owner-messages",
  OWNER_NOTIFICATION: "/owner-notifications",
  OWNER_PROFILE: "/owner-profile",
  OWNER_PROFILE_EDIT: "/owner-profile/edit",
};

export const CREATE_NEW_LIST_PATHS = {
  REDIRECT: "/app/create-new-list/basic-info",
  CREATE_NEW_LIST: "/create-new-list/*",
  BASIC_INFO: "/basic-info",
  LEASE_SIGNOR: "/lease-signor/:property_id",
  PROPERTY_INFO: "/property-info/:property_id",
  BANK_INFO: "/bank-ac-info/:property_id",
  REVIEW_DETAILS: "/review-details/:property_id",
  CALLBACK_TO: "/owner-listing",
  LAYOUT_PATH: "/app/create-new-list",
  LEASE_SIGNOR_ONLY: "/lease-signor/",
  PROPERTY_INFO_ONLY: "/property-info/",
  BASIC_INFO_ONLY: "/basic-info/",
  BANK_INFO_ONLY: "/bank-ac-info/",
  REVIEW_DETAILS_ONLY: "/review-details/",
};

export const COMMON_PATHS = {
  HOME: "/home",
  APP: "/app/*",
  APP1: "/app",
  LOGIN: "/login",
  CREATE_NEW_PASSWORD: "/create-new-password",
  FORGOT_PASSWORD: "/forgot-password",
  FORGOT_PASSWORD_SUCCESS: "/forgot-password-success",
  OTP: "/otp",
  SIGNUP: "/signup",
  CHOOSE_ROLE: "/choose-role",
  SIGNUP_USER_DETAILS: "/signup-user-details",
  VERIFY_LEASE_SIGNOR_DETAILS: "/verify-lease-signor-details",
  COMPLETE_PROFILE: "/signup-complete-profile",
  SIGNUP_SUCCESS_MESSAGE: "/signup-success-message",
  DEFAULT: "/",
  CALLBACK: "*",
};

export const REDIRECTIONS = {
  default_redirect: COMMON_PATHS.HOME,
  owner_redirect: OWNER_PATHS.REDIRECT
}
