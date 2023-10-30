import { Link } from 'react-router-dom'
import { Col, Row, Card, CardBody, Button } from 'reactstrap'

function ViewRewards() {

    const TableData = [{ title: "Product", sub: "Gift-Card" }, { title: "Reward Category", sub: "E-card" }, { title: "Reward Sub-Category", sub: "Movie Card" }, { title: "Price", sub: "500" }, { title: "Duration", sub: "53 days" }, { title: "Discount", sub: "10%" }, { title: "Discounted Amount for Sponser", sub: "450.0" }]

    return (
        <>
            <Card>
                <CardBody className='d-flex justify-content-between align-items-center'>
                    <h4 className='p-0 m-0'>Gift Card (500)</h4>
                    <a className='btn btn-primary fs-6'>Add Reward</a>
                </CardBody>
            </Card>


            <Card>
                <Row className='p-1' >

                    {
                        [1, 2, 3].map((index) => {
                            return (
                                <Col sm={12} md={6} xl={4} key={index}>
                                    <Card>
                                        <div className=' w-100 h-100'>
                                            <div className='square border'>
                                                <div className=''>
                                                    <img src={require("../Assets/mapro.jpeg")} className='img-fluid w-100 mt-0 rounded-0'></img>
                                                </div>
                                                <div className='mt-2'>
                                                    <div className='section-2-card-1-heading text-center'>
                                                        <p className='text-black-60 font-small-3 mb-2'>Gift Card</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            )
                        })
                    }

                </Row>

                <Row className='p-3 py-0'>

                    {
                        TableData.map((data) => {
                            return (
                                <Col sm={12} md={6} xl={3} className='border py-3'>
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <h4 className='fs-5 fw-bolder'>{data.title}</h4>
                                        <p className=' font-small-5 '>{data.sub}</p>
                                    </div>
                                </Col>
                            )
                        })
                    }
                    <Col sm={12} md={6} xl={3} className='border py-3'>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h4 className='fs-5 fw-bolder'>Add Reward</h4>
                            <Link to={`/merchant/sponsor/add-reward/budget`} className=' fs-1'>+</Link>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6} md={4} xl={4}>
                        <CardBody>
                            <div className='section-1-button d-flex justify-content-start'>
                                <Button color='primary'>Back</Button>
                            </div>


                        </CardBody>
                    </Col>
                </Row>

            </Card>
        </>
    )
}

export default ViewRewards