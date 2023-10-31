import React, { useEffect } from 'react'
import './faq.scss'
import { Col, Row } from 'reactstrap';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import {Link} from "react-router-dom"

export default function Section13() {
    const faqData = [
        {
            q: "What is SuperLeadz?",
            a: "Put in your phone no. and email address not available on our website You will always receive personalized, exclusive discounts when you log in, not available anywhere else on your website. Turn your store into a super-charged lead generation machine while encouraging them to spend more. You can generate zero-party, genuine and verified leads by incentivizing visitors to willingly give their data to you.!"
        },
        {
            q: "How can you guarantee genuine and verified leads?",
            a: "Visitors must enter the one-time password received in their inbox to verify themselves as genuine potential customers. Although, this feature can be turned off and the leads will no longer be genuine and verified.."
        },
        {
            q: "Why would the user go through an extra step of entering the one-time password?",
            a: "The Lead Hotspot (widget) will appear on your website. When clicked, the pop-up will incentivize visitors to check in with their email/mobile number. Visitors will instantly see the offer which they can redeem with one click and auto applied on checkout. Without OTP, bots will start making your website heavy. You will be spending resources to manage and remarket to unverified users, mostly bots."
        },
        {
            q: "What makes SuperLeadz more effective than other kinds of lead generation tools?",
            a: "SuperLeadz is a simple tool to reduce drop-offs at the very top of your sales funnel. A simple button invites visitors to ‘check in’ and grab their own exclusive offer, which is auto-applied, after verifying their identity. It’s a subtle psychological strategy that runs counter to traditional lead magnets like newsletters, contests, spin the wheel and other gamification tools that goad visitors into signing up or completing an action to get a reward. And worse, makes your website look just like your competition’s! Additionally, all the communication will be sent by you and not us or any third party application."
        },
        {
            q: "How do I know if this is right for me?",
            a: "To determine if SuperLeadz is the right tool for you, you should consider your business goals, target audience, and existing lead generation strategies. If your primary goal is to reduce drop-offs at the top of your sales funnel and you want a simple, non-intrusive way to offer exclusive deals to your website visitors, then SuperLeadz could be a good fit for you. However, if you have a different objective or already have effective lead generation strategies in place, you may not need SuperLeadz. Consider your target audience as well. If your audience is likely to be receptive to exclusive offers and appreciates a simple and straightforward approach, SuperLeadz may be a good fit. However, if your audience prefers more interactive or engaging lead generation methods, SuperLeadz may not be the best option. Ultimately, the decision of whether SuperLeadz is right for you depends on your specific business needs and objectives. Additionally, you can try out a free trial or request a demo to see if SuperLeadz is a good fit for your business."
        },
        {
            q: " How does the pricing work?",
            a: "SuperLeadz pricing is based on the total number of visitors in your store. You can check the details here <Pricing Page Link>."
        },
        {
            q: "What if I exceed the maximum in my plan?",
            a: "When your customers are increased outside the range, your plan will automatically upgrade to the next pricing plan."
        },
        {
            q: "How do I pay?",
            a: "All charges are submitted through Shopify, will appear on your normal Shopify bill, and will be paid through Shopify. There are no extra contracts, vendors, or payment schedules to worry about."
        },
        {
            q: "What is the billing date?",
            a: "- You will be billed on the date of your first purchase every month"
        },
        {
            q: "Is there a free plan??",
            a: "We do not have a free plan but you can have a free trial of 14 days to incentivize visitors to willingly give their data to you and generate zero-party, genuine and verified leads. All features are available during this trial period."
        },
        {
            q: "Can I cancel at any time?",
            a: "Of course! You can cancel your active charge at any time through your SuperLeadz Settings in the billing section or by simply uninstalling the app. Once uninstalled, no further charges will be submitted but your next Shopify bill may still have one remaining charge to be paid based on any partial billing cycle.",
            learn: "Learn More from shopify"
        }
    ]
    useEffect(() => {
        const items = document.querySelectorAll(".accordion button");
        function toggleAccordion() {
            const itemToggle = this.getAttribute('aria-expanded');

            for (let i = 0; i < items.length; i++) {
                items[i].setAttribute('aria-expanded', 'false');
            }

            if (itemToggle === 'false') {
                this.setAttribute('aria-expanded', 'true');
            }
        }
        items.forEach(item => item.addEventListener('click', toggleAccordion));
    }, [])

    const color = "#9BA4B5"

    return (
        <div className='faq-pag mt170 pb-5' style={{background:'#000', width:'150%'}}>
            <Row className='d-flex justify-content-center' style={{width:'100%'}}>
                    <h1 className='display-3 fw-bolder my-2 text-light text-center' >FAQ</h1>

                <Col sm="8" xs="11" className=''>

                    <div className="accordion">
                        {
                            faqData.map((data) => {
                                return (
                                    <div className="accordion-item" style={{background:'#000 '}}>
                                        <button id="accordion-button-1 " aria-expanded="false" className='px-2 position-relative'>
                                            <span className="accordion-title fs-2 text-white">{data.q}</span>
                                            {/* <span className="icon" aria-hidden="true"></span> */}
                                            <span className='icon-plu  fs-5 position-absolute ' style={{ top: '15px', right: '5px' }} aria-hidden="true" ><AiOutlinePlus color={color} /></span>
                                            <span className='icon-minu  fs-5 position-absolute ' style={{ top: '15px', right: '5px' }} aria-hidden="true" ><AiOutlineMinus color={color} /></span>
                                        </button>
                                        <div className="accordion-content">
                                            <p className='h4 fw-bold text-secondary lh-29 ms-2 mb-3'>{data.a} <span> <Link to='/'> {data.learn}</Link></span></p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Col >
            </Row>
        </div>
    )
}
