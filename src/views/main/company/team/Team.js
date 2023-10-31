import React from 'react'
import Navbar from '../../utilities/navbar/Navbar'

// // bootstrap
import { Col, Row } from 'reactstrap'
// icons
import { BsLinkedin } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'
import { GoMail } from 'react-icons/go'

// img
import ceo from './img/ceo.png'
import pallavi from './img/pallavi.png'
import uttarika from './img/uttarika.png'
import harshita from './img/harshita.png'
import astha from './img/astha.png'
import anish from './img/anish.png'
import Footer from '../../utilities/footer/Footer'



const team = [
  {
    name: "Deepak Dhingra",
    position: "CEO & Co-Founder",
    img: ceo
  },
  {
    name: "Pallavi Dhingra",
    position: "Co-Founder",
    img: pallavi
  },
  {
    name: "Uttarika Kumaran",
    position: "Co-Founder",
    img: uttarika
  },
  {
    name: "Harshitha Shah",
    position: "HR & Marketing Co-ordinator",
    img: harshita
  },
  {
    name: "Astha Botadra",
    position: "Assistant Operations Manager",
    img: astha
  },
  {
    name: "Anish Saha",
    position: "Head - Partnerships & Sales",
    img: anish
  },
]
export default function Team() {
  return (
    <div style={{ background: "#fff" }}>
      <Navbar />

      {/* Section 1 */}
      <div className='text-center pt80 '>
        <h1 className='display-1 main-heading fw-bolder m-0  mt-lg-5 pt-lg-5' >
          Founding Team
        </h1>
        <h1 className=' text-center text-black   px-3'>An end-to-end martech stack for every step of the buyer journey.</h1>

      </div>

      {/* section 2 */}
      <Row className='justify-content-center mt-5 pt-2 '>
        <Col sm="6" lg="11" className=''>
          <Row className='match-height  justify-content-center gap-2  '>

            {
              team.map((data) => (

                <Col md="3" className=' p-0 d-flex justify-content-start  align-items-center text-center mt-1 mt-md-5 mb-2  '>
                  <img src={data.img} alt="" className='rounded-2 Team-img' style={{ opacity: "1", width: "88%" }} />
                  <div>
                    <h1 className='display mt-1 mb-0 text-black fw-bolder'>{data.name}</h1>
                    <h2 className='m-0 text-black '>{data.position}</h2>
                  </div>
                </Col>
              ))
            }
          </Row>
        </Col>
      </Row>

      <hr className='mt170' />
      <Footer />
    </div>
  )
}
