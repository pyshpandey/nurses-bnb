import { put, takeEvery } from "redux-saga/effects";
import { loaderAction } from "../../actionTypes";
import { set_loader } from '../../actions/loader';
import { reset_message } from '../../actions/message';

export function* handleLoader({ payload }) {
  let { load } = payload;
  if(load===true)
    yield put(reset_message());
  yield put(set_loader(payload));
}

export default function* watchLoader() {
  yield takeEvery(loaderAction.load, handleLoader);
}
