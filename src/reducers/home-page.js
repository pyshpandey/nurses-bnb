import { loadHomePage } from "../actionTypes";
const data = {
  loading: true,
  homePage: [],
  error: "",
};
const home_page = (state = data, action) => {
  switch (action.type) {
    case loadHomePage.load:
      return { ...state, loading: true };
    case loadHomePage.success:
      return { ...state, loading: false, homePage: action.payload };
    case loadHomePage.failure:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

export default home_page;
