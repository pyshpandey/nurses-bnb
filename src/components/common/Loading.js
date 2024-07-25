import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return(
    <>
      <div className="loading-wrp">
        <Spinner className="loading" animation="border" variant="secondary" />
      </div>
    </>
  )
};
export default Loading;
