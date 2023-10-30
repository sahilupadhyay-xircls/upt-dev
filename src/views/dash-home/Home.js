// import {useEffect} from 'react'
import { Col, Row, Card, CardBody, Badge } from 'reactstrap'
import { Link } from 'react-router-dom'
import StatsCard from './statsCard'
import HomeDonughnutChart from './HomeDonughnutChart'
// import DataTableWithButtons from '../tables/data-tables/basic/TableMultilingual'
// import StatsCard from '../ui-element/Static'

const Home = () => {
    
    return (
        <>
            <Card>
                <CardBody>
                    <h4>Home</h4>
                </CardBody>
            </Card>
            <Card>
                <CardBody className=''>
                    <Row>
                        <Col xs={8} style={{ borderRight: "1px solid #dbdade" }}>
                            <Row className='mb-1'>
                                <h3 className='mb-1'>Welcome Back, Felecia👋🏻</h3>
                                <p className='w-50 '>Your referral program performance to date.</p>
                            </Row>

                            <StatsCard />

                        </Col>

                        <Col xs={4}>
                            <Row>
                                <Col >
                                    <div className="1 mb-4">
                                        <h4 className='fw-bolder'>Time Spending</h4>
                                        <h6>Weekely Report</h6>
                                    </div>
                                    <div className="2">
                                        <span className='h3 fw-bolder ' >231</span>
                                        <span className='h3 fw-bolder ' style={{ color: "gray" }}>h  </span>
                                        <span className='h3 fw-bolder '>14</span>
                                        <span className='h3 fw-bolder ' style={{ color: "gray" }}>m</span>
                                        <br />
                                        <Badge color='success' style={{ color: "$198754", padding: "7px", marginTop: "4px" }}>+18.4%</Badge>
                                    </div>
                                </Col>
                                <Col style={{ width: "80%" }} className='d-flex align-items-center '>
                                    <HomeDonughnutChart />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <Row className=''><h2 className='fw-bolder'>Welcome back, Felecia👋🏻</h2> </Row>
                    <Row className='mb-3'><p className=''>Your Product reviews status to date</p></Row>
                    <Row>
                        <Col className='d-flex flex-column '>
                            <p className=' fw-bolder' style={{ fontSize: "20px" }}>44</p>
                            <h4 className=' fw-bolder'>Reviews Received</h4>
                        </Col>
                        <Col className='d-flex flex-column '>
                            <p className=' fw-bolder' style={{ fontSize: "20px" }}>404</p>
                            <h4 className=' fw-bolder'>Request Emails Sent</h4>
                        </Col>
                        <Col className='d-flex flex-column '>
                            <p className=' fw-bolder' style={{ fontSize: "20px" }}>4.1</p>
                            <h4 className=' fw-bolder'>Average Rating</h4>
                        </Col>
                    </Row>
                    <Row><Link to='/' className=' text-end' style={{ fontSize: "18px" }}>See detailed Report</Link></Row>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Row>
                        <Col><h1 className='fw-medium'>Pending Approval </h1></Col>
                        <Col><h1 className='fw-medium'>Latest reviews</h1></Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    )
}

export default Home