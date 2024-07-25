import { Row, Col, Button, FloatingLabel, Form } from "react-bootstrap";
import { Formik } from "formik";
import FormikController from "../../formik/FormikController";
import { profileedit_validationSchema } from "../../../constants/form-validation-schemas";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../common/Loading";
import { update_user_profile } from "../../../actions/create-user-details";

const EditForm = () => {
  const details = sessionStorage.getItem("user");
  const dispatch = useDispatch();
  const load = useSelector((state) => state.loader);

  return (
    <>
      <Formik
        initialValues={JSON.parse(details)}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(update_user_profile(values));
        }}
        validationSchema={profileedit_validationSchema}
      >
        {(props) => {
          const { handleSubmit } = props;

          return (
            <form onSubmit={handleSubmit}>
              {load.load === true && <Loading />}
              <div className="mr-b-30">
                <Row>
                  <Col md>
                    <FormikController
                      control="input"
                      type="text"
                      name="first_name"
                      label="First Name"
                      className="form-control"
                      controlid="floatingInputGrid"
                    />
                  </Col>
                  <Col md>
                    <FormikController
                      control="input"
                      type="text"
                      name="last_name"
                      label="Last Name"
                      className="form-control"
                      controlid="floatingInputGrid"
                    />
                  </Col>
                </Row>
              </div>
              <div className="mr-b-50">
                <Row>
                  <Col md>
                    <FormikController
                      control="input"
                      type="email"
                      name="email"
                      label="Email"
                      className="form-control"
                      controlid="floatingInputGrid"
                      disabled
                    />
                  </Col>
                  <Col md>
                    <FormikController
                      control="input"
                      type="phone"
                      name="mobile"
                      label="Phone"
                      className="form-control"
                      controlid="floatingInputGrid"
                      disabled
                    />
                  </Col>
                </Row>
              </div>
              <div className="button-wrp">
                <Row>
                  <Col>
                    <Button variant="secondary">Cancel</Button>
                    <Button variant="primary" type="submit">
                      Save Changes
                    </Button>
                  </Col>
                </Row>
              </div>
            </form>
          );
        }}
      </Formik>
    </>
  );
};
export default EditForm;
