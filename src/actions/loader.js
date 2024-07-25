import { loaderAction } from "../actionTypes";

export const request_loader = (data) => ({
  type: loaderAction.load ,
  payload: data,
});

export const set_loader = (data) => ({
  type: loaderAction.success ,
  payload: data,
});
