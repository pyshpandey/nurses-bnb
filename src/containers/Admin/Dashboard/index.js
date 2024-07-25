import { Row,Container,Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {CardIcon1, CardIcon2, CardIcon3, CardIcon4, CardIcon5, SettingIcon} from '../../../assets/img/imagesh';

const Dashboard = () =>{
  return(
    <>
        <div className='dash-body'>
            <Container fluid>
                <div className='heading'>
                    <Row>
                        <Col md={6}> 
                            <h2> Dashboard </h2>
                            <p> Here’s the overview of your dashboard </p>
                        </Col>
                        <Col md={6}> 
                             <div className='align-right'>
                                 <span className='label'> Filter </span> 
                                 <span className='filter-list'>
                                     <i> Property </i>
                                 </span>
                                 <span className='filter-list'>
                                     <i> Date </i>
                                 </span>
                                 <span className='label'> Reset </span> 
                                 <span className='setting-icon'> <Link to='/app/admin/dashboard/setting'> <img src={SettingIcon} /> </Link> </span>
                             </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className='total-count-sec mr-b-25'>
                <Container fluid>
                    <Row>
                        <Col md={6}>
                            <div className='total-item'>
                                <p> Total Bookings </p>
                                <h6> 9658 </h6>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='total-item search'>
                                <p> Total Searches </p>
                                <h6> 7458 </h6>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='card-sec'>
                <Container fluid>
                    <div className='mr-b-25'>
                        <Row>
                            <Col md={6}>
                                <div className='card-item'>
                                    <div className='card-head'>
                                        <img src={CardIcon1} alt='Card Images' />
                                        <strong> Revenues </strong>
                                        <h2> $9857 </h2>
                                    </div>
                                    <div className='card-bodi'>
                                        <div className='card-list'>
                                            <p> Booking Revenue </p>
                                            <b> $2000 </b>
                                        </div>
                                        <div className='card-list'>
                                            <p> Cleaning Revenue </p>
                                            <b> $2400 </b>
                                        </div>
                                        <div className='card-list'>
                                            <p> Renter Insurance Revenue </p>
                                            <b> $1500 </b>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='card-item'>
                                    <div className='card-head payouts'>
                                        <img src={CardIcon2} alt='Card Images' />
                                        <strong> Payouts </strong>
                                        <h2> $1450 </h2>
                                    </div>
                                    <div className='card-bodi'>
                                        <div className='card-list'>
                                            <p> Cleaning Payout </p>
                                            <b> $757 </b>
                                        </div>
                                        <div className='card-list'>
                                            <p> Renter Insurance Payout </p>
                                            <b> $298 </b>
                                        </div>
                                        <div className='card-list'>
                                            <p> Booking Payout </p>
                                            <b> $595 </b>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='mr-b-25'>
                        <Row>
                            <Col md={6}>
                                <div className='card-item'>
                                    <div className='card-head profits'>
                                        <img src={CardIcon3} alt='Card Images' />
                                        <strong> Profits </strong>
                                        <h2> $6898 </h2>
                                    </div>
                                    <div className='card-bodi'>
                                        <div className='card-list'>
                                            <p> Booking Margin </p>
                                            <b> $2000 </b>
                                        </div>
                                        <div className='card-list'>
                                            <p> Cleaning Margin </p>
                                            <b> $2400 </b>
                                        </div>
                                        <div className='card-list'>
                                            <p> Renter Insurance Margin </p>
                                            <b> $1500 </b>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='card-item'>
                                    <div className='card-head deposit'>
                                        <img src={CardIcon4} alt='Card Images' />
                                        <strong> Deposits </strong>
                                        <h2> $9755 </h2>
                                    </div>
                                    <div className='card-bodi'>
                                        <div className='card-list'>
                                            <p> Total Security Deposit Collected </p>
                                            <b> $757 </b>
                                        </div>
                                        <div className='card-list'>
                                            <p> Total Security Deposit Payout to Rentert </p>
                                            <b> $298 </b>
                                        </div>
                                        <div className='card-list'>
                                            <p> Total Security Deposit Payout to Homeowner </p>
                                            <b> $595 </b>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='mr-b-25'>
                        <Row>
                            <Col>
                                <div className='card-item'>
                                    <div className='card-head cancel'>
                                        <img src={CardIcon5} alt='Card Images' />
                                        <strong> Cancellations </strong>
                                        <h2> 856 </h2>
                                    </div>
                                    <div className='card-bodi'>
                                        <div className='card-list'>
                                            <p> Total Evictions </p>
                                            <b> 412 </b>
                                        </div>
                                        <div className='card-list'>
                                            <p> Total Cancellation fee charged </p>
                                            <b> $1080 </b>
                                        </div>
                                        <div className='card-list'>
                                            <p> Total Eviction Fee assessed / charged </p>
                                            <b> $596 </b>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    </>
  )
}
export default Dashboard;
