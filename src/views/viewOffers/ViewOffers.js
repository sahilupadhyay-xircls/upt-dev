import { Link } from 'react-router-dom'
import { Col, Row, Card, CardBody, Button } from 'reactstrap'

function ViewOffers() {
    return (
        <>

            <Card>
                <CardBody className='d-flex justify-content-between align-items-center'>
                    <h4 className='p-0 m-0'>Sponsored Rewards</h4>
                </CardBody>
            </Card>

            <Card>
                <Row>
                    <Col sm={12} md={12} xl={12}>
                        <img src={require('../Assets/rewards.jpg')} className="img-fluid w-100"></img>
                    </Col>
                </Row>
            </Card>

            <Card>

                <Row className='p-1 py-3'>
                    {
                        [1, 2, 3, 4].map((index) => {
                            return (
                                <Col xl='4' md='4' xs='12' key={index} >
                                    <Card className='border rounded-2 shadow' style={{ boxShadow: '10px 10px 10px 10px rgba(0,0,0,1) !important' }}>
                                        <CardBody className='p-1'>

                                            <div className='reward-section-cards '>
                                                <div className=' text-center'>
                                                    <img src='https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=600' className='img-fluid rounded'></img>
                                                </div>
                                                <div className='mt-1'>
                                                    <h4 className='text-black-60'>Gift-Card (500)</h4>

                                                    <hr />
                                                    <div className='d-flex justify-content-between'>

                                                    <Link Link to='/' className='btn btn-outline-secondary btn-sm rounded-pill text-black-60 me-1'>Quick View</Link>
                                                    <Link to='/merchant/sponsorRewards-rewards' className='btn btn-outline-secondary btn-sm rounded-pill text-black-60 '>View Reward Details</Link>
                                                </div>
                                                
                                                </div>
                                            </div>

                                        </CardBody>
                                    </Card>
                                </Col >
                            )
                        })
                    }

                </Row >
            </Card>


        </>
    )
}

export default ViewOffers