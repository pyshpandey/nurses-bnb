import {listProduct} from '../actionTypes';
export const getProductList = (data) => ({
  type: listProduct.get,
  payload:data
});
export const setProductList = (data) =>({
  type: listProduct.set,
  data
});
