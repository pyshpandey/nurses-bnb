import { useDispatch } from "react-redux";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";
import mobileLogo from "../../assets/img/mobile-logo.svg";
import menuToggleIcon from "../../assets/img/menu-toggle-ic.svg";
import profilePic from "../../assets/img/profile-pic.png";
import { LogoutIcon } from "../../assets/img/imagesh";
import { Link,useNavigate } from "react-router-dom";
import { constantTexts } from "../../constants/utils";
import { user_logout } from "../../actions/auth";
import Tooltip from "./Tooltip";

const Navbar = ({ meunItems, profileImage, layout }) => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const performLogout = (navigate) =>{
    dispatch(user_logout(navigate));
  }
  return (
    <>
      <div className="mobile-header">
        <Container>
          <Row>
            <Col xs="6">
              <div className="logo">
                <img src={mobileLogo} />
              </div>
            </Col>
            <Col xs="6">
              <div className="right-header">
                <div className="mob-menu">
                  <img src={menuToggleIcon} />
                </div>
                <div className="prof-pic">
                  <img src={profilePic} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className={
          "left-sidebar " +
          (layout === constantTexts.OWNER_LAYOUT ? "owner-nav" : "")
        }
      >
        <div className="logo">
          {layout === constantTexts.CREATE_NEW_LIST_LAYOUT && (
            <img src={logo} alt="Logo" />
          )}
          {layout === constantTexts.OWNER_LAYOUT && (
            <img src={mobileLogo} alt="Logo" />
          )}
        </div>
        {layout === constantTexts.CREATE_NEW_LIST_LAYOUT && <h6> Steps </h6>}
        <nav
          className={
            "nav " + (layout === constantTexts.OWNER_LAYOUT ? " " : "no-list")
          }
        >
          <ul>
            {meunItems.map((menu, index) => {
              return (
                <li className={menu.title} key={index + 1}>
                  <Tooltip
                    content={menu.title}
                    direction="right"
                    for={menu.for}
                  >
                    <Link
                      // activeClassName={`${
                      //   location.pathname === menu.path ? "is-active" : ""
                      // }`}
                      to={menu.path}
                      className="nav-link"
                    >
                      {" "}
                      {layout === constantTexts.CREATE_NEW_LIST_LAYOUT && (
                        <> {menu.title} </>
                      )}
                      {layout === constantTexts.OWNER_LAYOUT && (
                        <>
                          {" "}
                          <img
                            src={menu.profileContent ? profileImage : menu.icon}
                            alt={menu.title}
                          />{" "}
                        </>
                      )}
                    </Link>
                  </Tooltip>
                </li>

              );
            })}
            {layout === constantTexts.OWNER_LAYOUT && (
              <li className="Logout"><a className="logout" onClick = {()=>performLogout(navigate)}>
                {" "}
                <img src={LogoutIcon} alt="Logout" />{" "}
              </a></li>
            )}
          </ul>
        </nav>

      </div>
    </>
  );
};

export default Navbar;
