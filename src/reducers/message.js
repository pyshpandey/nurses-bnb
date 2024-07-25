import { displayMessage } from "../actionTypes";
const data = {
  error_code:"",
  code:"",
  heading:""
};
const message = (state = data, action) => {
  switch (action.type) {
    case displayMessage.reset:
      return { error_code:"",message:"",body:"" };
    case displayMessage.success:
      return {...action.payload};
    default:
      return { ...state };
  }
};
export default message;
