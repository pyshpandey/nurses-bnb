import { Row, Col, Container, Form,  Button, FloatingLabel, Modal, } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainThumb from '../../../assets/img/prop-ic1.png';
import Thumb1 from '../../../assets/img/prop-pic2.png';
import Thumb2 from '../../../assets/img/prop-pic3.png';
import checkIcon from '../../../assets/img/detail-check-ic.svg';
import UserThumb from '../../../assets/img/user-thumb.svg';
import {GreenCheckIcon, GoBackIcon, DropIcon, DashboardIcon3, GrayStar, FiledStar, CrossIcon, CheckIcon, RedCross} from '../../../assets/img/imagesh';


const ListingDetail = () =>{
  const [show, setShow] = useState(false);
  const [showpop, setOpen] = useState(false);
  const [showPopRej, setRejectOpen] = useState(false);
  const [isActive, setActive] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClosePop = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleCloseRej = () => setRejectOpen(false);
  const handleOpenRej = () => setRejectOpen(true);

  const handleToggle = () => {
      setActive(!isActive);
  };

    return (
      <> 
        {/* Rating  Modale */}
        <Modal className="rating-pop" show={show} onHide={handleClose}>
          <div className="modal-box">
            <div className="header">
              <h3> Neighbourhood rating </h3>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum mauris. </p>
            </div>
            <div className="body">
              <div className="rating-stars mr-b-20">
                  <img src={FiledStar} alt="Rating Star" />
                  <img src={FiledStar} alt="Rating Star" />
                  <img src={FiledStar} alt="Rating Star" />
                  <img src={FiledStar} alt="Rating Star" />
                  <img src={GrayStar} alt="Rating Star" />
              </div>
              <p className="rating-txt mob-mr-b-30 mr-b-30"> Low Crime </p>
              <div className="button-wrp">
                  <Button className="magnta-btn mr-b-20">
                    Submit Rating
                  </Button>
                  <Button className="price-btn" onClick={handleClose}>
                    Cancel
                  </Button>
              </div>
            </div>
          </div>
        </Modal>

        {/* Previous History */}
        <Modal className="pre-history-modal" show={showpop} onHide={handleClosePop}>
          <div className="modal-box">
            <div className="header">
              <h3> Previous History  <img className="cross-btn" onClick={handleClosePop} src={CrossIcon} /> </h3>
            </div>
            <div className="body">
              <div className="striped-table">
                  <div className='table-head'>
                        <Row className="gx-0">
                            <Col md={6}>
                                <div className='table-col'>
                                    <span> Featured Sections   </span>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='table-col'>
                                    <span> Listing Duration    </span>
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className='table-col'>
                                    <span> Charges  </span>
                                </div>
                            </Col>
                        </Row>
                </div>
                <div className='table-body'>
                    <Row className="gx-0">
                        <Col md={6}>
                            <div className='table-col'> 
                                <div className='prop-detail'>
                                    <h4>  Priority Listing based on Search criteria,  Listed within the featured listings section </h4>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='table-col'>
                                <p> Nov 22, 2021 to Nov 27, 2021 </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                                <p> $100.00 </p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-body'>
                    <Row className="gx-0">
                        <Col md={6}>
                            <div className='table-col'> 
                                <div className='prop-detail'>
                                    <h4>  Priority Listing based on Search criteria </h4>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='table-col'>
                                <p> Nov 22, 2021 to Nov 27, 2021 </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                                <p> $300.00 </p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-body'>
                    <Row className="gx-0">
                        <Col md={6}>
                            <div className='table-col'> 
                                <div className='prop-detail'>
                                    <h4>  Priority Listing based on Search criteria </h4>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='table-col'>
                                <p> Nov 22, 2021 to Nov 27, 2021 </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                                <p> $100.00 </p>
                            </div>
                        </Col>
                    </Row>
                </div>
              </div>
               
            </div>
          </div>
        </Modal>

        {/* Rating  Modale */}
        <Modal className="reject--list-pop" show={showPopRej} onHide={handleCloseRej}>
          <div className="modal-box">
            <div className="header">
              <h3> Reject listing </h3>
              <p> Are you sure you want to delete the <b> Large 1920s home W/Parking | 25 mins from Midtown</b> from the system? </p>
            </div>
            <div className="body">
              <span className="check-list"> 
                  <Form.Group controlId="Checkbox1">
                      <Form.Check type="checkbox" label="Listed homeowners do not match with the State, county, city, local municipal or property appraiser records." />
                  </Form.Group>  
               </span>
               <span className="check-list"> 
                  <Form.Group controlId="Checkbox2">
                      <Form.Check type="checkbox" label="Photos do not meet our acceptable use policy for marketing or text embedded within images." />
                  </Form.Group>  
               </span>
               <span className="check-list"> 
                  <Form.Group controlId="Checkbox3">
                      <Form.Check type="checkbox" label="Photos do not meet our acceptable use policy for quality." />
                  </Form.Group>  
               </span>
               <FloatingLabel className="mob-mr-b-30 mr-b-30"  controlId="floatingTextarea2"  label="Listing Description" >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "140px" }}
                  />
              </FloatingLabel>
              <div className="button-wrp">
                  <Button className="price-btn"> Cancel </Button>
                  <Button className="btn-danger" onClick={handleCloseRej}> Reject Listing </Button>
              </div>
            </div>
          </div>
        </Modal>

        <div className='form-container dash-body for-admin'>
          <Container fluid>
                <div className='heading'>
                    <Row>
                        <Col> 
                            <h2> <i className='go-back'> <Link to='/app/admin/listing'>  <img src={GoBackIcon}  alt='Go Back Icon' /> </Link>  </i> Listing Detail </h2>
                        </Col>
                        <Col>
                            <div className='align-right'>
                                <Button className='status-btn'> Pending </Button>
                                <span className='setting-icon'>  
                                    <i onClick={handleToggle}> <img src={DropIcon} alt='' />  </i>
                                    <div onClick={handleToggle} className={'overlay' + ' ' + (isActive ? "active" : null)}> </div>
                                    <div  className={'filter-dropdown right' + ' ' + (isActive ? "active" : null)}>
                                        <ul>
                                            <li>
                                                <img src={CheckIcon} /> Approve Request
                                            </li>
                                            <li className='red-color' onClick={handleOpenRej}>
                                                <img src={RedCross} /> Reject Request
                                            </li>
                                        </ul>
                                    </div>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='lease-signor-block white-bg mr-b-30'>
                  <Row>
                    <Col>
                      <div className='heading part-2 mr-b-0 pad-t-b-20'>
                        <div className='title'>
                          <h4> Listing featured </h4>
                        </div>
                        <div className="align-right">
                          <Button className='status-btn active'> Active </Button>
                          <Button className='status-btn mr-l-15' onClick={handleOpen}> View History </Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className='add-pad mr-b-30 mob-mr-b-30'>
                    <div >
                      <Row>
                          <Col md={7}>
                             <div className='table-item'>
                                <h5> Featured Sections </h5>
                                <p>Priority Listing based on Search criteria</p> 
                             </div>
                          </Col>
                          <Col md={4}>
                            <div className='table-item'>
                              <h5> Listing Duration </h5>
                              <p> Nov 22, 2021 to Nov 27, 2021 </p>
                            </div>
                          </Col>
                          <Col md={1}>
                            <div className='table-item'>
                              <h5> Charges </h5>
                              <p> $500.00 </p>
                            </div>
                          </Col>
                      </Row>
                    </div>
                  </div>
                  
                </div>
                <div className="rejection-reason mr-b-50">
                  <h2> Rejection reason </h2>
                  <ul>
                    <li> Listed homeowners do not match with the State, county, city, local municipal or property appraiser records. </li>
                    <li> Photos do not meet our acceptable use policy for marketing or text embedded within images. </li>
                  </ul>
                  <h6> Additional comments </h6>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum mauris at tincidunt aliquet. Morbi magna purus, imperdiet id bibendum eget, sagittis vel mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                </div>
            <div className=''>
                <div className='mr-b-30'>
                  <Row>
                    <Col md="8" xs="8">
                      <div className='thumb-item'>
                          <img src={MainThumb} />
                          <span className='simple-rating' onClick={handleShow}> Provide Neighbourhood Rating </span>
                          {/* <div className='rating'>
                              <div className='img'>
                                  <img src={DashboardIcon3} />
                              </div>
                              <div className='txt'>
                                  <p> Neighbourhood Rating </p>
                                  <h4> Low Crime </h4>
                              </div>
                              <div className='rate'>
                                    <h3>  4/5 </h3>
                              </div>
                              <div className='bton'>
                                <span> Edit </span>
                              </div>
                          </div> */}
                      </div>
                    </Col>
                    <Col md="4" xs="4">
                      <div className='thumb-item mr-b-20'>
                        <img src={Thumb1} />
                      </div>                
                      <div className='thumb-item'>
                        <img src={Thumb2} />
                        <a> View more </a>
                      </div>              
                    </Col>
                  </Row>
                </div>
                <div className='detail-heading mr-b-50'>
                  <Row>
                    <Col md="8" xs="12">
                      <h2> Large 1920s home W/Parking | 25 mins from Midtown </h2>
                      <p> <u> Jared Anderson</u> | 11311 19th Ave SE, everett, 98208, US </p>
                    </Col>
                    <Col md="4" xs="12">
                      <div className='align-right'>
                        <Button className='week-btn'>  <b>$160</b>/week </Button>
                        <Button className='sync-btn'> <img src={checkIcon} /> Instant Booking </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className='des-block mr-b-50'>
                  <Row>
                    <Col>
                      <h5> Description </h5>
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum mauris at tincidunt aliquet. Morbi magna purus, imperdiet id bibendum eget, sagittis vel mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce dignissim vehicula viverra. Cras aliquam tempus facilisis. Donec volutpat, felis nec ornare sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras. </p>
                    </Col>
                  </Row>
                </div>
                <div className='des-block mr-b-50'>
                  <Row>
                    <Col>
                      <h5> House Rules </h5>
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum mauris at tincidunt aliquet. Morbi magna purus, imperdiet id bibendum eget, sagittis vel mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce dignissim vehicula viverra. Cras aliquam tempus facilisis. Donec volutpat, felis nec ornare sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras. </p>
                    </Col>
                  </Row>
                </div>
                <div className='des-block mr-b-40'>
                  <Row>
                    <Col md="3" xs="6">
                      <div className='table-item'>
                          <h5> Property Type </h5>
                          <p> Apartment </p>
                        </div>
                    </Col>
                    <Col md="3" xs="6">
                      <div className='table-item'>
                        <h5> Number of Guests</h5>
                        <p> 4 </p>
                      </div>
                    </Col>
                    <Col md="3" xs="6">
                      <div className='table-item'>
                        <h5> Check-In Time </h5>
                        <p> Flexible for both </p>
                      </div>
                    </Col>
                    <Col md="3" xs="6">
                      <div className='table-item'>
                        <h5> Check-Out Time </h5>
                        <p> Flexible for both </p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className='des-block mr-b-40'>
                  <Row>
                    <Col md="3" xs="6">
                      <div className='table-item'>
                          <h5> Security Deposit Amount </h5>
                          <p> $100 </p>
                        </div>
                    </Col>
                    <Col md="3" xs="6">
                      <div className='table-item'>
                        <h5> Cleaning Fee </h5>
                        <p> $100 </p>
                      </div>
                    </Col>
                    <Col md="3" xs="6">
                      <div className='table-item'>
                        <h5> Parking Fee ($100) </h5>
                        <p> Garage, Valet, Street </p>
                      </div>
                    </Col>
                    <Col md="3" xs="6">
                      <div className='table-item'>
                        <h5> Rental Period </h5>
                        <p> 2 week+, 1-3 months </p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className='des-block mr-b-50'>
                  <Row>
                    <Col md="3" xs="6">
                      <div className='table-item'>
                          <h5> Utilities Included </h5>
                          <p> Water, Electricity, Cable, Internet </p>
                        </div>
                    </Col>
                    <Col md="3" xs="6">
                      <div className='table-item'>
                        <h5> Rental space (in Sq. Ft.) </h5>
                        <p> 650 Sq. Ft </p>
                      </div>
                    </Col>
                    <Col md="3" xs="6">
                      <div className='table-item'>
                        <h5> Property space (in Sq. Ft.) </h5>
                        <p> 650 Sq. Ft </p>
                      </div>
                    </Col>
                    <Col> 
                    </Col>
                  </Row>
                </div>
                <div className='mr-b-20 switch-block white-bg'>
                  <Row>
                    <Col md="9" xs="9"> 
                      <h3> Safe/Suitable for children </h3>
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                    </Col>
                    <Col md="3" xs="3" className='flex-end'> 
                      <img src={checkIcon} />
                    </Col>
                  </Row>
                </div>
                <div className='mr-b-50 switch-block white-bg'>
                  <Row>
                    <Col md="9" xs="9"> 
                      <h3> Safe/Suitable for infants </h3>
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                    </Col>
                    <Col md="3" xs="3" className='flex-end'> 
                      <img src={checkIcon} />
                    </Col>
                  </Row>
                </div>
                <div className='block-out mr-b-50'>
                  <Row>
                    <Col>
                      <h3> Block-Out Dates </h3>
                    </Col>
                  </Row>
                  <Row>
                      <Col md="3" xs="6">
                        <div className='table-item'>
                            <h5> Start Date </h5>
                            <p> Nov 22, 2021 </p>
                          </div>
                      </Col>
                      <Col md="3" xs="6">
                        <div className='table-item'>
                          <h5> End Date </h5>
                          <p> Nov 22, 2021 </p>
                        </div>
                      </Col>
                    </Row>
                </div>
                <div className='form-block switch-block gray-clr mr-b-30 mob-mr-b-30'>
                  <Row>
                    <Col> 
                      <h6> Rooms </h6>
                    </Col>
                  </Row>
                  <div className='white-block less-mr'>
                    <Row>
                      <Col md="8" xs="5">
                        <strong> Bedroom(s) </strong>
                      </Col>
                      <Col md="2" xs="2">
                        <strong> 2 </strong>
                      </Col>
                      <Col md="2" xs="5">
                        <strong> Private </strong>
                      </Col>
                    </Row>
                  </div>
                  <div className='white-block less-mr'>
                    <Row>
                      <Col md="8" xs="5">
                        <strong> Kitchen </strong>
                      </Col>
                      <Col md="2" xs="2">
                        <strong> 2 </strong>
                      </Col>
                      <Col md="2" xs="5">
                        <strong> Private </strong>
                      </Col>
                    </Row>
                  </div>
                  <div className='white-block less-mr'>
                    <Row>
                      <Col md="10" xs="6">
                        <strong> Entrance </strong>
                      </Col>
                      <Col md="2" xs="6">
                        <strong> Private </strong>
                      </Col>
                    </Row>
                  </div>
                  <div className='white-block less-mr'>
                    <Row>
                      <Col md="8" xs="5">
                        <strong> Closet </strong>
                      </Col>
                      <Col md="2" xs="2">
                        <strong> 2 </strong>
                      </Col>
                      <Col md="2" xs="5">
                        <strong> Private </strong>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className='lease-signor-block white-bg mr-b-30'>
                  <Row>
                    <Col>
                      <div className='heading mr-b-0'>
                        <div className='user-thumb'>
                          <img src={UserThumb} />
                        </div>
                        <div className='title'>
                          <h4> Lease Signor </h4>
                          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className='add-pad mr-b-30 mob-mr-b-30'>
                    <div >
                      <Row>
                          <Col md="1" sm="1" xs="12">
                             <div className='table-item'>
                                <h5> S. No. </h5>
                             </div>
                          </Col>
                          <Col md="3" sm="2" xs="12">
                            <div className='table-item'>
                              <h5> Full Name </h5>
                            </div>
                          </Col>
                          <Col md="4" sm="3" xs="12">
                            <div className='table-item'>
                              <h5> Email Address </h5>
                            </div>
                          </Col>
                          <Col md="2" sm="3" xs="12">
                            <div className='table-item'>
                              <h5> Mobile Number </h5>
                            </div>
                          </Col>
                          <Col md="2" sm="3" xs="12">
                            <div className='table-item'>
                              <h5> Status </h5>
                            </div>
                          </Col>
                      </Row>
                    </div>
                    <div className='border-btm pad-22-tb'>
                      <Row>
                          <Col md="1" sm="1" xs="12">
                            <div className='table-item'>
                                <p> 1 </p>
                              </div>
                          </Col>
                          <Col md="3" sm="2" xs="12">
                            <div className='table-item'>
                              <p> <a> Chevron Anderson</a> </p>
                            </div>
                          </Col>
                          <Col md="4" sm="4" xs="12">
                            <div className='table-item'>
                              <p> chevron.anderson@gmail.com </p>
                            </div>
                          </Col>
                          <Col md="2" sm="3" xs="12">
                            <div className='table-item'>
                              <p> 989 669 6699</p>
                            </div>
                          </Col>
                          <Col md="2" sm="2" xs="12">
                            <div className='table-item'>
                              <p className='status verified'> <img src={GreenCheckIcon} alt='Check Icon' /> Verified </p>
                            </div>
                          </Col>
                      </Row>
                    </div>
                    <div className='border-btm pad-22-tb'>
                      <Row>
                          <Col md="1" sm="1" xs="12">
                            <div className='table-item'>
                                <p> 2 </p>
                              </div>
                          </Col>
                          <Col md="3" sm="2" xs="12">
                            <div className='table-item'>
                              <p> <a> Michael Jennings </a> </p>
                            </div>
                          </Col>
                          <Col md="4" sm="4" xs="12">
                            <div className='table-item'>
                              <p> michael.jennings@gmail.com </p>
                            </div>
                          </Col>
                          <Col md="2" sm="3" xs="12">
                            <div className='table-item'>
                              <p> 989 669 6699</p>
                            </div>
                          </Col>
                          <Col md="2" sm="2" xs="12">
                            <div className='table-item'>
                              <p className='status verified'> <img src={GreenCheckIcon} alt='Check Icon' /> Verified </p>
                            </div>
                          </Col>
                      </Row>
                    </div>
                    <div className='border-btm pad-22-tb'>
                      <Row>
                          <Col md="1" sm="1" xs="12">
                            <div className='table-item'>
                                <p> 3 </p>
                              </div>
                          </Col>
                          <Col md="3" sm="2" xs="12">
                            <div className='table-item'>
                              <p> <a> Willie Curry </a> </p>
                            </div>
                          </Col>
                          <Col md="4" sm="4" xs="12">
                            <div className='table-item'>
                              <p> willie.curry@gmail.com </p>
                            </div>
                          </Col>
                          <Col md="2" sm="3" xs="12">
                            <div className='table-item'>
                              <p> 858 888 9659 </p>
                            </div>
                          </Col>
                          <Col md="2" sm="2" xs="12">
                            <div className='table-item'>
                              <p className='status verified'> <img src={GreenCheckIcon} alt='Check Icon' /> Verified </p>
                            </div>
                          </Col>
                      </Row>
                    </div>
                    
                  </div>
                  
                </div>
            </div>
  
            <div className='button-2'>
                <Button className='btn-danger signin-btn'>  Reject Listing  </Button>
                <Button className='magnta-btn signin-btn'>  Approve Listing   </Button> 
            </div>
          </Container>
        </div>
      </>
      );
}

export default ListingDetail;