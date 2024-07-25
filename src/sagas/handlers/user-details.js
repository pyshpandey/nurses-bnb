import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  requestCreateUserDetails,
  requestFetchUserDetails,
  requestUpdateUserDetails,
  requestUpdateUserProfileImage,
} from "../requests/create-user-details";
import { createUserDetails } from "../../actionTypes";
import {
  create_user_detailsSuccess,
  fetch_user_detail_success,
} from "../../actions/create-user-details";
import { set_message } from "../../actions/message";

import {
  COMMON_PATHS,
  CREATE_NEW_LIST_PATHS,
} from "../../config/Owner-And-NewList_Paths";
import { request_loader } from "../../actions/loader";

export function* handleCreateUserDetails({ payload }) {
  try {
    const { user, navigate } = payload;
    const response = yield call(requestCreateUserDetails, user);

    if (response.data) {
      const { data } = response;
      if (data) {
        yield put(create_user_detailsSuccess(data.data));
        navigate(`${COMMON_PATHS.OTP}`);
      } else {
        //yield put(set_message(response));
      }
    }
  } catch (error) {
    yield put(
      set_message({
        error_code: "Mobile Exists",
        code: "warning",
        heading: "Warning",
      })
    );
  }
}

export function* watchCreateUserDetails() {
  yield takeEvery(createUserDetails.load, handleCreateUserDetails);
}

export function* handleFetchUserDetails() {
  try {
    const response = yield call(requestFetchUserDetails);
    if (response.status===200) {
      const { data, statusCode } = response;
      const da = {
        loading: false,
        user: data.data,
        error: "",
      };
      sessionStorage.setItem("user", JSON.stringify(data.data));
      sessionStorage.setItem("profile_image", data.data.profile_image);
      yield put(fetch_user_detail_success(da));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchUserDetails() {
  yield takeEvery(createUserDetails.fetchRequest, handleFetchUserDetails);
}

export function* handleUpdateUserDetails({ payload }) {
  try {
    yield put(request_loader({ load: true }));
    let { first_name, last_name } = payload;
    let request = { first_name: first_name, last_name: last_name };
    const response = yield call(requestUpdateUserDetails, request);
    if (response.status===200) {
      const { data } = response;
      yield put(request_loader({ load: false }));
      yield put(
        set_message({
          error_code: data.msg,
          code: "success",
          heading: "Success",
        })
      );
      let record = JSON.parse(sessionStorage.getItem("user"));
      record.first_name = first_name;
      record.last_name = last_name;
      sessionStorage.setItem("user", JSON.stringify(record));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchUpdateUserDetails() {
  yield takeEvery(createUserDetails.update, handleUpdateUserDetails);
}

export function* handleUpdateUserProfileImage({ payload }) {
  try {
    const { record, user } = payload;
    yield put(request_loader({ load: true }));
    const response = yield call(requestUpdateUserProfileImage, record);

    if (response.status === 200) {
      const { data } = response;
      let image = data.data;
      user.profile_image = image;
      yield put(
        set_message({
          error_code: "Image " + data.msg,
          code: "success",
          heading: "Success",
        })
      );
      yield put(
        fetch_user_detail_success({ loading: false, user: user, error: "" })
      );
      yield put(request_loader({ load: false }));
      sessionStorage.setItem("profile_image", image);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchUpdateUserProfileImage() {
  yield takeEvery(createUserDetails.updateImage, handleUpdateUserProfileImage);
}
