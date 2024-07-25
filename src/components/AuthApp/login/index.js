import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { check_login } from "../../../actions/auth";
import Loading from "../../common/Loading";
import { Formik } from "formik";
import FormikController from "../../formik/FormikController";
import { ShowPassword, HidePassword } from "../../../assets/img/imagesh";
import { login_validationSchema } from "../../../constants/form-validation-schemas";

const LoginComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isActive, setActive] = useState(false);
  const load = useSelector((state) => state.loader);
  const togglePass = () => setActive(!isActive);
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(check_login({ request: values, navigate: navigate }));
        }}
        validationSchema={login_validationSchema}
      >
        {(props) => {
          const { handleSubmit } = props;

          return (
            <form onSubmit={handleSubmit}>
              {load.load === true && <Loading />}
              <div className="mr-b-20">
                <FormikController
                  control="input"
                  type="email"
                  name="email"
                  label="Phone Number or Email Address"
                  className="form-control"
                  controlid="floatingInputGrid"
                />
              </div>
              <div className="pos-rel mr-b-20">
                <FormikController
                  control="input"
                  {...(isActive === true
                    ? { type: "text" }
                    : { type: "password" })}
                  name="password"
                  label="Password"
                  className="form-control"
                  controlid="floatingInputGrid"
                />
                <span onClick={() => togglePass()}>
                  <img
                    src={!isActive ? ShowPassword : HidePassword}
                    alt="Show Password"
                  />
                </span>
              </div>
              <div className="forget-pass mr-b-30 mob-mr-b-30">
                <Link to="/forgot-password"> Forgot Password? </Link>
              </div>
              <Button className="button mr-b-20" type="submit">
                {" "}
                Sign In{" "}
              </Button>
            </form>
          );
        }}
      </Formik>
    </>
  );
};
export default LoginComponent;
