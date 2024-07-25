import { completeProfileAction } from "../actionTypes";
let init = localStorage.getItem('role')||"common";
const data = {
  error_code:'',
  user:[],
  role:init
};
const completeProfile = (state = data, action) => {
  switch (action.type) {
    case completeProfileAction.reset:
      return { error_code:'',user:[],role:init };
    case completeProfileAction.failure:
      return { error_code:action.payload };
    case completeProfileAction.success:
      let data = {
        error_code: '',
        ...action.payload
      }
      return data;
    default:
      return { ...state };
  }
};
export default completeProfile;
