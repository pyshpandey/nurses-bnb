import { Row,Container,Col,Tabs,Tab,FloatingLabel,Form,Button,Select } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {GoBackIcon} from '../../../assets/img/imagesh';

const Settings = () =>{
    return(
        <>
            <div className='dash-body'>
                <Container fluid>
                    <div className='heading'>
                        <Row>
                            <Col> 
                                <h2> <i className='go-back'> <Link to='/app/admin/dashboard'>  <img src={GoBackIcon}  alt='Go Back Icon' /> </Link>  </i>Settings </h2>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <div className='setting-tabs'>
                    <Tabs defaultActiveKey="fees" className='active'>
                        <Tab eventKey="fees" title="Fees">
                            <div className='tab-text mr-b-50'>
                                <Container fluid>
                                    <div className='mr-b-30 mob-mr-b-30'>
                                        <Row>
                                            <Col> 
                                                <div className='tab-head'>
                                                    <h3> Fees </h3>
                                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className='mr-b-30 mob-mr-b-30'>
                                        <Row>
                                            <Col> 
                                                <FloatingLabel controlId="floatingInputGrid" label="Hotel Listing Fee">
                                                    <Form.Control type="text" placeholder="Enter value" />
                                                </FloatingLabel>
                                            </Col>
                                            <Col> 
                                                <FloatingLabel controlId="floatingInputGrid" label="Listing Promotion Fee">
                                                    <Form.Control type="text" placeholder="Enter value" />
                                                </FloatingLabel>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className='mr-b-30 mob-mr-b-30'>
                                        <Row>
                                            <Col> 
                                                <FloatingLabel controlId="floatingInputGrid" label="Renter insurance Fee">
                                                    <Form.Control type="text" placeholder="Enter value" />
                                                </FloatingLabel>
                                            </Col>
                                            <Col> 
                                                <FloatingLabel controlId="floatingInputGrid" label="Background application Fee">
                                                    <Form.Control type="text" placeholder="Enter value" />
                                                </FloatingLabel>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className='mr-b-30 mob-mr-b-30'>
                                        <Row>
                                            <Col> 
                                                <FloatingLabel controlId="floatingInputGrid" label="Late Rent Payment Fee (in percentage)">
                                                    <Form.Control type="text" placeholder="Enter value" />
                                                </FloatingLabel>
                                            </Col>
                                            <Col> 
                                                <FloatingLabel controlId="floatingInputGrid" label="Cancellation Fee">
                                                    <Form.Control type="text" placeholder="Enter value" />
                                                </FloatingLabel>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className='mr-b-15'>
                                        <Row>
                                            <Col md={6}> 
                                                <FloatingLabel controlId="floatingInputGrid" label="Eviction Fee">
                                                    <Form.Control type="text" placeholder="Enter value" />
                                                </FloatingLabel>
                                            </Col>
                                        </Row>
                                    </div>
                                </Container>
                            </div>
                            <div className='button-2'>
                                <Button className='price-btn signin-btn'>  Cancel  </Button>
                                <Button className='magnta-btn signin-btn'>  Save Changes   </Button> 
                            </div>
                        </Tab>
                        <Tab eventKey="processing-fee" title="Processing Fee">
                            <div className='tab-text mr-b-50'>
                                <Container fluid>
                                    <div className='mr-b-30 mob-mr-b-30'>
                                        <Row>
                                            <Col> 
                                                <div className='tab-head'>
                                                    <h3> Processing Fee </h3>
                                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className='mr-b-30 mob-mr-b-30'>
                                        <Row>
                                            <Col> 
                                                <FloatingLabel controlId="floatingInputGrid" label="Host Platform Processing Fee (in percentage)">
                                                    <Form.Control type="text" placeholder="Enter value" />
                                                </FloatingLabel>
                                            </Col>
                                            <Col> 
                                                <FloatingLabel controlId="floatingInputGrid" label="Renter Processing Fee (in percentage)">
                                                    <Form.Control type="text" placeholder="Enter value" />
                                                </FloatingLabel>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className='mr-b-30 mob-mr-b-30'>
                                        <Row>
                                            <Col> 
                                                <FloatingLabel controlId="floatingInputGrid" label="Payment Processing Fee (in percentage)">
                                                    <Form.Control type="text" placeholder="Enter value" />
                                                </FloatingLabel>
                                            </Col>
                                            <Col> 
                                                <FloatingLabel controlId="floatingInputGrid" label="Daily Cleaning Service Rate (in percentage)">
                                                    <Form.Control type="text" placeholder="Enter value" />
                                                </FloatingLabel>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className='mr-b-15'>
                                        <Row>
                                            <Col md={6}> 
                                                <FloatingLabel controlId="floatingInputGrid" label="Daily Cleaning Service Rate City or State Override (in percentage)">
                                                    <Form.Control type="text" placeholder="Enter value" />
                                                </FloatingLabel>
                                            </Col>
                                        </Row>
                                    </div>
                                </Container>
                            </div>
                            <div className='button-2'>
                                <Button className='price-btn signin-btn'>  Cancel  </Button>
                                <Button className='magnta-btn signin-btn'>  Save Changes   </Button> 
                            </div>
                        </Tab>
                        <Tab eventKey="reminders-notifications" title="Reminders & Notifications">
                            <div className='tab-text mr-b-50'>
                                <Container fluid>
                                    <div className='mr-b-30 mob-mr-b-30'>
                                        <Row>
                                            <Col> 
                                                <div className='tab-head'>
                                                    <h3> Processing Fee </h3>
                                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className='mr-b-30 mob-mr-b-30'>
                                        <Row>
                                            <Col> 
                                                <FloatingLabel controlId="floatingSelect" label="Email Reminders">
                                                    <Form.Select aria-label="Floating label select example">
                                                        <option value="1">1 Hours</option>
                                                        <option value="2">12 Hours</option>
                                                        <option value="3">24 Hours</option>
                                                    </Form.Select>
                                                </FloatingLabel>
                                            </Col>
                                            <Col> 
                                                <FloatingLabel controlId="floatingSelect" label="Mobile / SMS Reminders">
                                                    <Form.Select aria-label="Floating label select example">
                                                        <option value="1">1 Hours</option>
                                                        <option value="2">12 Hours</option>
                                                        <option value="3">24 Hours</option>
                                                    </Form.Select>
                                                </FloatingLabel>
                                            </Col>
                                        </Row>
                                    </div>
                                </Container>
                            </div>
                            <div className='button-2'>
                                <Button className='price-btn signin-btn'>  Cancel  </Button>
                                <Button className='magnta-btn signin-btn'>  Save Changes   </Button> 
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </>
    )
}
export default Settings;