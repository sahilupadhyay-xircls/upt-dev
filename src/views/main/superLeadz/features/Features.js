import React from 'react'
import Footer from '../../footer/Footer'
import Navbar from '../../navbar/Navbar'
import SubNavbar from '../../navbar/SubNavbar'

// bootstrap
import { Col, Row } from 'reactstrap'

// data
const smartPop = [
  {
    p: "Don’t treat every visitor the same.",
    s: "Create custom pop-ups and give incentives based on whether someone has come to your website for the first time, is a returning visitor or a registered user."
  },
  {
    p: "Get them interested first.",
    s: "Stop accosting visitors the moment they arrive. Train your pop-ups to appear after a certain time (time-delay) has passed or once they reach a specific part of the page (scroll trigger)."
  },
  {
    p: "Make more than one offer.",
    s: "No more single-incentive pop-ups. Display multiple offers within one pop-up and let the shopper decide what they like best."
  },
  {
    p: "Tailor buyer journeys by interest.",
    s: "Based on which offer they choose to redeem, redirect shoppers from the pop-up to different parts of your store so they find exactly what they’re looking for."
  },
  {
    p: "Design pop-ups by device.",
    s: "Customize pop-up communication based on whether the visitor is browsing on his mobile device or desktop."
  },
  {
    p: "Style the pop-up of your dreams.",
    s: "Customise every pop-up component - no matter how small - or make your own from scratch!"
  },
  {
    p: "Get advanced pop-up reports.",
    s: "See actionable pop-up performance analysis - which pop-ups are most closed, which pop-up forms get the most submissions etc."
  }
]
const cartData = [
  {
    p: "Keep them on the page.",
    s: "After a shopper interacts with a pop-up, display the offers right there, instead of making them stray away to their inbox."
  },
  {
    p: "Enable one-click offer redemptions.",
    s: "Shoppers just click ‘Redeem’ on the offer they want and continue shopping. Code is auto-applied at checkout."
  }
]
const data = [
  {
    p: "Get your leads to verify themselves!",
    s: "Enable one-time-password (OTP) verification. Incentivize visitors to share & verify their information for  an instant reward."
  },
  {
    p: "Give a variety of incentives.",
    s: "Don’t be limited to displaying an offer code. Create diverse offers from scratch - from percentage discounts to Buy & Get Free offers and even 100% free giveaways."
  }
]

export default function Features() {
  return (
    <div style={{ background: "#fff" }} className='superLeadz_features' >
      <Navbar position='notFixed' />
      <SubNavbar title={'SuperLeadz'} />


      {/* Section1 */}
      <div className='text-center mt180   '>
        <h1 className='display-1 main-heading fw-bolder'>
          Built To Convert
          <h2 className='text-black fw-bold'>SuperLeadz is a simple but powerful sales conversion tool that puts a<br /> wide
            selection of advanced functionalities at your fingertips.</h2>
        </h1>
      </div>

      {/* <Section2 /> */}

      <Row className='section2 mt170 justify-content-center '>
        <Col xs="10" xl="10" className='  px-0 rounded-2'>

          <div className='text-center  border-bottom mt-0'>
            <h1 className='display-3 main-heading fw-bolder'>Smart Pop-Ups</h1>
            <h2 className='text-dark mb-3' >SuperLeadz is a simple but powerful sales conversion tool that puts a wide selection of <br />advanced functionalities at your fingertips.</h2>
          </div>
          <Row className='justify-content-center mt-5 '>
            {
              smartPop.map((data) => {
                return (
                  <Col lg="6" className='p-0 px-1 px-xl-3'>
                    <div className='mb-2 mb-md-5 pb-2 text-start'>
                      <div className=' '>
                        <h1 className='text-black m-0 ' >{data.p}</h1>
                      </div>
                      <div className=' ms-1  '>
                        <h4 className='text-dark m-0  ' > {data.s}</h4>
                      </div>
                    </div>
                  </Col>
                )
              })
            }
          </Row>
        </Col>
      </Row>
      {/* <Section3 /> */}
      <Row className='section2 mt170 justify-content-center '>
        <Col xl="10" md="10" xs="11" className='border pt-2 px-0 rounded-2'>
          <div className='text-center  border-bottom mt-0'>
            <h1 className='display-3 main-heading fw-bolder'>Uninterrupted Cart Journeys</h1>
            <h2 className='text-dark mb-3 px-1' >Don’t let anything distract your shoppers from doing what’s most important <br />- make a
              purchase.</h2>
          </div>
          <Row className='justify-content-center mt-2 mt-md-5'>
            <Col xs="11" md="8" className='p-0'>
              <div className='px-1 mt-2'>
                {
                  cartData.map((data) => {
                    return (
                      <div className='mb-2 pb-2 text-center'>
                        <div className=' '>
                          <h1 className='text-black m-0 display-6' >{data.p}</h1>
                        </div>
                        <div className=' '>

                          <h3 className='text-dark m-0' >{data.s}</h3>
                        </div>

                      </div>
                    )
                  })
                }
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* Section4  */}
      <Row className='section2 mt170 justify-content-center '>
        <Col xl="10" md="10" xs="11" className='border py-5 px-0 rounded-2'>

          <div className='text-center  border-bottom mt-0'>
            <h1 className='display-3 main-heading fw-bolder px-1'> Generate & Convert High-Quality Leads  </h1>
            <h2 className='text-dark mb-3 px-1' >Replace unverifiable or fake leads with high-quality leads that convert faster.</h2>
          </div>
          <Row className='justify-content-center mt-2 mt-md-5'>
            <Col xs="11" md="8" className='p-0'>
              <div className='px-1 mt-2'>
                {
                  data.map((data) => {
                    return (
                      <div className='mb-2 pb-2 text-center'>
                        <div className=' '>
                          <h1 className='text-black m-0 display-6' >{data.p}</h1>
                        </div>
                        <div className=' '>

                          <h3 className='text-dark ' >{data.s}</h3>
                        </div>

                      </div>
                    )
                  })
                }
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <hr className='mt100'/>
      <Footer />
    </div>
  )
}
