import React, { useState } from 'react'
import Navbar from '../utilities/navbar/Navbar'
import { Col, Row } from 'reactstrap'
import { BsRocketTakeoff } from 'react-icons/bs'
import { FaMapLocationDot } from 'react-icons/fa6'
import Footer from '../utilities/footer/Footer'

export default function ContactUs() {
  const [Data, setData] = useState({
    name: '',
    phone: '',
    phone_code: '',
    email: '',
    subject: '',
    message: '',
  })
  const [error, seterror] = useState({
    err: false,
    msg: ''
  })

  function MsgSent() {

    if (!Data.name) {
      // console.log("name is", Data.name);
    }
  }
  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
  }
  return (
    <div style={{ background: "#fff" }}>


      <Navbar />
      {/* Section 1 */}
      <div className='text-center '>
        <h1 className='display-1 main-heading fw-bolder m-0  mt-lg-5 pt-lg-5' >
          Contact Us
        </h1>
        <h1 className=' text-center text-black   px-3' >Understand how XIRCLS can help your business.</h1>
      </div>



      {/* from */}

      <Row className='justify-content-center  text-black '>
        {/* <Col md="4">
          <img src="https://uploads-ssl.webflow.com/60d8680c5cf05bbba0104bc3/60d9d2f998880c46dd4bd35e_cat.png" alt="" srcset="" style={{width:"100%"}} />
        </Col> */}
        <Col xs="10" md="6" className=' rounded-2'>
          <form className='mt-2'>
            <Row className='px-5'>
              <Col md="5">
                <label for="exampleInputEmail1" class="fs-4">Name</label>
                <input type="text" class={`form-control form-control-sm fs-4 text-dark rounded-1  is-invalid`} onChange={handleChange} name="name" placeholder="Name" style={{ marginTop: "4px" }} />
                <div id="validationServerUsernameFeedback" class="invalid-feedback">
                  Please enter your name
                </div>
              </Col>
              <Col md="7" className='ms-0 ps-0'>
                <label for="exampleInputEmail1" class="fs-4">Phone</label>
                <div className='d-flex justify-content-center  align-items-start ' style={{ marginTop: "4px" }}>
                  <select class="form-select form-select-sm fs-4 mt-0 ms-0 text-dark rounded-1" aria-label="Default select example" style={{ width: "120px" }}>
                    <option selected>+ 91</option>
                    <option value="1">+ 1</option>
                    <option value="2">+ 44</option>
                    <option value="3">+ 92</option>
                  </select>
                  <input type="number" class={`form-control form-control-sm fs-4 text-dark rounded-1  `} placeholder="Phone" />
                </div>
              </Col>
              <Col xs="12" className='mt-1'>
                <label for="exampleInputEmail1" class="fs-4">Email </label>
                <input type="email" class={`form-control form-control-sm fs-4 text-dark rounded-1  `} placeholder="Email" style={{ marginTop: "4px" }} />
              </Col>
              <Col xs="12" className='mt-2'>
                <label for="exampleInputEmail1" class="fs-4">Subject </label>
                <input type="email" class={`form-control form-control-sm fs-4 text-dark rounded-1 `} placeholder="Subject" style={{ marginTop: "4px" }} />
              </Col>
              <Col xs="12" className='mt-2'>
                <label for="exampleFormControlTextarea1" class="fs-4">Message </label>
                <textarea class={`form-control form-control-sm fs-4 text-dark rounded-1 `} id="exampleFormControlTextarea1" rows="3" placeholder="Message" style={{ marginTop: "4px" }}></textarea>
              </Col>
            </Row>
            <div className='text-center mt-4'>
              <h4 className='btn  main-btn-black btn-lg fs-4' onClick={MsgSent}> Send Message</h4>
            </div>
          </form>
        </Col>
      </Row>


      {/* banner */}
      <div className='text-center py-5 mt100' style={{ background: "#000" }} >
        <h1 className='display-6  text-white'> Reach us at :</h1>
        <h2 className=' text-white m-0'> info@xircls.com</h2>
        <h2 className=' text-white m-0'>+91 9969-333-666  </h2>
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
