import React, { useState } from 'react';
import { Row,Container,Col,Button,Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {GoBackIcon, WatchIcon, FiledStar, GrayStar, CrossIcon} from '../../../assets/img/imagesh';
import PropImg from '../../../assets/img/prop-img.png';
import UserImg from '../../../assets/img/profile-pic.png'; 
import PropImg1 from '../../../assets/img/recent-pic3.png';
import PropImg2 from '../../../assets/img/recent-pic4.png';

const BookingDetail = () =>{
    const [showPopRej, setRejectOpen] = useState(false);
    const handleOpenRej = () => setRejectOpen(true);
    const handleCloseRej = () => setRejectOpen(false);
    return(
      <>
        {/* Rating  Modale */}
        <Modal className="check-In-pop" show={showPopRej} onHide={handleCloseRej}>
          <div className="modal-box">
            <div className="header">
              <h3> Check-In  <img className="cross-btn" onClick={handleCloseRej} src={CrossIcon} /> </h3> 
            </div>
            <div className="body"> 
                <div className='mr-b-20'>
                    <Row>
                        <Col>
                                <div className='thumb-img'>
                                    <img src={PropImg1} />
                                </div>
                        </Col>
                        <Col>
                                <div className='thumb-img'>
                                    <img src={PropImg2} />
                                </div>
                        </Col>
                    </Row>
                </div>
                <div className='mr-b-20'>
                    <Row>
                        <Col>
                                <div className='thumb-img'>
                                    <img src={PropImg1} />
                                </div>
                        </Col>
                        <Col>
                                <div className='thumb-img'>
                                    <img src={PropImg2} />
                                </div>
                        </Col>
                    </Row>
                </div>
                <div className='mr-b-30'>
                    <Row>
                        <Col>
                            <div className='text'>
                                 <h5>Property Condition </h5> 
                                 <p> Property has no concerns </p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='mr-b-30'>
                    <Row>
                        <Col>
                            <div className='text'>
                                 <h5> Additional comments </h5> 
                                 <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum mauris at tincidunt aliquet. Morbi magna purus, imperdiet id bibendum eget, sagittis vel mauris.  </p>
                            </div>
                        </Col>
                    </Row>
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
                                <h2> <i className='go-back'> <Link to='/app/admin/booking'>  <img src={GoBackIcon}  alt='Go Back Icon' /> </Link>  </i> Booking detail </h2>
                            </Col>
                        </Row>
                    </div>
                    <div className='table-body'>
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

                    <div className="rejection-reason mr-b-30">
                        <h2> Cancellation reason </h2> 
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum mauris at tincidunt aliquet. Morbi magna purus, imperdiet id bibendum eget, sagittis vel mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.  </p>
                    </div>
                     
                <div className='user-detail'>
                    <div className='w-100'>
                        <Row>
                            <Col>
                                <div className='heading'>
                                    <h5 className='mr-b-30 mob-mr-b-30'> Homeowner Details </h5>
                                </div>
                            </Col>
                        </Row>
                        <div className='des-block'>
                            <div className='mr-b-20'>
                                <Row>
                                    <Col md={12}>
                                        <div className='table-item'>
                                            <h5> Homeowner Name </h5>
                                            <p> Jared Baker </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className='mr-b-20 check-in-block'>
                            <Row>
                                <Col md="9" xs="9"> 
                                    <div className='txt-block'>
                                        <div className='img'>
                                            <img src={WatchIcon} alt='Watch Icon' />
                                        </div>
                                        <div className='text'>
                                            <h3> Check-In </h3>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="3" xs="3" className='flex-end'> 
                                    <Button className='status-btn published' onClick={handleOpenRej}> View Detail </Button>
                                </Col>
                            </Row>
                        </div>
                        <div className='mr-b-20 check-in-block'>
                            <Row>
                                <Col md="9" xs="9"> 
                                    <div className='txt-block'>
                                        <div className='img'>
                                            <img src={WatchIcon} alt='Watch Icon' />
                                        </div>
                                        <div className='text'>
                                            <h3> Check-Out </h3>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="3" xs="3" className='flex-end'> 
                                    <Button className='status-btn published'> View Detail </Button>
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
                                    <h5 className='mr-b-30 mob-mr-b-30'> Homeowner Details </h5>
                                </div>
                            </Col>
                        </Row>
                        <div className='des-block'>
                            <div className='mr-b-20'>
                                <Row>
                                    <Col md={12}>
                                        <div className='table-item'>
                                            <h5> Homeowner Name </h5>
                                            <p> Jared Baker </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className='striped-table bg-gray'>
                            <div className='t-head mr-b-20'>
                                <Row>
                                    <Col>
                                        <h4> Cancellation Breakup </h4>
                                    </Col>
                                    <Col>
                                        <p className='align-right'> <i> Cancelled on Nov 9, 2021 </i> </p>
                                    </Col>
                                </Row>
                            </div>
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
                                        <b className='align-right red-color'> $160.00 </b>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='user-detail'>
                    <div className='w-100'>
                        <Row>
                            <Col>
                                <div className='heading'>
                                    <h5 className='mr-b-30 mob-mr-b-30'> Renter Details </h5>
                                </div>
                            </Col>
                        </Row>
                        <div className='des-block'>
                            <div className='mr-b-20'>
                                <Row>
                                    <Col md={3}>
                                        <div className='table-item'>
                                            <h5> Renter name </h5>
                                            <p> Jared Baker </p>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='table-item'>
                                            <h5> Check-In Date </h5>
                                            <p> Nov 25, 2021 </p>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='table-item'>
                                            <h5> Check-Out Date </h5>
                                            <p> Dec 11, 2021 </p>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='table-item'>
                                            <h5> Number of guests </h5>
                                            <p> 1 </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className='des-block'>
                            <div className='mr-b-20'>
                                <Row>
                                    <Col md={3}>
                                        <div className='table-item'>
                                            <h5> Background Check </h5>
                                            <p className='green-color'> Approved </p>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='table-item'>
                                            <h5> Transaction ID </h5>
                                            <p> TXCSDF35646 </p>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='table-item'>
                                            <h5> No. of weekly cleaning </h5>
                                            <p>  3 </p>
                                        </div>
                                    </Col> 
                                </Row>
                            </div>
                        </div>
                        <div className='mr-b-20 check-in-block'>
                            <Row>
                                <Col md="9" xs="9"> 
                                    <div className='txt-block'>
                                        <div className='img'>
                                            <img src={WatchIcon} alt='Watch Icon' />
                                        </div>
                                        <div className='text'>
                                            <h3> Check-In </h3>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="3" xs="3" className='flex-end'> 
                                    <Button className='status-btn published'> View Detail </Button>
                                </Col>
                            </Row>
                        </div>
                        <div className='check-in-block'>
                            <Row>
                                <Col md="9" xs="9"> 
                                    <div className='txt-block'>
                                        <div className='img'>
                                            <img src={WatchIcon} alt='Watch Icon' />
                                        </div>
                                        <div className='text'>
                                            <h3> Check-Out </h3>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="3" xs="3" className='flex-end'> 
                                    <Button className='status-btn published'> View Detail </Button>
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
                                    <h5 className='mr-b-30 mob-mr-b-30'> Review </h5>
                                </div>
                            </Col>
                        </Row> 
                        <div className='table-body bdr-btm-n mr-b-30'>
                            <Row className='gx-0'>
                                <Col md={6}>
                                    <div className='table-col'>
                                        <div className='prop-img'>
                                            <img src={UserImg} alt='Profile Image' />
                                        </div>
                                        <div className='prop-detail'>
                                            <h4> Lloyd Chandler </h4>
                                            <p> Renter | Nov 20, 2021  </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className='table-col align-right'>
                                        <img src={FiledStar} alt='Rating star' />
                                        <img src={FiledStar} alt='Rating star' />
                                        <img src={FiledStar} alt='Rating star' />
                                        <img src={FiledStar} alt='Rating star' />
                                        <img src={FiledStar} alt='Rating star' />
                                    </div>
                                </Col>
                            </Row>
                            <div className='content-block'>
                                <Row>
                                    <Col>
                                        <h4> Great human being </h4> 
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum mauris at tincidunt aliquet. Morbi magna purus, imperdiet id bibendum eget, sagittis vel mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce dignissim vehicula viverra. Cras aliquam tempus facilisis. Donec volutpat, felis nec ornare sagittis. </p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className='table-body bdr-btm-n'>
                            <Row className='gx-0'>
                                <Col md={6}>
                                    <div className='table-col'>
                                        <div className='prop-img'>
                                            <img src={UserImg} alt='Profile Image' />
                                        </div>
                                        <div className='prop-detail'>
                                            <h4> Lloyd Chandler </h4>
                                            <p> Renter | Nov 20, 2021  </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className='table-col align-right'>
                                        <img src={FiledStar} alt='Rating star' />
                                        <img src={FiledStar} alt='Rating star' />
                                        <img src={FiledStar} alt='Rating star' />
                                        <img src={FiledStar} alt='Rating star' />
                                        <img src={FiledStar} alt='Rating star' />
                                    </div>
                                </Col>
                            </Row>
                            <div className='content-block brd-btm-n'>
                                <Row>
                                    <Col>
                                        <h4> Great human being </h4> 
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum mauris at tincidunt aliquet. Morbi magna purus, imperdiet id bibendum eget, sagittis vel mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce dignissim vehicula viverra. Cras aliquam tempus facilisis. Donec volutpat, felis nec ornare sagittis. </p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='user-detail'>
                    <div className='w-100'>
                        <Row>
                            <Col>
                                <div className='heading'>
                                    <h5 className='mr-b-30 mob-mr-b-30'> Price Break Down </h5>
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
                </Container>
            </div>
        </>
      </>
    )
  }
  export default BookingDetail;
  


