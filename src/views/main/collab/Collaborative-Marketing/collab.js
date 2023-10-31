import React from 'react';
import { Col, Row } from 'react-bootstrap';
import competition from './Images/competition.png';
import bulb from './Images/bulb.png';
import field from './Images/field.png';
import thoughts from './Images/thoughts.png';
import accessibility from './Images/accessibility.png';
import click from './Images/click.png';
import connection from './Images/connection.png';
import collab from './Images/collab.png';
import bow from './Images/bow.png';
import scissors from './Images/scissors.png';
import affordable from './Images/affordable.png';
import advanced from './Images/advanced-customer.png';
import ethical from './Images/ethical-marketing.png';
import Navbar from '../../navbar/Navbar'
import Footer from '../Footer'

const CollaborativeMarketingPage = () => {

 const CardData = [
        {
            title: (
            <div>
                Life is Collaboration,<br /> Not Competition
            </div>
            ),
            subTitle: "Display dynamic for different visitor types",
            image: competition
        },
        {
            title: "Incentivize →",
            dis: "Display dynamic for different visitor types.",
            image: bulb
        },
        {
            title: "Convert!",
            dis: "One-click redemptions for seamless checkouts.",
            image: field
        },
    ];

    const CardData1 = [
            {
                title: "Attract →",
                subTitle: "Display dynamic for different visitor types",
                image: competition
            },
            {
                title: "Incentivize →",
                dis: "Display dynamic for different visitor types.",
                image: bulb
            },
            {
                title: "Convert!",
                dis: "One-click redemptions for seamless checkouts.",
                image: field
            }

    
]


    return (
        <>
        <Navbar />

        <Row className='text-black justify-content-center'>
            <Col md='10'>
                <div className='text-black text-center' style={{ marginTop: "80px", paddingTop: "80px" }}>
                    <div style={{ marginTop: "80px" }}>
                        <h1 className="text-black display-1 text-black fw-bolder">Why Collaborative Marketing?</h1>
                    </div>
                    <div >
                        <p className="text-black fs-1" style={{ marginTop: '20px' }}>
                            We believe the future of marketing must be collaborative.
                        </p>
                    </div>
                </div>

                <div style={{ marginTop: '180px' }}>
                    <h1 className="text-black display-3 fw-bolder mb-2">XIRCLS is a Technology Inspired by <br /> Universal Fundamentals.</h1>
                    <p className='text-black h4'>“The journey to the self is through the other.”</p>
                    <p className='text-black h4'>In the history of mankind, we see this principle expressed time and again, across ancient texts, philosophical doctrines and the world of literature.</p>
                    <p className='text-black h4'>Science too acknowledges all life as a complex network of cells in perpetual motion, operating in absolute harmony within themselves and with each other.</p>
                    <p className='text-black h4'>It is as if we exist in a state of completion and incompletion all at once.</p>
                    <p className='text-black h4'>Call it scientific, spiritual or divine, life seems to be an eternal journey that begins with you, leads to someone else and finally, comes back to you. A complete XIRCLE.</p>
                    <p className='text-black h4'>XIRCLS is an attempt to leverage technology to give this universal principle form and function.</p>
                </div>

                <Row>
                    <div className='text-black d-flex flex-row-reverse' style={{ marginTop: '180px' }}>
                        <Col md='4' className='text-black d-flex align-items-center justify-content-center' >
                            <img src={competition} style={{width : '45%'}}/>
                        </Col>
                        <Col md='8' className='text-black text-start'>
                            <h1 className='text-black display-3 fw-bolder'></h1>
                            <p className='text-black fs-4' style={{ marginTop: '20px' }}> Think back to every achievement or landmark event in your personal or professional life and you will remember the people around you who helped make it possible.</p>
                            <p className='text-black fs-4'>In a fear-driven world, we fixate on competition. Forgetting that for every competitor, there are hundreds of potential collaborators who would love to partner with you. Why not start there?</p>
                            <p className='text-black fs-4'> If life on this planet and human society itself thrives through collaboration, why not apply the same to business?</p>
                        </Col>
                    </div>
                </Row>

                <Row>
                    <div className='text-black d-flex' style={{ marginTop: '180px' }}>
                        <Col md='4' className='text-black d-flex align-items-center justify-content-center' >
                            <img src={bulb} style={{width : '45%'}}/>
                        </Col>
                        <Col md='8' className='text-black text-start'>
                            <h1 className='text-black display-3 fw-bolder'> What if Businesses Helped Each Other Reach Their Marketing Goals?</h1>
                            <p className='text-black fs-4' style={{ marginTop: '20px' }}> XIRCLS started out by asking this simple question.</p>
                            <p className='text-black fs-4'>Every day, thousands of companies invest time, money and resources individually to market to the same customer base.</p>
                            <p className='text-black fs-4'>On advertising & marketing platforms, businesses bid and compete to grab the attention of potential customers, pushing ad prices higher and ROIs lower.</p>
                            <p className='text-black fs-4'>Meanwhile, consumers are bombarded with marketing messages that rarely make an 'impression' and are perceived to be a nuisance.</p>
                            <p className='text-black fs-4'>​In a world where nobody wins - except Big Tech - enabling friction-less collaboration​​ between businesses could result in a more equitable marketing landscape that protects consumer interests as well.</p>

                        </Col>
                    </div>
                </Row>


                <Row>
                    <div className='text-black d-flex flex-row-reverse' style={{ marginTop: '180px' }}>
                        <Col md='4' className='text-black d-flex align-items-center justify-content-center' >
                            <img src={field} style={{width : '45%'}}/>
                        </Col>
                        <Col md='8' className='text-black text-start'>
                            <h1 className='text-black display-3 fw-bolder'> A Global Level Playing Field.</h1>
                            <p className='text-black fs-4' style={{ marginTop: '20px' }}> XIRCLS helps counter corporate monopolies with a technology that essentially brings human beings together to make resources easily shareable and their end goals easily attainable - with no central authority or hidden agendas.</p>
                            <p className='text-black fs-4'>We picture XIRCLS bringing people together across sectors, across platforms, across touchpoints, across borders, across cultures... across the world.</p>
                        </Col>
                    </div>
                </Row>


                <Row>
                    <div className='text-black d-flex' style={{ marginTop: '180px' }}>
                        <Col md='4' className='text-black d-flex align-items-center justify-content-center' >
                            <img src={thoughts} style={{width : '45%'}}/>
                        </Col>
                        <Col md='8' className='text-black text-start'>
                            <h1 className='text-black display-3 fw-bolder'> Help, Just a Thought Away.</h1>
                            <p className='text-black fs-4' style={{ marginTop: '20px' }}>From a one-man show to small and medium size enterprises to global companies, everybody can benefit from collaboration. We’ve created a worldwide platform for businesses to instantly connect with one another and collaborate 100% virtually, within minutes. Never feel alone again.</p>

                        </Col>
                    </div>
                </Row>

                <div style={{ marginTop: '180px' }}>
                    <h1 className="text-black display-3 fw-bolder">What Collaboration Means to Us.</h1>
                    <p className='text-black fs-4' style={{ marginTop: '20px' }}>In an ‘Every Man for Himself’ kind of world, it’s no surprise that we’re often asked - what’s in it for XIRCLS, especially in the long run?</p>
                    <p className='text-black fs-4'>Collaboration, to us, will always mean one thing - that we are all in it together.</p>
                    <p className='text-black fs-4'>Yes, we have big dreams. Yes, we want to make the world a gentler place.
                        Yes, we want to create a safe haven for businesses dying every day
                        in the face of crony capitalism and hateful greed.</p>
                    <p className='text-black fs-4'>
                        But we’re not in it for the glory. We promise to leave that - as well as your customers and profits
                        - to you, our merchants. That’s why XIRCLS will never communicate with your customers directly.
                        We’ll try our very best to remain anonymous to your customers.
                    </p>
                </div>

                <Row>
                    <div className='text-black d-flex flex-row-reverse' style={{ marginTop: '180px' }}>
                        <Col md='4' className='text-black d-flex align-items-center justify-content-center' >
                            <img src={accessibility} style={{width : '45%'}}/>
                        </Col>
                        <Col md='8' className='text-black text-start'>
                            <h1 className='text-black display-3 fw-bolder'> We Want to Create a Viable Alternative to Online Advertising That is Accessible to Every Merchant in The World.</h1>
                            <p className='text-black fs-4' style={{ marginTop: '20px' }}>The uneven distribution of power, abysmally low ROIs, transparency issues, ad fraud and privacy concerns that plague advertising today have been our starting points. By creating a 100% transparent and decentralized marketing model, XIRCLS is the first marketing platform in the world that resolves all of the above concerns and puts the power squarely in the hands of businesses who use it.</p>
                        </Col>
                    </div>
                </Row>

               

                <Row>
                    <div className='text-black d-flex' style={{ marginTop: '180px' }}>
                        <Col md='4' className='text-black d-flex align-items-center justify-content-center' >
                            <img src={click} style={{width : '45%'}}/>
                        </Col>
                        <Col md='8' className='text-black text-start'>
                            <h1 className='text-black display-3 fw-bolder'> Changing The World, <br /> One Company at a Time. </h1>
                            <p className='text-black fs-4' style={{ marginTop: '20px' }}> We acknowledge the huge mindshift required to counter decades of advertising thinking among businesses and marketing professionals. That is part of the reason why we’ve kept our pricing incredibly simple. Our pay-as-you-go model makes it possible for any business to start using our platform from today and discover a whole new way to market. </p>
                        </Col>
                    </div>
                </Row>

                
                <Row>
                    <div className='text-black d-flex flex-row-reverse' style={{ marginTop: '180px' }}>
                        <Col md='4' className='text-black d-flex align-items-center justify-content-center' >
                            <img src={connection} style={{width : '45%'}}/>
                        </Col>
                        <Col md='8' className='text-black text-start'>
                            <h1 className='text-black display-3 fw-bolder'> We’re Here to Address Inefficient Systems. </h1>
                            <p className='text-black fs-4' style={{ marginTop: '20px' }}> Through collaboration-driven innovations, our mission is to address problems of cost, access and quality for players in every industry. We don’t see competitors, only future partners. If you sense a synergy between XIRCLS and what your company does, let’s talk.</p>
                        </Col>
                    </div>
                </Row>

                <div style={{ marginTop: '180px' }}>
                    <h1 className="text-black display-3 fw-bolder"> Benefits of Collaborative Marketing: </h1>
                    
                </div>

                <Row>
                    <div className='text-black d-flex' style={{ marginTop: '180px' }}>
                        <Col md='4' className='text-black d-flex align-items-center justify-content-center' >
                            <img src={collab} style={{width : '45%'}}/>
                        </Col>
                        <Col md='8' className='text-black text-start'>
                            <h1 className='text-black display-3 fw-bolder'> Instant Collaborations With Any Business in The World. </h1>
                            <p className='text-black fs-4' style={{ marginTop: '20px' }}> Our platform makes it possible to run collaborative marketing campaigns with almost anybody, be it a global brand, a niche e-commerce company, an NGO, a professional or a local dairy farmer in rural India. </p>
                        </Col>
                    </div>
                </Row>

                
                <Row>
                    <div className='text-black d-flex flex-row-reverse' style={{ marginTop: '180px' }}>
                        <Col md='4' className='text-black d-flex align-items-center justify-content-center' >
                            <img src={bow} style={{width : '45%'}}/>
                        </Col>
                        <Col md='8' className='text-black text-start'>
                            <h1 className='text-black display-3 fw-bolder'> Address Genuine Customers Who are Most Likely to <br /> Buy From you, Right Now. </h1>
                            <p className='text-black fs-4' style={{ marginTop: '20px' }}> Strategic collaborations make it possible for you to market to real-time buyers in allied categories and therefore, most likely to need your product/service.</p>
                        </Col>
                    </div>
                </Row>

                <Row>
                    <div className='text-black d-flex' style={{ marginTop: '180px' }}>
                        <Col md='4' className='text-black d-flex align-items-center justify-content-center' >
                            <img src={scissors} style={{width : '45%'}}/>
                        </Col>
                        <Col md='8' className='text-black text-start'>
                            <h1 className='text-black display-3 fw-bolder'> Dramatically Reduce your Marketing & Customer Retention Costs.</h1>
                            <p className='text-black fs-4' style={{ marginTop: '20px' }}> We’ve used the power of collaboration to make marketing precise yet low-priced, so that no business feels left out.</p>
                        </Col>
                    </div>
                </Row>

                <Row>
                    <div className='text-black d-flex flex-row-reverse' style={{ marginTop: '180px' }}>
                        <Col md='4' className='text-black d-flex align-items-center justify-content-center' >
                            <img src={affordable} style={{width : '45%'}}/>
                        </Col>
                        <Col md='8' className='text-black text-start'>
                            <h1 className='text-black display-3 fw-bolder'> Make Products & Services More Affordable. </h1>
                            <p className='text-black fs-4' style={{ marginTop: '20px' }}> By keeping marketing costs down and raising ROIs, companies can pass on their savings to customers, increase access and expand their addressable market. In the context of industries like healthcare, collaborative marketing can literally save lives.</p>
                        </Col>
                    </div>
                </Row>

                <Row>
                    <div className='text-black d-flex' style={{ marginTop: '180px' }}>
                        <Col md='4' className='text-black d-flex align-items-center justify-content-center' >
                            <img src={ethical} style={{width : '45%'}}/>
                        </Col>
                        <Col md='8' className='text-black text-start'>
                            <h1 className='text-black display-3 fw-bolder'> Accountability = Ethical Marketing.</h1>
                            <p className='text-black fs-4' style={{ marginTop: '20px' }}> Collaborative marketing is all about relationships - between companies and their customers. And when businesses themselves become marketing channels for each other, ethical practices become everyone’s priority.</p>
                            <p className='text-black fs-4'>We’ve managed to address this concern and eradicate many evils in advertising (think spam, ad fraud, lack of measurability etc.) at its very root, ensuring customers always receive messages of value and companies know exactly what they’re paying for. At a B2B level, our network-based platform ensures that all players always act responsibly.</p>
                        </Col>
                    </div>
                </Row>

                <Row>
                    <div className='text-black d-flex flex-row-reverse' style={{ marginTop: '180px' }}>
                        <Col md='4' className='text-black d-flex align-items-center justify-content-center' >
                            <img src={advanced} style={{width : '45%'}}/>
                        </Col>
                        <Col md='8' className='text-black text-start'>
                            <h1 className='text-black display-3 fw-bolder'> Advanced Customer Profiling. </h1>
                            <p className='text-black fs-4' style={{ marginTop: '20px' }}> Gain valuable insights into your customers’ shopping behaviour. <br /> Get the benefits of collaborative customer profiling while keeping your customer data 100% secure.</p>
                        </Col>
                    </div>
                </Row>

            </Col>
        </Row>

        <Footer />

        </>
    );
};

export default CollaborativeMarketingPage;
