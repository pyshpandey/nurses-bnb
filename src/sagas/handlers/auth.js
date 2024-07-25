import { call, put, takeEvery } from "redux-saga/effects";
import { requestUserLogin } from "../requests/auth";
import { authAction } from "../../actionTypes";
import { request_loader } from "../../actions/loader";
import { login_success} from "../../actions/auth";
import { set_message} from "../../actions/message";
import { REDIRECTIONS } from "../../config/Owner-And-NewList_Paths";
export function* handleUserLogin({ payload }) {
  try {
    const { request,navigate } = payload;
      yield put(request_loader({load:true}));
    const response = yield call(requestUserLogin, request);
    if(response&&response.status===200){
      const { data } = response;
      if(data.data){
        let da = data.data;
        let role = da.user.role[0];
        localStorage.setItem('accessToken', da.accessToken);
        localStorage.setItem('user_id', da.user._id);
        localStorage.setItem('role', role);
        yield put(login_success({role:role,user:da.user}));
        navigate(`${REDIRECTIONS[role+'_redirect']}`);
      }
      if(data.code){
        let module = {error_code:data.code,code:"warning",heading:"Warning"};
        yield put(set_message(module));
      }
      yield put(request_loader({load:false}));
    }
   } catch (error) {
    console.log(error);
  }
}
export function* handleUserLogout({payload}) {
   localStorage.removeItem('accessToken');
   localStorage.removeItem('user_id');
   localStorage.removeItem('role');
   payload(`${REDIRECTIONS.default_redirect}`);
}

export default function* watchUserLogin() {
  yield takeEvery(authAction.load, handleUserLogin);
  yield takeEvery(authAction.logout, handleUserLogout);
}
