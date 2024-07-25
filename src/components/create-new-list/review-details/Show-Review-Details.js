import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import checkIcon from "../../../assets/img/detail-check-ic.svg";
import UserThumb from "../../../assets/img/user-thumb.svg";
import { SmallHeaderWithIcon } from "../../common/header";
import {
  BankAccountInfoDiv,
  LeaseSignorDiv,
  PropertyInfoDiv,
  RoomsDiv,
} from "./Review-Details-Divs";
import { useNavigate, Link } from "react-router-dom";
import { OWNER_PATHS } from "../../../config/Owner-And-NewList_Paths";
import { blockOutDates } from "../../../constants/utils";
import ReviewImages from "./Review-Images";
import ChildInfant from "./Child-infant";
import BlockOutDates from "./Block-Out_dates";
import RowCol from "../../common/Row-Col";

const ShowReviewDetails = ({ details }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="">
        <ReviewImages images={details?.reviewDetails?.file} />
        <div className="detail-heading mr-b-50">
          <Row>
            <Col md="8" xs="12">
              <h2>
                {" "}
                {details?.reviewDetails?.basicInformation?.property_title}
              </h2>
              <p>
                {" "}
                {`${
                  details?.reviewDetails?.basicInformation?.fulladdress
                    ?.address1
                } ${", "} ${
                  details?.reviewDetails?.basicInformation?.fulladdress
                    ?.address2
                } ${", "}${
                  details?.reviewDetails?.basicInformation?.fulladdress?.city
                }${", "}${
                  details?.reviewDetails?.basicInformation?.fulladdress
                    ?.postal_code
                }`}{" "}
              </p>
            </Col>
            <Col md="4" xs="12">
              <div className="align-right">
                <Button className="week-btn">
                  {" "}
                  <b>
                    $ {details?.reviewDetails?.propertyInformation?.weeklyrent}
                  </b>
                  /week{" "}
                </Button>
                {details?.reviewDetails?.propertyInformation
                  ?.instant_booking ? (
                  <Button className="sync-btn">
                    {" "}
                    <img src={checkIcon} />
                    Instant Booking{" "}
                  </Button>
                ) : null}
              </div>
            </Col>
          </Row>
        </div>
        <div className="des-block mr-b-50">
          <Row>
            <Col>
              <h5> Description </h5>
              <p>
                {" "}
                {
                  details?.reviewDetails?.basicInformation?.property_description
                }{" "}
              </p>
            </Col>
          </Row>
        </div>
        <div className="des-block mr-b-50">
          <Row>
            <Col>
              <h5> House Rules </h5>
              <p>
                {" "}
                {details?.reviewDetails?.propertyInformation?.house_rules}{" "}
              </p>
            </Col>
          </Row>
        </div>

        {/* Property Info */}
        <PropertyInfoDiv data={details?.reviewDetails} />

        <ChildInfant
          data={details?.reviewDetails?.basicInformation?.safe_for_child}
        />
        <ChildInfant
          data={details?.reviewDetails?.basicInformation?.safe_for_infants}
        />

        <BlockOutDates data={blockOutDates} />

        <div className="form-block switch-block mr-b-30 mob-mr-b-30">
          <RowCol>
            <h6> Rooms </h6>
          </RowCol>
          <RoomsDiv data={details?.reviewDetails?.propertyInformation} />
        </div>

        {/* Lease Signor */}
        <div className="lease-signor-block mr-b-30">
          <Row>
            <SmallHeaderWithIcon
              h="Lease Signor"
              p="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              src={UserThumb}
            />
          </Row>
          <div className="add-pad mr-b-30 mob-mr-b-30">
            <div className="mr-b-30">
              <LeaseSignorDiv
                data={details?.reviewDetails?.all_deatils_leasesignors}
              />
            </div>
          </div>
        </div>

        {/* Bank Account Information */}
        <div className="lease-signor-block mr-b-30">
          <Row>
            <SmallHeaderWithIcon
              h="Bank Account Information"
              p="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              src={UserThumb}
            />
          </Row>
          <div className="add-pad mr-b-50">
            <BankAccountInfoDiv
              data={details?.reviewDetails?.all_bank_account}
            />
          </div>
        </div>
      </div>

      <div className="button-wrp">
        <Row>
          <Col>
            <Link to={() => navigate(-1)}>
              <Button variant="secondary">Cancel</Button>
            </Link>
            <Link to={OWNER_PATHS.REDIRECT}>
              <Button variant="primary">Save and send for review</Button>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ShowReviewDetails;
