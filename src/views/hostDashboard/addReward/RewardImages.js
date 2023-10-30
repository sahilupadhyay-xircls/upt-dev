import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Container, Card, CardBody, Form, FormGroup, Button, Label, Input } from 'reactstrap'
import RewardNav from './RewardNav'
import { BiRightArrowAlt } from 'react-icons/bi'
import './rewardPage.scss'

export default function RewardImages() {

    const [Img1, setImg1] = useState('')
    const [Img2, setImg2] = useState('')
    const [Img3, setImg3] = useState('')

    function getLastPart(url) {
        const parts = url.split('\\')
        return parts.at(-1)
      }

    return (
        <>
            <Row className="match-height ">
                <Col md="2">
                    <RewardNav />
                </Col>
                <Col md='10'>
                    <Card className='p-3'>
                        <Container className='d-flex align-items-center justify-content-start p-0 '>
                            <h3 className='fs-3 fw-bold text-black'>Upload Images</h3>

                           
                        </Container>
                        <div className='fileUpload'>

                            <Form className='mt-2'>

                                <Row>
                                    <Col md={4}>
                                        <FormGroup className='d-flex align-items-center gap-1'>
                                            <Label for="img1" className='btn btn-secondary fs-6 fw-bold'>
                                                Image 1
                                            </Label>
                                            <input
                                                id="img1"
                                                type="file"
                                                hidden
                                                onChange={ (e) => setImg1(getLastPart(e.target.value))}
                                            />
                                            <span id="file-chosen">{Img1 ? Img1 : "No file chosen"}</span>
                                        </FormGroup>
                                    </Col>
                                   
                                    <Col md={4}>
                                        <FormGroup className='d-flex align-items-center gap-1'>
                                            <Label for="img2" className='btn btn-secondary fs-6 fw-bold'>
                                                Image 2
                                            </Label>
                                            <input
                                                id="img2"
                                                type="file"
                                                hidden
                                                onChange={ (e) => setImg2(getLastPart(e.target.value))}

                                            />
                                            <span id="file-chosen">{Img2 ? Img2 : "No file chosen"}</span>
                                        </FormGroup>
                                    </Col>

                                    <Col md={4}>
                                        <FormGroup className='d-flex align-items-center gap-1'>
                                            <Label for="img2" className='btn btn-secondary fs-6 fw-bold'>
                                                Image 3
                                            </Label>
                                            <input
                                                id="img2"
                                                type="file"
                                                hidden
                                                onChange={ (e) => setImg3(getLastPart(e.target.value))}

                                            />
                                            <span id="file-chosen">{Img3 ? Img3 : "No file chosen"}</span>
                                        </FormGroup>
                                    </Col>

                                </Row>

                            </Form> 

                        </div>

                        <Link to='' className='btn btn-primary rounded-1 m-auto px-3 mt-3'>Finish </Link>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
