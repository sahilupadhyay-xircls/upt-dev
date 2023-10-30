


import React from 'react';

import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import SubNavbar from '../navbar/SubNavbar';
import { Section5 } from './componets/section5/Section5';
import './style.scss';
// bootstrap
import Button from 'react-bootstrap/Button';
import { Card, Col, Row } from 'reactstrap';

// icons
import { BsEye, BsFileEarmarkBarGraph } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { MdDeveloperMode } from "react-icons/md";

// imgs
import s1 from "@src/assets/images/s1.png";
import { Link } from 'react-router-dom';



export default function Developer() {
  const ourTech = [
    {
      title: "Easy to integrate",
      desc: "Deeply integrate our APIs into your applications with ease",
      icon: <FiSettings style={{ marginTop: "1.2vh" }} size={51} />
    },
    {
      title: "Data privacy first",
      desc: "Our in-built security protocols future-proof you against data theft & ad fraud.",
      icon: <BsFileEarmarkBarGraph style={{ marginTop: "1.2vh" }} size={51} />
    },
    {
      title: "Easy to integrate",
      desc: "Deeply integrate our APIs into your applications with ease.",
      icon: <BsEye style={{ marginTop: "1.2vh" }} size={51} />
    },
    {
      title: "Data privacy first",
      desc: "Our in-built security protocols future-proof you against data theft & ad fraud.",
      icon: <MdDeveloperMode style={{ marginTop: "1.2vh" }} size={51} />
    }
  ]
  return (
    <div className='developerPage  ' style={{ background: "white" }} >
      <Navbar position='notFixed' />
      <SubNavbar title="Developer" />

      {/* section 1 card */}
      <div className=' pt-5 mt100'>
        <Row className='justify-content-center pt-5'>
          <Col sm="11" xs="11" lg="10" md="11">
            <Card className=' p-5 border shadow-none ' style={{ background: "#e5e7eb" }}>
              <div>
                <h1 className='mainHeader display-3 main-heading fw-bolder m-0 mt-2'>
                  Become a Technology Partner
                </h1>
                <h3 className='text-black m-0 fs-3'>
                  Help your clients automate and upgrade their marketing.<br /> Solve critical pain points and offer innovative solutions to expand your business
                </h3>
                <br />
                <div className='d-flex gap-2 flex-wrap '>
                  <Button variant="success my-1 btn-lg fs-3 px-3 py-1 ">Start Building</Button>
                  <button className="btn main-btn-dark btn-lg fs-3 px-3 py-1  my-1">Explore APIs</button>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>

      {/* section 2 */}
      <Row className=" justify-content-center mt180" >
        <Col lg="10" xs="10">
          <Row className='justify-content-center'>
            <Col className='d-flex justify-content-center' md="8" lg="6">
              <div className='' >
                <div className='section2-heading' >
                  <h1 className=' display-2 fw-bolder main-heading'>Why Build <span className=' display-2 ' style={{ fontWeight: "500" }}>on</span> XIRCLS ?</h1>
                </div>
                <div className='section2-info'>
                  <p className=' fs-3 mt-1' style={{ textAlign: "left", fontSize: "1.1rem", lineHeight: "1.2" }}>We empower you to leverage our 100+ brand network
                    and powerful functionalities to build industry-shaping apps
                    that will delight your clients and impress your peers.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* section3 */}
      <Row className=" justify-content-center mt180" >
        <Col lg="10" xs="10">
          <Row>
            <Col className='mt-1'>
              <div className='' >
                <div className='section3-heading'>
                  <h1 className='mainHeader display-3 main-heading fw-bolder m-0 mt-2 text-black text-center ' style={{ fontWeight: "600" }}>Our tech, your growth</h1>
                </div>
                <div className='section3-info m-1'>
                  <h3 className=' text-black m-0 fs-3 text-center '>Monetize the most cutting-edge APIs in marketing</h3>
                </div>
              </div>
            </Col>
          </Row>
          <Row className='text-center mt-md-5' >
            {
              ourTech.map((data) => (
                <Col md={6} sm={12} className='mt-1'>
                  <div className='d-flex justify-content-start'>
                    <div className='img'>
                      {data.icon}
                    </div>
                    <div className='Easy-to-integrate ms-2'>
                      <div className='heading'>
                        <h3 className='fs-2 fw-bolder text-black' style={{ textAlign: "left" }}>{data.title}</h3>
                      </div>
                      <div className='info'>
                        <p className=' fs-4' style={{ textAlign: "left" }}>{data.desc}</p>
                      </div>
                    </div>
                  </div>
                </Col>
              ))
            }
          </Row>
        </Col>
      </Row>


      {/* section 4 */}
      <Row className="justify-content-center mt180" >
        <Col className='' lg="10" xs="12">
          <Row className="section4-container py-5 rounded-4" style={{ background: "#dedede" }}>
            <Col lg={7} sm={12} className='d-flex align-items-center p-5 '>
              <div>
                <div className='section4-heading'>
                  <h1 className='display-4 display-lg-3 main-heading fw-bolder' >Stop building from scratch !</h1>
                </div>
                <div className='section4-info pt-3 pt-md-1'>
                  <p className='fs-4 mt-2 text-black ' style={{ lineHeight: "1.4" }}>
                    Our developer-friendly APIs are easy to understand, implement & iterate.
                    Build on top of core features such as forms, shopping cart, user profile, wishlist & more.
                  </p>
                </div>
                <div className='section4-button mt-4'>
                  <Button className='btn  btn-lg  fs-3 main-btn-dark px-3 py-1 ' variant="outline-dark">Get Started</Button>
                </div>
              </div>
            </Col>

            <Col lg={5} sm={12} className='text-center p-5 '>
              <div className='section4-img'>
                <img src={s1} className="img-fluid" width={450} alt="s1" />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>


      <Section5 />


      {/* section6 */}
      <Row className=" justify-content-center mt180" style={{ background: "#000" }}>
        <Col lg="10" xs="10">
          <Row>
            <Col md={8} lg="8" sm={12} className="mt-5 mb-5" style={{ paddingTop: "5vh", paddingBottom: "7vh" }}>
              <div className=" mt-4 mb-4">
                <div className='section6-heading'>
                  <h1 className='display-3 fw-bolder m-0  text-white'>Submit your app</h1>
                </div>
                <div className='section6-info mt-2'>
                  <h2 className=' fw-bolder mt-2 text-white '>Expand your app’s reach. Add it to our marketplace
                    for the XIRCLS brand community to discover.</h2>
                </div>
                <div className='section6-buttons mt-5 flex flex-wrap '>
                  <Link to='' className='btn btn-lg  main-btn-blue' >Submit an App</Link>
                  <Link to='' className='btn btn-lg  main-btn-light ms-1' >Explore Marketplace</Link>
                </div>
                <div className='section6-link mt-4'>
                  <p className='reDirect text-white fw-bold fs-3'><span style={{ textDecoration: "underline" }}>Sign up </span> for early access to new Developer products.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* section 7 */}
      <div className='mt180'>
        <div className='text-center mt-5 section7-heading'>
          <h1 className='display-3 fw-bolder m-0  main-heading'>Ready to build the future?</h1>
        </div>
        <div className='text-center mt-5 mb-5 section7-button mt-5'>
          <Button className='btn-lg fs-3 px-3 py-1' variant="primary">Get started</Button>
        </div>
      </div>
      <Footer />

    </div>
  );
}


