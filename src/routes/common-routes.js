import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { COMMON_PATHS } from "../config/Owner-And-NewList_Paths";

const Home = React.lazy(() => import("../pages/Home"));
const Signup = React.lazy(() => import("../containers/AuthApp/signup"));
const Login = React.lazy(() => import("../containers/AuthApp/login/Login"));
const AdminApp = React.lazy(() => import("../pages/AdminApp/index"));
const OwnerApp = React.lazy(() => import("../pages/OwnerApp/index"));
const Otp = React.lazy(() => import("../containers/AuthApp/signup/Otp"));

const ForgotPassword = React.lazy(() =>
  import("../containers/AuthApp/forgot-password/Forgot-password")
);
const CreateNewPassword = React.lazy(() =>
  import("../containers/AuthApp/forgot-password/Create-new-password")
);
const ForgotPasswordSuccess = React.lazy(() =>
  import("../containers/AuthApp/forgot-password/Forgot-password-success")
);
const UserDetails = React.lazy(() =>
  import("../containers/AuthApp/signup/User-details")
);
const CompleteProfile = React.lazy(() =>
  import("../containers/AuthApp/signup/Complete-Profile")
);
const SuccessMessage = React.lazy(() =>
  import("../containers/AuthApp/signup/Success-message")
);
const VerifyLeaseSignor = React.lazy(() =>
import("../containers/AuthApp/signup/Verify-lease-signor")
);

const AuthRoutes = () => {
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  const loginUser = auth.role;

  return loginUser ? (
    loginUser === "owner" ? (
      <OwnerApp navigate={useNavigate} />
    ) : loginUser === "admin" ? (
      <AdminApp />
    ) : (
      <Navigate to={COMMON_PATHS.HOME} state={{ path: location.pathname }} />
    )
  ) : (
    <Navigate to={COMMON_PATHS.HOME} state={{ path: location.pathname }} />
  );
};

const commonRoutes = [
  { path: COMMON_PATHS.APP, element: <AuthRoutes /> },
  { path: COMMON_PATHS.HOME, element: <Home /> },
  { path: COMMON_PATHS.LOGIN, element: <Login /> },
  { path: COMMON_PATHS.SIGNUP, element: <Signup /> },
  { path: COMMON_PATHS.OTP, element: <Otp /> },
  { path: COMMON_PATHS.FORGOT_PASSWORD, element: <ForgotPassword /> },
  { path: COMMON_PATHS.CREATE_NEW_PASSWORD, element: <CreateNewPassword /> },
  {
    path: COMMON_PATHS.FORGOT_PASSWORD_SUCCESS,
    element: <ForgotPasswordSuccess />,
  },
  { path: COMMON_PATHS.SIGNUP_USER_DETAILS, element: <UserDetails /> },
  { path: COMMON_PATHS.VERIFY_LEASE_SIGNOR_DETAILS, element: <VerifyLeaseSignor /> },
  { path: COMMON_PATHS.COMPLETE_PROFILE, element: <CompleteProfile /> },
  { path: COMMON_PATHS.SIGNUP_SUCCESS_MESSAGE, element: <SuccessMessage /> },
  { path: COMMON_PATHS.DEFAULT, element: <Navigate to={COMMON_PATHS.APP1} /> },
  { path: COMMON_PATHS.CALLBACK, element: <Navigate to={COMMON_PATHS.HOME} /> },
];
export default commonRoutes;
