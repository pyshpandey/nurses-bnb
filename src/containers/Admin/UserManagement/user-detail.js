import React, { useState } from 'react';
import { Row,Container,Col,Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {GoBackIcon} from '../../../assets/img/imagesh';
import DropIcon from '../../../assets/img/dropdown-icon.svg';
import RedCross from '../../../assets/img/red-cross.svg';
import {UserThumb } from '../../../assets/img/imagesh';
import ShortIcon from '../../../assets/img/shorting-icon.svg';
import PropImg from '../../../assets/img/prop-img.png';

const UserDetail = () =>{
    const [isActionActive, setActionActive] = useState(false);

    const handleActionToggle = () => {
        setActionActive(!isActionActive);
    };
    return(
      <>
          <>
            <div className='dash-body'>
                <Container fluid>
                    <div className='heading'>
                        <Row>
                            <Col> 
                                <h2> <i className='go-back'> <Link to='/app/admin/user-management'>  <img src={GoBackIcon}  alt='Go Back Icon' /> </Link>  </i>User Detail </h2>
                            </Col>
                            <Col>
                                <div className='align-right'>
                                    <Button className='status-btn active'> Active </Button>
                                    <span className='setting-icon'> 
                                        <i onClick={handleActionToggle}> <img src={DropIcon} alt='' />  </i>
                                        <div onClick={handleActionToggle} className={'overlay' + ' ' + (isActionActive ? "active" : null)}> </div>
                                        <div  className={'filter-dropdown right' + ' ' + (isActionActive ? "active" : null)}>
                                            <ul>
                                                <li className='red-color'>
                                                    <img src={RedCross} /> Mark as Inactive
                                                </li>
                                            </ul>
                                        </div>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='user-detail'>
                        <Row className='w-100'>
                            <Col md={6}> 
                                <div className='user-info'>
                                    <div className='img'>
                                        <img src={UserThumb} alt='User Picture' />
                                    </div>
                                    <div className='info'>
                                        <h5>  Jose Simmons  </h5>
                                        <p>   989 852 3231  </p>
                                        <p> jose.simmons@gmail.com </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='address-detail'>
                                    <p> Address </p>
                                    <h5> 575 Ileho Drive, New York, USA </h5>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='user-detail'>
                        <div className='w-100'>
                            <div className='mr-b-20'>
                                <Row>
                                    <Col>
                                        <div className='heading'>
                                            <div className='user-thumb'>
                                                <img src={GoBackIcon} />
                                            </div>
                                            <div className='title'>
                                                <h4> Bookings </h4>
                                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='table-head'>
                                    <Row>
                                        <Col md={6}>
                                            <div className='table-col fisrt'>
                                                <span> Property Information   <img src={ShortIcon} alt='Shorting Icon' /> </span>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className='table-col'>
                                                <span> Check-in & Check-out Date   <img src={ShortIcon} alt='Shorting Icon' /> </span>
                                            </div>
                                        </Col>
                                        <Col md={2}>
                                            <div className='table-col'>
                                                <span> Status <img src={ShortIcon} alt='Shorting Icon' /> </span>
                                            </div>
                                        </Col>
                                    </Row>
                            </div>
                            <div className='table-body'>
                                <Row>
                                    <Col md={6}>
                                        <div className='table-col'>
                                            <div className='prop-img'>
                                                <img src={PropImg} alt='Profile Image' />
                                            </div>
                                            <div className='prop-detail'>
                                                <h4> New resort style condo with rooftop heated </h4>
                                                <p> 11311 19th St SW, everett, 98208, US </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className='table-col'>
                                            <p> Dec 11, 2021 - Jan 10, 2022 </p>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className='table-col'>
                                        <Button className='status-btn active'> On-Going </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='table-body'>
                                <Row>
                                    <Col md={6}>
                                        <div className='table-col'>
                                            <div className='prop-img'>
                                                <img src={PropImg} alt='Profile Image' />
                                            </div>
                                            <div className='prop-detail'>
                                                <h4> New resort style condo with rooftop heated </h4>
                                                <p> 11311 19th St SW, everett, 98208, US </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className='table-col'>
                                            <p> Dec 11, 2021 - Jan 10, 2022 </p>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className='table-col'>
                                        <Button className='status-btn'> Upcoming </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='table-body'>
                                <Row>
                                    <Col md={6}>
                                        <div className='table-col'>
                                            <div className='prop-img'>
                                                <img src={PropImg} alt='Profile Image' />
                                            </div>
                                            <div className='prop-detail'>
                                                <h4> New resort style condo with rooftop heated </h4>
                                                <p> 11311 19th St SW, everett, 98208, US </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className='table-col'>
                                            <p> Dec 11, 2021 - Jan 10, 2022 </p>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className='table-col'>
                                        <Button className='status-btn featured'> Pending </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Container>
                 
            </div>
        </>
      </>
    )
  }
  export default UserDetail;
  

