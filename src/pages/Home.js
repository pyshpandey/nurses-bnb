import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { COMMON_PATHS, OWNER_PATHS } from "../config/Owner-And-NewList_Paths";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  FooterLogo,
  BecomeHostImg,
  ExtraAccoIcon,
  SecuredIcon,
  MoreValue,
  VideoBgImg,
  VideoPlayIcon,
  LocationIcon,
  RecentPic1,
  RecentPic2,
  RecentPic3,
  RecentPic4,
  BestProp1,
  BestProp2,
  BestProp3,
  BestProp4,
  HomeBanner,
  Logo,
  menuToggleIcon,
  whiteSearchIcon,
  CanadaFlagIcon,
  UsaFlagIcon,
} from "../assets/img/imagesh";
import { connect } from "react-redux";
import { load_home_page } from "../actions/create-new-list";
import Loading from "../components/common/Loading";

const Home = ({ load_home_page, home_page }) => {
  const [isActive, setActive] = useState(false);
  const [isActionActive, setActionActive] = useState(false);
  const [isOriginActive, setOriginActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const actionToggle = () => {
    setActionActive(!isActionActive);
  };

  const chooseOrigin = () => {
    setOriginActive(!isOriginActive);
  };
  useEffect(() => {
    load_home_page();
  }, []);
  return (
    <>
      {/* Banner including header Section */}
      <section
        className="banner-sec"
        style={{ background: `url(${HomeBanner})` }}
      >
        <header>
          <Container>
            <Row>
              <Col md={6} xs={8}>
                <img src={Logo} alt="Logo" />
              </Col>
              <Col md={6} xs={4}>
                <div className="right-navbar">
                  {/* <div className='mobile-menu'>
                              <a className='toggle-menu'> <img src={menuToggleIcon} alt='Toggle Icon' /> </a>
                            </div> */}
                  <ul className="nav-links">
                    <li>
                      {" "}
                      <a>
                        {" "}
                        <img src={menuToggleIcon} alt="Toggle Icon" />{" "}
                      </a>{" "}
                    </li>
                    <li>
                      <a onClick={actionToggle}> Account </a>
                      <div
                        onClick={actionToggle}
                        className={
                          "overlay" + " " + (isActionActive ? "active" : null)
                        }
                      >
                        {" "}
                      </div>
                      <div
                        className={
                          "filter-dropdown" +
                          " " +
                          (isActionActive ? "active" : null)
                        }
                      >
                        <ul>
                          <li>
                            {" "}
                            <Link to={COMMON_PATHS.LOGIN}> Sign In </Link>
                          </li>
                          <li>
                            {" "}
                            <Link to={COMMON_PATHS.SIGNUP}>
                              {" "}
                              Create an account{" "}
                            </Link>{" "}
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      {" "}
                      <Link to={OWNER_PATHS.REDIRECT}>
                        {" "}
                        List your property{" "}
                      </Link>{" "}
                    </li>
                    <li>
                      <a className="drop-icon" onClick={chooseOrigin}>
                        {" "}
                        <img src={UsaFlagIcon} /> USA{" "}
                      </a>
                      <div
                        onClick={chooseOrigin}
                        className={
                          "overlay" + " " + (isOriginActive ? "active" : null)
                        }
                      >
                        {" "}
                      </div>
                      <div
                        className={
                          "filter-dropdown" +
                          " " +
                          (isOriginActive ? "active" : null)
                        }
                      >
                        <ul>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src={UsaFlagIcon} /> USA{" "}
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a>
                              {" "}
                              <img src={CanadaFlagIcon} /> Canada{" "}
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </header>
        <div className="banner-txt">
          <Container>
            <Row>
              <Col>
                <div className="text">
                  <h1>
                    {" "}
                    #1 Housing for <br /> Travel Nurses{" "}
                  </h1>
                  <p>
                    {" "}
                    Our hosts understand and care about your needs. Nursesbnb
                    was built by nurses, for nurses and other healthcare
                    professionals, just for that purpose{" "}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* Filter Section */}
      <section className="search-filter">
        <Container>
          <div className="custom-row">
            <div className="column">
              <div className="location-icon">
                <img src={LocationIcon} alt="Location Icon" />
              </div>
              <div className="form-filed">
                <Form.Label>
                  Going To <i> (Hospital or City and State) </i>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Miami, Fort Lauderdale/ Broward, Miami"
                />
              </div>
            </div>
            <div className="column">
              <div className="form-filed">
                <Form.Label> Check-In Date </Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Miami, Fort Lauderdale/ Broward, Miami"
                />
              </div>
            </div>
            <div className="column">
              <div className="form-filed">
                <Form.Label> Check-Out Date </Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Miami, Fort Lauderdale/ Broward, Miami"
                />
              </div>
            </div>
            <div className="column">
              <div className="form-filed">
                <label> Number of Guests </label>
                <Form.Select aria-label="Number of Guests">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Form.Select>
              </div>
              <div className="action-btn">
                <Button className="search-btn">
                  {" "}
                  <img src={whiteSearchIcon} />{" "}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Best Rentals Section */}
      <section className="best-rental-sec">
        <Container>
          <div className="heading-sec">
            <Row>
              <Col>
                <h4> Find best Rentals for you </h4>
                <p>
                  {" "}
                  Curated accommodations that are safe affordable and close to
                  medical facilities{" "}
                </p>
              </Col>
            </Row>
          </div>
          <Row className="gx-5">
            <Col md={4} xs={12}>
              <div className="item-list">
                <img src={BestProp1} alt="Hotel Suites" />
                <div className="content">
                  <h6> Hotel Suites </h6>
                  <p> 850 Listings </p>
                </div>
              </div>
            </Col>
            <Col md={4} xs={12} className="v-middle">
              <div className="item-list">
                <img src={BestProp2} alt="Condos" />
                <div className="content">
                  <h6> Condos </h6>
                  <p> 421 Listings </p>
                </div>
              </div>
              <div className="item-list">
                <img src={BestProp3} alt="RV Parking Sites" />
                <div className="content">
                  <h6> RV Parking Sites </h6>
                  <p> 368 Listings </p>
                </div>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="item-list">
                <img src={BestProp4} alt="Pets Allowed" />
                <div className="content">
                  <h6> Pets Allowed </h6>
                  <p> 150 Listings </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Recent Listings Section */}
      <section className="recent-list-sec">
        <Container>
          <div className="heading-sec">
            <Row>
              <Col md={8}>
                <h3> Recent Listings </h3>
                <p> Popular listings drawing everyone’s attention. </p>
              </Col>
              <Col md={4}>
                <div className="align-right">
                  <span className="filter-list">
                    <i onClick={handleToggle}> Filter listings </i>
                    <div
                      onClick={handleToggle}
                      className={"overlay" + " " + (isActive ? "active" : null)}
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
                            <Form.Check type="checkbox" label="Published" />
                          </Form.Group>
                        </li>
                        <li>
                          <Form.Group controlId="pendingCheckbox">
                            <Form.Check type="checkbox" label="Pending" />
                          </Form.Group>
                        </li>
                        <li>
                          <Form.Group controlId="rejectedCheckbox">
                            <Form.Check type="checkbox" label="Rejected" />
                          </Form.Group>
                        </li>
                        <li>
                          <Form.Group controlId="featuredCheckbox">
                            <Form.Check type="checkbox" label="Featured" />
                          </Form.Group>
                        </li>
                      </ul>
                    </div>
                  </span>
                  <Button className="magnta-btn"> Browse </Button>
                </div>
              </Col>
            </Row>
          </div>
          {home_page?.loading ? (
            <Loading />
          ) : (
            home_page?.homePage?.map((info, ind) => (
              <Row key={ind}>
                <Col md={3} xs={12}>
                  <div className="list-item">
                    <span className="location">
                      {" "}
                      <i>
                        {" "}
                        <img src={LocationIcon} alt="Location Icon" />{" "}
                      </i>{" "}
                      {info?.basicInformation?.fulladdress?.address1}{" "}
                    </span>
                    <div className="image">
                      <img src={RecentPic1} />
                      <div className="txt">
                        <Button className="price-btn">
                          {" "}
                          <b>$160 </b>/week{" "}
                        </Button>
                      </div>
                    </div>
                    <h5> {info?.basicInformation?.property_title} </h5>
                    <p style={{ textOverflow: "ellipsis" }}>
                      {" "}
                      {info?.basicInformation?.property_type}
                    </p>
                    <Button className="status-btn published">
                      {" "}
                      Check Availability{" "}
                    </Button>
                  </div>
                </Col>
              </Row>
            ))
          )}
        </Container>
      </section>
      {/* Our universe Section */}
      <section className="our-universe-section">
        <Container>
          <Row>
            <Col>
              <div className="heading-sec">
                <h6> Welcome to our universe </h6>
                <p>
                  {" "}
                  Nursesbnb understands the special needs of healthcare workers
                  and unlike other platforms, designs the entire experience
                  around them. Nursesbnb hosts offer friction-less check-ins,
                  with hours that suit healthcare professionals.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="video-wrp">
                <img src={VideoBgImg} alt="Video Image" />
                <div className="text">
                  <i>
                    {" "}
                    <img src={VideoPlayIcon} />{" "}
                  </i>
                  <h4>
                    {" "}
                    Nursesbnb was built by nurses, for nurses and other
                    healthcare professionals{" "}
                  </h4>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4} xs={12}>
              <div className="white-widget">
                <div className="icon">
                  <img src={ExtraAccoIcon} alt="Extraordinary Accommodations" />
                </div>
                <div className="content">
                  <h5> Extraordinary Accommodations </h5>
                  <p>
                    {" "}
                    Safe, affordable, accommodations close to hospitals. 100%
                    online booking process.{" "}
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="white-widget">
                <div className="icon">
                  <img src={SecuredIcon} alt="Completely Secured" />
                </div>
                <div className="content">
                  <h5> Completely Secured </h5>
                  <p>
                    {" "}
                    The only housing platform built by a healthcare professional
                    for healthcare professionals. Nursesbnb ensure customers are
                    who they say they are and own what they say they own.{" "}
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="white-widget">
                <div className="icon">
                  <img src={MoreValue} alt="Add More Value" />
                </div>
                <div className="content">
                  <h5> Add More Value </h5>
                  <p>
                    {" "}
                    The only platform with unique features that protects you
                    from housing discrimination. Nursesbnb ensures your security
                    through our safety checkups.{" "}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Become a host Section */}
      <section className="become-host-section">
        <Container>
          <div className="add-pad">
            <Row>
              <Col md={7}>
                <div className="img">
                  <img src={BecomeHostImg} alt="Become a host" />
                </div>
              </Col>
              <Col md={5} className="v-center">
                <div className="text">
                  <h4>
                    {" "}
                    Become a host and provide medium term housing accommodations
                    to the best group of professionals- healthcare
                    professionals.{" "}
                  </h4>
                  <p>
                    {" "}
                    Healthcare Professionals dedicate themselves to provide
                    selfless service to us. You do not need to live in the city
                    or tourist areas to list your space. Our focus is proximity
                    to medical facilities.{" "}
                  </p>
                  <Button className="magnta-btn"> Become a host </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      {/* Experience Accommodations Section */}
      <section className="exp-acco-section">
        <Container>
          <Row>
            <Col md={9}>
              <div className="text">
                <h4> Experience the best accommodations. </h4>
                <p>
                  {" "}
                  We are not just another booking platform. We have pulled out
                  all the stops to ensure a safe journey for healthcare
                  professionals. From RV parking to the best hosts who
                  understands your needs. They are flexible with check-ins and
                  will go that extra mile if required.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="align-right">
                <Button className="white-btn"> Sign Up Now </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Footer Section */}
      <footer className="footer-sec">
        <Container>
          <Row>
            <Col md={3}>
              <div className="foot-item">
                <img src={FooterLogo} alt="Logo" />
                <p>
                  {" "}
                  &copy; 2021-2022 Nursesbnb Inc. <br /> All rights reserved.{" "}
                </p>
              </div>
            </Col>
            <Col md={2}>
              <div className="foot-item">
                <h4> Product </h4>
                <ul>
                  <li>
                    {" "}
                    <a> Renter </a>
                  </li>
                  <li>
                    {" "}
                    <a> Homeowner </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3}>
              <div className="foot-item">
                <h4> Company </h4>
                <ul>
                  <li>
                    {" "}
                    <a> About Nursesbnb </a>
                  </li>
                  <li>
                    {" "}
                    <a> Contact Us </a>
                  </li>
                  <li>
                    {" "}
                    <a> Travel Tips </a>
                  </li>
                  <li>
                    {" "}
                    <a> Our Team </a>
                  </li>
                  <li>
                    {" "}
                    <a> Blog </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={2}>
              <div className="foot-item">
                <h4> Support </h4>
                <ul>
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
                  <li>
                    {" "}
                    <a> Press </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={2} className="flex-end">
              <div className="foot-item">
                <h4> Social Accounts </h4>
                <ul>
                  <li>
                    {" "}
                    <a> Facebook </a>
                  </li>
                  <li>
                    {" "}
                    <a> Twitter </a>
                  </li>
                  <li>
                    {" "}
                    <a> Instagram </a>
                  </li>
                  <li>
                    {" "}
                    <a> LinkedIn </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export const mapStateToProps = ({ home_page }) => {
  return { home_page };
};

export default connect(mapStateToProps, {
  load_home_page,
})(Home);
