import axios from "axios";

export function requestProductList(data) {
  return axios.request({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts",
  });
}
