import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../../components/common/Loading";
import OwnerLayout from "../../layouts/OwnerLayout";
import ownerRoutes from "../../routes/OwnerRoutes";

const OwnerApp = ({ ...rest }) => {
  return (
    <>
      <OwnerLayout {...rest}>
        <Suspense fallback={<Loading />}>
          <Routes>
            {ownerRoutes.map((route, ky) => (
              <Route key={ky} {...route} {...rest} />
            ))}
          </Routes>
        </Suspense>
      </OwnerLayout>
    </>
  );
};

export default OwnerApp;
