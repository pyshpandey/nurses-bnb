import { loaderAction } from "../actionTypes";
const data = {
  load:false
};
const loader = (state = data, action) => {
  switch (action.type) {
    case loaderAction.success:
      return { ...action.payload };
    default:
      return { ...state };
  }
};
export default loader;
