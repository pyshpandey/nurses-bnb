import { Row, Container, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  GoBackIcon,
  ProfileError,
  UserThumb,
} from "../../../assets/img/imagesh";
import { create_user_profile_image } from "../../../actions/create-user-details";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../common/Loading";
import { Form } from "react-bootstrap";
import { useState, useRef } from "react";

import ToastMessage from "../../common/ToastMessage";
import error_messages from "../../../constants/error-messages";

import EditForm from "./edit-form";

const EditProfile = () => {
  const dispatch = useDispatch();
  const clickRef = useRef(null);
  const details = useSelector((state) => state.user_details);
  const message = useSelector((state) => state.message);
  const setChange = (e) => {
    let acc_arr = ["image/png", "image/jpeg", "image/gif"];
    const formData = new FormData();
    let files = e.target.files[0];
    if (acc_arr.includes(files.type)) {
      formData.append("file", files);
      dispatch(
        create_user_profile_image({ record: formData, user: details.user })
      );
    }
  };

  const triggerFile = () => {
    clickRef.current.click();
  };
  return (
    <>
      <div className="form-container min-height">
        <div className="owner-body">
          <Container fluid>
            <div className="heading">
              <Row>
                <Col>
                  <h2>
                    {" "}
                    <i className="go-back">
                      {" "}
                      <Link to="/app/owner-profile">
                        {" "}
                        <img src={GoBackIcon} alt="Go Back Icon" />{" "}
                      </Link>{" "}
                    </i>
                    <span>
                      Edit profile
                      {/* <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p> */}
                    </span>
                  </h2>
                </Col>
              </Row>
            </div>
            {message.error_code && (
              <ToastMessage
                error={error_messages[message.error_code]}
                bg={message.code}
                head={message.heading}
              />
            )}
            <div className="white-block-l lease-signor mr-b-40">
              <div style={{ padding: "0" }} className="user-detail mr-b-30">
                <Row className="w-100 gx-0">
                  <Col>
                    <div className="user-info">
                      <div className="img">
                        <img
                          src={
                            details?.user?.profile_image ||
                            // sessionStorage.getItem("profile_image") ||
                            ProfileError
                          }
                          alt="User Picture"
                        />
                      </div>
                      <div className="info">
                        <input
                          style={{ display: "none" }}
                          id="formControlsFile"
                          type="file"
                          ref={clickRef}
                          accept="image/*"
                          label="File"
                          onChange={(e) => setChange(e)}
                        />
                        <Button
                          className="change-pic"
                          variant="secondary"
                          onClick={() => triggerFile()}
                        >
                          Change Picture
                        </Button>

                        <p> Upload picture in .png, .gif, .jpg format </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <EditForm />
            </div>
          </Container>
        </div>
        <div className="owner-footer">
          <Container fluid>
            <Row>
              <Col md={6} xs={12}>
                {" "}
                <p> © 2021-2022 Nursesbnb Inc. All rights reserved.</p>{" "}
              </Col>
              <Col md={6} className="hide-mob">
                <div className="align-right">
                  <ul className="owner-nav">
                    <li>
                      {" "}
                      <a> About NursesBNB </a>
                    </li>
                    <li>
                      {" "}
                      <a> Terms & Conditions </a>
                    </li>
                    <li>
                      {" "}
                      <a> Privacy Policy </a>
                    </li>
                    <li>
                      {" "}
                      <a> FAQ’s </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
export default EditProfile;
