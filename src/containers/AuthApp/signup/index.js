import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import LogoImage from "../../../assets/img/footer-logo.svg";
import OwenerIcon from "../../../assets/img/for-owners.svg";
import RenterIcon from "../../../assets/img/for-renters.svg";
import { Link } from "react-router-dom";
import LoginSidebar from "../login/login-sidebar";

const Signup = () => {
  const [renterSelected, setRenterSelected] = useState("");
  const [ownerSelected, setOwnerSelected] = useState("");
  const handleSelection = (value) => {
    if (value == 1) {
      setRenterSelected("active");
      setOwnerSelected("");
      localStorage.setItem("role", "renter");
    } else {
      setRenterSelected("");
      setOwnerSelected("active");
      localStorage.setItem("role", "owner");
    }
  };
  return (
    <>
      <div className="login-wrapper">
        <div className="left-side">
          <div className="mobile-header">
            <img src={LogoImage} alt="Nurses bnb" />
          </div>
          <div className="form-wrp">
            <div className="headind-sec mr-b-30 mob-mr-b-30">
              <h2> Choose role </h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                Sed sem nisl, fermentum ut nunc non, blandit volutpat mi.{" "}
              </p>
            </div>
            <div
              className={`choose-item mr-b-20 ${renterSelected}`}
              onClick={() => handleSelection(1)}
            >
              <div className="img">
                <img src={OwenerIcon} alt="Owner Icon" />
              </div>
              <div className="txt">
                <h5> Renter </h5>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
            <div
              className={`choose-item mr-b-20 ${ownerSelected}`}
              onClick={() => handleSelection(2)}
            >
              <div className="img">
                <img src={RenterIcon} alt="Renter Icon" />
              </div>
              <div className="txt">
                <h5> Homeowner </h5>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
            <div className="note-txt mr-b-40">
              <p>
                {" "}
                <b> Note: </b>You can always switch your user roles from the
                profile section.{" "}
              </p>
            </div>
            <Link to="/signup-user-details">
              {" "}
              <Button variant="primary" className="button mr-b-20">
                {" "}
                Next{" "}
              </Button>{" "}
            </Link>
            <div className="no-account">
              Already have an account? <Link to="/login"> Sign In </Link>
            </div>
          </div>
        </div>
        <LoginSidebar />
      </div>
    </>
  );
};

export default Signup;
