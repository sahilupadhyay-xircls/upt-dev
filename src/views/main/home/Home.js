import React from 'react'
import Footer from '../utilities/footer/Footer'
import Navbar from '../utilities/navbar/Navbar'
// compomponents
import CardLeft from '@src/views/main/components/CardLeft'

// bootstrap
import { Card, Col, Row } from 'reactstrap'

// icons
import { FiArrowUpRight } from 'react-icons/fi'
import { LuLayoutDashboard } from 'react-icons/lu'

// img
import img1 from './leads2.png'


import { Link } from 'react-router-dom'
import LogoSlider from '../components/logoSlider/LogoSlider'
import Section9 from './components/section9/Section9'
import Testimonial from './components/testimonial/Section5'
// data
const techSellsData = [
  {
    title: "Intuition",
    desc: "Data-driven & user-friendly interfaces that know what your shoppers want before they do.",
    icon: <LuLayoutDashboard />
  },
  {
    title: "Attraction",
    desc: "Discreet yet powerful strategies that propel your sales pipeline forward for greater revenue generation.",
    icon: <LuLayoutDashboard />
  },
  {
    title: "Personalization",
    desc: "Auto-curation to deliver personalized shopping experiences for every type of shopper.",
    icon: <LuLayoutDashboard />
  },
  {
    title: "Value Addition",
    desc: "Advanced offer creation & collaborative distribution tools to add value to your customers’ daily lives.",
    icon: <LuLayoutDashboard />
  },
  {
    title: "Loyalty",
    desc: "From traditional points-based systems to partner rewards and cashback - we have it all.",
    icon: <LuLayoutDashboard />
  },
  {
    title: "Goodwill",
    desc: "Turn customers into brand ambassadors and incentivize them to spread the love.",
    icon: <LuLayoutDashboard />
  }
]

const Home = () => {
  const width = window.innerWidth
  console.log(width);

  return (
    <div style={{ background: "#fff" }} className={`home ${width >= 1000 ? 'pt80' : ' '}`} >
      <Navbar />



      {/* section 1 */}
      <div className='mt80   d-flex flex-column justify-content-center ' style={{ height: '100%' }} >
        <h1 className='display-1 text-center main-heading fw-bolder lh-83 ' >
          From First Visit <br /> To Forever Loyal.
        </h1>
        <h1 className=' text-center text-black  mt-1 px-3' style={{ marginBottom: "40px" }}>An end-to-end martech stack for every step of the buyer journey.</h1>
        <div className=' d-flex  justify-content-center align-items-center gap-1 px-1' >
          <h3 className=' btn  main-btn-blue fs-3 '>See Products</h3>
          <h3 className=' btn  main-btn-dark fs-4' >Request Demo</h3>
        </div>
      </div>


      <LogoSlider />

      {/* section 3 */}
      <Row className='section8 justify-content-center mt180 '>
        <Col  xs="10" xl="9" >
          <h1 className=' text-center display-3 fw-bolder main-heading  pb-1 ' >Technology That Sells. <br />The Way You Would</h1>
          <h1 className='text-center text-black'>A human-first approach to martech that prioritizes a personal experience for each customer.</h1>
          <Row className='  m-auto justify-content-between  mt-3 '>
            {
              techSellsData.map((data,index) => {
                return (
                  <Col lg="4" md="6" className=''>
                    <CardLeft icon={data.icon} title={data.title} desc={data.desc} key={index}/>
                  </Col>
                )
              })
            }
          </Row>
        </Col>
      </Row>

      {/* we her for you */}
      <Section9 />

      {/*section5  */}
      <Row className=' mt180 justify-content-center align-items-center ' >
        <Col xs="10" md="10" lg="9">
          <Row className='justify-content-center align-items-center   '>
            <Col md="5" className='d-flex justify-content-center align-items-center '>
              <img src={img1} alt="image1" className='mt-n2' style={{ width: "100%" }} />
            </Col>
            <Col md="7">
              <div className=' d-flex  flex-column justify-content-center align-items-start ' >
                <h4 className=' fw-bolder mb-1 text-secondary mt-4 mt-sm-0'>SUPERLEADZ</h4>
                <h1 className='m-0 mb-1 display-3 fw-bolder main-heading  ' >Gain High-Quality Leads.<br />Convert With Ease</h1>
                <h1 className=' mb-1 text-black mt-2'>Reduce Drop-Offs.</h1>
                <h2 className=' mb-1 text-black '  >Optimize your website sales funnel. Gain qualified leads & personalize
                  shopper journeys. Serve instant incentives for faster conversions.</h2>
                <h4 className='btn btn-lg main-btn-dark '>Learn more about SuperLeadz</h4>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* TESTIMONIAL */}
      <Testimonial />


      {/* card */}
      <Row className=' justify-content-center mt170 '>
        <Col sm="11" xs="11" lg="10" md="11">
          <Card className='shadow-none p-5 border' style={{ background: "#e5e7eb" }}>
            <div>
              <h1 className='mainHeader display-3 main-heading fw-bolder m-0 mt-2'>
                Refer Us And Earn<br />
                30% Lifetime Commission.
              </h1>
              <h2 className='text-black m-0 mt-2'>
                Recommend our solutions to your customers or simply help us spread the word as an affiliate.
              </h2>
              <h2 className='text-black m-0 '>
                Earn additional revenue with zero investment or hidden costs !
              </h2>
              <br />

              <Link to='/' className='btn  btn-lg  fs-3 main-btn-dark px-3 py-1'>Learn More <FiArrowUpRight className='fs-4' style={{ marginLeft: "3px", marginBottom: "2px" }} /></Link>
            </div>
          </Card>
        </Col>
      </Row>



      {/* black card */}
      <Row className='section8 justify-content-center mt170 py-5 mb-1' style={{ background: "#000" }}>
        <Col sm="11" xs="11" lg="10" md="11" className=' my-3'>


          <div className=' d-flex justify-content-center align-items-center '>
            <h1 className='display-3 fw-bolder m-0  text-white'>Grow Your Business With XIRCLS</h1>
          </div>

          <h1 className=' display- text-center mt-0 text-white ' >Reach out for customized solutions.</h1>

          <div className=' d-flex justify-content-center align-items-center gap-1 mt-4'>
            <h4 className=' btn btn-lg  main-btn-blue '>Request Demo</h4>
            <h4 className=' btn btn-lg main-btn-light'>Contact Us</h4>
          </div>
        </Col>
      </Row>

      {/* footer */}
      <Footer />


    </div>
  )
}

export default Home