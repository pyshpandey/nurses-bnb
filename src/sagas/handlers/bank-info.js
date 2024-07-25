import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { requestCreateBankInfo } from "../requests/create-bank-info";
import { createBankAccountInfo } from "../../actionTypes";
import {
  create_bank_infoError,
  create_bank_infoSuccess,
} from "../../actions/bank-info";
import { CREATE_NEW_LIST_PATHS } from "../../config/Owner-And-NewList_Paths";

export function* handleCreateBankInfo({ payload }) {
  try {
    const { bankInfo, navigate } = payload;
    const response = yield call(requestCreateBankInfo, bankInfo);
    const { data } = response;
    if (data) {
      yield put(create_bank_infoSuccess(data.data));
      navigate(
        `${CREATE_NEW_LIST_PATHS.LAYOUT_PATH}${CREATE_NEW_LIST_PATHS.REVIEW_DETAILS_ONLY}${data.data._id}`
      );
    } else {
      yield put(create_bank_infoError(data));
    }
  } catch (error) {
    yield put(create_bank_infoError(error));
  }
}

export default function* watchCreateBankInfo() {
  yield takeEvery(createBankAccountInfo.load, handleCreateBankInfo);
}
