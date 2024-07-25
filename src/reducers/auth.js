import { authAction } from "../actionTypes";
let init = localStorage.getItem('role')||"common";
const data = {
  user:[],
  role:init,
};
const auth = (state = data, action) => {
  switch (action.type) {
    case authAction.reset:
      return { user:[],role:init };
    case authAction.success:
      let data = {
        ...action.payload
      }
      return data;
    default:
      return { ...state };
  }
};
export default auth;
