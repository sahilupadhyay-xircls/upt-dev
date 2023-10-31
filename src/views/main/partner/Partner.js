import React from 'react'
import { Card, Col, Row } from 'reactstrap'


import Section8 from './components/section8/Section8'

//  navbar
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import SubNavbar from '../navbar/SubNavbar'

// icons 
import { AiOutlineSolution, AiTwotoneShop } from 'react-icons/ai'
import { BiCookie, BiLineChart, BiRightArrowAlt } from 'react-icons/bi'
import { FaRegNewspaper } from 'react-icons/fa'
import { FaMoneyBillTransfer } from 'react-icons/fa6'
import { GiTakeMyMoney } from 'react-icons/gi'
import { MdDeveloperMode, MdWifiTethering } from 'react-icons/md'
import { PiHandshakeFill } from 'react-icons/pi'
import { SiGooglemarketingplatform } from 'react-icons/si'
// components 
import CardLeft from '@src/views/main/components/CardLeft'
import { Link } from 'react-router-dom'



// data 
const whoPartners = [
    {
        title: "Web Developers",
        icon: <MdDeveloperMode />,
        desc: "who can offer XIRCLS integrations as value additions in their tech stack."
    },
    {
        title: "Marketing Agencies",
        icon: <SiGooglemarketingplatform />,
        desc: "who want to recommend XIRCLS solutions to their clients."
    },
    {
        title: "Startup Communities",
        icon: <AiTwotoneShop />,
        desc: "Such as incubators & accelerators who wish to offer startups a sustainable way to kickstart revenue generations."
    },
    {
        title: "Publishers & Influencer",
        icon: <FaRegNewspaper />,
        desc: "Interested in earning commission by referring their audience."
    },
    {
        title: "Other Solution Providers",
        icon: <AiOutlineSolution />,
        desc: "Such as resellers, consultancies who offer consulting & implementation services"
    },
]
const whyPartners = [
    {
        title: "Instant Trust",
        icon: <PiHandshakeFill />,
        desc: "Boost your credibility with an industry-transforming martech company that consistently launches innovative marketing solutions."
    },
    {
        title: "Scale & Grow",
        icon: <BiLineChart />,
        desc: "Expand your business by offering XIRCLS solutions to existing & new customers, thereby attracting new business opportunities."
    },
    {
        title: "Industry-Leading Commissions",
        icon: <GiTakeMyMoney />,
        desc: "Earn upto 20% commission per sale on first & recurring sales."
    },
    {
        title: "Extended Cookie Life",
        icon: <BiCookie />,
        desc: "Get paid for any visitor who makes a purchase within 120 days of clicking on your affiliate link."
    },
    {
        title: "Earn in Multiple Currencies",
        icon: <FaMoneyBillTransfer />,
        desc: "Earn sales commissions in the currencies that your clients purchase our plans in. Set up a global revenue stream."
    },
    {
        title: "Remote-First Culture",
        icon: <MdWifiTethering />,
        desc: "Our team is accustomed to working with partners across the globe. Stay connected to us no matter where you are."
    }

]
// s7
const steps = [
    {
        title: "Sign up",
        desc: "While anyone can become a XIRCLS partner, a successful partner will have a client base/audience who need powerful yet simple martech solutions to scale their sales & establish a lasting brand name."
    },
    {
        title: "Spread the word",
        desc: "Begin sharing affiliate links and track performance from your own dashboard. We will support you with product demos, training manuals and other helpful resources to get you going."
    },
    {
        title: "Earn!",
        desc: "Earn 30% lifetime commission for every paying customer on XIRCLS through your affiliate links."
    }
]

export default function Partner() {
    return (
        <div className={`partnerPage`} style={{ background: "#fff" }}>

            <Navbar position={'notFixed'} />
            <SubNavbar title="Partner" />

            {/* section 1 */}
            <div className=' d-flex justify-content-center align-items-start mt150 '  >
                <div className='py-3 d-flex justify-content-center flex-column align-items-center'  >
                    <div className=' text-center '>
                        <div>
                            <h1 className='display-1 main-heading fw-bolder m-0 lh-83' > Leverage Your Network. <br/>
                             Earn Recurring Revenue. </h1>
                        </div>
                        <h2 className='lh-29 mt-1 w-75 m-auto text-dark fw-bold px-1 '>Grow your business while you hello your audience grow theirs.<span className='text-black fw-bolder'> Earn a 20% commission every time </span>your referrals buy from us. </h2>
                    </div>
                </div>
            </div>

            {/* section 2 */}
            <div className=" d-flex justify-content-center align-items-center mt140" >
                <Row className='justify-content-center'>
                    <Col xs="10" md="10" lg="10" xl="9">
                        <Row className='text-start match-height   mt-2  '>
                            <Col lg="4" md="6" className=' d-flex justify-content-center align-items-center mb-2 mb-md-0'>
                                <div >
                                    <h4 className='display-5 fw-bolder main-heading ' >Who can become a XIRCLS partner ?</h4>
                                </div>
                            </Col>
                            {
                                whoPartners.map((data) => {
                                    return (
                                        <Col lg="4" md="6" className=''>
                                            <CardLeft icon={data.icon} title={data.title} desc={data.desc} />
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </div>

            {/* // section 3 */}
            <div className='m-auto text-center mt-1 mt170'>
                <h2
                    className='display-3 text-center main-heading fw-bolder'>
                    Your Network, Our Ideal Audience
                </h2>
                <Row className='justify-content-center  '>
                    <Col sm="11" md="11" lg="10" >
                        <Row className='match-height  py-2 d-flex justify-content-center px-5 px-md-0 px-sm-0' >
                            <Col md="6" lg="3" sm="6" >
                                <Card className='border-dark shadow-none rounded-pill  py-1 m-0 mt-2 d-flex justify-content-center align-items-center  '>
                                    <h3 className='fs-4 text-center text-black m-0 '>Small Business Owners</h3>
                                </Card>
                            </Col>
                            <Col md="6" lg="3" sm="6" >
                                <Card className='border-dark shadow-none rounded-pill  py-1 m-0 mt-2 d-flex justify-content-center align-items-center '>
                                    <h3 className='fs-4 text-center text-black m-0 '>Reputed Brands</h3>
                                </Card>
                            </Col>
                            <Col md="6" lg="3" sm="6" >
                                <Card className='border-dark shadow-none rounded-pill  py-1 m-0 mt-2 d-flex justify-content-center align-items-center '>
                                    <h3 className='fs-4 text-center text-black m-0 '>Publications</h3>
                                </Card>
                            </Col>
                            <Col md="6" lg="3" sm="6" >
                                <Card className='border-dark shadow-none rounded-pill  py-1 m-0 mt-2 d-flex justify-content-center align-items-center '>
                                    <h3 className='fs-4 text-center text-black m-0 '>Ad & Media Agencies</h3>
                                </Card>
                            </Col>
                            <Col md="6" sm="6" lg="5" xl="4" >
                                <Card className='border-dark  shadow-none rounded-pill py-1 m-0 mt-2 d-flex justify-content-center align-items-center  '>
                                    <h3 className='fs-4 text-center  text-black m-0 '>Infrastructure & Utilities Companies</h3>
                                </Card>
                            </Col>
                            <Col md="6" sm="6" lg="5" xl="4" >
                                <Card className='border-dark shadow-none rounded-pill  py-1 m-0 mt-2 d-flex justify-content-center align-items-center '>
                                    <h3 className='fs-4 text-center text-black m-0 '>Financial Services</h3>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>

            {/* section 4 */}
            <div className=' d-flex justify-content-center align-items-center flex-column mt170' >
                <div className=' text-center'>
                    <h2 className='display-3 text-center main-heading fw-bolder'>
                        Why Become a XIRCLS Partner?
                    </h2>
                    <Row className='justify-content-center'>
                        <Col xs="10" md="10" lg="10" xl="9">
                            <Row className='text-start match-height   mt-2'>
                                {
                                    whyPartners.map((data) => {
                                        return (
                                            <Col lg="4" md="6" className=''>
                                                <CardLeft icon={data.icon} title={data.title} desc={data.desc} />
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>

            {/* section 5 */}
            <div className=' d-flex justify-content-center align-items-center flex-wrap mt170 m-auto ' style={{ width: "85%" }} >
                <Row className=' justify-content-center'>
                    <Col md="7" className='  d-flex justify-content-center flex-column align-items-center '>
                        <div className=' text-center text-sm-start '>
                            <h3 className='display-3  main-heading fw-bolder'>Always Stay in  ‘Earning Mode’</h3>
                            <h6 className='fs-3 text-secondary lh-29  '>Your affiliate links are yours to share - on your website, social media,
                                visiting cards... anywhere you want. Link it and leave it!</h6>
                        </div>
                    </Col>
                    <Col md="5" className=' ' >
                        {/* <img src={bgimg} alt='...' /> */}
                    </Col>
                </Row>
            </div>

            {/* section6 */}

            <div className='section8Test d-flex flex-column justify-content-center align-items-center mt190 p-0 p-sm-5' style={{ background: "#000" }}>
                <div className=' ' style={{ width: "85%" }}>
                    <h1 className='display-1 fw-bold mt-3 text-white text-start lh-sm ' >Get the <br />XIRCLS Partner <br /> Advantage.</h1>
                    <Row className='match-height mt-2 '>
                        <Col lg="6" md="6" className=''>
                            <Card className=' border-none  shadow-none  d-flex flex-column p-1 justify-content-start align-items-start' style={{ background: "#000",border:'none' }}>
                                <h4 className=' fs-2  fw-lig w-75 text-light' >Performing at the highest degree possible, these are the common traits reps accepted to XIRCLS have in common.</h4>
                                <Link to="" className=' btn  btn-lg main-btn-white mt-3 px-3 py-1'> Apply Now</Link>
                                <div className='ms-auto arrow' >
                                    <img className='d-none d-lg-block ' src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/61fa78aa61452b33bdbd7c9c_Arrow_01.svg" alt="" width={220} style={{ position: "relative", top: '-30px', left: "40px" }} />
                                </div>
                            </Card>
                        </Col>
                        <Col lg="6" md="6" >
                            <Card className=' border-none   shadow-none  d-flex flex-column p-1 justify-content-end align-items-center mt-2' style={{ background: "#000",border:'none' }}>
                                <ul className='d-flex flex-column gap-3'>
                                    <li className='d-flex align-items-center gap-3' ><img src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/61fa78aa67d329961f45979f_check-icon.svg" alt="" srcset="" width={40} /><h4 className='fs-1 text-white fw-lig m-0'>No Sign-up Costs</h4></li>
                                    <li className='d-flex align-items-center gap-3' ><img src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/61fa78aa67d329961f45979f_check-icon.svg" alt="" srcset="" width={40} /><h4 className='fs-1 text-white fw-lig m-0'>Track Performance</h4></li>
                                    <li className='d-flex align-items-center gap-3' ><img src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/61fa78aa67d329961f45979f_check-icon.svg" alt="" srcset="" width={40} /><h4 className='fs-1 text-white fw-lig m-0'>First Access</h4></li>
                                    <li className='d-flex align-items-center gap-3' ><img src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/61fa78aa67d329961f45979f_check-icon.svg" alt="" srcset="" width={40} /><h4 className='fs-1 text-white fw-lig m-0'>Comprehensive Support</h4></li>
                                </ul>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>


            {/* section 7 */}
            <div className='d-flex justify-content-center align-items-center flex-column mt170 '  >
                <div className='section9p5 w-75 '>
                    <div className='text-center'>
                        <h2 className='display-3 text-center main-heading fw-bolder'  > How it Works! </h2>
                    </div>
                    <div className='text-center'>
                        <h3 className='text-secondary lh-29' >While anyone can become a XIRCLS partner, to be a successful partner you must: <span className='SelectBlack' style={{ color: "#000" }}>three simple steps</span>.</h3>
                    </div>
                    <Row className="mt-5 lh-29 " >
                        {
                            steps.map((data, index) => (
                                <Col lg="4" className='mt-2'>
                                    <div className='NumberHeader'>Step {index + 1}  <BiRightArrowAlt /><span style={{ fontWeight: "Bold" }}> {data.title}</span></div>
                                    <div><h4 className='fs-4 text-secondary lh-29'>{data.desc}</h4></div>
                                </Col>
                            ))
                        }
                    </Row>
                    <div className='text-center mt-2 mt-sm-0'>
                        <Link to="" className=' btn  btn-lg main-btn-dark fs-3 mt-5 '> Start for Free</Link>
                    </div>
                </div>
            </div>

            <Section8 />

            {/* banner */}
            <div className=' py-5 mt-3 border-bottom mt170'>
                <Row className='justify-content-center'>
                    <Col sm="11" xs="11" lg="10" md="11">
                        <Card className=' p-5 border shadow-none' style={{ background: "#e5e7eb" }}>
                            <div>
                                <h1 className='mainHeader display-3 main-heading fw-bolder m-0 mt-2'>
                                    Start Earning <br /> Today
                                </h1>
                                <h3 className='text-black m-0 fs-3'>
                                    Earn upto <span className='text-warning fw-bolder'>30% commission</span> <br /> for every XIRCLS product purchase.
                                </h3>
                                <br />
                                <div className=''>
                                    <Link to='' className='btn main-btn-black btn-lg fs-4 px-3 py-1 me-2'>Get Started</Link>
                                    <Link to='' className='btn main-btn-dark btn-lg  fs-4  px-3 py-1' >Speak with our team</Link>
                                    <Link to='' className=' text-black fw-bold fs-3 float-end' style={{ boxShadow: 'none' }}>Sign up as a XIRCLS Partner <BiRightArrowAlt /></Link>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
            <Footer />

        </div>
    )
}
