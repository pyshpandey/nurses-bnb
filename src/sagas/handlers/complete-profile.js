import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { requestCompleteProfile } from "../requests/create-user-details";
import { createUserDetails, completeProfileAction } from "../../actionTypes";
import {
  check_otp_error,
  check_otp_success,
} from "../../actions/create-user-details";
import { error_login, login_success } from "../../actions/auth";
import { REDIRECTIONS } from "../../config/Owner-And-NewList_Paths";
import { set_loader } from "../../actions/loader";
import {
  COMMON_PATHS,
  CREATE_NEW_LIST_PATHS,
} from "../../config/Owner-And-NewList_Paths";

export function* handleCompleteProfile({ payload }) {
  try {
    const { request, navigate } = payload;
    const response = yield call(requestCompleteProfile, request);
    const { data } = response;
    if (data.data) {
      let da = data.data;
      let role = da.user.role[0];
      localStorage.setItem("accessToken", da.accessToken);
      localStorage.setItem("user_id", da.user._id);
      localStorage.setItem("role", role);
      yield put(login_success({ role: role, user: da.user }));
      navigate(`${REDIRECTIONS[role + "_redirect"]}`);
    }
    if (data.code) {
      yield put(error_login(data.code));
    }
    yield put(set_loader({ load: false }));
  } catch (error) {
    yield put(check_otp_error(error));
  }
}

export default function* watchCompleteProfile() {
  yield takeEvery(completeProfileAction.load, handleCompleteProfile);
}
