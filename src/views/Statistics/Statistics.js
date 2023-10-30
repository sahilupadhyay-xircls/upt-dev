import React from 'react'
import { Col, Row, Card, CardBody } from 'reactstrap'
import { BsCashStack, BsFillCreditCard2BackFill } from "react-icons/bs"
import { TiTick } from "react-icons/ti"
import Stats from '../dashboard/components/stats/Stats'
import "./Statistics.css"

const Statistics = () => {
  return (
    <>
        <Stats/>

        <Row className='match-height'>
                        <Col xl='4' md='6'  sm='12'>
                            <Card>
                                <CardBody className=' d-flex justify-content-between'>
                                    <div>
                                        <h5>CAC</h5>
                                        <h3 className=' fw-bolder'>₹100</h3>
                                    </div>
                                    {/* <div>
                                        <h5>CTR</h5>
                                        <h3>2.15%</h3>
                                    </div> */}
                                    <div className=' logo logoRedeemed d-flex justify-content-center align-items-center fs-4 border rounded-5 '>
                                        <BsFillCreditCard2BackFill/>
                                    </div>
                                    {/* <RevenueReport primary={context.colors.primary.main} warning={context.colors.warning.main} /> */}
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl='4' md='6'  sm='12'>
                            <Card>
                                <CardBody className=' d-flex justify-content-between' style={{ height: `100px`}}>
                                    <div>
                                        <h5>CTR</h5>
                                        <h3 className=' fw-bolder'>0.00</h3>
                                    </div>
                                    {/* <div>
                                        <h5>Earnings</h5>
                                        <h3>0.00</h3>
                                    </div> */}
                                    <div className='logo logoIssued d-flex justify-content-center align-items-center fs-4 border rounded-5 '>
                                        <TiTick />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl='4' md='6'  sm='12'>
                            <Card>
                                <CardBody className=' d-flex justify-content-between' style={{ height: `100px`}}>
                                    <div>
                                        <h5>Earnings</h5>
                                        <h3 className=' fw-bolder '>0.00</h3>
                                    </div>
                                    {/* <div>
                                        <h5>Earnings</h5>
                                        <h3>0.00</h3>
                                    </div> */}
                                    <div className='logo logoReferrals d-flex justify-content-center align-items-center fs-4 border rounded-5 '>
                                        <BsCashStack/>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
           
                        <Col xl='4' md='6'  sm='12'>
                            <Card>
                                <CardBody className=' d-flex justify-content-between'>
                                    <div>
                                        <h5>CAC</h5>
                                        <h3 className=' fw-bolder'>₹100</h3>
                                    </div>
                                    {/* <div>
                                        <h5>CTR</h5>
                                        <h3>2.15%</h3>
                                    </div> */}
                                    <div className=' logo logoRedeemed d-flex justify-content-center align-items-center fs-4 border rounded-5 '>
                                        <BsFillCreditCard2BackFill/>
                                    </div>
                                    {/* <RevenueReport primary={context.colors.primary.main} warning={context.colors.warning.main} /> */}
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl='4' md='6'  sm='12'>
                            <Card>
                                <CardBody className=' d-flex justify-content-between' style={{ height: `100px`}}>
                                    <div>
                                        <h5>CTR</h5>
                                        <h3 className=' fw-bolder'>0.00</h3>
                                    </div>
                                    {/* <div>
                                        <h5>Earnings</h5>
                                        <h3>0.00</h3>
                                    </div> */}
                                    <div className='logo logoIssued d-flex justify-content-center align-items-center fs-4 border rounded-5 '>
                                        <TiTick />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl='4' md='6'  sm='12'>
                            <Card>
                                <CardBody className=' d-flex justify-content-between' style={{ height: `100px`}}>
                                    <div>
                                        <h5>Earnings</h5>
                                        <h3 className=' fw-bolder '>0.00</h3>
                                    </div>
                                    {/* <div>
                                        <h5>Earnings</h5>
                                        <h3>0.00</h3>
                                    </div> */}
                                    <div className='logo logoReferrals d-flex justify-content-center align-items-center fs-4 border rounded-5 '>
                                        <BsCashStack/>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        
                        <Col xl='4' md='6'  sm='12'>
                            <Card>
                                <CardBody className=' d-flex justify-content-between'>
                                    <div>
                                        <h5>CAC</h5>
                                        <h3 className=' fw-bolder'>₹100</h3>
                                    </div>
                                    {/* <div>
                                        <h5>CTR</h5>
                                        <h3>2.15%</h3>
                                    </div> */}
                                    <div className=' logo logoRedeemed d-flex justify-content-center align-items-center fs-4 border rounded-5 '>
                                        <BsFillCreditCard2BackFill/>
                                    </div>
                                    {/* <RevenueReport primary={context.colors.primary.main} warning={context.colors.warning.main} /> */}
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl='4' md='6'  sm='12'>
                            <Card>
                                <CardBody className=' d-flex justify-content-between' style={{ height: `100px`}}>
                                    <div>
                                        <h5>CTR</h5>
                                        <h3 className=' fw-bolder'>0.00</h3>
                                    </div>
                                    {/* <div>
                                        <h5>Earnings</h5>
                                        <h3>0.00</h3>
                                    </div> */}
                                    <div className='logo logoIssued d-flex justify-content-center align-items-center fs-4 border rounded-5 '>
                                        <TiTick />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl='4' md='6'  sm='12'>
                            <Card>
                                <CardBody className=' d-flex justify-content-between' style={{ height: `100px`}}>
                                    <div>
                                        <h5>Earnings</h5>
                                        <h3 className=' fw-bolder '>0.00</h3>
                                    </div>
                                    {/* <div>
                                        <h5>Earnings</h5>
                                        <h3>0.00</h3>
                                    </div> */}
                                    <div className='logo logoReferrals d-flex justify-content-center align-items-center fs-4 border rounded-5 '>
                                        <BsCashStack/>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl='4' md='6'  sm='12'>
                            <Card>
                                <CardBody className=' d-flex justify-content-between'>
                                    <div>
                                        <h5>CAC</h5>
                                        <h3 className=' fw-bolder'>₹100</h3>
                                    </div>
                                    {/* <div>
                                        <h5>CTR</h5>
                                        <h3>2.15%</h3>
                                    </div> */}
                                    <div className=' logo logoRedeemed d-flex justify-content-center align-items-center fs-4 border rounded-5 '>
                                        <BsFillCreditCard2BackFill/>
                                    </div>
                                    {/* <RevenueReport primary={context.colors.primary.main} warning={context.colors.warning.main} /> */}
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl='4' md='6'  sm='12'>
                            <Card>
                                <CardBody className=' d-flex justify-content-between' style={{ height: `100px`}}>
                                    <div>
                                        <h5>CTR</h5>
                                        <h3 className=' fw-bolder'>0.00</h3>
                                    </div>
                                    {/* <div>
                                        <h5>Earnings</h5>
                                        <h3>0.00</h3>
                                    </div> */}
                                    <div className='logo logoIssued d-flex justify-content-center align-items-center fs-4 border rounded-5 '>
                                        <TiTick />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl='4' md='6'  sm='12'>
                            <Card>
                                <CardBody className=' d-flex justify-content-between' style={{ height: `100px`}}>
                                    <div>
                                        <h5>Earnings</h5>
                                        <h3 className=' fw-bolder '>0.00</h3>
                                    </div>
                                    {/* <div>
                                        <h5>Earnings</h5>
                                        <h3>0.00</h3>
                                    </div> */}
                                    <div className='logo logoReferrals d-flex justify-content-center align-items-center fs-4 border rounded-5 '>
                                        <BsCashStack/>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl='4' md='6'  sm='12'>
                            <Card>
                                <CardBody className=' d-flex justify-content-between'>
                                    <div>
                                        <h5>CAC</h5>
                                        <h3 className=' fw-bolder'>₹100</h3>
                                    </div>
                                    {/* <div>
                                        <h5>CTR</h5>
                                        <h3>2.15%</h3>
                                    </div> */}
                                    <div className=' logo logoRedeemed d-flex justify-content-center align-items-center fs-4 border rounded-5 '>
                                        <BsFillCreditCard2BackFill/>
                                    </div>
                                    {/* <RevenueReport primary={context.colors.primary.main} warning={context.colors.warning.main} /> */}
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl='4' md='6'  sm='12'>
                            <Card>
                                <CardBody className=' d-flex justify-content-between' style={{ height: `100px`}}>
                                    <div>
                                        <h5>CTR</h5>
                                        <h3 className=' fw-bolder'>0.00</h3>
                                    </div>
                                    {/* <div>
                                        <h5>Earnings</h5>
                                        <h3>0.00</h3>
                                    </div> */}
                                    <div className='logo logoIssued d-flex justify-content-center align-items-center fs-4 border rounded-5 '>
                                        <TiTick />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl='4' md='6'  sm='12'>
                            <Card>
                                <CardBody className=' d-flex justify-content-between' style={{ height: `100px`}}>
                                    <div>
                                        <h5>Earnings</h5>
                                        <h3 className=' fw-bolder '>0.00</h3>
                                    </div>
                                    {/* <div>
                                        <h5>Earnings</h5>
                                        <h3>0.00</h3>
                                    </div> */}
                                    <div className='logo logoReferrals d-flex justify-content-center align-items-center fs-4 border rounded-5 '>
                                        <BsCashStack/>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
        </Row>

        
    </>
  )
}

export default Statistics