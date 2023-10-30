import { Col, Row, Card, CardBody } from 'reactstrap'
import Button from 'react-bootstrap/Button'
import '@src/views/dashboard/Campaign.css'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import TableRewardOffer from '../tables/data-tables/basic/TableRewardOffer'
import TableResponsive from '../tables/reactstrap/TableResponsive'
import box from '@src/assets/images/icons/box.svg'
function Campaign() {
    return (
        <>
        <Card>
        <Row className='section-1-buttons d-flex justify-content-between' >
                <Col sm={6} md={6} lg={6} xl={6}>
                    <CardBody>
                        <div className='section-1 d-flex justify-content-start'>
                            <div className='section-1-heading'>
                                <h4>Reward Offers Dashboard</h4>
                            </div>
                        </div>
                    </CardBody>
                </Col>
                
                <Col sm={12} md={12} xl={4}>
                <CardBody className='section-1-buttons d-flex justify-content-center'>
                    <div className='section-1-buttons d-flex justify-content-center'>
                                <div className='section-1-button-1'>
                                    <Button className='btn-1 me-1' variant="primary">Check In</Button>
                                </div>
                                
                                <div className='section-1-button-2'>
                                    <Button className='btn-1 me-1' variant="primary">Check In</Button>
                                </div>

                                <div className='section-1-button-3'>
                                    <Button className='btn-1 me-1' variant="primary">Check In</Button>
                                </div>    
                                
                            </div>
                </CardBody>
                </Col>
        </Row>        
        </Card>
        
        <Card>
            
            <Row>
                <Col sm={12} md={6} xl={4}>
                    <CardBody>
                       <div className='section-2-card'>
                        <div className='section-2-card-top'>
                            <div className='section-2-heading'>
                                <h4>Today's Report</h4>
                            </div>
                        </div>
                        <div className='section-2-card-bottom' style={{marginTop:"5vh"}}>
                            <div className='section-2-card-1 d-flex'>
                                <div className='section-2-card-img'>
                                    <img className='user' src={require("./Assets/user.png")} style={{width:"5vh"}}></img>
                                    {/* <img className='user' src={rupee}></img> */}
                                </div>
                                <div className='section-2-card-info' style={{marginLeft:"3vh"}}>
                                    <div className='section-2-card-heading fw-bolder'>
                                        <h4 style={{fontWeight:"600"}}>0</h4>
                                    </div>
                                    <div className='section-2-card-para '>
                                        <p className='font-small-3 '>Customers Hosted</p>
                                    </div>
                                </div>
                            </div>

                            </div>
                       </div>
                    </CardBody>
                </Col>
                
                <Col sm={12} md={6} xl={4}>
                    <CardBody>
                        <div className='section-2-card'>
                        
                        <div className='section-2-card-bottom-1' style={{marginTop:"8vh"}}>
                            <div className='section-2-card-1 d-flex'>
                                <div className='section-2-card-img'>
                                    <img className='rupee' src={require("./Assets/rupee.png")} style={{width:"4vh", height:"5vh"}}></img>
                                </div>
                                <div className='section-2-card-info' style={{marginLeft:"3vh"}}>
                                    <div className='section-2-card-heading'>
                                        <h5 className='fw-bolder' style={{fontWeight:"600"}}>₹</h5>
                                    </div>
                                    <div className='section-2-card-para'>
                                        <p className='font-small-3 '>Earnings</p>
                                                
                                    </div>
                                </div>
                            </div>

                            </div>
                       </div>
                    </CardBody>
                </Col>
                
                <Col sm={12} md={6} xl={4}>
                    <CardBody>
                       <div className='section-2-card'>
                        
                        <div className='section-2-card-bottom-1' style={{marginTop:"8vh"}}>
                            <div className='section-2-card-1 d-flex'>
                                <div className='section-2-card-img'>
                                    <img className='rupee' src={require("./Assets/rupee.png")} style={{width:"4vh", height:"5vh"}}></img>
                                </div>
                                <div className='section-2-card-info' style={{marginLeft:"3vh"}}>
                                    <div className='section-2-card-heading'>
                                        <h5 className='fw-bolder' style={{fontWeight:"600"}}>₹</h5>
                                    </div>
                                    <div className='section-2-card-para'>
                                        <p className='font-small-3 '> Withdrawable Amount</p>
                                               
                                    </div>
                                </div>
                            </div>

                            </div>
                       </div>
                    </CardBody>
                </Col>
            </Row>

        </Card> 

        
        <Row>
            <Col sm={12} md={6} xl={4}>
                <Card>
                    <CardBody>
                        <div className='card-contend text-center'>
                            <div className='card-img'>
                                <img className='giftbox' src={require("./Assets/giftbox.png")} style={{width:"5vh"}}></img>
                            </div>
                            <div className='card-heading mt-1'>
                                <h5>0</h5>
                            </div>
                            <div className='card-desc'>
                                <p className='font-small-3 '> Total Customers Hosted</p>
                                    
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            
            <Col sm={12} md={6} xl={4}>
                <Card>
                    <CardBody>
                        <div className='card-contend text-center'>
                            <div className='card-img'>
                                <img className='sponser' src={require("./Assets/sponser.png")} style={{width:"5vh"}}></img>
                            </div>
                            <div className='card-heading mt-1'>
                                <h5>0</h5>
                            </div>
                            <div className='card-desc'>
                                <p className='font-small-3 '> Total Sponser Partner</p>
                                    
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            
            <Col sm={12} md={6} xl={4}>
                <Card>
                    <CardBody>
                        <div className='card-contend text-center'>
                            <div className='card-img'>
                                <img className='rupee' src={require("./Assets/rupee.png")} style={{width:"4vh", height:"5vh"}}></img>
                            </div>
                            <div className='card-heading mt-1'>
                                <h4>₹ 0</h4>
                            </div>
                            <div className='card-desc'>
                                <p className='font-small-3 '> Total Earnings</p>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        
        
      <Row>
        <Col sm={12} md={6} xl={4}>
          <Card>
            <CardBody>
                <div className='section-4-card-1' style={{paddingBottom:"11vh"}} >
                    <div className='section-4-card-1-heading'>
                        <h4>Top Sponsers</h4>
                    </div>
                    <div className='section-4-cad-1-info'>
                        <p className='font-small-3 '>No data to display</p>
                    </div>
                </div>
            </CardBody>
          </Card>
        </Col>
        
        <Col sm={12} md={6} xl={4}>
          <Card>
            <CardBody>
                <div className='section-4-card-1' style={{paddingBottom:"11vh"}}>
                    <div className='section-4-card-1-heading'>
                        <h4>Top Performing Rewards</h4>
                    </div>
                    <div className='section-4-cad-1-info'>
                        <p className='font-small-3 '>No data to display</p>
                    </div>
                </div>
            </CardBody>
          </Card>
        </Col>
        
        <Col sm={12} md={6} xl={4}>
          <Card>
            <CardBody>
                <div className='section-4-card-2 d-flex justify-content-between'>
                    <div className='section-4-card-1-heading'>
                        <p className='font-small-4 '>Average Discount</p>
                    </div>
                    <div className='section-4-cad-1-img'>
                        <img className='voucher' src={box} style={{width:"5vh"}}></img>
                    </div>
                </div>
            </CardBody>
          </Card>
          
          <Card>
            <CardBody>
                <div className='section-4-card-2 d-flex justify-content-between'>
                    <div className='section-4-card-1-heading'>
                        <p className='font-small-4 '>Average Earnings / sponser</p>
                    </div>
                    <div className='section-4-card-1-img'>
                        <img className='income' src={require("./Assets/income.png")} style={{width:"5vh"}}></img>
                    </div>
                </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
        
      <Row>
            <Col>
                <Card>
                    <CardBody>
                        <div className='table'>
                        <TableRewardOffer>
                            
                        </TableRewardOffer>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            
        </Row>
        
        </>
    )
}

export default Campaign