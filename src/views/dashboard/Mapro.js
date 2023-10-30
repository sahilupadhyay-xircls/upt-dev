import '@src/views/dashboard/Mapro.css'
import { Col, Row, Card, CardBody } from 'reactstrap'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

function Mapro() {
    return (
        <>
        <Card>
                <Row className='section-1'>
                    <Col sm={6} md={4} xl={4}>
                        <CardBody>
                            <div className='section-1-button d-flex justify-content-end'>
                                <Button variant='primary'>Add Reaward</Button>    
                            </div>
                        </CardBody>
                    </Col>
                </Row>
        </Card>
        
        
        <Card>
            <Row>
                <Col sm={6} md={6} xl={4}>
                        <CardBody>
                            <div sm={12} md={6} xl={4}>
                                <div className='section-2-card-1 w-100 h-100'>
                                    <div className='section-2-card-1-content square border border-2'>
                                    <div className='section-2-card-1-img'>
                                        <img src={require("./Assets/mapro.jpeg")} className='img-fluid w-100 mt-0 rounded-0'></img>
                                    </div>
                                    <div className='reward-section-card-1-info mt-3'>
                                        <div className='section-2-card-1-heading text-center'>
                                            <p className='text-black-60 font-small-3 mb-2'>Best Fruity Chocolates</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Col>

                    <Col sm={6} md={6} xl={4}>
                        <CardBody>
                            <div sm={12} md={6} xl={4}>
                                <div className='section-2-card-1 w-100 h-100'>
                                    <div className='section-2-card-1-content square border border-2'>
                                    <div className='section-2-card-1-img'>
                                        <img src={require("./Assets/mapro.jpeg")} className='img-fluid w-100 mt-0 rounded-0'></img>
                                    </div>
                                    <div className='reward-section-card-1-info mt-3'>
                                        <div className='section-2-card-1-heading text-center'>
                                            <p className='text-black-60 font-small-3 mb-2'>Best Fruity Chocolates</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Col>

                    <Col sm={6} md={6} xl={4}>
                        <CardBody>
                            <div sm={12} md={6} xl={4}>
                                <div className='section-2-card-1 w-100 h-100'>
                                    <div className='section-2-card-1-content square border border-2'>
                                    <div className='section-2-card-1-img'>
                                        <img src={require("./Assets/mapro.jpeg")} className='img-fluid w-100 mt-0 rounded-0'></img>
                                    </div>
                                    <div className='reward-section-card-1-info mt-3'>
                                        <div className='section-2-card-1-heading text-center'>
                                            <p className='text-black-60 font-small-3 mb-2'>Best Fruity Chocolates</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Col>
            </Row>
            
            <Row>
                <Col sm={12} md={12} xl={12}>
                 <CardBody>
                    <div className="container-fluid" style={{marginLeft:"-2vh"}}>
                        <div className="row">
                            <div className=" aa col-md-3 " style={{}}>
                                <div className="grid-item mt-1">
                                    <h4 style={{fontWeight:"600", fontSize:"2vh"}}>Product</h4>
                                </div>
                            </div>
                            <div className="bb col-md-3 " style={{}}>
                                <div className="grid-item mt-1" >
                                    <h4 style={{fontWeight:"600", fontSize:"2vh"}}>Reward Category</h4>
                                    </div>
                            </div>
                            <div className="cc col-md-3 ">
                                <div className="grid-item mt-1">
                                    <h4 style={{fontWeight:"600", fontSize:"2vh"}}>Reward Sub-Category</h4>
                                    </div>
                            </div>
                            <div className="dd col-md-3">
                                <div className="grid-item mt-1">
                                    <h4 style={{fontWeight:"600", fontSize:"2vh"}}>Price</h4>
                                    <p className='pt-1 font-small-3 '>500</p>
                                </div>
                            </div>
                            
                            
                        </div>
                        <div className="row">
                            <div className="ee col-md-3">
                                <div className="grid-item mt-1">
                                    <h4 style={{fontWeight:"600", fontSize:"2vh"}}>Duration</h4>
                                    <p className='pt-1 font-small-3 '>53 days</p>
                                    </div>
                            </div>
                            <div className="ff col-md-3">
                                <div className="grid-item mt-1">
                                    <h4 style={{fontWeight:"600", fontSize:"2vh"}}>Discount</h4>
                                    <p className='pt-1 font-small-3 '>10%</p>
                                    </div>
                            </div>
                            <div className="gg col-md-3" >
                                <div className="grid-item mt-1">
                                    <h4 style={{fontWeight:"600", fontSize:"2vh"}}>Discounted Amount for Sponser</h4>
                                    <p className='pt-1 font-small-3 '>450.0</p>
                                    </div>
                            </div>
                            <div className="hh col-md-3">
                                <div className="grid-item mt-1">
                                    <h4 style={{fontWeight:"600", fontSize:"2vh"}}>Add Reaward</h4>
                                    <img src={require("./Assets/plus.png")} className='mt-3' style={{width:"2vh"}}></img>
                                    </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
                </Col>
            </Row>
            
            <Row>
                <Col  sm={6} md={4} xl={4}>
                    <CardBody>
                            <div className='section-1-button d-flex justify-content-start'>
                                <Button variant='primary'>Back</Button>    
                            </div>

                    
                        </CardBody>
                </Col>
            </Row>

        </Card>
        </>
    )
}

export default Mapro