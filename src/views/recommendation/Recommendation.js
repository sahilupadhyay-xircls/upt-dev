import React, {useState} from 'react'
import { Card, CardBody, Row, Col, Container, Button } from 'reactstrap'
import { FiEye } from 'react-icons/fi'
import { BsFillMouse2Fill } from 'react-icons/bs'
import { BiUserPin } from "react-icons/bi"
import { HiArrowLongRight } from 'react-icons/hi2'
import RecommendationTable from './RecommendationTable'

const Recommendation = () => {
    const [redWord, setRedWord] = useState("items")
    return (
        <>
            <Card>
                <CardBody>
                    <h4>Recommendation</h4>
                </CardBody>
            </Card>
            <Container className='w-75'>
                <Row>
                    <Col className='shadow-sm p-0'>
                        <div className='d-flex justify-content-center align-items-center ' style={{ height: "10rem", backgroundColor: "#5dc0df" }}>
                            <FiEye size={50} color='white' />
                        </div>
                        <div className='d-flex flex-column align-items-center justify-content-around' style={{ height: "10rem" }}>
                            <h1 className='fw-bolder display-6 '>6,683</h1>
                            <p className='fw-medium' style={{ fontSize: "16px" }}>Impression</p>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <div>
                            <h6 className='text-center fw-bold' style={{ fontSize: "16px", marginBottom: "-2rem" }}>2.06%</h6>
                            <HiArrowLongRight size={120} />
                        </div>
                    </Col>
                    <Col className='shadow-sm p-0'>
                        <div className='d-flex justify-content-center align-items-center ' style={{ height: "10rem", backgroundColor: "#ff8a66" }}>
                            <BsFillMouse2Fill size={50} color='white' />
                        </div>
                        <div className='d-flex flex-column align-items-center justify-content-around' style={{ height: "10rem" }}>
                            <h1 className='fw-bolder display-6 '>138</h1>
                            <p className='fw-medium' style={{ fontSize: "16px" }}>Clicks</p>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <div>
                            <h6 className='text-center fw-bold' style={{ fontSize: "16px", marginBottom: "-2rem" }}>33.33%</h6>
                            <HiArrowLongRight size={120} />
                        </div>
                    </Col>
                    <Col className='shadow-sm p-0 w-25'>
                        <div className='d-flex justify-content-center align-items-center ' style={{ height: "10rem", backgroundColor: "#fae102" }}>
                            <BiUserPin size={50} color='white' />
                        </div>
                        <div className='d-flex flex-column align-items-center justify-content-around' style={{ height: "10rem" }}>
                            <h1 className='fw-bolder display-6 '>46</h1>
                            <p className='fw-medium' style={{ fontSize: "16px" }}>Form CTA Conversion</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className='mt-1'>
                <Button style={redWord === 'items' ? {color:"red", backgroundColor:"white"} : {color:"#000000"}} color="bg-light border py-2 px-3 mx-1" onClick={() => setRedWord("items")}>Items</Button>
                <Button style={redWord === 'rules' ? {color:"red", backgroundColor:"white"} : {color:"#000000"}}  color="bg-light border py-2 px-3" onClick={() => setRedWord("rules")}>Rules</Button>
            </div>
            {
                redWord === "items" ? (
                    <RecommendationTable/>
                ) : (
                    <h1>fsdsfs</h1>
                )
            }
        </>
    )
}

export default Recommendation