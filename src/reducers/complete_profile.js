import { otpAction } from "../actionTypes";
let init = localStorage.getItem('role')||"common";
const data = {
  error_code:'',
  user:[],
  role:init
};
const otp = (state = data, action) => {
  switch (action.type) {
    case otpAction.reset:
      return { error_code:'',user:[],role:init };
    case otpAction.failure:
      return { error_code:action.payload };
    case otpAction.success:
      let data = {
        error_code: '',
        ...action.payload
      }
      return data;
    default:
      return { ...state };
  }
};
export default otp;
