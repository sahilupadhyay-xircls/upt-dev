import React from 'react'
import './getStarted.scss'
import { Card, CardBody, Col, Row, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function SetCondition() {
    return (
        <Card>
            <CardBody>

                <div>
                    <h1 className='text-center fs-1 fw-bold'>Let's set up your first free sample.</h1>
                    <p className='text-center '>First, select the conditions that will trigger the free sample.</p>
                </div>

                <div className='ms-3 mt-2 '>
                    <Row className='mt-3'>

                        <h4 className='m-0 fs-4 fw-bold mb-1 '> I want to active the free sample on.</h4>
                        <Row className='text-secondary ms-1'>



                            <Col md="4" >
                                <FormGroup >
                                    <Label for="products" >Purchase of products </Label>
                                    <Input id="exampleSelect" name="select" className='m-0 ' type="select" >
                                        <option>
                                            1
                                        </option>
                                        <option>
                                            2
                                        </option>
                                        <option>
                                            3
                                        </option>
                                        <option>
                                            4
                                        </option>
                                        <option>
                                            5
                                        </option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md="4" >
                                <FormGroup >
                                    <Label for="products" >
                                        Order value above Rs.
                                    </Label>
                                    <Input
                                        id="products"
                                        name="products"
                                        placeholder="20xx"
                                        type="Number"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md="2" >
                            </Col>
                        </Row>

                    </Row>
                </div>
            </CardBody>
            <div className='p-2 d-flex justify-content-between'>
                <Link to='/merchant/sample/Get-Started' className='btn btn-primary'>Previous</Link>
                <Link to='/merchant/sample/Get-Started/create-sample' className='btn btn-primary'>Next</Link>
            </div>
        </Card>
    )
}
