import { displayMessage } from "../actionTypes";

export const reset_message = (data) => ({
  type: displayMessage.reset,
});

export const set_message = (data) => ({
  type: displayMessage.success ,
  payload: data,
});
