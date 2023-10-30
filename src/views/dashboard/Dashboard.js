// import {useContext}   from 'react'
// import CardMedal from '../ui-element/CardMedal'
import { Col, Row, Card, CardBody } from 'reactstrap'
import StatsCard from '../ui-element/Static'
import StatsVertical from '../../@core/components/widgets/stats/StatsVertical'
import { Circle, Send, Settings, Wind } from 'react-feather'
import logo from '@src/assets/images/dashboard/Infiniti_strategy.png'
import ProfitLineChart from '../ui-element/ProfitChart'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import RevenueReport from '../ui-element/RevenueReport'
import { BsCashStack, BsFillCreditCard2BackFill, BsWind, BsCircle } from "react-icons/bs"
import { BiSolidOffer } from "react-icons/bi"
import { FiSettings } from "react-icons/fi"
import NewsFeed from './components/news/NewsFeed'
import "./dashboard.css"
import Stats from './components/stats/Stats'


const Dashboard = () => {
    // const context = useContext(ThemeColors)
    // const { colors } = useContext(ThemeColors)
    
    return (
        <>
            {/* <Card>
                <CardBody>
                    <h4>Dashboard</h4>
                </CardBody>
            </Card> */}
            {/* <Row className='match-height'>
                <Col  xs='12'>
                    <CardMedal />
                </Col>
                <Col xl='8' md='6' xs='12'>
                    <StatsCard cols={{ xl: '3', sm: '6' }} />
                </Col>
            </Row> */}

            <Stats/>

            <Row className='match-height'>
                <Col xl='8' md='12'>
                    <Row className='match-height'>
                        <Col xl='6' md='6'>
                            <Card>
                                <CardBody className=' d-flex justify-content-between'>
                                    <div>
                                        <h4 className='customStyle brandonFont '>CAC</h4>
                                        <h3 className='customStyle brandonFont '>₹100</h3>
                                    </div>
                                    {/* <div>
                                        <h4>CTR</h4>
                                        <h3>2.15%</h3>
                                    </div> */}
                                    <div className=' logo logoRedeemed d-flex justify-content-center align-items-center fs-4 border rounded-5 '>
                                        <BsFillCreditCard2BackFill/>
                                    </div>
                                    {/* <RevenueReport primary={context.colors.primary.main} warning={context.colors.warning.main} /> */}
                                </CardBody>
                            </Card>
                        </Col>
                        {/* <Col xl='3' md='6'>
                            <ProfitLineChart info={context.colors.info.main} />
                        </Col> */}
                        <Col xl='6' md='6'>
                            <Card>
                                <CardBody className=' d-flex justify-content-between' style={{ height: `100px`}}>
                                    <div>
                                        <h4 className='customStyle brandonFont '>Earnings</h4>
                                        <h3 className='customStyle brandonFont '>0.00</h3>
                                    </div>
                                    {/* <div>
                                        <h4>Earnings</h4>
                                        <h3>0.00</h3>
                                    </div> */}
                                    <div className='logo logoReferrals d-flex justify-content-center align-items-center fs-4 border rounded-5 '>
                                        <BsCashStack/>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                    <Col sm='12'>
                        <Card>
                            <CardBody style={{ minHeight: "550px"}}>
                                <h4 className='customStyle brandonFont '>News Feed</h4>
                                <NewsFeed />
                            </CardBody>
                        </Card>
                     </Col>
                        
                    </Row>
                    
                </Col>
                <Col xl='4' sm='12'>
                    <Card>
                        <CardBody>
                            <h4 className='customStyle brandonFont ' style={{ lineHeight: `1.5rem`, marginBottom: `1rem`}}>Current Campaign</h4>
                            <Row>
                                <Col sm='7'>
                                    <p className="customStyle brandonFont  card-text font-small-3">Product - Infiniti</p>
                                    <p className="customStyle brandonFont  card-text font-small-3">Active -  Forever Free Plan</p>
                                    <p className="customStyle brandonFont  card-text font-small-3">Start Date - </p>
                                </Col>
                                <Col sm='5'>
                                    <Row>
                                        <Col xl='12' className='d-flex justify-content-center align-items-center'>
                                            <img style={{ width: `100px`}} src={logo}></img>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl='12'>
                                    <p className="customStyle brandonFont  card-text font-small-3"><b>Plan Amount: --</b></p>
                                    <p className="customStyle brandonFont  card-text font-small-3"><b>Spent: --</b></p>
                                    <p className="customStyle brandonFont  card-text font-small-3"><b>Balance: --</b></p>
                                </Col>
                            </Row>
                            <br />
                            <Row className="row d-flex justify-content-center align-items-center">
                                <Col sm='7' className='d-flex justify-content-start align-items-center'>

                                    <h5 className='customStyle brandonFont '>
                                        Status:  <span className="badge bg-danger"> Inactive</span>  
                                    </h5>

                                </Col>
                                <Col sm='5' className='d-flex justify-content-center align-items-center'>
                                    <a href="/merchant/strategy/1/"><button type="button" style={{ display: `inline`, padding: `0.786rem 1rem`, backgroundColor: `#28c76f !important`, border: `none`}} className="customStyle brandonFont  btn btn-primary waves-effect waves-float waves-light">Renew/ Upgrade</button></a>

                                </Col>
                                                
                            </Row>
                            
                        </CardBody>
                    </Card>
                    
                
                            <Row  >
                                <Col xl='6' md='3' sm='6'>
                                    <Card >
                                        <CardBody className=' d-flex flex-column justify-content-center align-items-center gap-1 p-1 rounded-1'>
                                            <div className='logo logoSample fs-4 d-flex justify-content-center align-items-center'>
                                                <BsWind />
                                            </div>
                                            <div style={{ height: "50px" }}>
                                                <p className=' fs-5 customStyle brandonFont  text-center'>Invite a Business</p>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                
                                <Col xl='6' md='3' sm='6 '>
                                    <Card >
                                        <CardBody className=' d-flex flex-column justify-content-center align-items-center gap-1 p-1 rounded-1'>
                                            <div className='logo logoSample fs-4 d-flex justify-content-center align-items-center'>
                                                <BsCircle />
                                            </div>
                                            <div style={{ height: "50px" }}>
                                                <p className=' fs-5 customStyle brandonFont  text-center'>My Inner XIRCLS</p>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                
                                <Col xl='6' md='3' sm='6'>
                                    <Card >
                                        <CardBody className=' d-flex flex-column justify-content-center align-items-center gap-1 p-1 rounded-1'>
                                            <div className='logo logoSample fs-4 d-flex justify-content-center align-items-center'>
                                                <FiSettings />
                                            </div>
                                            <div style={{ height: "50px" }}>
                                                <p className=' fs-5 customStyle brandonFont  text-center'>Campaign Settings</p>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                
                                <Col xl='6' md='3' sm='6'>
                                    <Card >
                                        <CardBody className=' d-flex flex-column justify-content-center align-items-center gap-1 p-1 rounded-1'>
                                            <div className='logo logoSample fs-4 d-flex justify-content-center align-items-center'>
                                                <BiSolidOffer />
                                            </div>
                                            <div style={{ height: "50px" }}>
                                                <p className=' fs-5 customStyle brandonFont  text-center'>My Offers</p>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>

                    
                </Col>
                
            </Row>
            {/* <Row>
                <Col sm='12'>
                    <Card>
                        <CardBody style={{ height: `235px`}}>
                        <h4>News Feed</h4>
                            <NewsFeed />
                        </CardBody>
                    </Card>
                </Col>
            </Row> */}
        </>
    )
}

export default Dashboard 