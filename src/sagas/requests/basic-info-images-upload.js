import axios from "axios";
import { apiConstants } from "../../constants/api_constants";

export function requestBasicInfoUploadImages(image) {
  return axios.post(apiConstants.UPLOAD_PROPERTY_IMAGES, image);
}
