import { all } from "redux-saga/effects";
import watchProductList from "./handlers/productList";
import watchBasicInfoUploadImages from "./handlers/basic-info-images-upload";
import watchCreateBasicInfo from "./handlers/basic-info";
import watchCreateBankInfo from "./handlers/bank-info";
import {
  watchCreatePropertyInfo,
  watchLoadPropertyInfo,
} from "./handlers/property-info";
import watchCreateLeaseSignor from "./handlers/lease-signor";
import watchLoadReviewDetails from "./handlers/review-details";
import watchLoadHomePage from "./handlers/home-page";
import {
  watchCreateUserDetails,
  watchFetchUserDetails,
  watchUpdateUserDetails,
  watchUpdateUserProfileImage
} from "./handlers/user-details";
import watchUserLogin from "./handlers/auth";
import watchLoader from "./handlers/loader";
import watchOtpCheck from "./handlers/otp-check";
import watchCompleteProfile from "./handlers/complete-profile";

export default function* rootSaga() {
  yield all([
    watchProductList(),
    watchBasicInfoUploadImages(),
    watchCreateBasicInfo(),
    watchLoadPropertyInfo(),
    watchCreatePropertyInfo(),
    watchCreateLeaseSignor(),
    watchLoadReviewDetails(),
    watchCreateBankInfo(),
    watchLoadHomePage(),
    watchCreateUserDetails(),
    watchFetchUserDetails(),
    watchUpdateUserDetails(),
    watchUpdateUserProfileImage(),
    watchUserLogin(),
    watchOtpCheck(),
    watchLoader(),
    watchCompleteProfile(),
  ]);
}
