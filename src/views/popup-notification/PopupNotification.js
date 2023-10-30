import { useState } from 'react'
import { Card, CardBody } from 'reactstrap'
import { AiOutlineBell } from "react-icons/ai"
import { RxCross2 } from "react-icons/rx"
import "./PopupNotification.css"
import content from "./content.json"

const PopupNotification = () => {
    const [cardPop, setCardPop] = useState(true)
    const [cardTitle, setCardTitle] = useState("SuperLeadz")

    const titleList = ["SuperLeadz", "Infiniti", "Semper Fi", "DemoCrazy"]
    const handleClick = (title) => {
        // setCardTitle(content.filter(item => item.title === cardTitle))
        setCardTitle(title)
        setCardPop(true)
    }
  return (
    <div className=' position-relative '>
        <Card>
            <CardBody>
                <h2>Popup Notification</h2>
            </CardBody>
        </Card>

        <Card>
            <CardBody>
                {
                    titleList.map(title => (
                        <>
                            <button type='button' className='btn btn-primary' onClick={() => handleClick(title)}>{title}</button><br/><br/>
                        </>
                    ))
                }
            </CardBody>
        </Card>

        {
            content.filter(item => item.title === cardTitle).map(ele => (
                <div className={`position-absolute popupCard ${cardPop ? "popupCardDown" : "popupCardUp" }  z-2`}>
                    <Card>
                        <CardBody>
                            <div className="d-flex justify-content-between flex-row-reverse align-items-center mb-2">
                                <RxCross2 onClick={() => setCardPop(false)} />
                                <div className=' d-flex align-items-center'>
                                    <AiOutlineBell size={30} color='aqua'/>
                                    <h6 style={{ marginLeft: "10px"}}>{ ele.title }</h6>
                                </div>
                            </div>
                            <div className='scrollDiv'>
                                <ul className=' mx-2'>
                                    <li className='mb-2'>
                                        <h6 className='mb-1'>What it does</h6>
                                        <p style={{fontSize: "12px"}}>{ele.whatItDoes}</p>
                                    </li>
                                    
                                    <li className='mb-2'>
                                        <h6 className='mb-1'>How it works</h6>
                                        <ol>
                                            {
                                                ele.howItWorks.map(item => (
                                                    <li className='mb-1' style={{fontSize: "12px"}}>{item}</li>
                                                ))
                                            }
                                        </ol>
                                    </li>
                                    
                                    <li className='mb-2'>
                                        <h6 className='mb-1'>Benefits</h6>
                                        <ol>
                                            {
                                                ele.benefits.map(item => (
                                                    <li className='mb-1' style={{fontSize: "12px"}}>{item}</li>
                                                ))
                                            }
                                        </ol>
                                    </li>
                                    
                                    <li className='mb-2'>
                                        <h6 className='mb-1'>Recommended for these goals</h6>
                                        <ol>
                                            {
                                                ele.recommended.map(item => (
                                                    <li className='mb-1' style={{fontSize: "12px"}}>{item}</li>
                                                ))
                                            }
                                        </ol>
                                    </li>
                                </ul>
                            </div>
                            <div className=' d-flex justify-content-end'>
                                <button type="button" className='btn btn-primary mt-2'>Next</button>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            ))
        }
    </div>
  )
}

export default PopupNotification