import { createPropertyInfo, loadPropertyInfo } from "../actionTypes";
const data = {
  loading: true,
  propertyInfo: [],
  error: "",
};
const property_info = (state = data, action) => {
  switch (action.type) {
    case loadPropertyInfo.load:
      return { ...state, loading: true };
    case loadPropertyInfo.success:
      return { ...state, loading: false, loadPropertyInfo: action.payload };
    case loadPropertyInfo.failure:
      return { ...state, loading: false, error: action.payload };
    case createPropertyInfo.load:
      return { ...state, loading: true };
    case createPropertyInfo.success:
      return { ...state, loading: false, propertyInfo: action.payload };
    case createPropertyInfo.failure:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

export default property_info;
