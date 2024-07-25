import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { requestCreateLeaseSignor } from "../requests/create-new-list";
import { createLeaseSignor } from "../../actionTypes";
import {
  create_lease_signor_error,
  create_lease_signor_success,
} from "../../actions/create-new-list";
import { CREATE_NEW_LIST_PATHS } from "../../config/Owner-And-NewList_Paths";

export function* handleCreateLeaseSignor({ payload }) {
  try {
    const { leaseSignor, navigate } = payload;
    const response = yield call(requestCreateLeaseSignor, leaseSignor);
    const { status, data } = response;
    if (data || status === 204) {
      yield put(create_lease_signor_success(data ? data[0] : data));
      navigate(
        `${CREATE_NEW_LIST_PATHS.LAYOUT_PATH}${CREATE_NEW_LIST_PATHS.BANK_INFO_ONLY}${leaseSignor.property_id}`
      );
    } else {
      yield put(create_lease_signor_error(data));
    }
  } catch (error) {
    yield put(create_lease_signor_error(error));
  }
}

export default function* watchCreateLeaseSignor() {
  yield takeEvery(createLeaseSignor.load, handleCreateLeaseSignor);
}
