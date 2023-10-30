import { useState } from 'react'
import { Card, CardBody, Row, Col } from 'reactstrap'
import "./emailKlaviyo.css"

const EmailKlaviyo = () => {
    const [campaignName, setCampaignName] = useState("")

    const [tagName, setTagName] = useState("Select Tag")
    const tagOptions = ["Tag 1", "Tag 2", "Tag 3"]

    const [sentEmail, setSentEmail] = useState("option 1")
    const sentList = ["option 1", "option 2", "option 3"]

    const [dontSentEmail, setDontSentEmail] = useState("option 1")
    const dontSentList = ["option 1", "option 2", "option 3"]

    const handleSend = () => {
        console.log("Campaign Name:", campaignName)
        console.log("Tag Name:", tagName)
        console.log("Sent Email:", sentEmail)
        console.log("Don't Sent Email:", dontSentEmail)

        // const form_data = new FormData()
        // form_data.append('referrer_value', campaignName)
        // form_data.append('referrer_type', tagName)
        // form_data.append('referrer_minimum', sentEmail)
        // form_data.append('referree_value', dontSentEmail)
        // let data = new FormData()
        // data.append('user_id', '524dfd6b-8c99-437e-8541-6ac67f0ed7a7') 
        // data.append('shop', 'bombayclub.myshopify.com') 
        // data.append('campaign_name', 'qwertyuiop') 
        // data.append('smart_send', 'True') 
        // data.append('subject', 'Discount') 
        // data.append('preview_text', 'Hellooo') 
        // data.append('reply_to_address', 'True') 
        // data.append('template', fs.writeFile("about.txt", "about us", (err) => {
        //     if (err) {
        //       console.log(err)
        //     } else {
        //       console.log("File created")
        //     }
        //   }))
        // data.append('domain', 'SMTP') 
        // data.append('app', 'superleadz') 
        // data.append('event', 'discount') 
        // data.append('campaign_details', '{"send_to":"59e88d2f-ecd5-476b-a757-54f584fe5337","schedule":true,"schedule_time":"10:50:00"}') 
        // data.append('campaign_type', 'Broadcast Campaign') 

        fetch(`https://0826-103-197-226-50.ngrok-free.app/accounts/campaign/`, {
            method: "POST",
            // body: data
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.log(error)
        })

        setCampaignName("")
        setTagName("Select Tag")
        setSentEmail("option 1")
        setDontSentEmail("option 1")
    }

  return (
    <>
        <Card>
            <CardBody>
                <h4>Campaign Information</h4>
                <Row>
                    <Col md={6}>
                        <div >
                            <h6 className="form-label fs-5 fw-bolder my-1">Name</h6>
                            <input type="text" id='campaignName' className='w-100 p-1 rounded border-1' value={campaignName} onChange={(e) => { setCampaignName(e.target.value) } } placeholder="Enter campaign name" required />
                        </div>
                    </Col>

                    <Col md={6}>
                    <div className="mb-3">
                    <h6 className="fs-5 fw-bolder my-1">Tag</h6>
                        <div className='w-100'>
                        <button className="toggleBtn w-100 p-1 btn btn-outline-secondary fs-6 dropdown-toggle text-start" type="button" data-bs-toggle="dropdown">
                            {tagName}
                        </button>
                        <ul className="w-50 dropdown-menu">
                            {
                                tagOptions.map(ele => {
                                    return (
                                        <li key = { ele } className=" dropdown-item cursor-pointer" onClick={ () => setTagName(ele) }>
                                            { ele}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        </div>

                    </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>

        <Card>
            <CardBody>
                <div className=' d-flex justify-content-between align-items-center'>
                    <h4>Recipients</h4>
                    <button className="btn btn-outline-secondary text-primary fs-6" type="button">Upload</button>
                </div>

                <div >
                    <h6 className="form-label fs-5 fw-bolder my-1">Send to</h6>
                    <div className='w-100'>
                    <button className="toggleotion w-100 p-1 btn btn-outline-secondary fs-6 dropdown-toggle text-start" type="button" data-bs-toggle="dropdown">
                        {sentEmail}
                    </button>
                        <ul className="w-100 dropdown-menu">
                        {
                            sentList.map(ele => {
                                    return (
                                        <li key = { ele } className=" dropdown-item cursor-pointer" onClick={ () => setSentEmail(ele) }>
                                            { ele}
                                        </li>
                                    )
                            })
                        }
                        </ul>
                        </div>
                </div>

                <div >
                    <h6 className="form-label fs-5 fw-bolder my-1">Don't send to <span className=' opacity-50'>(Optional)</span></h6>
                    <div className='w-100'>
                    <button className="toggleotion w-100 p-1 btn btn-outline-secondary fs-6 dropdown-toggle text-start" type="button" data-bs-toggle="dropdown">
                        {dontSentEmail}
                    </button>
                    <ul className="w-100 dropdown-menu">
                    {
                        dontSentList.map(ele => {
                                    return (
                                        <li key = { ele } className=" dropdown-item cursor-pointer" onClick={ () => setDontSentEmail(ele) }>
                                            { ele}
                                        </li>
                                    )
                                })
                    }
                    </ul>
                    </div>
                </div>
                <br/>
                <button className='btn btn-primary' onClick={handleSend}>Send</button>
                <br/>
                <br/>
                <h5 className='mb-1'>Skip recently emailed profiles</h5>
                <p>This campaign will skip profile who received an email in the past 16 hours. Also called Smart Sending, you can update this timeframe in <a href="#" className=' text-decoration-none'>Account Setting</a></p>
            </CardBody>
        </Card>
    </>
  )
}

export default EmailKlaviyo