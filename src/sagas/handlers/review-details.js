import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { requestLoadReviewDetails } from "../requests/create-new-list";
import { loadReviewDetails } from "../../actionTypes";
import {
  load_review_details_error,
  load_review_details_success,
} from "../../actions/create-new-list";
import { CREATE_NEW_LIST_PATHS } from "../../config/Owner-And-NewList_Paths";

export function* handleLoadReviewDetails({ payload }) {
  try {
    const { property_id } = payload;
    const response = yield call(requestLoadReviewDetails, property_id);
    const { data } = response;
    if (data) {
      yield put(load_review_details_success(data.data[0]));
      //   navigate(
      //     `${CREATE_NEW_LIST_PATHS.LAYOUT_PATH}/bank-ac-info/${data.data.property_id}`
      //   );
    } else {
      yield put(load_review_details_error(data));
    }
  } catch (error) {
    yield put(load_review_details_error(error));
  }
}

export default function* watchLoadReviewDetails() {
  yield takeEvery(loadReviewDetails.load, handleLoadReviewDetails);
}
