import React, { useState, useEffect } from 'react'
import { Col, Row, } from 'react-bootstrap'
import './section9.scss'
import { TiTick } from 'react-icons/ti'


export default function Section9() {
    const [ShowList, setShowList] = useState(false);

    const data = [
        {

            title: "Visitor Verification & Zero-party Data Collection",
            desc: "Effortlessly convert anonymous visitors into qualified leads. Collect crucial demographic & behavioural data with 100% user consent.",
            points: ["Super Leadz", "DemoCrazy"]
        },
        {

            title: "Incentivize",
            desc: "Don't miss a single opportunity to convert a sale.",
            points: ["Cashback (own)", "Infiniti", "Semper Fi"]
        },
        {

            title: "Buyer Journey Optimization",
            desc: "Optimization tools for frictionless, super-fast checkouts",
            points: ["Flash! Accounts", "Zoom Checkouts"]
        }
    ]
    const data2 = [

        {

            title: "Communication Tools",
            desc: "Automation to make your customers feel cared for.",
            points: ["Email", "SMS", "WhatsApp"]
        },
        {

            title: "Analytics",
            desc: "Independent analytics tools so you don't have to share customer data with third-party ",
            points: ["ad platforms", "Analytics Tool"]
        },
        {

            title: "Revenue Recovery",
            desc: "Predict, protect or recover lost or at-risk revenue across the buying cycle ",
            points: ["ad platforms", "Analytics Tool"]
        }
    ]

    const handleDropDown = () => {
        setShowList(!ShowList)

    }
    useEffect(() => {
        const dropdown = document.querySelector('.SlideDropDown')
        dropdown.style.maxHeight = "0px"
        if (ShowList) {
            dropdown.style.maxHeight = dropdown.scrollHeight + "px"
        } else {
            dropdown.style.maxHeight = "0"
        }
    }, [ShowList])
    return (






        <Row className='section9 justify-content-center mt180 '>
            <Col xs="10" lg="9"    >
                <Row className='pt-2'>
                    <Col lg="6" className=''>
                        <h1 className='display-3 main-heading fw-bolder '>We’re Here For You.</h1>
                    </Col>
                    <Col lg="6" className='mt-2'>
                        <h2 className='text-black'>We give you the tools to attract, reward and retain customers
                            exactly the way you want and automate the rest.</h2>
                    </Col>
                    
                </Row>

                {
                    data.map((data, index) => {
                        return (

                            <Row className='border-top mt-2 pt-2' key={index}>
                                <Col lg="6" className=''>
                                    <h1 className=' text-black d-flex  justify-content-start gap-1  align-content-center'>
                                        <p className='numBor fs-3 text-black  rounded-circle d-flex justify-content-center align-content-center ' >{index + 1}</p>
                                        {data.title}</h1>
                                </Col>
                                <Col lg="6" className=' d-flex flex-column gap-2  ps-3 ps-md-1'>
                                    <h2 className='text-black ' >{data.desc}</h2>

                                    {/* <div className='d-flex flex-column ms-2 '>
                                        {
                                            data.points.map((point) => {
                                                return (
                                                    <h4 className='text-black fs-3 d-flex justify-content-start align-content-center dot p-0 mt-0' > <TiTick className='me-1' />{point}</h4>
                                                )
                                            })
                                        }
                                    </div> */}
                                </Col>
                            </Row>
                        )
                    })
                }

                <div className={`SlideDropDown ${ShowList ? "active" : " "}`}>

                    {
                        data2.map((data, index) => {
                            return (

                                <Row className='border-top mt-1 pt-2'  key={index}>
                                    <Col lg="6" className=''>
                                        <h1 className=' text-black d-flex  justify-content-start gap-1  align-content-center'>
                                            <h3 className='numBor text-black  rounded-circle d-flex justify-content-center align-content-center ' >{index + 4}</h3>
                                            {data.title}</h1>
                                    </Col>
                                    <Col lg="6" className=' d-flex flex-column gap-2  ps-3 ps-md-1'>
                                        <h2 className='text-black ' >{data.desc}</h2>

                                        {/* <div className='d-flex flex-column ms-2 '>
                                            {
                                                data.points.map((point) => {
                                                    return (
                                                        <h4 className='text-black fs-3 d-flex justify-content-start align-content-center dot p-0 mt-0' > <TiTick className='me-1' />{point}</h4>
                                                    )
                                                })
                                            }
                                        </div> */}
                                    </Col>
                                </Row>
                            )
                        })
                    }
                </div>

                <h2 onClick={handleDropDown} className='text-primary fw-bold cursor-pointer mt-2'>{ShowList ? "View less -" : "View more +"}</h2>



            </Col>

        </Row>

    )
}



