import React from 'react';
import { Col, Row } from 'reactstrap';
import "./Section5.css";
import loginform from "@src/assets/images/loginform.png";

export const Section5 = () => {
    return (
        <>
            <Row className="justify-content-center mt180" >
                <Col xl="10" lg="12" md="12" xs="12" className='d-flex'>
                    <Col xl={6} lg={6} md={6} sm={12} className='d-flex justify-content-center'>
                        <div className="wrapper">
                            <ol className="c-stepper">
                                <li className="c-stepper__item">
                                    <div className="c-stepper__content ms-2">
                                        <strong className='mb-1 fs-5'>STEP 1</strong>
                                        <h2 className="c-stepper__title  fw-bold mt-1 text-black">Sign up</h2>
                                        <h4 className="c-stepper__desc text-secondary " style={{ lineHeight: "" }}>
                                            Register and agree to our legal terms & conditions
                                        </h4>
                                    </div>
                                </li>
                                <li className="c-stepper__item">
                                    <div className="c-stepper__content ms-2">
                                        <strong className='mb-1 fs-5'>STEP 2</strong>
                                        <h2 className="c-stepper__title  fw-bold mt-1 text-black">Describe your use case and select APIs</h2>
                                        <h4 className="c-stepper__desc text-secondary">Once submitted, we will review your request and reach out within 48 hours</h4>
                                    </div>
                                </li>
                                <li className="c-stepper__item">
                                    <div className="c-stepper__content ms-2">
                                        <strong className='mb-1 fs-5'>STEP 3</strong>
                                        <h2 className="c-stepper__title  fw-bold mt-1 text-black">Start developing!</h2>
                                        <h4 className="c-stepper__desc text-secondary">Once your request is approved, access our API documentation to begin your work</h4>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </Col>

                    {/* Hide the login form image on medium and smaller devices */}
                    <Col xl={6} lg={6} className='text-end '>
                        <div className='section4-img'>
                            <img src={loginform} className="img-fluid" alt="Login Form" />
                        </div>
                    </Col>
                </Col>
            </Row>
        </>
    );
};