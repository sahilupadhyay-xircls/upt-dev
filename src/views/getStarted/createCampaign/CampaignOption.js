import { useState } from 'react'
import { Card, CardBody, Button, Col, Row } from 'reactstrap'
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai"
import { MdOutlineTextsms } from "react-icons/md"
import "./CampaignStyle.scss"
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const CampaignOption = () => {
  const navigate = useNavigate()
  const [selectedOptions, setSelectedOptions] = useState([])

  const campaignOptions = [
    { id: '1', icon: <AiOutlineMail size={35} />, text: 'Email', link: "/merchant/create-campaign/sms" },
    { id: '2', icon: <AiOutlineWhatsApp size={35} />, text: 'WhatsApp', link: "/merchant/create-campaign/sms" },
    { id: '3', icon: <MdOutlineTextsms size={35} />, text: 'SMS', link: "/merchant/create-campaign/sms" }
  ]

  useEffect(() => {
    if (campaignOptions.length === 0) {
      navigate('/merchant/analytics2')
    }

  }, [])


  // handle click 
  function handleClick(id) {
    console.log(id)
    const result = campaignOptions.filter((item) => item.id === id)
    if (result.length !== 0) {
      const isChecked = selectedOptions.filter((item) => item.id === id)
      if (isChecked.length === 0) {
        setSelectedOptions([...selectedOptions, ...result])
        console.log("added")
      } else {
        const remove = selectedOptions.filter((item) => item.id !== id)
        setSelectedOptions([...remove])
        console.log("remove")
      }
    }
  }
  console.log("all ", selectedOptions);
  return (
    <div className=' d-flex justify-content-center align-items-center '>
      <Card className='w-75'>
        <h2 className='m-2 mb-0 p-1 '>Create Campaign</h2>
        <hr className='' />
        <CardBody >
          <h6 className='fs-6 ms-1'>What type of campaign would you like to send ?</h6>
          <div className='campaignOptions d-flex align-items-center justify-content-center flex-wrap '>

            {
              campaignOptions.map((item) => {
                let isChecked =false
                const isPresent = selectedOptions.filter((itm => itm.id === item.id))
                if (isPresent.length === 1) {
                  isChecked = true
                }
                return (
                  <div className={`btn col m-1 ${isChecked ? 'active' : ''} ` } onClick={() => handleClick(item.id)}>
                    <h3 className='m-1'>{item.icon}</h3>
                    <h5 className='text-black'> {item.text}</h5>
                  </div>
                )
              })
            }
          </div>

          <div className='d-flex justify-content-end flex-wrap p-1 mt-2'>
            <Link to='/merchant/analytics2' className='btn btn-outline-primary mt-1'>Cancel</Link>
            {
              selectedOptions.length === 0 ? <button className='btn btn-primary ms-1 mt-1' style={{opacity:"0.6", cursor: "not-allowed"}}>Create Campaign</button> 
              : <Link to='/merchant/create-campaign/sms' className='btn btn-primary ms-1 mt-1'>Create Campaign</Link> 
            }
            
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default CampaignOption