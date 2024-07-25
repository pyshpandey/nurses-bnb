import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Formik, Field } from "formik";
import { useDispatch } from "react-redux";
import { getProductList } from "../../../actions/productList";
import { Link } from "react-router-dom";

const Filter = () => {
  const dispatch = useDispatch();

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <Formik
      initialValues={{
        title: "",
        checked: ["published", "pending", "featured", "rejected"],
      }}
      onSubmit={(values, { setSubmitting }) => {
        const filterArr = {
          title: values.title,
          orderBy: "dateofjoining",
          order: "-1",
          start: "0",
          total: "9",
          inArr: values.checked,
        };
        //dispatch(getProductList(values));
      }}
    >
      {(props) => {
        const { touched, errors, handleBlur, handleSubmit, handleChange } =
          props;

        return (
          <form className="form" onSubmit={handleSubmit}>
            <>
              <Row>
                <Col md={3}>
                  <h2> Listings </h2>
                  <p> Here’s the list of your listings </p>
                </Col>

                <Col md={4}>
                  <div className="align-center">
                    <Form.Control
                      className="search-list"
                      type="text"
                      name="title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Search listings…"
                    />
                  </div>
                </Col>
                <Col md={5}>
                  <div className="align-right">
                    <span className="filter-list">
                      <i onClick={handleToggle}> Filter listings </i>
                      <div
                        onClick={handleToggle}
                        className={
                          "overlay" + " " + (isActive ? "active" : null)
                        }
                      >
                        {" "}
                      </div>
                      <div
                        className={
                          "filter-dropdown" + " " + (isActive ? "active" : null)
                        }
                      >
                        <ul>
                          <li>
                            <Form.Group controlId="publishedCheckbox">
                              <Field
                                type="checkbox"
                                label="Published"
                                name="checked"
                                value="published"
                              />
                            </Form.Group>
                          </li>
                          <li>
                            <Form.Group controlId="pendingCheckbox">
                              <Field
                                type="checkbox"
                                label="Pending"
                                name="checked"
                                value="pending"
                              />
                            </Form.Group>
                          </li>
                          <li>
                            <Form.Group controlId="rejectedCheckbox">
                              <Field
                                type="checkbox"
                                label="Rejected"
                                name="checked"
                                value="rejected"
                              />
                            </Form.Group>
                          </li>
                          <li>
                            <Form.Group controlId="featuredCheckbox">
                              <Field
                                type="checkbox"
                                label="Featured"
                                name="checked"
                                value="featured"
                              />
                            </Form.Group>
                          </li>
                        </ul>
                      </div>
                    </span>

                    <Link to="/app/admin/listing/listing-requests">
                      {" "}
                      <Button className="view-list" type="submit">
                        {" "}
                        View listing requests{" "}
                      </Button>{" "}
                    </Link>
                  </div>
                </Col>
              </Row>
            </>
          </form>
        );
      }}
    </Formik>
  );
};
export default Filter;
