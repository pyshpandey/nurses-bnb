import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { requestLoadHomePage } from "../requests/create-new-list";
import { loadHomePage } from "../../actionTypes";
import {
  load_home_page_error,
  load_home_page_success,
} from "../../actions/create-new-list";
import { CREATE_NEW_LIST_PATHS } from "../../config/Owner-And-NewList_Paths";

export function* handleLoadHomePage({ payload }) {
  try {
    const response = yield call(requestLoadHomePage);
    const { data } = response;
    if (data) {
      yield put(load_home_page_success(data.data));
      //   navigate(
      //     `${CREATE_NEW_LIST_PATHS.LAYOUT_PATH}/bank-ac-info/${data.data.property_id}`
      //   );
    } else {
      yield put(load_home_page_error(data));
    }
  } catch (error) {
    yield put(load_home_page_error(error));
  }
}

export default function* watchLoadHomePage() {
  yield takeEvery(loadHomePage.load, handleLoadHomePage);
}
