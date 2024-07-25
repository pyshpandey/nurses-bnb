import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { requestOtpCheck } from "../requests/create-user-details";
import { createUserDetails, otpAction } from "../../actionTypes";
import {
  check_otp_error,
  check_otp_success,
} from "../../actions/create-user-details";
import { COMMON_PATHS, CREATE_NEW_LIST_PATHS } from "../../config/Owner-And-NewList_Paths";


export function* handleOtpCheck({ payload }) {
  try {
    const { request, navigate } = payload;
    const response = yield call(requestOtpCheck, request);
    const { data } = response;
    if (data) {
      yield put(check_otp_success(data.data));
      navigate(
        `${COMMON_PATHS.COMPLETE_PROFILE}`
      );
    } else {
      yield put(check_otp_error(data));
    }
  } catch (error) {
    yield put(check_otp_error(error));
  }
}

export default function* watchOtpCheck() {
  yield takeEvery(otpAction.load, handleOtpCheck);
}