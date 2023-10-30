import { Col, Row, Card, CardBody } from 'reactstrap'
// import box from '@src/assets/images/icons/box.svg's
import HollowPieChart from '../ui-element/HollowPieChart'

function Analytics() {
    return (
        <>
            <Card>
                <CardBody>
                    <h4>At a Glance</h4>
                </CardBody>
            </Card>

            <Row>
                <Col sm={12} md={6} xl={4}>
                    <Card style={{ height: "20vh" }}>
                        <CardBody>
                            <div className='card-contend'>
                                <div className='section-4-card-1 d-flex justify-content-between'>
                                    <div className='section-4-card-1-heading'>
                                        <p className='fs-5'>Toal Messages Sent</p>
                                        <h4 style={{ fontWeight: "600", marginTop: "3vh" }}>5480</h4>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card style={{ height: "20vh" }}>
                        <CardBody>
                            <div className='card-contend'>
                                <div className='section-4-card-2 d-flex justify-content-between'>
                                    <div className='section-4-card-1-heading'>
                                        <p className='fs-5'>Total Engagement</p>
                                        <h4 style={{ fontWeight: "600", marginTop: "3vh" }}>868</h4>
                                    </div>
                                </div>

                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card style={{ height: "20vh" }}>
                        <CardBody>
                            <div className='card-contend'>
                                <div className='section-4-card-3 d-flex justify-content-between'>
                                    <div className='section-4-card-3-heading'>
                                        <p className='fs-5'>Response Rate</p>
                                        <h4 style={{ fontWeight: "600", marginTop: "3vh" }}>100%</h4>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Card className='mb-3'>
                <Row >
                    <Col sm={12} md={12} xl={12}>
                        <CardBody>
                            <div className='section-1-card-top d-flex align-items-center'>
                                <div className='section-1-top-img'>
                                    <img className='trend ms-1' src={require("./Assets/trend.png")} style={{ width: "4vh", height: "4vh" }}></img>
                                </div>
                                <div className='section-1-top-heading'>
                                    <h4 className='ms-2'>Analytics</h4>
                                </div>
                            </div>
                            <hr style={{ padding: "0.8px" }} />
                        </CardBody>
                    </Col>
                    <Row className='d-flex justify-content-evenly'>
                        <Col sm={12} md={6} xl={6}>
                            <CardBody >
                                <div className='section-1-card-bottom' style={{ marginTop: "0vh" }}>
                                    <div className='section-1-card-1 d-flex justify-content-center'>
                                        <div className='section-1-card-1-info text-center'>
                                            <div className='section-1-card-heading fw-bolder'>
                                                <h3 style={{ fontWeight: "600", textAlign: "center" }}>5480</h3>
                                            </div>
                                            <div className='section-1-card-1-para '>
                                                <p className='font-small-3 '>TOTAL MESSAGES SENT</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </CardBody>
                        </Col>

                        <Col sm={12} md={6} xl={6}>
                            <CardBody >
                                <div className='section-1-card-bottom' style={{ marginTop: "0vh" }}>
                                    <div className='section-1-card-2 d-flex d-flex justify-content-center'>
                                        <div className='section-1-card-2-info text-center'>
                                            <div className='section-1-card-2-heading fw-bolder'>
                                                <h3 style={{ fontWeight: "600" }}>5480</h3>
                                            </div>
                                            <div className='section-1-card-2-para '>
                                                <p className='font-small-3 '>SMS</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </CardBody>
                        </Col>
                    </Row>
                </Row>
            </Card>

            <Card>
                <Row>
                    <Col sm={12} md={12} xl={12}>
                        <CardBody>
                            <div className='section-2-top d-flex align-items-center'>
                                <div className='section-2-top-img'>
                                    <img className='euro ms-1' src={require("./Assets/euro.png")} style={{ width: "4vh", height: "4vh" }}></img>
                                </div>
                                <div className='section-2-top-heading'>
                                    <h4 className='ms-2' style={{ marginTop: "8px" }}>Costs</h4>
                                </div>
                            </div>
                            <hr style={{ padding: "1px" }} />

                            <Row className='hollow-piecharts d-flex justify-content-evenly'>
                                <Col sm={12} md={6} xl={4}>
                                    <div className='hollow-piechart-1 d-flex align-items-center jusify-content-center flex-column'>
                                        <div className='hollow-piechart-1-heading mt-2'>
                                            <h4>Total Cost</h4>
                                        </div>
                                        <div className='hollow-piechart-1 mt-2 '>
                                            <HollowPieChart percentage={100} color1={"rgb(66, 135, 245)"} />
                                        </div>
                                        <div className='hollow-piechart-1-info mt-1 d-flex'>
                                            <div className='blue d-flex jusify-content-center' >
                                                <div style={{ width: "10px", height: "10px", background: "rgb(66, 135, 245)", borderRadius: "50%", marginTop: "5px" }}></div>
                                                <p style={{ marginLeft: "8px" }}>Delivered</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} xl={4}>
                                    <div className='hollow-piechart-2 d-flex align-items-center jusify-content-center flex-column'>
                                        <div className='hollow-piechart-2-heading mt-2'>
                                            <h4>Delivery Cost</h4>
                                        </div>
                                        <div className='hollow-piechart-2 mt-2'>
                                            <HollowPieChart percentage={97.81} color1={"rgb(41, 240, 134)"} color2={"rgb(240, 74, 41)"} />
                                        </div>
                                        <div className='hollow-piechart-2-info mt-1 d-flex'>
                                            <div className='green d-flex jusify-content-center' >
                                                <div style={{ width: "10px", height: "10px", background: "rgb(41, 240, 134)", borderRadius: "50%", marginTop: "5px" }}></div>
                                                <p style={{ marginLeft: "8px" }}>Delivered</p>
                                            </div>
                                            <div className='red d-flex jusify-content-center ms-2' >
                                                <div style={{ width: "10px", height: "10px", background: "rgb(240, 74, 41)", borderRadius: "50%", marginTop: "5px" }}></div>
                                                <p style={{ marginLeft: "8px" }}>Undelivered</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} xl={4}>
                                    <div className='cost-per d-flex flex-column jusify-content-center align-items-center mt-1'>
                                        <div className='cost-per-click  text-center '>
                                            <div className='cost-per-click-img mt-2'>
                                                <img className='walk ms-1' src={require("./Assets/touch.png")} style={{ width: "6.2vh", height: "6.2vh" }}></img>
                                            </div>
                                            <div className='cost-per-click-info'>
                                                <p className='ms-1'>Cost per click</p>
                                            </div>
                                            <div className='cost-per-click-heading'>
                                                <h5 className='ms-1'>3.87 Credits</h5>
                                            </div>
                                        </div>

                                        <div className='cost-per-recipient mt-3  text-center d-flex flex-column align-items-center'>
                                            <div className='cost-per-recipient-img'>
                                                <img className='walk ms-1' src={require("./Assets/walk.png")} style={{ width: "6.2vh", height: "6.2vh" }}></img>
                                            </div>
                                            <div className='cost-per-recipient-info'>
                                                <p>Cost per recipient</p>
                                            </div>
                                            <div className='cost-per-recipient-heading'>
                                                <h5>4.72 Credits</h5>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Col>
                </Row>
            </Card>

            <Card>
                <Row>
                    <Col sm={12} md={12} xl={12}>
                        <CardBody>
                            <div className='section-3-top d-flex align-items-center'>
                                <div className='section-3-top-img'>
                                    <img className='euro ms-1' src={require("./Assets/star.png")} style={{ width: "4vh", height: "4vh" }}></img>
                                </div>
                                <div className='section-3-top-heading'>
                                    <h5 className='ms-2' style={{ marginTop: "8px" }}>Rates</h5>
                                </div>
                            </div>
                            <hr style={{ padding: "1px" }} />

                            <Row className='hollow-piecharts d-flex justify-content-evenly'>
                                <Col sm={12} md={6} xl={4}>
                                    <div className='section-3-hollow-piechart-1 d-flex align-items-center jusify-content-center flex-column'>
                                        <div className='hollow-piechart-1-heading mt-2'>
                                            <h4>Click-through Rate</h4>
                                        </div>
                                        <div className='section-3-hollow-piechart-1 mt-2 '>
                                            <HollowPieChart percentage={18.76} color1={"rgb(41, 240, 134)"} color2={"rgb(240, 74, 41)"} />
                                        </div>
                                        <div className='section-3-hollow-piechart-1-info mt-1 d-flex'>
                                            <div className='green d-flex jusify-content-center' >
                                                <div style={{ width: "10px", height: "10px", background: "rgb(41, 240, 134)", borderRadius: "50%", marginTop: "5px" }}></div>
                                                <p style={{ marginLeft: "8px" }}>Opened</p>
                                            </div>
                                            <div className='red d-flex jusify-content-center ms-2' >
                                                <div style={{ width: "10px", height: "10px", background: "rgb(240, 74, 41)", borderRadius: "50%", marginTop: "5px" }}></div>
                                                <p style={{ marginLeft: "8px" }}>Delivered</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} xl={4}>
                                    <div className='section-3-hollow-piechart-2 d-flex align-items-center jusify-content-center flex-column'>
                                        <div className='hollow-piechart-1-heading mt-2'>
                                            <h4>Opt-Out Rate</h4>
                                        </div>
                                        <div className='section-3-hollow-piechart-2 mt-2'>
                                            <HollowPieChart percentage={0.12} color1={"rgb(41, 240, 134)"} color2={"rgb(240, 74, 41)"} />
                                        </div>
                                        <div className='section-3-hollow-piechart-2-info mt-1 d-flex'>
                                            <div className='green d-flex jusify-content-center' >
                                                <div style={{ width: "10px", height: "10px", background: "rgb(41, 240, 134)", borderRadius: "50%", marginTop: "5px" }}></div>
                                                <p style={{ marginLeft: "8px" }}>No Opt-Out</p>
                                            </div>
                                            <div className='red d-flex jusify-content-center ms-2' >
                                                <div style={{ width: "10px", height: "10px", background: "rgb(240, 74, 41)", borderRadius: "50%", marginTop: "5px" }}></div>
                                                <p style={{ marginLeft: "8px" }}>Opt-Out</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} xl={4}>
                                    <div className='section-3-hollow-piechart-3 d-flex align-items-center jusify-content-center flex-column'>
                                        <div className='hollow-piechart-1-heading mt-2'>
                                            <h4>Delivery rate</h4>
                                        </div>
                                        <div className='section-3-hollow-piechart-3 mt-2'>
                                            <HollowPieChart percentage={97.81} color1={"rgb(41, 240, 134)"} color2={"rgb(240, 74, 41)"} />
                                        </div>
                                        <div className='section-3-hollow-piechart-3-info mt-1 d-flex'>
                                            <div className='green d-flex jusify-content-center' >
                                                <div style={{ width: "10px", height: "10px", background: "rgb(41, 240, 134)", borderRadius: "50%", marginTop: "5px" }}></div>
                                                <p style={{ marginLeft: "8px" }}>Delivered</p>
                                            </div>
                                            <div className='red d-flex jusify-content-center ms-2' >
                                                <div style={{ width: "10px", height: "10px", background: "rgb(240, 74, 41)", borderRadius: "50%", marginTop: "5px" }}></div>
                                                <p style={{ marginLeft: "8px" }}>Undelivered</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Col>
                </Row>
            </Card>

            <Row>
                <Col sm={12} md={6} xl={4}>
                    <div className='section-5-heading'>
                        <h4 className='ms-1' style={{ marginTop: "3vh", marginBottom: "3.2vh" }}>Overview</h4>
                    </div>
                </Col>
            </Row>

            <Row className='d-flex justify-content-md-start justify-content-lg-between justify-content-md-start'>
                <Col sm={6} md={4} xl={2}>
                    <Card style={{ height: "32vh" }}>
                        <CardBody>
                            <div className='overview-card-1'>
                                <div className='overview-card-1-top mt-1'>
                                    <div className='overview-card-1-indicator d-flex'>
                                        <div style={{ width: "9px", height: "9px", background: "rgb(240, 41, 144)", borderRadius: "50%", marginTop: "5px" }}></div>
                                        <h6 className='ms-1'>SENT</h6>
                                    </div>
                                    <div className='ovreview-card-1-info'>
                                        <h5 className='mt-1 ms-1'>57,037</h5>
                                    </div>
                                </div>

                                <div className='overview-card-1-bottom' style={{ marginTop: "10vh" }}>
                                    <div className='overview-card-1-indicator d-flex'>
                                        <div style={{ width: "9px", height: "9px", background: "rgb(240, 41, 144)", borderRadius: "50%", marginTop: "5px" }}></div>
                                        <h6 className='ms-1'>FAILURES</h6>
                                    </div>
                                    <div className='ovreview-card-1-info'>
                                        <p className='mt-1 ms-1'>188</p>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col sm={6} md={4} xl={2}>
                    <Card style={{ height: "32vh" }}>
                        <CardBody>
                            <div className='overview-card-2'>
                                <div className='overview-card-2-top mt-1'>
                                    <div className='overview-card-2-indicator d-flex'>
                                        <div style={{ width: "9px", height: "9px", background: "rgb(41, 111, 240)", borderRadius: "50%", marginTop: "5px" }}></div>
                                        <h6 className='ms-1'>DELIVERED</h6>
                                    </div>
                                    <div className='ovreview-card-2-info'>
                                        <h5 className='mt-1 ms-1'>98.12%</h5>
                                        <p className='mt-1 ms-1 text-primary'>55,967</p>
                                    </div>
                                </div>

                                <div className='overview-card-2-bottom mt-3'>
                                    <div className='overview-card-2-indicator d-flex'>
                                        <div style={{ width: "9px", height: "9px", background: "rgb(83, 11, 161)", borderRadius: "50%", marginTop: "5px" }}></div>
                                        <h6 className='ms-1'>QUEUED</h6>
                                    </div>
                                    <div className='ovreview-card-2-info'>
                                        <p className='mt-1 ms-1'>882</p>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col sm={6} md={4} xl={2}>
                    <Card style={{ height: "32vh" }}>
                        <CardBody>
                            <div className='overview-card-3'>
                                <div className='overview-card-3-top mt-1'>
                                    <div className='overview-card-3-indicator d-flex'>
                                        <div style={{ width: "9px", height: "9px", background: "rgb(232, 194, 2)", borderRadius: "50%", marginTop: "5px" }}></div>
                                        <h6 className='ms-1'>READ</h6>
                                    </div>
                                    <div className='ovreview-card-3-info'>
                                        <h5 className='mt-1 ms-1'>11,755</h5>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col sm={6} md={4} xl={2}>
                    <Card style={{ height: "32vh" }}>
                        <CardBody>
                            <div className='overview-card-4'>
                                <div className='overview-card-4-top mt-1'>
                                    <div className='overview-card-4-indicator d-flex'>
                                        <div style={{ width: "9px", height: "9px", background: "rgb(240, 41, 144)", borderRadius: "50%", marginTop: "5px" }}></div>
                                        <h6 className='ms-1'>CLICKS</h6>
                                    </div>
                                    <div className='ovreview-card-4-info'>
                                        <h5 className='mt-1 ms-1'>9.30%</h5>
                                        <p className='mt-1 ms-1 text-primary'>5,205</p>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col sm={6} md={4} xl={2}>
                    <Card style={{ height: "32vh" }}>
                        <CardBody>
                            <div className='overview-card-5 mt-1'>
                                <div className='overview-card-5-top'>
                                    <div className='overview-card-5-indicator d-flex'>
                                        <div style={{ width: "9px", height: "9px", background: "rgb(240, 41, 144)", borderRadius: "50%", marginTop: "5px" }}></div>
                                        <h6 className='ms-1'>CONVERSIONS</h6>
                                    </div>
                                    <div className='ovreview-card-5-info'>
                                        <h5 className='mt-1 ms-1'>5%</h5>
                                        <p className='mt-1 ms-1 text-primary'>2,799</p>
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
                        <h4 className='ms-1' style={{ marginTop: "3vh", marginBottom: "3.2vh" }}>Campaign performance stats </h4>
                    </div>
                </Col>
            </Row>

            <Row className='d-flex justify-content-sm-start'>
                <Col sm={4} md={3} xl={2}>
                    <Card style={{ height: "20vh" }}>
                        <CardBody>
                            <div className='card-contend'>
                                <div className='section-5-card-1 d-flex justify-content-between'>
                                    <div className='section-5-card-1-heading'>
                                        <p>Send</p>
                                        <h3 style={{ fontWeight: "600" }}>100</h3>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={4} md={3} xl={2}>
                    <Card style={{ height: "20vh" }}>
                        <CardBody>
                            <div className='card-contend'>
                                <div className='section-5-card-2 d-flex justify-content-between'>
                                    <div className='section-5-card-2-heading'>
                                        <p>Delivered</p>
                                        <h3 style={{ fontWeight: "600" }}>100</h3>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={4} md={3} xl={2}>
                    <Card style={{ height: "20vh" }}>
                        <CardBody>
                            <div className='card-contend'>
                                <div className='section-5-card-3 d-flex justify-content-between'>
                                    <div className='section-5-card-3-heading'>
                                        <p>Read</p>
                                        <h3 style={{ fontWeight: "600" }}>80</h3>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={4} md={3} xl={2}>
                    <Card style={{ height: "20vh" }}>
                        <CardBody>
                            <div className='card-contend'>
                                <div className='section-5-card-4 d-flex justify-content-between'>
                                    <div className='section-5-card-4-heading'>
                                        <p>Delivery Rate</p>
                                        <h3 style={{ fontWeight: "600" }}>100%</h3>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={4} md={3} xl={2}>
                    <Card style={{ height: "20vh" }}>
                        <CardBody>
                            <div className='card-contend'>
                                <div className='section-5-card-5 d-flex justify-content-between'>
                                    <div className='section-5-card-5-heading'>
                                        <p>Total click</p>
                                        <h3 style={{ fontWeight: "600" }}>75</h3>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={4} md={3} xl={2}>
                    <Card style={{ height: "20vh" }}>
                        <CardBody>
                            <div className='card-contend'>
                                <div className='section-5-card-6 d-flex justify-content-between'>
                                    <div className='section-5-card-6-heading'>
                                        <p>Unique clicks</p>
                                        <h3 style={{ fontWeight: "600" }}>40</h3>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={4} md={3} xl={2}>
                    <Card style={{ height: "20vh" }}>
                        <CardBody>
                            <div className='card-contend'>
                                <div className='section-5-card-7 d-flex justify-content-between'>
                                    <div className='section-5-card-7-heading'>
                                        <p>Click throught rate</p>
                                        <h3 style={{ fontWeight: "600" }}>40%</h3>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={4} md={3} xl={2}>
                    <Card style={{ height: "20vh" }}>
                        <CardBody>
                            <div className='card-contend'>
                                <div className='section-5-card-8 d-flex justify-content-between'>
                                    <div className='section-5-card-8-heading'>
                                        <p>Click to open rate</p>
                                        <h3 style={{ fontWeight: "600" }}>50%</h3>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={4} md={3} xl={2}>
                    <Card style={{ height: "20vh" }}>
                        <CardBody>
                            <div className='card-contend'>
                                <div className='section-5-card-9 d-flex justify-content-between'>
                                    <div className='section-5-card-9-heading'>
                                        <p>Send</p>
                                        <h3 style={{ fontWeight: "600" }}>100</h3>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col sm={12} md={6} xl={4}>
                    <div className='section-6-heading'>
                        <h4 className='ms-1' style={{ marginTop: "3vh", marginBottom: "3.2vh" }}>Consumers prefered channels </h4>
                    </div>
                </Col>
            </Row>

            <Card>
                <Row>
                    <Col sm={12} md={12} xl={12}>
                        <CardBody>
                            <Row className='section-6-hollow-piecharts d-flex justify-content-evenly'>
                                <Col sm={12} md={6} xl={3}>
                                    <div className='section-6-hollow-piechart-1 d-flex align-items-center jusify-content-center flex-column'>
                                        <div className='section-6-hollow-piechart-1 mt-2 d-flex'>
                                            <HollowPieChart percentage={48} color1={"rgb(8, 81, 163)"} color2={"rgb(199, 208, 217)"} />
                                            <img className='sms ms-1' src={require("./Assets/sms.png")} style={{ width: "10vh", height: "10vh" }}></img>
                                        </div>
                                        <div className='section-6-hollow-piechart-1-info mt-1 d-flex'>
                                            <div className='green d-flex jusify-content-center' >
                                                <p style={{ marginLeft: "-10vh" }}>SMS</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} xl={3}>
                                    <div className='section-6-hollow-piechart-1 d-flex align-items-center jusify-content-center flex-column'>
                                        <div className='section-6-hollow-piechart-1 mt-2 d-flex'>
                                            <HollowPieChart percentage={22} color1={"rgb(8, 81, 163)"} color2={"rgb(199, 208, 217)"} />
                                            <img className='mail ms-1' src={require("./Assets/mail.png")} style={{ width: "10vh", height: "10vh" }}></img>
                                        </div>
                                        <div className='section-6-hollow-piechart-1-info mt-1 d-flex'>
                                            <div className='green d-flex jusify-content-center' >
                                                <p style={{ marginLeft: "-10vh" }}>email</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} xl={3}>
                                    <div className='section-6-hollow-piechart-1 d-flex align-items-center jusify-content-center flex-column'>
                                        <div className='section-6-hollow-piechart-1 mt-2 d-flex'>
                                            <HollowPieChart percentage={48} color1={"rgb(8, 81, 163)"} color2={"rgb(199, 208, 217)"} />
                                            <img className='notification ms-1' src={require("./Assets/notification.png")} style={{ width: "10vh", height: "10vh" }}></img>
                                        </div>
                                        <div className='section-6-hollow-piechart-1-info mt-1 d-flex'>
                                            <div className='green d-flex jusify-content-center' >
                                                <p style={{ marginLeft: "-10vh" }}>app notification</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} xl={3}>
                                    <div className='section-6-hollow-piechart-1 d-flex align-items-center jusify-content-center flex-column'>
                                        <div className='section-6-hollow-piechart-1 mt-2 d-flex'>
                                            <HollowPieChart percentage={48} color1={"rgb(8, 81, 163)"} color2={"rgb(199, 208, 217)"} />
                                            <img className='postbox ms-1' src={require("./Assets/postbox.png")} style={{ width: "10vh", height: "10vh" }}></img>
                                        </div>
                                        <div className='section-6-hollow-piechart-1-info mt-1 d-flex'>
                                            <div className='green d-flex jusify-content-center' >
                                                <p style={{ marginLeft: "-10vh" }}>direct mail</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default Analytics