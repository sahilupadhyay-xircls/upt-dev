import { Link } from 'react-router-dom'
import { Col, Row, Card, CardBody, Button } from 'reactstrap'

function SponsorRewards() {
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

            <Row className='bg-white px-2 py-3'>
        {
            [1, 2, 3, 4].map((index) => {
                return (
                    <Col xl='4' md='4' xs='12' key={index} >
                    <Card className='border rounded-2 shadow'>
                        <CardBody>

                            <div className='reward-section-cards '>
                                <div className=' text-center'>
                                    <img src='https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=600' className='img-fluid'></img>
                                </div>
                                <div className='mt-2 px-1'>
                                    <h4 className='text-black-60'>Maapro</h4>
                                    <div className=''>
                                        <a href='https://maapro.myshopify.com'>https://maapro.myshopify.com</a>
                                    </div>
                                    <hr />
                                    <Link to={`/merchant/sponsorRewards-offers`} className='btn btn-outline-secondary btn-sm rounded-pill text-black-60'>View Offers</Link>
                                </div>
                            </div>

                        </CardBody>
                    </Card>
                </Col >
                )
            })
        }
              
            </Row >

        </>
    )
}

export default SponsorRewards