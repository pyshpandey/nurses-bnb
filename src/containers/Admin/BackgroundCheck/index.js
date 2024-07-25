import React, { useState } from 'react';
import { Row,Container,Col,Button,FloatingLabel,Pagination, Form, Modal } from 'react-bootstrap';
import ShortIcon from '../../../assets/img/shorting-icon.svg';
import DropIcon from '../../../assets/img/dropdown-icon.svg';
import RedCross from '../../../assets/img/red-cross.svg';
import {ProfilePic } from '../../../assets/img/imagesh';
import CheckIcon from '../../../assets/img/colored-check.svg';
import { Link } from 'react-router-dom';

const BackgroundCheck = () =>{
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
        <Modal className="reject--list-pop w-450" show={showPopRej} onHide={handleCloseRej}>
          <div className="modal-box">
            <div className="header">
              <h3> Reject Background Check </h3>
              <p> Are you sure you want to reject the <b> Jose Simmons  background check </b> from the system? </p>
            </div>
            <div className="body">
              <span className="check-list"> 
                  <Form.Group controlId="Checkbox1">
                      <Form.Check type="radio" label="Unable to read the information supplied" />
                  </Form.Group>  
               </span>
               <span className="check-list"> 
                  <Form.Group controlId="Checkbox2">
                      <Form.Check type="radio" label="Missing Information" />
                  </Form.Group>  
               </span>
               <span className="check-list"> 
                  <Form.Group controlId="Checkbox3">
                      <Form.Check type="radio" label="Passport information doesn’t match with Profile" />
                  </Form.Group>  
               </span>
               <span className="check-list"> 
                  <Form.Group controlId="Checkbox4">
                      <Form.Check type="radio" label="Passport information doesn’t match with Letter of Invitation or offer letter" />
                  </Form.Group>  
               </span>
               <span className="check-list mr-b-30"> 
                  <Form.Group controlId="Checkbox5">
                      <Form.Check type="radio" label="Invitation or offer letter does not meet the requirement (reference the relevant Terms and Condition section)." />
                  </Form.Group>  
               </span> 
              <div className="button-wrp">
                  <Button className="price-btn"> Cancel </Button>
                  <Button className="btn-danger w-280" onClick={handleCloseRej}> Reject Background Check </Button>
              </div>
            </div>
          </div>
        </Modal>

          <div className='dash-body'>
            <Container fluid>
                <div className='heading'>
                <Row>
                        <Col md={4}>
                            <h2> BackgroundCheck </h2>
                            <p> Here’s the list of your background check </p>
                        </Col>
                        <Col md={8}>
                            <div className='user-mang-filter'>
                                <div className='align-center'>
                                    <Form.Control className='search-list' type="text" name="title"  placeholder="Search by name and email address" />
                                </div> 
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-head'>
                        <Row>
                            <Col md={4}>
                                <div className='table-col'>
                                    <span> User Information  <img src={ShortIcon} alt='Shorting Icon' /> </span>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='table-col'>
                                    <span> Address  <img src={ShortIcon} alt='Shorting Icon' /> </span>
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className='table-col'>
                                    <span> Status <img src={ShortIcon} alt='Shorting Icon' /> </span>
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className='table-col align-right'>
                                    <span> Actions  </span>
                                </div>
                            </Col>
                        </Row>
                </div>
                <div className='table-body'>
                    <Row>
                        <Col md={4}>
                            <Link to="/app/admin/backgroun-check/detail">
                            <div className='table-col'>
                                <div className='prop-img'>
                                    <img src={ProfilePic} alt='Profile Image' />
                                </div>
                                <div className='prop-detail'>
                                    <h4> Jose Simmons </h4>
                                    <p> 989 852 3231 </p>
                                </div>
                            </div>
                            </Link>
                        </Col>
                        <Col md={4}>
                            <div className='table-col'>
                                <p> 575 Ileho Drive, New York, USA </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                            <Button className='status-btn featured'> Pending </Button>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col align-right'>
                                <div className='list-action'>
                                    <i onClick={handleActionToggle}> <img src={DropIcon} alt='' />  </i>
                                    <div onClick={handleActionToggle} className={'overlay' + ' ' + (isActionActive ? "active" : null)}> </div>
                                    <div  className={'filter-dropdown w-280' + ' ' + (isActionActive ? "active" : null)}>
                                        <ul>
                                            <li>
                                                <img src={CheckIcon} /> Approve Background Check
                                            </li>
                                            <li className='red-color' onClick={handleOpenRej}>
                                                <img src={RedCross} /> Reject Background Check
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-body'>
                    <Row>
                        <Col md={4}>
                            <div className='table-col'>
                                <div className='prop-img'>
                                    <img src={ProfilePic} alt='Profile Image' />
                                </div>
                                <div className='prop-detail'>
                                    <h4> Garrett Ellis </h4>
                                    <p> 895 669 9696 </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='table-col'>
                                <p> 1579 Runla Street, New York, USA </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                            <Button className='status-btn featured'> Pending </Button>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col align-right'>
                                <div className='list-action'>
                                    <i> <img src={DropIcon} alt='' />  </i>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-body'>
                    <Row>
                        <Col md={4}>
                            <div className='table-col'>
                                <div className='prop-img'>
                                    <img src={ProfilePic} alt='Profile Image' />
                                </div>
                                <div className='prop-detail'>
                                    <h4> Warren Adkins </h4>
                                    <p> 895 669 9696 </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='table-col'>
                                <p> 1579 Runla Street, New York, USA </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                            <Button className='status-btn featured'> Pending </Button>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col align-right'>
                                <div className='list-action'>
                                    <i> <img src={DropIcon} alt='' />  </i>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-body'>
                    <Row>
                        <Col md={4}>
                            <div className='table-col'>
                                <div className='prop-img'>
                                    <img src={ProfilePic} alt='Profile Image' />
                                </div>
                                <div className='prop-detail'>
                                    <h4> Warren Moran </h4>
                                    <p> 895 669 9696 </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='table-col'>
                                <p> 1579 Runla Street, New York, USA </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                            <Button className='status-btn featured'> Pending </Button>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col align-right'>
                                <div className='list-action'>
                                    <i> <img src={DropIcon} alt='' />  </i>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-body'>
                    <Row>
                        <Col md={4}>
                            <div className='table-col'>
                                <div className='prop-img'>
                                    <img src={ProfilePic} alt='Profile Image' />
                                </div>
                                <div className='prop-detail'>
                                    <h4> Garrett Ellis </h4>
                                    <p> 895 669 9696 </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='table-col'>
                                <p> 1579 Runla Street, New York, USA </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                            <Button className='status-btn featured'> Pending </Button>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col align-right'>
                                <div className='list-action'>
                                    <i> <img src={DropIcon} alt='' />  </i>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-body'>
                    <Row>
                        <Col md={4}>
                            <div className='table-col'>
                                <div className='prop-img'>
                                    <img src={ProfilePic} alt='Profile Image' />
                                </div>
                                <div className='prop-detail'>
                                    <h4> Warren Adkins </h4>
                                    <p> 895 669 9696 </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='table-col'>
                                <p> 1579 Runla Street, New York, USA </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                            <Button className='status-btn featured'> Pending </Button>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col align-right'>
                                <div className='list-action'>
                                    <i> <img src={DropIcon} alt='' />  </i>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-body'>
                    <Row>
                        <Col md={4}>
                            <div className='table-col'>
                                <div className='prop-img'>
                                    <img src={ProfilePic} alt='Profile Image' />
                                </div>
                                <div className='prop-detail'>
                                    <h4> Warren Moran </h4>
                                    <p> 895 669 9696 </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='table-col'>
                                <p> 1579 Runla Street, New York, USA </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                            <Button className='status-btn featured'> Pending </Button>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col align-right'>
                                <div className='list-action'>
                                    <i> <img src={DropIcon} alt='' />  </i>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                

                <div className='pagination-wrp'>
                    <Pagination>
                        <Pagination.Prev> Prev </Pagination.Prev>
                            <div className='item-count'>
                                <Pagination.Item active>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Item>{4}</Pagination.Item>
                                <Pagination.Item>{5}</Pagination.Item>
                                <Pagination.Item>{6}</Pagination.Item>
                            </div>
                        <Pagination.Next> Next </Pagination.Next>
                    </Pagination>
                </div>
            </Container>
        </div>
    </>
  )
}
export default BackgroundCheck;
