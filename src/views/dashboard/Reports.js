import { Col, Row, Card, CardBody } from 'reactstrap'
import React, { useState } from 'react'
import ProgressBar from '../ui-element/ProgressBar'
import HollowPieChart from '../ui-element/HollowPieChart'
import LineChart from '../ui-element/LineChart'
import Heatmap from '../ui-element/Heatmap'

function Reports() {
    const [percentage] = useState(43.60)
    const [color] = useState('#5ab33e')

    // const handlePercentageChange = (event) => {
    // setPercentage(event.target.value)
    // }

    return (
        <>
            <Row>
                <Col sm={12} md={6} xl={4}>
                    <div className='section-4-heading'>
                        <h4 className='ms-1' style={{marginTop:"3vh", marginBottom:"3.2vh"}}>Whatsapp Reports </h4>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <CardBody>
                            <div className='section-1 d-flex flex-column'>
                                <div className='section-1-card-1-top d-flex justify-content-between'>
                                    <div className='sectin-1-card-1-Usage d-flex'>
                                        <h4 style={{ fontWeight: "500" }}>Whatsapp Usage</h4>
                                        <h3 style={{ fontWeight: "500" }} className='ms-2'>4</h3>
                                    </div>
                                    <div className='sectin-1-card-1-details'>
                                        <a href='/' style={{color:"rgb(250, 163, 2)"}}>View Detail</a>
                                    </div>
                                </div>
                                <hr style={{padding:"0.8px", marginTop:"-0.2vh"}}/> 
                                <div className='section-1-card-1-middel mt-1'>
                                    <div className='section-1-card-1-middel-info d-flex'>
                                        <p style={{ fontWeight: "550", fontSize:"3vh", marginRight:"8px" }}>8.721</p> <p style={{ fontWeight: "450", fontSize:"3vh" }}>/ 20.000</p>
                                    </div>
                                    <div className='section-1-card-1-middel-info'>
                                        <p className='fs-5' style={{marginTop:"1vh"}}>11,279 message left</p>
                                    </div>
                                    <div className='section-1-card-1-progrssbar-section mt-5'>
                                        <div className='section-1-card-1-progrssbar'>
                                            <ProgressBar percentage={percentage} color={color}/>
                                        </div>
                                        <div className='section-1-card-1-progrssbar-info d-flex justify-content-between mt-1' style={{marginBottom:"1.2vh"}}>
                                            <div className='section-1-card-1-progrssbar-section-used mt-1'>
                                                <p className='fs-5'>Has been used</p>
                                            </div>
                                            <div className='section-1-card-1-progrssbar-section-% mt-1'>
                                                <p className='fs-5'>{percentage}%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={8}>
                    <Card>
                        <CardBody>
                            <div className='section-1 d-flex flex-column'>
                                <div className='section-1-card-2-top d-flex justify-content-between'>
                                    <div className='sectin-1-card-2-Usage d-flex'>
                                        <h4 style={{ fontWeight: "500" }}>Detail All Usage</h4>
                                        <h3 style={{ fontWeight: "500" }} className='ms-2'>4</h3>
                                    </div>
                                </div>
                            </div>
                            <hr style={{padding:"0.8px", marginTop:"-0.2vh"}}/> 
                            <Row>
                                <Col sm={12} md={12} xl={4}>
                                    <div className='section-1-hollowpie-chart mt-1 d-flex justify-content-md-center justify-content-sm-center'>
                                        <HollowPieChart percentage={40} percentage1={60} color1={"rgb(8, 161, 63)"} color2={"rgb(103, 201, 138)"} color3={"rgb(230, 189, 7)"}/>
                                    </div>
                                </Col>
                                <Col sm={12} md={12} xl={8}>
                                    <div className='campaign-details d-flex justify-content-evenly mt-4'>
                                        <div className='indicator d-flex flex-column justify-content-evenly'>
                                        <div style={{ height: "10px", width: "10px", background: "rgb(8, 161, 63)"}}></div>
                                        <div style={{ height: "10px", width: "10px", background: "rgb(103, 201, 138)"}}></div>
                                        <div style={{ height: "10px", width: "10px", background: "rgb(230, 189, 7)"}}></div>
                                        </div>

                                        <div className='campain-status'>
                                            <p className='mt-1'>Campaign 1</p>
                                            <p>Campaign 2</p>
                                            <p>Campaign 3</p>
                                        </div>
                                        <div>
                                            <h5 className='mt-1 fw-bold'>2</h5>
                                            <h5 className='mt-2 fw-bold'>2</h5>
                                            <h5 className='mt-1 fw-bold'>1</h5>

                                        </div>
                                        <div className='d-flex flex-column'>
                                            <a className='mt-1' href='/' style={{ color: "rgb(250, 163, 2)" }}>View Detail</a>
                                            <a className='mt-1' href='/' style={{ color: "rgb(250, 163, 2)" }}>View Detail</a>
                                            <a className='mt-1' href='/' style={{color:"rgb(250, 163, 2)"}}>View Detail</a>

                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex justify-content-md-start justify-content-lg-between justify-content-md-start'>
                <Col sm={6} md={4} xl={2}>
                    <Card style={{height:"29vh"}}>
                        <CardBody style={{padding:"1.2vh"}}>
                            <div className='overview-card-1'>
                                <div className='overview-card-1-top mt-1'>
                                    <div className='overview-card-1-indicator d-flex'>
                                        <div style={{ width: "9px", height: "9px", background: "rgb(240, 41, 144)", borderRadius: "50%", marginTop: "5px" }}></div>
                                        <h6 className='ms-1'>SENT</h6>
                                    </div>
                                    <div className='ovreview-card-1-info'>
                                        <h5 className='mt-1 ms-1'>301,302</h5>
                                    </div>
                                </div>

                                <div className='overview-card-1-bottom' style={{marginTop:"10vh"}}>
                                    <div className='overview-card-1-indicator d-flex'>
                                        <div style={{ width: "9px", height: "9px", background: "rgb(214, 34, 58)", borderRadius: "50%", marginTop: "5px" }}></div>
                                        <h6 className='ms-1'>FAILURES</h6>
                                    </div>
                                    <div className='ovreview-card-1-info'>
                                        <p className='mt-1 ms-1'>289,699</p>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col sm={6} md={4} xl={2}>
                    <Card style={{height:"29vh"}}>
                        <CardBody style={{padding:"1.2vh"}}>
                            <div className='overview-card-2'>
                                <div className='overview-card-2-top mt-1'>
                                    <div className='overview-card-2-indicator d-flex'>
                                        <div style={{ width: "9px", height: "9px", background: "rgb(41, 111, 240)", borderRadius: "50%", marginTop: "5px" }}></div>
                                        <h6 className='ms-1'>DELIVERED</h6>
                                    </div>
                                    <div className='ovreview-card-2-info'>
                                        <h5 className='mt-1 ms-1'>1.66%</h5>
                                        <p className='mt-1 ms-1 text-primary'>4,989</p>
                                    </div>
                                </div>

                                <div className='overview-card-2-bottom mt-3'>
                                    <div className='overview-card-2-indicator d-flex'>
                                        <div style={{ width: "9px", height: "9px", background: "rgb(139, 30, 235)", borderRadius: "50%", marginTop: "5px" }}></div>
                                        <h6 className='ms-1'>QUEUED</h6>
                                    </div>
                                    <div className='ovreview-card-2-info'>
                                        <p className='ms-1' style={{marginTop:"5.5px"}}>6,614</p>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col sm={6} md={4} xl={2}>
                    <Card style={{height:"29vh"}}>
                        <CardBody style={{padding:"1.2vh"}}>
                            <div className='overview-card-3'>
                                <div className='overview-card-3-top mt-1'>
                                    <div className='overview-card-3-indicator d-flex'>
                                        <div style={{ width: "9px", height: "9px", background: "rgb(115, 163, 250)", borderRadius: "50%", marginTop: "5px" }}></div>
                                        <h6 className='ms-1'>READ</h6>
                                    </div>
                                    <div className='ovreview-card-3-info'>
                                        <h5 className='mt-1 ms-1'>828</h5>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col sm={6} md={4} xl={2}>
                    <Card style={{height:"29vh"}}>
                        <CardBody style={{padding:"1.2vh"}}>
                            <div className='overview-card-4'>
                                <div className='overview-card-4-top mt-1'>
                                    <div className='overview-card-4-indicator d-flex'>
                                        <div style={{ width: "9px", height: "9px", background: "rgb(105, 240, 123)", borderRadius: "50%", marginTop: "5px" }}></div>
                                        <h6 className='ms-1'>UNIQUE CLICKS</h6>
                                    </div>
                                    <div className='ovreview-card-4-info'>
                                        <h5 className='mt-1 ms-1'>0.66%</h5>
                                        <p className='mt-1 ms-1 text-primary'>33</p>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col sm={6} md={4} xl={2}>
                    <Card style={{height:"29vh"}}>
                        <CardBody style={{padding:"1.2vh"}}>
                            <div className='overview-card-5 mt-1'>
                                <div className='overview-card-5-top'>
                                    <div className='overview-card-5-indicator d-flex'>
                                        <div style={{ width: "9px", height: "9px", background: "rgb(8, 163, 19)", borderRadius: "50%", marginTop: "5px" }}></div>
                                        <h6 className='ms-1'>UNIQUE CONVERSIONS</h6>
                                    </div>
                                    <div className='ovreview-card-5-info'>
                                        <div className='indicator-arrow d-flex'>
                                            <h5 className='mt-1 ms-1'>1.2%</h5>
                                            <div className='arrow d-flex flex-column mt-1 ms-'>
                                                <div style={{ width: "0", height: "0", borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderBottom: "10px solid #06c713", marginLeft:"42%", marginBottom:"1vh" }}></div>
                                                <div style={{color:"#06c713"}}>1614.29%</div>
                                            </div>
                                        </div>
                                        <p className='ms-1 text-primary mt-1'>60</p>
                                    </div>
                                </div>

                                <div className='overview-card-2-bottom mt-2'>
                                    <div className='overview-card-2-indicator d-flex'>
                                        <div style={{ width: "9px", height: "9px", background: "rgb(139, 30, 235)", borderRadius: "50%", marginTop: "5px" }}></div>
                                        <h6 className='ms-1'>UNIQUE CG</h6>
                                    </div>
                                    <div className='ovreview-card-2-info'>
                                        <p className='ms-1' style={{marginTop:"5px"}}>0.07%</p>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col sm={6} md={4} xl={2}>
                    <Card style={{height:"29vh"}}>
                        <CardBody style={{padding:"1.2vh"}}>
                            <div className='overview-card-5 mt-1'>
                                <div className='overview-card-5-top'>
                                    <div className='overview-card-5-indicator d-flex'>
                                        <div style={{ width: "9px", height: "9px", background: "rgb(3, 143, 31)", borderRadius: "50%", marginTop: "5px" }}></div>
                                        <h6 className='ms-1'>REVENUE</h6>
                                    </div>
                                    <div className='ovreview-card-5-info'>
                                        <h5 className='mt-1 ms-1'>$491,120</h5>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col sm={12} md={6} xl={4}>
                    <div className='section-5-heading'>
                        <h4 className='ms-1' style={{marginTop:"3vh", marginBottom:"3.2vh"}}>Overview</h4>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col sm={12} md={6} xl={3}>
                <Card style={{height:"20vh"}}>
                    <CardBody>
                        <div className='card-contend'>
                            <div className='section-4-card-1 d-flex justify-content-between'>
                                <div className='section-4-card-1-heading'>
                                    <p className='fs-5'>REACHABILITY</p>
                                    <h4 style={{fontWeight:"600", marginTop:"3vh"}}>112,806</h4>
                                    <p className='mt-1 text-primary'>34.30%</p>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col sm={12} md={6} xl={3}>
                <Card style={{height:"20vh"}}>
                    <CardBody>
                        <div className='card-contend'>
                            <div className='section-4-card-2 d-flex justify-content-between'>
                                <div className='section-4-card-1-heading'>
                                    <p className='fs-5'>NEW SUBSCRIBERS</p>
                                    <h4 style={{fontWeight:"600", marginTop:"3vh"}}>1,318</h4>
                                    <p className='mt-1 text-primary'>34.30%</p>
                                </div>
                            </div>
                            
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col sm={12} md={6} xl={3}>
                <Card style={{height:"20vh"}}>
                    <CardBody>
                        <div className='card-contend'>
                            <div className='section-4-card-3 d-flex justify-content-between'>
                                <div className='section-4-card-3-heading'>
                                    <p className='fs-5'>USER ENGAGED</p>
                                    <h4 style={{fontWeight:"600", marginTop:"3vh"}}>106,068</h4>
                                    <p className='mt-1 text-primary'>34.30%</p>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col sm={12} md={6} xl={3}>
                <Card style={{height:"20vh"}}>
                    <CardBody>
                        <div className='card-contend'>
                            <div className='section-4-card-3 d-flex justify-content-between'>
                                <div className='section-4-card-3-heading'>
                                    <p className='fs-5'>REVENUE</p>
                                    <h4 style={{fontWeight:"600", marginTop:"3vh"}}>$ 12,242</h4>
                                    <p className='mt-1 text-primary'>34.30%</p>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>     
            </Row>
            
            <Row>
                <Col sm={12}>
                    <Card>
                        <CardBody>
                            <LineChart/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col sm={12}>
                    <Card>
                        <CardBody>
                            <Heatmap/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Reports