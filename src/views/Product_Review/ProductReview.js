import { Col, Row, Card, CardBody, Progress } from 'reactstrap'
import { FaStar } from 'react-icons/fa'
import "./ProductReview.css"
import DailyBarGraph from './DailyBarGraph'
import ProdReviewTable from './ProdReviewTable'
import { Download, Printer, File, FileText, Copy } from 'react-feather'


const ProductReview = () => {


    return (
        <>
            <Card>
                <CardBody>
                    <h4>Product Reviews</h4>
                </CardBody>
            </Card>
            <Row className='match-height'>
                <Col xl='6'>
                    <Card className='rounded'>
                        <CardBody>
                            <Row>
                                <Col className='card1' md="6" sm="12">
                                    <h2 className="d-flex align-items-center fw-bold gap-1" style={{ color: "#7367f0", fontSize: "32px" }}>4.89
                                        <FaStar className='my-1' size={20} style={{ color: "#7367f0" }} />
                                    </h2>
                                    <p className='fw-bold'>Total 187 reviews</p>
                                    <p className='gap-1'>All reviews are from genuine customers</p>
                                    <span className=' badge week-btn rounded'>+5 This week</span>
                                </Col>
                                <Col md="6" sm="12" className=''>
                                    <div className='d-flex flex-column justify-content-between mx-1 my-1'>
                                        <div className="card2 d-flex align-items-center">
                                            <span className='fw-bold' style={{ width: '5rem' }} >5 star</span>
                                            <Progress value={61.50} className='w-100 h-10' style={{ marginRight: "1rem" }} />
                                            <span className='fw-bold'>124</span>
                                        </div>
                                        <div className="card2 d-flex align-items-center">
                                            <span className='fw-bold' style={{ width: '5rem' }} >4 star</span>
                                            <Progress value={30} className='w-100 h-10' style={{ marginRight: "1rem" }} />
                                            <span className='fw-bold'>40</span>
                                        </div>
                                        <div className="card2 d-flex align-items-center">
                                            <span className='fw-bold' style={{ width: '5rem' }} >3 star</span>
                                            <Progress value={15} className='w-100 h-10' style={{ marginRight: "1rem" }} />
                                            <span className='fw-bold'>12</span>
                                        </div>
                                        <div className="card2 d-flex align-items-center">
                                            <span className='fw-bold' style={{ width: '5rem' }} >2 star</span>
                                            <Progress value={7} className='w-100 h-10' style={{ marginRight: "1rem" }} />
                                            <span className='fw-bold'>7</span>
                                        </div>
                                        <div className="card2 d-flex align-items-center">
                                            <span className='fw-bold' style={{ width: '5rem' }} >1 star</span>
                                            <Progress value={2} className='w-100 h-10' style={{ marginRight: "1rem" }} />
                                            <span className='fw-bold'>2</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl='6'>
                    <Card>
                        <CardBody>
                            <Row className='d-flex justify-content-between'>
                                <Col sm="5">
                                    <div className="mb-5">
                                        <h4 className='text-nowrap mb-1'>Reviews statistics</h4>
                                        <p>
                                            <span>12 new reviews</span>
                                            <span className='badge week-btn1 badge-success mx-1'>+8.4%</span>
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="mb-1"><span className="text-success me-1">87%</span>
                                            Positive reviews</h4>
                                        <span>Weekly Report</span>
                                    </div>
                                </Col>
                                <Col sm="6" className='mt-1'>
                                    <DailyBarGraph />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{ height: "800px" }}>
                        <CardBody className='mt-2' style={{ padding: "0px" }}>
                            <Row className=' d-flex justify-content-between align-items-center gap-2'>
                                <Col md="4" sm="8">
                                    <input className="form-control mr-sm-2 w-auto mx-3" type="search" placeholder="Search Review" aria-label="Search" />
                                </Col>
                                <Col className='d-flex gap-1 dropsdown' md="4" sm="8">
                                    <select className="form-select dropsdown-width" aria-label="Default select example">
                                        <option selected value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select>
                                    <select className="form-select dropsdown-width" aria-label="Default select example">
                                        <option selected value="all">All</option>
                                        <option value="publish">Published</option>
                                        <option value="pemding">Pending</option>
                                    </select>
                                    <div className="dropdown dropsdown-width">
                                        <button className="btn btn-light text-secondary text-center dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <Download size={17} style={{ marginRight: "2px" }} />   Export
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li style={{ padding: '0 5px 0 4px' }} ><a className="dropdown-item" href="#"><Printer size={17} style={{ marginRight: "2px" }} /> Print</a></li>
                                            <li style={{ padding: '0 5px 0 4px' }} ><a className="dropdown-item" href="#"><File size={17} style={{ marginRight: "2px" }} /> Csv</a></li>
                                            <li style={{ padding: '0 5px 0 4px' }} ><a className="dropdown-item" href="#"><FileText size={17} style={{ marginRight: "2px" }} /> Pdf</a></li>
                                            <li style={{ padding: '0 5px 0 4px' }} ><a className="dropdown-item" href="#"><Copy size={17} style={{ marginRight: "2px" }} /> Copy</a></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                            <hr className='mt-2 mb-0' />
                            <ProdReviewTable/>
                        </CardBody>
                    </Card>

                </Col>

            </Row>
        </>
    )
}

export default ProductReview