import { createBasicInfo } from "../actionTypes";
const data = {
  loading: true,
  basicInfo: [],
  error: "",
};
const basic_info = (state = data, action) => {
  switch (action.type) {
    case createBasicInfo.load:
      return { ...state, loading: true };
    case createBasicInfo.success:
      return { ...state, loading: false, basicInfo: action.payload };
    case createBasicInfo.failure:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

export default basic_info;
