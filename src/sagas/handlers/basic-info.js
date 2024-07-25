import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { requestCreateBasicInfo } from "../requests/create-new-list";
import { createBasicInfo } from "../../actionTypes";
import {
  create_basic_info_error,
  create_basic_info_success,
} from "../../actions/create-new-list";
import { CREATE_NEW_LIST_PATHS } from "../../config/Owner-And-NewList_Paths";

export function* handleCreateBasicInfo({ payload }) {
  try {
    const { basicInfo, navigate } = payload;
    const response = yield call(requestCreateBasicInfo, basicInfo);
    const { data } = response;
    if (data) {
      yield put(create_basic_info_success(data.data));
      navigate(
        `${CREATE_NEW_LIST_PATHS.LAYOUT_PATH}${CREATE_NEW_LIST_PATHS.PROPERTY_INFO_ONLY}${data.data._id}`
      );
    } else {
      yield put(create_basic_info_error(data));
    }
  } catch (error) {
    yield put(create_basic_info_error(error));
  }
}

export default function* watchCreateBasicInfo() {
  yield takeEvery(createBasicInfo.load, handleCreateBasicInfo);
}
