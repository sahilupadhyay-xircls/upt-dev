import logo from "@src/assets/images/logo.png"
import React from 'react'
import { GoLinkExternal } from 'react-icons/go'
import { Col, Row } from 'reactstrap'
import mail from './img/gmail.png'
import india from './img/india.png'
import meg from './img/magento.png'
import shopy from './img/shopify.png'
import usa from './img/usa.png'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <Row className='justify-content-center py-5 homeFooter mt-2 '>
            <Col md="10" xs="10" lg="11" xl="10">
                <Row className=' '  >
                    <Col lg="3" md="12" className="mt-" >
                        <img className='mb-1' src={logo} alt="logo" width={200} style={{ marginTop: "-40px" }} />
                        <h5>The World's First Decentralized Collaborative Marketing Network.</h5>
                        <div>
                            <h5 className='mb-0 mt-2 text-black fw-bolder'>HQ</h5>
                            <p >
                                G-08, The Summit Business Bay by Omkar,<br />
                                Andheri (East),<br />
                                Mumbai - 400093<br />
                            </p>
                        </div>

                        <div className='d-flex justify-content-start align-items-center mt-2 '>
                            <a href="/" className=''>
                                <img src={shopy} alt="" width={30} />
                            </a>
                            <a href="/" className=' ms-1'>
                                <img src={meg} alt="" width={30} />
                            </a>
                            <a href="/" className=' ms-1'>
                                <img src="//upload.wikimedia.org/wikipedia/commons/thumb/2/2a/WooCommerce_logo.svg/250px-WooCommerce_logo.svg.png" alt="" width={35} />
                            </a>

                        </div>

                    </Col>

                    <Col lg="2" md="3" xs="6" className="p-0 mt-3 mt-lg-0" style={{maxWidth:"100px"}}>
                        <h5 className='text-black fw-bolder mb-2'>Products</h5>
                        <ul className=' list-unstyled'>
                            <li className='mb-1'>SuperLeadz</li>
                            <li className='mb-1'>Infiniti</li>
                            <li className='mb-1'>Semper Fi</li>
                            <li className='mb-1'>Sniper</li>
                        </ul>
                    </Col>
                    <Col lg="2" md="3" xs="6" className="p-0 mt-3 mt-lg-0" >
                        <h5 className='text-black fw-bolder mb-2'>About Us</h5>
                        <ul className=' list-unstyled'>
                            <li className='mb-1'>Why XIRCLS</li>
                            <li className='mb-1'>Why Collaborative Marketing ?</li>
                            <li className='mb-1'>Vision & Mission </li>
                        </ul>
                    </Col>
                    <Col lg="2" md="3" xs="6" className="p-0 mt-3 mt-lg-0" style={{maxWidth:"100px"}}>
                        <h5 className='text-black fw-bolder mb-2'>Company</h5>
                        <ul className=' list-unstyled'>
                            <li className='mb-1'>Our Team</li>
                            <li className='mb-1'>Partners</li>
                            <li className='mb-1'>Blog</li>
                        </ul>

                    </Col>
                    <Col lg="2" md="3" xs="6" className="p-0 mt-3 mt-lg-0" >
                        <h5 className='text-black fw-bolder mb-2'>Contact Us</h5>
                        <ul className=' list-unstyled'>
                            <li className='mb-1 '><Link to='/contact-us' > Leave us a message <GoLinkExternal style={{ marginLeft: "5px" }} /> </Link></li>
                            <li className='mb-1'><img className='me-1' src={india} alt="" width={20} />+91 9969 333 666</li>
                            <li className='mb-1'> <img className='me-1' src={usa} alt="" width={20} />+1 (936) 333 6363</li>
                            <li className='mb-1'><img className='me-1' src={mail} alt="" width={20} />info@xircls.com</li>

                        </ul>

                    </Col>

                </Row>
                <div className='mt-3  text-center'>
                    <ul className=' d-inline-flex flex-wrap gap-3 list-unstyled'>
                        <li className='text-black '>Terms & Conditions</li>
                        <li className='text-black '>Privacy policy</li>
                    </ul>
                    <h6 className='text-secondary'>Copyright © 2022 All Rights Reserved. AltissAdvance Tech Private Limited</h6>
                </div>
            </Col>


        </Row>
    )
}

export default Footer