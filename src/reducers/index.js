import { combineReducers } from "redux";
import productList from "./productList";
import basicInfoImages_upload from "./basic-info-upload-images";
import basic_info from "./basic-info";
import property_info from "./property-info";
import lease_signor from "./lease-signor";
import review_details from "./review-details";
import bank_info from "./bank-info";
import home_page from "./home-page";
import user_details from "./user-details";
import loader from "./loader";
import auth from "./auth";
import otp from "./otp";
import completeProfile from "./complete_profile";
import message from "./message";

export default combineReducers({
  productList,
  basicInfoImages_upload,
  basic_info,
  property_info,
  bank_info,
  loader,
  auth,
  lease_signor,
  review_details,
  home_page,
  user_details,
  otp,
  completeProfile,
  message
});
