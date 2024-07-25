import {
  call,
  all,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import {
  requestLoadPropertyInfo,
  requestCreatePropertyInfo,
} from "../requests/create-new-list";
import { createPropertyInfo, loadPropertyInfo } from "../../actionTypes";
import {
  load_property_info_error,
  load_property_info_success,
  create_property_info_success,
  create_property_info_error,
} from "../../actions/create-new-list";
import { CREATE_NEW_LIST_PATHS } from "../../config/Owner-And-NewList_Paths";

//Load Property Info
export function* handleLoadProperyInfo() {
  try {
    const response = yield call(requestLoadPropertyInfo);
    const { data } = response;
    if (data) {
      yield put(load_property_info_success(data.data));
    } else {
      yield put(load_property_info_error(data));
    }
  } catch (error) {
    yield put(load_property_info_error(error));
  }
}

export function* watchLoadPropertyInfo() {
  yield takeEvery(loadPropertyInfo.load, handleLoadProperyInfo);
}

//Create Property Info
export function* handleCreateProperyInfo({ payload }) {
  const { propertyInfo, navigate } = payload;
  propertyInfo.propertyInformation.weeklyrent =
    +propertyInfo.propertyInformation.weeklyrent;
  propertyInfo.propertyInformation.montlyrate =
    +propertyInfo.propertyInformation.montlyrate;
  propertyInfo.propertyInformation.propety_space =
    +propertyInfo.propertyInformation.propety_space;
  propertyInfo.propertyInformation.security_fee =
    +propertyInfo.propertyInformation.security_fee;
  propertyInfo.propertyInformation.cleaning_fee =
    +propertyInfo.propertyInformation.cleaning_fee;
  propertyInfo.propertyInformation.parking_type.parking_fee =
    +propertyInfo.propertyInformation.parking_type.parking_fee;
  propertyInfo.propertyInformation.bathroom.no_of_room =
    +propertyInfo.propertyInformation.bathroom.no_of_room;
  propertyInfo.propertyInformation.bedroom.no_of_room =
    +propertyInfo.propertyInformation.bedroom.no_of_room;
  propertyInfo.propertyInformation.closet.no_of_room =
    +propertyInfo.propertyInformation.closet.no_of_room;
  propertyInfo.propertyInformation.kitchen.no_of_room =
    +propertyInfo.propertyInformation.kitchen.no_of_room;
  try {
    const response = yield call(requestCreatePropertyInfo, propertyInfo);
    const { data } = response;
    if (data) {
      yield put(create_property_info_success(data.data));
      navigate(
        `${CREATE_NEW_LIST_PATHS.LAYOUT_PATH}${CREATE_NEW_LIST_PATHS.LEASE_SIGNOR_ONLY}${data.data.property_id}`
      );
    } else {
      yield put(create_property_info_error(data));
    }
  } catch (error) {
    yield put(create_property_info_error(error));
  }
}

export function* watchCreatePropertyInfo() {
  yield takeEvery(createPropertyInfo.load, handleCreateProperyInfo);
}
