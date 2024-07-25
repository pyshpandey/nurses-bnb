import { basicInfoUploadImages } from "../actionTypes";
export const basicInfoUpload_images = (data) => ({
  type: basicInfoUploadImages.load,
  payload: data,
});
export const basicInfoUpload_imagesSuccess = (data) => ({
  type: basicInfoUploadImages.success,
  payload: data,
});
export const basicInfoUpload_imagesError = (data) => ({
  type: basicInfoUploadImages.failure,
  payload: data,
});
