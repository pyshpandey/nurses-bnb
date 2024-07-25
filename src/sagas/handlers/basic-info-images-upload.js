import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { requestBasicInfoUploadImages } from "../requests/basic-info-images-upload";
import { basicInfoUploadImages } from "../../actionTypes";
import {
  basicInfoUpload_imagesError,
  basicInfoUpload_imagesSuccess,
} from "../../actions/basic-info-upload-images";

export function* handleBasicInfoUploadImages(action) {
  try {
    const { payload } = action;
    const response = yield call(requestBasicInfoUploadImages, payload);
    const { data } = response;
    if (data) {
      yield put(basicInfoUpload_imagesSuccess(data.data));
    } else {
      yield put(basicInfoUpload_imagesError(data));
    }
  } catch (error) {
    yield put(basicInfoUpload_imagesError(error));
  }
}

export default function* watchBasicInfoUploadImages() {
  yield takeEvery(basicInfoUploadImages.load, handleBasicInfoUploadImages);
}
