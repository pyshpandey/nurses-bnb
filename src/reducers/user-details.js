import { createUserDetails } from "../actionTypes";
const data = {
  loading: true,
  user: [],
  error: "",
};
const user_details = (state = data, action) => {
  switch (action.type) {
    case createUserDetails.load:
      return { ...state, loading: true };
    case createUserDetails.success:
      return { ...state, loading: false, user: action.payload };
    case createUserDetails.failure:
      return { ...state, loading: false, error: action.payload };
    case createUserDetails.fetchSuccess:
      return { ...action.payload };  
    default:
      return { ...state };
  }
};

export default user_details;
