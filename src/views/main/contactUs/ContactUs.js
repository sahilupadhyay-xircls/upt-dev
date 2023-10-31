import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import { Col, Row } from 'reactstrap'
import { BsRocketTakeoff } from 'react-icons/bs'
import { FaMapLocationDot } from 'react-icons/fa6'
import Footer from '../footer/Footer'

export default function ContactUs() {
  const [Data, setData] = useState({
    name: '',
    phone: '',
    phone_code: '',
    email: '',
    subject: '',
    message: ''
  })
  return (
    <div style={{ background: "#fff" }}>


      <Navbar />
      {/* Section 1 */}
      <div className='text-center pt80 '>
        <h1 className='display-1 main-heading fw-bolder m-0  mt-lg-5 pt-lg-5' >
          Contact Us
        </h1>
        <h1 className=' text-center text-black   px-3' >Understand how XIRCLS can help your business.</h1>
      </div>



      {/* from */}

      <Row className='justify-content-center mt100 text-black '>
        <Col md="4">
          <img src="https://uploads-ssl.webflow.com/60d8680c5cf05bbba0104bc3/60d9d2f998880c46dd4bd35e_cat.png" alt="" srcset="" style={{width:"100%"}} />
        </Col>
        <Col xs="10" md="5" className=' rounded-2'>
          <form className='py-5'>
            <Row className='px-5'>
              <h1 className='display-6 text-black mb-3'>Please leave your details for us to reach out!</h1>
              <Col md="6">
                <label for="exampleInputEmail1" class="fs-4">Name</label>
                <input type="text" class="form-control form-control-sm fs-4 text-dark " placeholder="Name" />
              </Col>
              <Col md="6" className='ms-0'>
                <label for="exampleInputEmail1" class="fs-4">Phone</label>
                <div className='d-flex justify-content-center  align-items-start '>
                  <select class="form-select form-select-sm fs-4 mt-0 ms-0 text-dark" aria-label="Default select example" style={{ width: "120px" }}>
                    <option selected>+ 91</option>
                    <option value="1">+ 1</option>
                    <option value="2">+ 44</option>
                    <option value="3">+ 92</option>
                  </select>
                  <input type="number" class="form-control form-control-sm fs-4 text-dark " placeholder="Phone" />
                </div>
              </Col>
              <Col xs="12" className='mt-0'>
                <label for="exampleInputEmail1" class="fs-4">Email </label>
                <input type="email" class="form-control form-control-sm fs-4 text-dark " placeholder="Email" />
              </Col>
              <Col xs="12" className='mt-1'>
                <label for="exampleInputEmail1" class="fs-4">Subject </label>
                <input type="email" class="form-control form-control-sm fs-4 text-dark " placeholder="Subject" />
              </Col>
              <Col xs="12" className='mt-1'>
                <label for="exampleFormControlTextarea1" class="fs-4">Message </label>
                <textarea class="form-control form-control-sm fs-4 text-dark" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
              </Col>
            </Row>
            <div className='text-center mt-4'>
              <button className='btn  main-btn-black btn-lg fs-4'> Send Message <BsRocketTakeoff style={{ marginLeft: "5px" }} /></button>
            </div>
          </form>
        </Col>
      </Row>


      {/* banner */}
      <div className='text-center py-5 mt100' style={{ background: "#000" }} >
        <h1 className='display-6  text-white m-0 '> Reach us at</h1>
        <h1 className=' text-white m-0'> info@xircls.com</h1>
        <h1 className=' text-white m-0'>+91 9969-333-666  </h1>
        <div className='mt-3'>
          <div className='display-1 text-white'><FaMapLocationDot /> <h4 className=' text-white'> Map</h4></div>
          <h2 className='text-white mt-1 fw-light'>G-08, The Summit Business Bay by Omkar <br />
            Andheri Kurla Road, Andheri (East) <br />
            Mumbai - 400086, India</h2>
        </div>
      </div>

      <Footer />
    </div>
  )
}
