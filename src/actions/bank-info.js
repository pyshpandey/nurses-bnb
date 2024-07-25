import { createBankAccountInfo } from "../actionTypes";
export const create_bank_info = (data, navigate) => ({
  type: createBankAccountInfo.load ,
  payload: {data, navigate},
});
export const create_bank_infoSuccess = (data) => ({
  type: createBankAccountInfo.success ,
  payload: data,
});
export const create_bank_infoError = (data) => ({
  type: createBankAccountInfo.failure,
  payload: data,
});
