import React, {useState} from 'react'
import { FaDotCircle } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import "./news.css"

const NewsLetter = () => {
    const [newsFeed, setNewsFeed] = useState("report")
    const navigate = useNavigate()
    const routeChange = (path) => { 
        setNewsFeed(path)
        navigate(`/merchant/dashboard/${path}`)
    }
  return (
    <>
      <div >
        <ul className='mb-2 list-unstyled d-inline-flex'>
            <li className={newsFeed === "report" ? " feedToggle customStyle text-capitalize cursor-pointer" : "customStyle text-capitalize cursor-pointer"} onClick={() => setNewsFeed("report")}>Reports</li>
            <li className={newsFeed === "notification" ? " feedToggle mx-3 customStyle text-capitalize cursor-pointer" : "mx-3 customStyle text-capitalize cursor-pointer"} onClick={() => setNewsFeed("notification")}>Notification</li>
        </ul>
        {
            newsFeed === "report" ? (
                <div className='abc'>
                            <h5 className='text-capitalize mx-1 cursor-pointer' onClick={() => routeChange("report")}><FaDotCircle size={11} style={{ color: "#28304" }} />  Your collaborations are helping you precisely reach your ideal audience.</h5>
                            <p className='mx-1' onClick={() => routeChange("report")}>30 customers of partner merchants received your marketing offer/s. 27 of them interacted with you.</p>
                            <hr className='mx-1' />
                            <h5 className='text-capitalize mx-1 cursor-pointer' onClick={() => routeChange("report")}><FaDotCircle size={11} style={{ color: "#28304" }} /> Your customers love being rewarded!</h5>
                            <p className='mx-1' onClick={() => routeChange("report")}>You rewarded 25 customers for buying from you today. 20 of them engaged with the reward email they received.</p>
                            <hr className='mx-1' />
                            <h5 className='text-capitalize mx-1 cursor-pointer' onClick={() => routeChange("report")}><FaDotCircle size={11} style={{ color: "#28304" }} /> Your partnership with The Pink Box looks promising.</h5>
                            <p className='mx-1' onClick={() => routeChange("report")}>You acquired 10 brand-new customers today and 2 of them are customers of The Pink Box.</p>
                            <hr className='mx-1' />
                            <h5 className='text-capitalize mx-1 cursor-pointer' onClick={() => routeChange("report")}><FaDotCircle size={11} style={{ color: "#28304" }} /> Ka-ching!</h5>
                            <p className='mx-1' onClick={() => routeChange("report")}>You earned XXX today through XIRCLS. Boost your revenue with more XIRCLS products. Explore now!</p>
                            <hr className='mx-1' />
                            <h5 className='text-capitalize mx-1 cursor-pointer' onClick={() => routeChange("report")}><FaDotCircle size={11} style={{ color: "#28304" }} /> The Pink Box customers seem to be into you!</h5>
                            <p className='mx-1' onClick={() => routeChange("report")}>20 The Pink Box customers clicked on your offer today / became your customers today. </p>
                            <hr className='mx-1' />
                            <h5 className='text-capitalize mx-1 cursor-pointer' onClick={() => routeChange("report")}><FaDotCircle size={11} style={{ color: "#28304" }} /> StoneSoup's customers aren't responding to your offer.</h5>
                            <p className='mx-1' onClick={() => routeChange("report")}>Even though 20 of them clicked on your offer, 0 ended up redeeming it. </p>
                            <hr className='mx-1' />
                            <h5 className='text-capitalize mx-1 cursor-pointer' onClick={() => routeChange("report")}><FaDotCircle size={11} style={{ color: "#28304" }} /> Your customers love Bewakoof!</h5>
                            <p className='mx-1' onClick={() => routeChange("report")}>59% of your customers have shown interest in Bewakoof's offers and 20 of them have redeemed it. We recommend these XIRCLS products to deepen your partnership with this brand. </p>
                            <hr className='mx-1' />
                            <h5 className='text-capitalize mx-1 cursor-pointer' onClick={() => routeChange("report")}><FaDotCircle size={11} style={{ color: "#28304" }} /> You're popular with customers of "category" products!</h5>
                            <p className='mx-1' onClick={() => routeChange("report")}>29% of customers in this category have shown interest in you, and 10% of them have become your customers. Explore more partnerships in this category. </p>
                            <hr className='mx-1' />
                            <h5 className='text-capitalize mx-1 cursor-pointer' onClick={() => routeChange("report")}><FaDotCircle size={11} style={{ color: "#28304" }} /> Wallet balance is low!</h5>
                            <p className='mx-1' onClick={() => routeChange("report")}>Renew/upgrade your plan before your campaign stops. </p>
                        </div>
            ) : (
                <div className=' mx-2 '>
                    <h5 className=' customStyle text-capitalize cursor-pointer' onClick={() => routeChange("notification")}>notification</h5>
                </div>
            )
        }
    </div>
    </>
  )
}

export default NewsLetter