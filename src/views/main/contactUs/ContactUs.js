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
        <Col xs="10" className='border rounded-2'>
          <form className='py-5 px-5'>
            <Row className='px-5'>
              <h1 className='display-6 text-black mb-3'>Please leave your details for us to reach out!</h1>
              <Col md="6">
                <label for="exampleInputEmail1" class="fs-3">Name</label>
                <input type="email" class="form-control fs-3 text-dark " placeholder="Name" />
              </Col>
              <Col md="6" >
                <label for="exampleInputEmail1" class="fs-3">Phone</label>
                <div className='d-flex justify-content-center  align-items-start '>
                  <select class="form-select  fs-3 mt-0 ms-0 text-dark" aria-label="Default select example" style={{ width: "150px" }}>
                    <option selected>+ 91</option>
                    <option value="1">+ 1</option>
                    <option value="2">+ 44</option>
                    <option value="3">+ 92</option>
                  </select>
                  <input type="number" class="form-control fs-3 text-dark " placeholder="Phone" />
                </div>
              </Col>
              <Col xs="12" className='mt-2'>
                <label for="exampleInputEmail1" class="fs-3">Email </label>
                <input type="email" class="form-control fs-3 text-dark " placeholder="Email" />
              </Col>
              <Col xs="12" className='mt-2'>
                <label for="exampleInputEmail1" class="fs-3">Subject </label>
                <input type="email" class="form-control fs-3 text-dark " placeholder="Subject" />
              </Col>
              <Col xs="12" className='mt-2'>
                <label for="exampleFormControlTextarea1" class="fs-3">Message </label>
                <textarea class="form-control fs-3 text-dark" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
              </Col>
            </Row>
            <div className='text-center mt-4'>
              <button className='btn  main-btn-black btn-lg fs-4'> Send Message <BsRocketTakeoff style={{ marginLeft: "5px" }} /></button>
            </div>
          </form>
        </Col>
      </Row>


      {/* banner */}
      <div className='text-center py-5 mt180' style={{ background: "#000" }} >
        <h1 className='display-6  text-white m-0'> info@xircls.com</h1>
        <h1 className='display-3 text-white m-0'>+91 9969-333-666  </h1>
        <div className='mt-3'>
          <div className='display-1 text-white'><FaMapLocationDot /> <h4 className=''> Map</h4></div>
          <h1 className='text-white mt-1 fw-light'>G-08, The Summit Business Bay by Omkar <br />
            Andheri Kurla Road, Andheri (East) <br />
            Mumbai - 400086, India</h1>
        </div>
      </div>

<Footer/>
    </div>
  )
}
