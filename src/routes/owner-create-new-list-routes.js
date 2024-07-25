import React from "react";
import { Navigate } from "react-router-dom";
import {
  COMMON_PATHS,
  CREATE_NEW_LIST_PATHS,
} from "../config/Owner-And-NewList_Paths";

const BasicInfo = React.lazy(() =>
  import("../containers/create-new-list/Basic-information")
);
const LeaseSignor = React.lazy(() =>
  import("../containers/create-new-list/Lease-signor")
);
const PropertyInformation = React.lazy(() =>
  import("../containers/create-new-list/Property-information")
);
const BankAccountInfo = React.lazy(() =>
  import("../containers/create-new-list/Bank-account-info")
);
const ReviewDetails = React.lazy(() =>
  import("../containers/create-new-list/Review-Details")
);

const ownerCreateNewLists = [
  {
    path: COMMON_PATHS.DEFAULT,
    element: <Navigate replace to={CREATE_NEW_LIST_PATHS.REDIRECT} />,
  },
  { path: CREATE_NEW_LIST_PATHS.BASIC_INFO, element: <BasicInfo /> },
  { path: CREATE_NEW_LIST_PATHS.LEASE_SIGNOR, element: <LeaseSignor /> },
  {
    path: CREATE_NEW_LIST_PATHS.PROPERTY_INFO,
    element: <PropertyInformation />,
  },
  { path: CREATE_NEW_LIST_PATHS.BANK_INFO, element: <BankAccountInfo /> },
  { path: CREATE_NEW_LIST_PATHS.REVIEW_DETAILS, element: <ReviewDetails /> },
  {
    path: COMMON_PATHS.CALLBACK,
    element: <Navigate replace to={CREATE_NEW_LIST_PATHS.CALLBACK_TO} />,
  },
];

export default ownerCreateNewLists;
