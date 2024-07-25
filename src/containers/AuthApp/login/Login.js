import LoginComponent from "../../../components/AuthApp/login";
import LogoImage from "../../../assets/img/footer-logo.svg";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { REDIRECTIONS } from "../../../config/Owner-And-NewList_Paths";
import ToastMessage from "../../../components/common/ToastMessage";
import error_messages from "../../../constants/error-messages";
import LoginSidebar from "./login-sidebar";

const Login = () => {
  const message = useSelector((state) => state.message);
  return (
    <>
      {localStorage.getItem("user_id") && (
        <Navigate
          replace
          to={REDIRECTIONS[localStorage.getItem("role") + "_redirect"]}
        />
      )}
      <div className="login-wrapper">
        <div className="left-side">
          <div className="mobile-header">
            <img src={LogoImage} alt="Logo" />
          </div>
          <div className="form-wrp">
            {message.error_code && (
              <ToastMessage
                error={error_messages[message.error_code]}
                bg={message.code}
                head={message.heading}
              />
            )}
            <div className="headind-sec mr-b-30 mob-mr-b-30">
              <h2> Hi, Welcome back </h2>
              <p>
                {" "}
                Please Sign In to Nursesbnb with your <br /> original account
                details.{" "}
              </p>
            </div>

            <LoginComponent />
            <div className="no-account">
              Don’t have an account? <Link to="/signup"> Sign Up </Link>
            </div>
          </div>
        </div>
        <LoginSidebar />
      </div>
    </>
  );
};

export default Login;
