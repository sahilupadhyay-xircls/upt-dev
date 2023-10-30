import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Container, Card, CardBody, Form, FormGroup, Button, Label, Input } from 'reactstrap'
import RewardNav from './RewardNav'
import { BiRightArrowAlt } from 'react-icons/bi'

export default function AddRewardPage() {


    return (
        <>
            <Row className="match-height ">
                <Col md="2" >
                    <RewardNav />
                </Col>
                <Col md='10'>
                    <Card className='p-3'>
                        <Container className='d-flex align-items-center justify-content-between p-0 '>
                            <h3 className='fs-3 fw-bold text-black'>Product Based Reward Offers</h3>

                            <div>
                                <Button color='secondary' outline className='btn rounded-0 '>Product</Button>
                                <Button color='dark' className='btn btn-dark rounded-0'>Value</Button>
                            </div>
                        </Container>

                        <Form className='mt-2'>
                            <Row>
                                <Col md={4}>
                                    <FormGroup >
                                        <Label className='fs-6 fw-bold'>
                                            Reward Name
                                        </Label>
                                        <Input
                                            placeholder="E.G.A Luxurious Mediterranean Spread"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label className='fs-6 fw-bold'>
                                            Reward Start Date
                                        </Label>
                                        <Input
                                            placeholder="Reward Start Date"
                                            type="date"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label className='fs-6 fw-bold'>
                                            Reward End Date
                                        </Label>
                                        <Input
                                            placeholder="Reward End Date"
                                            type="date"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label className='fs-6 fw-bold'>
                                            Retail Price ()
                                        </Label>
                                        <Input
                                            placeholder="Enter Retail Price"
                                            type="number"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label className='fs-6 fw-bold'>
                                            Discount 
                                        </Label>
                                        <Input
                                            placeholder="0"
                                            type="number"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label className='fs-6 fw-bold'>
                                            Discount Amount For Sponsor : ()
                                        </Label>
                                        <Input
                                            placeholder=""
                                            type="text"
                                            disabled
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label className='fs-6 fw-bold'>
                                            GST %
                                        </Label>
                                        <Input
                                            placeholder="0"
                                            type="number"

                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label className='fs-6 fw-bold'>
                                            Offer Reward Quantity
                                        </Label>
                                        <Input
                                            placeholder="0"
                                            type="number"

                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <FormGroup>
                                    <Label className='fs-6 fw-bold'>
                                        Reward Terms & Conditions
                                    </Label>
                                    <Input
                                        placeholder="Reward Terms & Conditions"
                                        type="textarea"
                                        rows='5'

                                    />
                                </FormGroup>
                            </Row>
                        </Form>

                        <Row className='d-felx flex-colum gap-1'>
                            <h4 className='fs-4 fw-bold text-black'>Remember this while creating a Reward Experience</h4>
                            <h5>1. It should be quanto till the Reward End Date</h5>
                            <h5>2. It should be available during all open hours, weekends included</h5>
                            <h5>3. The reward images should accurately reflect the Steward Experience</h5>
                            <h5>4. Give an attracts to the Sponsor to attract premium customers to your outlet</h5>

                            <Col md={6}>
                                    <Form>
                                        <FormGroup >
                                            <Label className='fs-6 fw-bold'>
                                                Upload Excel File
                                            </Label>
                                            <Input
                                                bsSize=""
                                                type="file"
                                            />
                                        </FormGroup>
                                    </Form>
                            </Col>

                        </Row>

                        <Link to='' className='btn btn-primary rounded-1 ms-auto '>Next <BiRightArrowAlt /></Link>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
