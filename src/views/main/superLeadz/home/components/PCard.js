// import React from 'react'
// import { BsArrowRight } from 'react-icons/bs'
// import { FiCheck } from 'react-icons/fi'
// import { Col, Row } from 'reactstrap'



// // components 
// import { Link } from 'react-router-dom'

// export default function Pcard({ head, value, subValue, button, listHead, items }) {
//     // data 
//     const Pricing = [
//         {
//             head: "Free",
//             value:"0$/mo",
//             subValue:"25$ per annum",
//             button:"Click me",
//             listHead:"This is List head",
//             items:[{name:"1 User"},
//             {name:"Unlimited Tasks"},
//             {name:"1GB Storage"}]
//         },
//         {
//             title: "Marketing Agencies",
//             desc: "who want to recommend XIRCLS solutions to their clients."
//         },
//         {
//             title: "Startup Communities",
//             desc: "Such as incubators & accelerators who wish to offer startups a sustainable way to kickstart revenue generations."
//         },
//         {
//             title: "Publishers & Influencer",
//             desc: "Interested in earning commission by referring their audience."
//         },
//         {
//             title: "Other Solution Providers",
//             desc: "Such as resellers, consultancies who offer consulting & implementation services"
//         },
//     ]
//     const color = '#9BA4B5'
//     return (
//         <>
//             {/* <div className='mt-3 mt-md-2 p-0 p-md-2'>
//                 <div className='fs-1 text-secondary' style={{}}>
//                     {icon}
//                 </div>
//                 <div className='mt-1 p-mt-2'>
//                     <h2 className=' text-black '>{title}</h2>
//                     <h4 className=' fw-bold text-secondary lh-29'>{desc}</h4>
//                 </div>
//             </div> */}

//             <div>
//                 <div className={Pricing}>
//                     <div>
//                         {/* <h1 className='display-5 main-heading fw-bolder px-02 pt-4'>Grow Plan</h1> */}
//                         <div>
//                             <h3 className='text-black fw-bold p-0 pt-1 px-1 pt-5'>{head}</h3>
//                         </div>
//                         <div>
//                             <h1 className='text-primary fs-1 fw-bold p-0 pt-0'>{value}</h1>
//                         </div>
//                         <div>
//                             <h2 className='text-black fs-5 fw-bold p-0 pt-0'>{subValue}</h2>
//                         </div>
//                         <Link className=' btn  main-btn-blue fs-3 mt-1 mb-1'>{button}</Link>
//                         <div>
//                             <div>
//                                 <h2 className='text-black fs-5 fw-bold p-0 pt-1'>{listHead}</h2>
//                             </div>
//                             <ul className="" style={{ listStyle: 'none' }}>
//                                 {items.map((item, index) => (
//                                     <li key={index} className="text-start text-black fs-5 pt-1 d-flex" > <FiCheck className='' color={'#2f85ff'} size={20} style={{ minWidth: "30px" }} />
//                                         <div className='ps-1 pe-1'>
//                                             {item.title}
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div >
//                         {
//                                         Pricing.map((data) => {
//                                             return (
//                                                 <Col lg="4" md="6" className=''>
//                                                     <Pcard icon={data.icon} title={data.title} desc={data.desc} />
//                                                 </Col>
//                                             )
//                                         })
//                                     }
//                         <a className="fs-5 text-primary float-start ps-3 pb-3 mt-1"> Read More <BsArrowRight /></a>
//                         <div>
//                         </div>
//                     </div >
//                 </div >
//             </div>

//             {/* <div className={`partnerPage`} style={{ background: "#fff" }}>

//                 <div className=' d-flex justify-content-center align-items-center flex-column mt170' >
//                     <div className=' text-center'>
//                         <h2 className='display-3 text-center main-heading fw-bolder'>
//                             Why Become a XIRCLS Partner?
//                         </h2>
//                         <Row className='justify-content-center'>
//                             <Col xs="10" md="10" lg="10" xl="9">
//                                 <Row className='text-start match-height   mt-2'>
//                                     {
//                                         Pricing.map((data) => {
//                                             return (
//                                                 <Col lg="4" md="6" className=''>
//                                                     <PCard icon={data.icon} title={data.title} desc={data.desc} />
//                                                 </Col>
//                                             )
//                                         })
//                                     }
//                                 </Row>
//                             </Col>
//                         </Row>
//                     </div>
//                 </div>

//             </div> */}


//         </>
//     )
// }

// <div>
//     {
//         ` // pricing.map((data) => {
//   //   return (
//   //     <Col lg="4" md="6" className=''>
//   //       {/* <Pcard icon={data.icon} title={data.title} desc={data.desc} /> */}
//   //     </Col>
//   //   )
//   // })`
//     }
// </div>

import React from 'react';
import { FiCheck } from 'react-icons/fi';

export default function Pcard({ head, value, subValue, button, listHead, items }) {
    return (
        <div>
            <div>
                <h3 className='text-black fw-bold p-0 pt-1 px-1 pt-5'>{head}</h3>
                <h1 className='text-primary fs-1 fw-bold p-0 pt-0'>{value}</h1>
                <h2 className='text-black fs-5 fw-bold p-0 pt-0'>{subValue}</h2>
                <button className='btn main-btn-blue fs-3 mt-1 mb-1'>{button}</button>
                <div>
                    <h2 className='text-black fs-5 fw-bold p-0 pt-1'>{listHead}</h2>
                    <ul className="" style={{ listStyle: 'none' }}>
                        {items.map((item, index) => (
                            <li key={index} className="text-start text-black fs-5 pt-1 d-flex" > <FiCheck className='' color={'#2f85ff'} size={20} style={{ minWidth: "30px" }} />
                                <div className='ps-1 pe-1'>
                                    {item.title}
                                </div>
                            </li>


                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

