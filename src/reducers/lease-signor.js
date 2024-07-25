import { createLeaseSignor } from "../actionTypes";
const data = {
  loading: true,
  leaseSignor: [],
  error: "",
};
const lease_signor = (state = data, action) => {
  switch (action.type) {
    case createLeaseSignor.load:
      return { ...state, loading: true };
    case createLeaseSignor.success:
      return { ...state, loading: false, leaseSignor: action.payload };
    case createLeaseSignor.failure:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

export default lease_signor;
