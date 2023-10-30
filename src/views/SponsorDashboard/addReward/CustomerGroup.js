import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Container, Card, CardBody, Form, FormGroup, Button, Label, Input } from 'reactstrap'
import RewardNav from './RewardNav'
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi'

export default function CustomerGroup() {


    // dropdown
    useEffect(() => {
        const checkList = document.getElementById('list1')
        checkList.getElementsByClassName('anchor')[0].onclick = function () {
            if (checkList.classList.contains('visible')) {
                checkList.classList.remove('visible')
            } else {
    
                checkList.classList.add('visible')
            }
        }
    
    }, [])
    

    return (
        <>
            <Row className="match-height ">
                <Col md="3" >
                    <RewardNav />
                </Col>
                <Col md='9'>
                    <Card className='p-3'>
                        <Container className='d-flex align-items-center justify-content-between p-0 '>
                            <div>
                                <h3 className='fs-3 fw-bolder text-black'>Select Customer Group</h3>
                                <h6 className="font-small-4 text-secondary m-0 p-0">to assign this reward to</h6>
                            </div>

                            <div>
                                <h6 className="font-small-6 text-dark "></h6>

                            </div>
                        </Container>

                        <Form className='mt-2'>
                            <Row>
                                <Col md={6}>
                                        <Label for="exampleEmail" className='fs-6 fw-bold'>
                                            Total Sponsorship Amount ()
                                        </Label>
                                    <FormGroup >
                                        <div id="list1" className="dropdown-check-list" tabindex="100">
                                            <span className="anchor">Select Fruits</span>
                                            <ul className="items">
                                                <li><input type="checkbox" />Apple </li>
                                                <li><input type="checkbox" />Orange</li>
                                                <li><input type="checkbox" />Grapes </li>
                                            </ul>
                                        </div>
                                    </FormGroup>
                                </Col>


                                {/* <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleEmail" className='fs-6 fw-bold'>
                                            Total no. of Customers Rewarded
                                        </Label>
                                        <Input
                                            id="exampleEmail"
                                            name="email"
                                            placeholder="Reward Start Date"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col> */}


                            </Row>

                        </Form>


                        <div className='d-flex justify-content-between'>
                            <Link to='' className='btn btn-primary rounded-1 '> <BiLeftArrowAlt /> Previous</Link>
                            <Link to='' className='btn btn-primary rounded-1  '>Next <BiRightArrowAlt /></Link>

                        </div>
                    </Card>
                </Col>
            </Row>
        </>
    )

    
}
