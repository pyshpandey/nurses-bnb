import { call, put, takeLatest } from "redux-saga/effects";
import { requestProductList } from "../requests/productList";
import { listProduct } from "../../actionTypes";
import { setProductList } from "../../actions/productList";

export function* handleProductList(action) {
  try {
    const { payload } = action;
    const response = yield call(requestProductList, payload);
    const { data } = response;
    yield put(setProductList(data));
  } catch (error) {
    console.log(error);
  }
}

export default function* watchProductList() {
  yield takeLatest(listProduct.get, handleProductList);
}
