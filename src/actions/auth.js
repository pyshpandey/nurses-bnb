import { authAction } from "../actionTypes";

export const check_login = (data) => ({
  type: authAction.load ,
  payload: data,
});

export const error_login = (data) => ({
  type: authAction.failure ,
  payload: data,
});

export const login_success = (data) => ({
  type: authAction.success,
  payload: data,
});

export const reset_data = (data) => ({
  type: authAction.reset ,
  payload: data,
});

export const user_logout = (data) => ({
  type: authAction.logout,
  payload: data,
});
