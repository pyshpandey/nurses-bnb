import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import LogoImage from "../../../assets/img/footer-logo.svg";
import ShowPassword from "../../../assets/img/show-password.svg";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import FormikController from "../../../components/formik/FormikController";
import { request_loader } from "../../../actions/loader";
import { complete_profile_initialValues } from "../../../constants/form-initial-values";
import { complete_profile_validationSchema } from "../../../constants/form-validation-schemas";
import { complete_profile } from "../../../actions/create-user-details";
import { HidePassword } from "../../../assets/img/imagesh";
import LoginSidebar from "../login/login-sidebar";

const CompleteProfile = () => {
  const [showPasswordValue, setShowPasswordValue] = useState(false);
  const [showConfirmPasswordValue, setShowConfirmPasswordValue] =
    useState(false);

  const data = useSelector((state) => state.user_details);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div className="login-wrapper">
        <div className="left-side">
          <div className="mobile-header">
            <img src={LogoImage} alt="Nurses bnb" />
          </div>
          <div className="form-wrp">
            <div className="headind-sec mr-b-50">
              <h2> Complete your profile </h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                Sed sem nisl, fermentum ut nunc non, blandit volutpat mi.{" "}
              </p>
            </div>
            <Formik
              initialValues={complete_profile_initialValues}
              validationSchema={complete_profile_validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                const request_data = {
                  email: values.email,
                  password: values.password,
                  _id: data?.user?.user?._id,
                };
                dispatch(request_loader({ load: true }));
                dispatch(
                  complete_profile({
                    request: request_data,
                    navigate: navigate,
                  })
                );
              }}
            >
              <Form>
                <div className="mr-b-25">
                  <FormikController
                    control="input"
                    type="email"
                    name="email"
                    className="form-control"
                    label="Email Address"
                  />
                </div>
                <div className="pos-rel mr-b-25">
                  <FormikController
                    control="input"
                    type={showPasswordValue ? "text" : "password"}
                    name="password"
                    className="form-control"
                    label="New Password"
                  />
                  <img
                    src={showPasswordValue ? HidePassword : ShowPassword}
                    onClick={() => setShowPasswordValue(!showPasswordValue)}
                    alt="Show Password"
                  />
                </div>
                <div className="pos-rel mr-b-70">
                  <FormikController
                    control="input"
                    type={showConfirmPasswordValue ? "text" : "password"}
                    name="confirm_password"
                    className="form-control"
                    label="Confirm New Password"
                  />
                  <img
                    src={showConfirmPasswordValue ? HidePassword : ShowPassword}
                    onClick={() =>
                      setShowConfirmPasswordValue(!showConfirmPasswordValue)
                    }
                    alt="Show Password"
                  />
                </div>
                <Button type="submit" className="button mr-b-20">
                  {" "}
                  Complete Profile{" "}
                </Button>
              </Form>
            </Formik>
          </div>
        </div>
        <LoginSidebar />
      </div>
    </>
  );
};

export default CompleteProfile;
