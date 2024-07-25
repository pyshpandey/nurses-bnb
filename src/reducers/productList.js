import { listProduct } from '../actionTypes';
const data = {
 load:false,
 filter:{
   title: '',
   orderBy: '',
   order:'',
   start: '',
   total: '',
   inArr: []
 }
};
const productList = (state=data, action) => {
  switch (action.type) {
  case listProduct.set:{
    const loader = {
      ...data,
      load:true,
    }
    return loader;
  }
  default:
  return state;
  }
};

export default productList;
