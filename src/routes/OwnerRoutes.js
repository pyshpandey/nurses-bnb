import React from "react";
import { Navigate } from "react-router-dom";
import {
  COMMON_PATHS,
  CREATE_NEW_LIST_PATHS,
  OWNER_PATHS,
} from "../config/Owner-And-NewList_Paths";

const OwnerBooking = React.lazy(() =>
  import("../containers/ownerApp/Owner-bookings")
);
const OwnerMessages = React.lazy(() =>
  import("../containers/ownerApp/Owner-messages")
);
const OwnerNotifications = React.lazy(() =>
  import("../containers/ownerApp/Owner-notification")
);
const OwnerPaymentManagement = React.lazy(() =>
  import("../containers/ownerApp/Owner-payment-management")
);

const OwnerProfile = React.lazy(() =>
  import("../containers/ownerApp/Owner-profile")
);
const Listing = React.lazy(() => import("../containers/ownerApp/Listing"));

const CreateNewListIndex = React.lazy(() => import("../pages/Create-new-list"));
const EditProfile = React.lazy(() =>
  import("../components/Owner/Profile/edit-profile")
);
const FeatureList = React.lazy(() =>
  import("../components/Owner/Listing/feature-list")
);

const ownerRoutes = [
  {
    path: COMMON_PATHS.DEFAULT,
    element: <Navigate replace to={OWNER_PATHS.REDIRECT} />,
  },
  { path: OWNER_PATHS.OWNER_LISTING, element: <Listing /> },
  { path: OWNER_PATHS.OWNER_FEATURE_LISTING, element: <FeatureList /> },
  { path: OWNER_PATHS.OWNER_BOOKINGS, element: <OwnerBooking /> },
  {
    path: OWNER_PATHS.OWNER_PAYMENT_MANAGEMENT,
    element: <OwnerPaymentManagement />,
  },
  { path: OWNER_PATHS.OWNER_NOTIFICATION, element: <OwnerNotifications /> },
  { path: OWNER_PATHS.OWNER_MESSAGES, element: <OwnerMessages /> },
  { path: OWNER_PATHS.OWNER_PROFILE, element: <OwnerProfile /> },
  { path: OWNER_PATHS.OWNER_PROFILE_EDIT, element: <EditProfile /> },
  {
    path: CREATE_NEW_LIST_PATHS.CREATE_NEW_LIST,
    element: <CreateNewListIndex />,
  },
  {
    path: COMMON_PATHS.CALLBACK,
    element: <Navigate replace to={COMMON_PATHS.HOME} />,
  },
];

export default ownerRoutes;
