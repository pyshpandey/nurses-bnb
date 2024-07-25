import { loadReviewDetails } from "../actionTypes";
const data = {
  loading: true,
  reviewDetails: [],
  error: "",
};
const review_details = (state = data, action) => {
  switch (action.type) {
    case loadReviewDetails.load:
      return { ...state, loading: true };
    case loadReviewDetails.success:
      return { ...state, loading: false, reviewDetails: action.payload };
    case loadReviewDetails.failure:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

export default review_details;
