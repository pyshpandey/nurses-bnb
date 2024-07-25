import { Row, Col } from "react-bootstrap";

const Header = ({ head, body }) => {
  return (
    <div className="mr-b-36">
      <Row>
        <Col>
          <div className="heading">
            <h1>{head} </h1>
            <p> {body} </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Header;

export const SmallHeader = ({ h, p, xs }) => {
  return (
    <Col md="9" xs={xs ? xs : "9"}>
      <div className="heading">
        <h3> {h} </h3>
        <p> {p} </p>
      </div>
    </Col>
  );
};

export const SmallHeaderWithIcon = ({ src, h, p }) => {
  return (
    <Col>
      <div className="heading">
        <div className="user-thumb">
          <img src={src} />
        </div>
        <div className="title">
          <h4> {h} </h4>
          <p> {p} </p>
        </div>
      </div>
    </Col>
  );
};
