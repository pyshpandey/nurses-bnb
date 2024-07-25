
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={6} xs={12}>  <p> © 2021-2022 Nursesbnb Inc. All rights reserved.</p>   </Col>
                    <Col md={6} className="hide-mob">
                        <div className="align-right">
                            <ul className="owner-nav">
                                <li> <a> About NursesBNB </a></li>
                                <li> <a> Terms & Conditions </a></li>
                                <li> <a> Privacy Policy </a></li>
                                <li> <a> FAQ’s </a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Footer;