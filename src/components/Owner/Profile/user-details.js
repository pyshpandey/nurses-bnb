import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_user_detail } from "../../../actions/create-user-details";
import { reset_message } from "../../../actions/message";
import { Link } from "react-router-dom";
import { ProfileError, UserThumb } from "../../../assets/img/imagesh";
import { Row, Col, Button } from "react-bootstrap";

const UserDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch_user_detail());
    dispatch(reset_message());
  }, [dispatch]);
  const details = useSelector((state) => state.user_details);
  const { user, loading } = details;
  let image = details && details.user ? user.profile_image : ProfileError;
  return (
    <div className="user-detail mr-b-30">
      <Row className="w-100 gx-0">
        <Col md={6}>
          {loading === true ? (
            <p>Loading.....</p>
          ) : (
            <div className="user-info">
              <div className="img">
                <img src={image || ProfileError} alt="User Picture" />
              </div>
              <div className="info">
                {user && user.first_name && (
                  <h5> {`${user.first_name + " " + user.last_name}` || ``} </h5>
                )}

                <p> {user ? user.mobile : ""} </p>
                <p> {user ? user.email : ""} </p>
              </div>
            </div>
          )}
        </Col>
        <Col md={6}>
          <div className="align-right">
            <Link to="/app/owner-profile/edit">
              {" "}
              <Button className="status-btn published">
                {" "}
                Edit Profile{" "}
              </Button>{" "}
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default UserDetails;
