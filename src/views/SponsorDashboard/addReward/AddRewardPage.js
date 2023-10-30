import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Container, Card, CardBody, Form, FormGroup, Button, Label, Input } from 'reactstrap'
import RewardNav from './RewardNav'
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi'

export default function AddRewardPage() {


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
                                <h3 className='fs-3 fw-bolder text-black'>Set a budget</h3>
                                <h6 className="font-small-4 text-secondary m-0 p-0">& customise how you spend it</h6>
                            </div>

                            <div>
                                <h6 className="font-small-6 text-dark ">Available Balance : 2000102.00</h6>

                            </div>
                        </Container>

                        <Form className='mt-2'>
                            <Row>
                                <Col md={6}>
                                    <FormGroup >
                                        <Label for="exampleEmail" className='fs-6 fw-bold'>
                                            Total Sponsorship Amount ()
                                        </Label>
                                        <Input
                                            id="exampleEmail"
                                            name="email"
                                            placeholder="Total Sponsorship Amount"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
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
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleEmail" className='fs-6 fw-bold'>
                                            Discount Amount
                                        </Label>
                                        <Input
                                            type="text"
                                            disabled
                                            value={"445.0"}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleEmail" className='fs-6 fw-bold'>
                                            Fixed Reward ()
                                        </Label>
                                        <Input
                                            type="number"
                                            disabled
                                            value={"500"}
                                        />
                                    </FormGroup>
                                </Col>


                            </Row>

                        </Form>

                        <Row >
                            <h4 className='fs-4 fw-bold text-black'>How Long</h4>
                            <h5 className='m-0 mb-3'>will this Sponsorship last?</h5>

                            <Col md={6}>
                                <FormGroup >
                                    <Label for="exampleEmail" className='fs-6 fw-bold'>
                                        Sponsorship Start Date
                                    </Label>
                                    <Input

                                        placeholder="Sponsorship Start Date"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail" className='fs-6 fw-bold'>
                                        Sponsorship End Date
                                    </Label>
                                    <Input
                                        placeholder="Sponsorship End Date"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>

                        </Row>
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
