import React, { Suspense } from "react";
import OwnerNewListLayout from "../../layouts/Owner-NewList-layout";
import { Route, Routes } from "react-router-dom";
import ownerCreateNewLists from "../../routes/owner-create-new-list-routes";
import Loading from "../../components/common/Loading";

const CreateNewListIndex = () => {
  return (
    <OwnerNewListLayout>
      <Suspense fallback={<Loading />}>
        <Routes>
          {ownerCreateNewLists.map((route, ky) => {
            return <Route key={ky} {...route} />;
          })}
        </Routes>
      </Suspense>
    </OwnerNewListLayout>
  );
};

export default CreateNewListIndex;
