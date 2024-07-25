import { Row, Col } from "react-bootstrap";
import moment from "moment";

const ColDiv = ({ md, sm, xs, h, p, comma, textbold }) => {
  return (
    <Col md={md ? md : ""} xs={xs ? xs : ""} sm={sm ? sm : ""}>
      <div className="table-item">
        <h5> {h}</h5>
        {textbold ? (
          <h6>{p}</h6>
        ) : comma ? (
          <p>{p && p.toString()}</p>
        ) : (
          <p>{p}</p>
        )}
      </div>
    </Col>
  );
};

export const BankAccountInfoDiv = ({ data }) => {
  return (
    <>
      {data?.map((elem, ind) => (
        <div key={ind}>
          <Row>
            <ColDiv
              md="2"
              xs="12"
              h="Company Name"
              textbold={true}
              p={
                elem?.company_name.charAt(0).toUpperCase() +
                elem.company_name.slice(1)
              }
            />

            <ColDiv
              md="2"
              xs="12"
              h="First Name"
              textbold={true}
              p={
                elem?.acoount_first_name.charAt(0).toUpperCase() +
                elem.acoount_first_name.slice(1)
              }
            />
            <ColDiv
              md="2"
              xs="12"
              h="Last Name"
              textbold={true}
              p={
                elem?.acoount_last_name.charAt(0).toUpperCase() +
                elem.acoount_last_name.slice(1)
              }
            />
            <ColDiv
              md="2"
              xs="12"
              h="Account Number"
              textbold={true}
              p={elem?.account_number}
            />
            <ColDiv
              md="2"
              xs="12"
              h=" Routing Number"
              textbold={true}
              p={elem?.account_routing_number}
            />
            <ColDiv
              md="2"
              xs="12"
              h="Bank Name"
              textbold={true}
              p={
                elem?.bank_name.charAt(0).toUpperCase() +
                elem.bank_name.slice(1)
              }
            />
          </Row>
          <br />
          <br />
        </div>
      ))}
    </>
  );
};

export const LeaseSignorDiv = ({ data }) => {
  return (
    <>
      {data?.map((elem, index) => (
        <Row key={index}>
          <ColDiv
            md="2"
            sm="1"
            xs="12"
            textbold={true}
            h="S. No."
            p={index + 1}
          />
          <ColDiv
            md="2"
            sm="2"
            xs="12"
            textbold={true}
            h="First Name"
            p={
              elem?.first_name.charAt(0).toUpperCase() +
              elem.first_name.slice(1)
            }
          />
          <ColDiv
            md="2"
            sm="2"
            xs="12"
            textbold={true}
            h="Last Name"
            p={
              elem?.last_name.charAt(0).toUpperCase() + elem.last_name.slice(1)
            }
          />
          <ColDiv
            md="4"
            sm="4"
            xs="12"
            textbold={true}
            h="Email Address"
            p={elem?.email}
          />
          <ColDiv
            md="2"
            sm="3"
            xs="12"
            h="Mobile Number"
            p={elem?.mobile_number}
          />
        </Row>
      ))}
    </>
  );
};

export const RoomsDiv = ({ data }) => {
  const propertyObjtoArray = [
    {
      title: "Bedroom(s)",
      body: data?.bedroom,
    },
    {
      title: "Bathroom(s)",
      body: data?.bathroom,
    },
    {
      title: "Kitchen",
      body: data?.kitchen,
    },
    {
      title: "Closet",
      body: data?.closet,
    },
    {
      title: "Entrance",
      body: data?.entrance,
    },
  ];
  return (
    <>
      {propertyObjtoArray?.map((elem, ind) => (
        <div className="white-block less-mr" key={ind}>
          <Row>
            <Col md="8" xs="5">
              <strong> {elem?.title} </strong>
            </Col>
            <Col md="2" xs="2">
              <strong>
                {" "}
                {elem?.body?.no_of_room > -1 ? elem.body.no_of_room : null}{" "}
              </strong>
            </Col>
            <Col md="2" xs="5">
              <strong>
                {elem?.body?.privacy
                  ? elem.body.privacy.charAt(0).toUpperCase() +
                    elem.body.privacy.slice(1)
                  : elem?.body
                  ? elem.body.charAt(0).toUpperCase() + elem.body.slice(1)
                  : null}{" "}
              </strong>
            </Col>
          </Row>
        </div>
      ))}
    </>
  );
};

export const PropertyInfoDiv = ({ data }) => {
  return (
    <>
      <div className="des-block mr-b-40">
        <Row>
          <ColDiv
            md="3"
            xs="6"
            h="Property Type"
            p={
              data?.basicInformation?.property_type.charAt(0).toUpperCase() +
              data?.basicInformation?.property_type.slice(1)
            }
          />
          <ColDiv
            md="3"
            xs="6"
            h="Number of Guests"
            p={data?.basicInformation?.no_of_guest}
          />
          <ColDiv
            md="3"
            xs="6"
            h="Check-In Time"
            p={
              data?.propertyInformation?.check_in_time
                ? moment(data?.propertyInformation?.check_in_time).format(
                    "HH:MM"
                  )
                : null
            }
          />
          <ColDiv
            md="3"
            xs="6"
            h="Check-Out Time"
            p={
              data?.propertyInformation?.check_out_time
                ? moment(data?.propertyInformation?.check_out_time).format(
                    "HH:MM"
                  )
                : null
            }
          />
        </Row>
      </div>
      <div className="des-block mr-b-40">
        <Row>
          <ColDiv
            md="3"
            xs="6"
            h="Security Deposit Amount"
            p={
              data?.propertyInformation?.security_fee
                ? `$${data?.propertyInformation?.security_fee}`
                : null
            }
          />
          <ColDiv
            md="3"
            xs="6"
            h="Cleaning Fee"
            p={
              data?.propertyInformation?.cleaning_fee
                ? `$${data?.propertyInformation?.cleaning_fee}`
                : null
            }
          />
          <ColDiv
            md="3"
            xs="6"
            comma={true}
            h={`Parking Fee ($${
              data?.propertyInformation?.parking_type?.parking_fee
                ? data.propertyInformation.parking_type.parking_fee
                : ""
            })`}
            p={
              data?.propertyInformation?.parking_type
                ? data.propertyInformation.parking_type.parking_type.map(
                    (pt) => `${" "} ${pt.charAt(0).toUpperCase() + pt.slice(1)}`
                  )
                : ""
            }
          />
          <ColDiv
            md="3"
            xs="6"
            h="Rental Period"
            comma={true}
            p={data?.propertyInformation?.rental_period.map(
              (rp) => `${" "}${rp}`
            )}
          />
        </Row>
      </div>
      <div className="des-block mr-b-50">
        <Row>
          <ColDiv
            md="3"
            xs="6"
            h="Utilities Included"
            comma={true}
            p={data?.propertyInformation?.utilites.map(
              (util) => `${" "}${util.charAt(0).toUpperCase() + util.slice(1)}`
            )}
          />
          <ColDiv
            md="3"
            xs="6"
            h="Rental space (in Sq. Ft.)"
            p={
              data?.propertyInformation?.propety_space
                ? `${data.propertyInformation.propety_space} Sq. Ft`
                : ""
            }
          />
        </Row>
      </div>
    </>
  );
};
