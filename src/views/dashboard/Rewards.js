import { Col, Row, Card, CardBody } from 'reactstrap'
import Button from 'react-bootstrap/Button'
import '@src/views/dashboard/Rewards.css'
import Container from 'react-bootstrap/Container'
import TableRewardOffer from '../tables/data-tables/basic/TableRewardOffer'

function Rewards() {
    return (
        <>
            <Card>
                <Row>
                    <Col sm={12} md={6} xl={4}>
                        <CardBody>
                            <div className='section-1-heading'>
                                <h4>XIRCLS Rewards</h4>
                            </div>
                        </CardBody>
                    </Col>
                </Row>
            </Card>
            
            <Card>
                <Row>
                    <Col sm={12} md={12} xl={12}>
                        <CardBody className='section-1-card-body p-0'>
                            <div className='section-img'>
                                <img src={require('./Assets/rewards.jpg')} className="img-fluid w-100"></img>
                                
                            </div>
                        </CardBody>
                    </Col>
                </Row>
            </Card>

            <Card>
                <Row className='reward-card-row d-flex justify-content-start'>
                    <Col sm={6} md={6} xl={4}>
                        <CardBody className='card-fluid'>
                            <div sm={12} md={6} xl={4} className='reward-section-cards'>
                                <div className='reward-section-card-1 w-100 h-100'>
                                    <div className='reward-section-card-1-content p-2'>
                                    <div className='section-2-card-1-img text-center'>
                                        <img src={require("./Assets/logo2.jpg")} className='img-fluid w-50 mt-2'></img>
                                    </div>
                                    <div className='reward-section-card-1-info mt-5'>
                                        <div className='reward-section-card-1-heading'>
                                            <h4 className='text-black-60'>PVR</h4>
                                        </div>
                                        <div className='reward-section-card-1-link'>
                                            <a href='https://www.pvrcinemas.com'>https://www.pvrcinemas.com</a>
                                        </div>
                                        <hr></hr>
                                        <div className='reward-section-card-1-button mb-1'>
                                             <Button variant="light" className='rounded-pill border-dark p-1 text-black-60'>View Offers</Button>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                            </div>
                        </CardBody>
                    </Col>

                    <Col sm={6} md={6} xl={4}>
                        <CardBody className='card-fluid'>
                            <div sm={12} md={6} xl={4} className='reward-section-cards'>
                                <div className='reward-section-card-1'>
                                    <div className='reward-section-card-1-content p-2'>
                                    <div className='section-2-card-1-img text-center'>
                                        <img src={require("./Assets/logo2.jpg")} className='img-fluid w-50 mt-2 '></img>
                                    </div>
                                    <div className='reward-section-card-1-info mt-5'>
                                        <div className='reward-section-card-1-heading'>
                                            <h4 className='text-black-60'>TEST</h4>
                                        </div>
                                        <div className='reward-section-card-1-link'>
                                            <a href='https://maapro.myshopify.com/'>https://maapro.myshopify.com/</a>
                                        </div>
                                        <hr></hr>
                                        <div className='reward-section-card-1-button mb-1'>
                                            <Button variant="light" className='rounded-pill border-dark p-1 text-black-60'>View Offers</Button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default Rewards