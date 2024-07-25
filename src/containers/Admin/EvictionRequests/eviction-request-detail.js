import React, { useState } from 'react';
import { Row,Container,Col,Button,Form,Modal,FloatingLabel } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {GoBackIcon, DocIcon, BestProp2, BestProp3} from '../../../assets/img/imagesh';
import PropImg from '../../../assets/img/prop-img.png';

const EvictionRequestDetail = () =>{
    const [isActionActive, setActionActive] = useState(false);
    const [showPopRej, setRejectOpen] = useState(false);

    const handleCloseRej = () => setRejectOpen(false);
    const handleOpenRej = () => setRejectOpen(true);

    const handleActionToggle = () => {
        setActionActive(!isActionActive);
    };
    return(
      <>
         {/* Rating  Modale */}
        <Modal className="reject--list-pop" show={showPopRej} onHide={handleCloseRej}>
          <div className="modal-box">
            <div className="header">
              <h3 className='mr-b-20'> Settle request </h3>
            </div>
            <div className="body">
              <p className='mr-b-10'> In fovour of</p>
              <span className="check-list"> 
                  <Form.Group controlId="Checkbox1">
                      <Form.Check type="radio" label="Homeowner (Jeremy Mason)" />
                  </Form.Group>  
               </span>
               <span className="check-list mob-mr-b-30 mr-b-30"> 
                  <Form.Group controlId="Checkbox2">
                      <Form.Check type="radio" label="Renter Richard Griffith" />
                  </Form.Group>  
               </span> 
               <FloatingLabel className="mob-mr-b-30 mr-b-30"  controlId="floatingTextarea2"  label="Additional comment" >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "120px" }}
                  />
              </FloatingLabel>
              <div className="button-wrp">
                  <Button className="price-btn"> Cancel </Button>
                  <Button className="magnta-btn w-280 mr-l-15" onClick={handleCloseRej}>  Settle request </Button>
              </div>
            </div>
          </div>
        </Modal>
          <>
            <div className='dash-body'>
                <Container fluid>
                    <div className='heading'>
                        <Row>
                            <Col> 
                                <h2> <i className='go-back'> <Link to='/app/admin/eviction-request'>  <img src={GoBackIcon}  alt='Go Back Icon' /> </Link>  </i> Eviction request detail </h2>
                            </Col>
                        </Row>
                    </div>
                    <div className='table-body mr-b-30'>
                        <Row className='gx-0'>
                            <Col md={4}>
                                <Link to="/app/admin/booking/detail">
                                    <div className='table-col'>
                                        <div className='prop-img'>
                                            <img src={PropImg} alt='Profile Image' />
                                        </div>
                                        <div className='prop-detail'>
                                            <h4> Large 1920s home</h4>
                                            <p> 11311 19th Ave  </p>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                            <Col md={3}>
                                <div className='table-col'>
                                    <p> Nov 25, 2021 to Dec 11, 2021 </p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className='table-col'>
                                    <p> 1+ Beds 1+ Beds </p>
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className='table-col'>
                                    <Button className='status-btn active'> On-Going </Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="succ-reason mr-b-30">
                        <h2> Settlement </h2>
                        <p className='mr-b-20'> Homeowner (Jeremy Mason) </p>
                        <h6> Additional comments </h6>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum mauris at tincidunt aliquet. Morbi magna purus, imperdiet id bibendum eget, sagittis vel mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                    </div>
                    <div className='user-detail mr-b-30'>
                        <div className='w-100'>
                            <Row>
                                <Col>
                                    <div className='heading'>
                                        <h5 className='mr-b-30 mob-mr-b-30'>  Homeowner Eviction Details </h5>
                                    </div>
                                </Col>
                            </Row>
                            <div className='des-block'>
                                <div className='mr-b-20'>
                                    <Row>
                                        <Col md={4}>
                                            <div className='table-item'>
                                                <h5> Homeowner Name </h5>
                                                <p> Jared Baker </p>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className='table-item'>
                                                <h5> Homeowner Email </h5>
                                                <p> jared.baker@gmail.com </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className='des-block'>
                                <div className='mr-b-20'>
                                    <Row>
                                        <Col md={12}>
                                            <div className='table-item'>
                                                <h5> Additional Comments </h5>
                                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum mauris at tincidunt aliquet. Morbi magna purus, imperdiet id bibendum eget, sagittis vel mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce dignissim vehicula viverra. Cras aliquam tempus facilisis. Donec volutpat, felis nec ornare sagittis. </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className='des-block'>
                                <div className='mr-b-30'>
                                    <Row>
                                        <Col md={12}>
                                            <div className='table-item'>
                                                <h5> Photos </h5>
                                                <div className='upload-img-list'>
                                                    <div className='img-item'> 
                                                        <img src={BestProp2} alt='' />
                                                    </div>
                                                    <div className='img-item'> 
                                                        <img src={BestProp3} alt='' />
                                                    </div>
                                                    <div className='img-item'>
                                                        <img src={BestProp2} alt='' />
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className='download-evict'>
                                <Row>
                                    <Col md={7}> 
                                        <p> <img src={DocIcon} alt='Download Eviction' /> eviction-document.docx </p>
                                    </Col>
                                    <Col md={5}> 
                                        <dv className="align-right">
                                            <a> Download Document </a> 
                                        </dv>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                    <div className='user-detail mr-b-30'>
                        <div className='w-100'>
                            <Row>
                                <Col>
                                    <div className='heading'>
                                        <h5 className='mr-b-30 mob-mr-b-30'>  Renter Eviction Details  </h5>
                                    </div>
                                </Col>
                            </Row>
                            <div className='des-block'>
                                <div className='mr-b-20'>
                                    <Row>
                                        <Col md={3}>
                                            <div className='table-item'>
                                                <h5> Renter Name </h5>
                                                <p> Jared Baker </p>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className='table-item'>
                                                <h5> Homeowner Email </h5>
                                                <p> jared.baker@gmail.com </p>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className='table-item'>
                                                <h5> Check-In Date  </h5>
                                                <p>  Nov 25, 2021 </p>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className='table-item'>
                                                <h5> Check-Out Date </h5>
                                                <p> Dec 16, 2021 </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='mr-b-20'>
                                    <Row>
                                        <Col md={3}>
                                            <div className='table-item'>
                                                <h5> Number of guests  </h5>
                                                <p> 1 </p>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className='table-item'>
                                                <h5> No.of weekly cleaning </h5>
                                                <p> 2 </p>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className='table-item'>
                                                <h5> Transaction ID  </h5>
                                                <p> TXCDSF5634564 </p>
                                            </div>
                                        </Col> 
                                    </Row>
                                </div>
                            </div>
                            <div className='des-block'>
                                <div className='mr-b-20'>
                                    <Row>
                                        <Col md={12}>
                                            <div className='table-item'>
                                                <h5> Additional Comments </h5>
                                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum mauris at tincidunt aliquet. Morbi magna purus, imperdiet id bibendum eget, sagittis vel mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce dignissim vehicula viverra. Cras aliquam tempus facilisis. Donec volutpat, felis nec ornare sagittis. </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className='des-block'>
                                <div className='mr-b-30'>
                                    <Row>
                                        <Col md={12}>
                                            <div className='table-item'>
                                                <h5> Photos </h5>
                                                <div className='upload-img-list'>
                                                    <div className='img-item'> 
                                                        <img src={BestProp2} alt='' />
                                                    </div>
                                                    <div className='img-item'> 
                                                        <img src={BestProp3} alt='' />
                                                    </div>
                                                    <div className='img-item'>
                                                        <img src={BestProp2} alt='' />
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className='download-evict'>
                                <Row>
                                    <Col md={7}> 
                                        <p> <img src={DocIcon} alt='Download Eviction' /> eviction-document.docx </p>
                                    </Col>
                                    <Col md={5}> 
                                        <dv className="align-right">
                                            <a> Download Document </a> 
                                        </dv>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                <div className='user-detail'>
                    <div className='w-100'>
                        <Row>
                            <Col>
                                <div className='heading'>
                                    <h5 className='mr-b-30 mob-mr-b-30'> Pricing Details   </h5>
                                </div>
                            </Col>
                        </Row>
                        <div className='striped-table'>
                            <div className='t-body'>
                                <Row>
                                    <Col>
                                        <p> Rental Amount </p>
                                    </Col>
                                    <Col>
                                        <p className='align-right'> $100.00 </p>
                                    </Col>
                                </Row>
                            </div>
                            <div className='t-body'>
                                <Row>
                                    <Col>
                                        <p> Service Fee (5%) </p>
                                    </Col>
                                    <Col>
                                        <p className='align-right'> $20.00 </p>
                                    </Col>
                                </Row>
                            </div>
                            <div className='t-body'>
                                <Row>
                                    <Col>
                                        <p> Cleaning Fee </p>
                                    </Col>
                                    <Col>
                                        <p className='align-right'> $20.00 </p>
                                    </Col>
                                </Row>
                            </div>
                            <div className='t-body'>
                                <Row>
                                    <Col>
                                        <p> Rental Insurance Fee </p>
                                    </Col>
                                    <Col>
                                        <p className='align-right'> $10.00 </p>
                                    </Col>
                                </Row>
                            </div>
                            <div className='t-body'>
                                <Row>
                                    <Col>
                                        <p> Background Check Fee </p>
                                    </Col>
                                    <Col>
                                        <p className='align-right'> $30.00 </p>
                                    </Col>
                                </Row>
                            </div>
                            <div className='t-body'>
                                <Row>
                                    <Col>
                                        <p> Total </p>
                                    </Col>
                                    <Col>
                                        <b className='align-right'> $160.00 </b>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='button-2'>
                    <Button className='magnta-btn signin-btn' onClick={handleOpenRej}>  Settle Request   </Button>
                </div>
                </Container>
                 
            </div>
        </>
      </>
    )
  }
  export default EvictionRequestDetail;
  

