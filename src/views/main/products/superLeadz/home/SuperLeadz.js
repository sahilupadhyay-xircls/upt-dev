import React from 'react'
import Section3 from './components/section3/Section3'

import Section13 from './components/section13/Section13'

import Navbar from '../../../utilities/navbar/Navbar'
import Footer from '../../../utilities/footer/Footer'
import SubNavbar from '../../../utilities/navbar/SubNavbar';

import { BsArrowRight } from 'react-icons/bs'
import attract from './images/Attract.jpeg'
import { Col, Row, Card, Container } from 'reactstrap'
import Pcard from './components/PCard';
import expand from "./images/wix_80_partner_logo.svg"
import image2 from './images/Booking App Square.png'
import Shop from "./images/shopify.png"

export default function SuperLeadz() {

    const Purchase = [
        {
            title: "Attract →",
            dis: "Display dynamic for different visitor types",
            image: attract
        },
        {
            title: "Incentivize →",
            dis: "Display dynamic for different visitor types.",
            image: attract
        },
        {
            title: "Convert!",
            dis: "One-click redemptions for seamless checkouts.",
            image: attract
        }
    ];

    const pricingData = [
        {
            head: "Forever Free",
            value: "0$/mo",
            subValue: "$00.00/year (save 0%)",
            button: "Get Started",
            listHead: "This is List head",
            items: [
                { title: "1,000 pop-up views" },
                { title: "OTP verification" },
                { title: "Smart pop-ups" }
            ]
        },
        {
            head: "Lite",
            value: "$7.49/mo",
            subValue: "$80.99/year (save 10%)",
            button: "Click me",
            listHead: "Overage: $0.001/pop-up view",
            items: [
                { title: "7,500 pop-up views" },
                { title: "OTP verification" },
                { title: "Smart pop-ups" }
            ]
        },
        {
            head: "Grow",
            value: "$14.99/mo",
            subValue: "$143.99/year (save 20%)",
            button: "Click me",
            listHead: "Overage: $0.001/pop-up view",
            items: [
                { title: "25,000 pop-up views" },
                { title: "No XIRCLS branding" },
                { title: "OTP verification" },
                { title: "Smart pop-ups" }
            ]
        },
        {
            head: "Pro",
            value: "$49.99/mo",
            subValue: "$419.99/year (save 30%)",
            button: "Click me",
            listHead: "Overage: $0.001/pop-up view",
            items: [
                { title: "125,000 pop-up views" },
                { title: "No XIRCLS branding" },
                { title: "OTP verification" },
                { title: "Smart pop-ups" }
            ]
        }

    ]

    return (
        <div style={{ background: "#fff",  }} className='superLeadzHome'>

            <Navbar position={'notFixed'}/>
            <SubNavbar title="SuperLeadz" />

            {/* Section 1 */}
            <div className=' py-5  '  >

                <div className=' d-flex flex-column justify-content-center mt80'  >
                    <h1 className='display-1 text-center main-heading fw-bolder px-2'>
                        Sold At First Sight!
                    </h1>
                    <h1 className=' text-center text-black  mt-1 px-5' style={{ marginBottom: "80px" }}>Instantly turn casual visitors into paying customers.</h1>
                    <div className=' d-flex  justify-content-center align-items-center gap-1 px-1' style={{ marginTop: "-3vh" }}>
                        <h3 className=' btn  main-btn-blue fs-3 '>Install App</h3>
                        {/* <h4  className='' >REQUEST DEMO</h4> */}
                        <a class="fs-3 text-primary"> Schedule a demo<BsArrowRight /></a>
                    </div>
                </div>
            </div>

            {/* Section 2 */}

            <div className='section5 d-flex justify-content-center align-items-center flex-wrap mt180 m-auto ' style={{ width: "100%", background: "#f2f2f2" }} >
                <Row className=' justify-content-center'>
                    <Col md='10' className='  d-flex justify-content-center flex-column align-items-center p-5' style={{ background: "#f2f2f2" }}>
                        <div className=' text-center text-sm-start ' >
                            <h3 className='display-3  main-heading fw-bolder pt-5' >What is SuperLeadz?</h3>
                            <h6 className='display-3 fw-bolder text-secondary pb-5' style={{ lineHeight: '1' }}>SuperLeadz is a lead generation & conversion tool that accelerates sales through personalized incentives for all visitor types, from first-time shoppers to returning visitors and registered users.</h6>
                        </div>

                    </Col>
                </Row>
            </div>

            {/* Section 3 */}

            <div className='mt180 '>
                <h1 className=' text-center display-3 fw-bolder main-heading px-2 px-sm-0'>Unlock the fastest path to purchase!</h1>
                <div className='d-flex justify-content-center mt-5' style={{ margin: '0 auto', paddingTop: '10vh' }}>
                    <Row className='match-height justify-content-center'>
                        {Purchase.map((data, index) => (
                            <Col xs="10" md="5" lg="5" xl="3" className=''>
                                <Card className=' match-height  p-2'>
                                    <div>
                                        <div style={{ width: "100%" }}>
                                            <img src={data.image} alt="image1" style={{ width: "100%" }} />
                                        </div>
                                        <div className='ps-2'>
                                            <h1 className='display-6 main-heading fw-bolder px-02 pt-1'>{data.title}</h1>
                                            <div>
                                                <h2 className='text-black h2 fw-bold p-0 pt-0 px-0'>{data.dis}</h2>
                                            </div>
                                        </div >
                                    </div >
                                </Card >
                            </Col >
                        ))}
                    </Row >
                </div >
            </div>

            {/* Section 4 */}
            <div>
                <Section3 />
            </div>
            {/* Section 5*/}

            <Row className='mt180 justify-content-center px-2 pt-3 pb-3' >
                <Col xs="10" md="5" className='text-start rounded headings-compact content-max-width font-size-normal p-2' style={{ background: '#000' }}>
                    <div className='d-flex justify-content-between' >
                        <h1 className='display-5 text-light ps-2 pt-0 px-2 '>Free plan</h1>
                        <h1 className='ps-2 display-4 px-2 text-light'>$0</h1>
                    </div>
                    <h3 className='h3 justify-content-start text-light px-2 pt-0 pb-2' style={{ lineHeight: '1.2' }}>Includes every feature you need to start selling online.</h3>
                    <div>
                        <button className=" btn  btn-primary fs-4 mt-3 mb-1 text-start ms-2 " type="button">Button</button>
                    </div>
                </Col>
                <Col xs="10" md="5" className='text-start rounded headings-compact content-max-width font-size-normal ms-2 p-2' style={{ background: '#c9e8f5' }}>
                    <div className='d-flex justify-content-between' >
                        <h1 className='display-5 text-black ps-2 pt-0 px-2 '>Paid plans</h1>
                        <h1 className='ps-2 display-4 px-2 text-black'>$45</h1>
                    </div>
                    <h3 className='h3 justify-content-start text-black px-2 pt-0 pb-2' style={{ lineHeight: '1.2' }}>Includes every feature you need to start selling online.</h3>
                    <div>
                        <button className=" btn  btn-primary fs-4 mt-3 mb-1 text-start ms-2" type="button">Button</button>
                    </div>
                </Col>
            </Row>

            {/* Section 6 */}

            <Row className=' mt180 justify-content-center align-items-center pb-5' style={{ background: '#000' }}>

                <Col xs="10" md="10" lg="11">
                    <Row className='justify-content-center'>
                        <Col md="5" className='mt-3 me-5'>
                            <h3 className='display-2 text-light fw-bolder float-start ps-1'>We'll let the numbers speak.</h3>
                        </Col>
                        <Col md="7" lg="5">
                            <div className=' text-center text-sm-start border-bottom-white' >
                                <h3 className='display-2  text-light fw-bolder pt-5' style={{ lineHeight: '0.7' }}>11X</h3>
                                <h6 className='fs-3 text-light pb-5'>ROI in 7 months</h6>
                            </div>
                            <div className=' text-center text-sm-start border-bottom-white' >
                                <h3 className='display-2  text-light fw-bolder pt-5' style={{ lineHeight: '0.7' }}>46%</h3>
                                <h6 className='fs-3 text-light pb-5'>Increase in sales in 3 weeks</h6>
                            </div>
                            <div className=' text-center text-sm-start ps-0 border-bottom-white'>
                                <h3 className='display-2  text-light fw-bolder pt-5' style={{ lineHeight: '0.7' }}>615</h3>
                                <h6 className='fs-3 text-light pb-5'>Conversions and counting!</h6>
                            </div>
                        </Col>
                    </Row>
                </Col>

            </Row>

            {/* Section 7 */}

            <div className=' mt180'>
                <div className='' >
                    <h1 className=' text-center display-3 fw-bolder main-heading px-2 px-sm-0'>Easy to use, easier to love.</h1>
                    <h2 className='text-secondary text-center'>Integrate within minutes and start seeing results from today</h2>
                    <div className='px-5 py-2 d-flex justify-content-evenly mt-3 gap-1'>
                        <a href="/" className=' ms-1'>
                            <img src={Shop} alt="" width={100} />
                        </a>
                        <a href="/" className=' ms-1'>
                            <img src={expand} alt="expand" className=' mb-1' />
                        </a>
                        <a href="/" className=' ms-1 mt-1'>
                            <img src="//upload.wikimedia.org/wikipedia/commons/thumb/2/2a/WooCommerce_logo.svg/250px-WooCommerce_logo.svg.png" alt="" width={100} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Section 8 */}

            <Row className='mt180 justify-content-center'>
                <Col xs="11" md="10" className='text-center' >
                    <div className='' style={{ background: '#000' }}>
                        <h1 className='display-3 text-white pb-0 pt-4 px-'>Convert leads faster than a speeding bullet!</h1>
                        <h2 className=' justify-content-center text-white px-2 pt-1 pb-5' style={{ lineHeight: '0' }}>Ask us for a demo.</h2>
                        <h3 className=' btn  btn-primary fs-4 mt-1 mb-1'>Schedule a demo</h3>
                        <a className="fs-4 text-primary d-block pb-5"> Contact sales.<BsArrowRight /></a>
                    </div>
                </Col>
            </Row>

            {/* Section 9 */}

            <Section13 />

            {/* Section 10 */}

            <Row className='mt180 justify-content-center pt-3 pb-3' style={{ background: '#000' }}>
                <Col xs="10" md="7" className='text-start rounded' style={{ background: '#fff' }}>
                    <div className='' >
                        <h1 className='display-3 text-black justify-content-start ps-2 pt-4'>Don’t miss out! </h1>
                        <h3 className='h3 justify-content-start text-black px-2 pt-1 pb-2' style={{ lineHeight: '1.2' }}>Follow us on social media or sign up for our newsletter for the latest
                            updates.</h3>
                    </div>
                    <Row className=" ps-1">
                        <Col md='6' className="d-flex mb-0 ps-2">
                            <input type="text" placeholder="Enter text" className='h3 me-1 mt-1 rounded border '
                                style={{
                                    width: '100%',
                                    height: '40px'
                                }}
                            />
                        </Col>
                        <Col>
                            <button className=" btn  btn-primary fs-4 mt-1 mb-1" type="button">Button</button>
                        </Col>
                    </Row>
                    <div>
                        <h6 className='text-black fw-bold p-0 pt-1 text-start mb-5 ps-2'>Please refer to our
                            <a className="fs-4 text-primary "> Privcy Policy</a> for more details
                        </h6>
                    </div>
                </Col>
            </Row>

            {/* Section 11 */}

            <Row className='mt180 justify-content-center'>
                <Col md='12' lg="10" className='' >

                    <Row className=' '>
                        <Col md="5" className='text-end' >
                            <img src={image2} alt='...' />
                        </Col>
                        <Col md="7" className='  d-flex justify-content-center flex-column align-items-center '>
                            <div className=' text-center text-sm-start '>
                                <h1 className='display-3  main-heading fw-bolder pt-5'>Introducing Team <br />Performance Report.</h1>
                                <h3 className='h3 text-secondary lh-29 mt-1 pb-5'>Gain insights into your team’s client retention, prebooking, and schedule
                                    utilization rates to understand its performance and business health.
                                    Nurture and incentivize your team to grow the business together.</h3>
                            </div>

                        </Col>

                    </Row>

                </Col>

            </Row>

            {/* Section 12 */}

            <Row className='justify-content-center mt180'>
                <div>
                    <h1 className='display-3 text-center main-heading fw-bolder'>Pick the plan for you.</h1>
                    <h3 className=' text-center text-black  mt-0 mb-3 px-5'>No hidden fees. Change or cancel any time.<br />
                        tom pricing and discounts are available for qualifying businesses.</h3>
                </div>
                <Col md="12" xs="9" lg="10" xl="10" className=''>
                    <Container style={{ maxWidth: "100%" }}>
                        <Row className='match-height justify-content-center'>
                            {/* Main Card */}
                            {pricingData.map((data, index) => (
                                <Col xs="12" md="5" lg="5" xl="3" className='match-height'>
                                    <Card className=' match-height text-center p-0'>
                                        <div>
                                            <Pcard
                                                key={index}
                                                head={data.head}
                                                value={data.value}
                                                subValue={data.subValue}
                                                button={data.button}
                                                listHead={data.listHead}
                                                items={data.items}
                                            />
                                        </div>
                                        <a className="fs-5 text-primary text-start ps-3 pb-3 mt-1"> Read More <BsArrowRight /></a>
                                    </Card >
                                </Col >
                            ))}

                        </Row >
                    </Container>
                </Col >
            </Row >

            {/* Section 13 */}

            <Row className='mt180 justify-content-center '>
                <Col xs="11" md="7" className='text-center' >
                    <div className=''>
                        <h1 className='display-3 fw-bolder text-black pb-0 pt-2'>Contact sales for custom pricing.</h1>
                        <h3 className='text-black h3 justify-content-center p-x pt-1 pb-1 px-2' style={{ lineHeight: '1.7' }}>Custom pricing is available for businesses that process over $250K per year.
                            This plan includes everything in Premium, a dedicated Account Manager, and discounts on optional business tools,
                            such as Square Online, Square Marketing, Square Payroll, and more.<span> <a className="h3 text-primary "> Read More <BsArrowRight /></a></span></h3>
                    </div>
                    <div>
                        <h4 className=' btn  btn-outline-primary main-btn- fs-3 '>Get Started</h4>
                        <h2 className='text-black fs-4 fw-bold p-0 pt-1'>For payments taken online, by invoice or keyed in manually,
                            <a className="fs-4 text-primary "> see card-not-present processing rates.<BsArrowRight /></a>
                        </h2>
                    </div>

                </Col>
            </Row>

            <hr className='mt170' />
            <Footer />


        </div>
    )
}
