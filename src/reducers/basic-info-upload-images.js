import { basicInfoUploadImages } from "../actionTypes";
const data = {
  loading: true,
  images: [],
  error: "",
};
const basicInfoImages_upload = (state = data, action) => {
  switch (action.type) {
    case basicInfoUploadImages.load:
      return { ...state, loading: true };
    case basicInfoUploadImages.success:
      return {
        ...state,
        loading: false,
        images: [...action.payload, ...state.images],
      };
    case basicInfoUploadImages.failure:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

export default basicInfoImages_upload;
