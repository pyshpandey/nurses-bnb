import { createBankAccountInfo } from "../actionTypes";
const data = {
  loading: true,
  bankInfo: [],
  error: "",
};
const bank_info = (state = data, action) => {
  switch (action.type) {
    case createBankAccountInfo.load:
      return { ...state, loading: true };
    case createBankAccountInfo.success:
      return { ...state, loading: false, basicInfo: action.payload };
    case createBankAccountInfo.failure:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

export default bank_info;
