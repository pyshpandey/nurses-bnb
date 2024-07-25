import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "../components/common/Loading";
import commonRoutes from "./common-routes";

const RoutesIndex = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          {commonRoutes.map((route, ky) => {
            return <Route key={ky} {...route} />;
          })}
        </Routes>
      </Router>
    </Suspense>
  );
};

export default RoutesIndex;
