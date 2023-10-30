import React from 'react'
import { Col, Card, CardBody } from 'reactstrap'
import { BsChevronDown, BsCalendar4 } from 'react-icons/bs'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import UncontrolledDropdownButton from './Dropdown'


const HomePageRecommendation = () => {
    return (
        <>
            <Card>
                <CardBody>
                    <h4>HomePage Recommendation</h4>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Col className='d-flex justify-content-between '>
                        <div ><BsChevronDown className='mx-1' /><span className='fw-bolder h4'>Recommendations Performance</span></div>
                        <div>
                            {/* <UncontrolledDropdownButton /> */}
                            <div class="dropdown">
                                <button class="btn btn-light-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                  <BsCalendar4 style={{marginRight:"9px"}}/>  This Week
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </CardBody>
            </Card>
        </>
    )
}

export default HomePageRecommendation