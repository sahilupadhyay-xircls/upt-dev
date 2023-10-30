import React from 'react'
import { Card, CardBody, Button, Col, Row } from 'reactstrap'
import Avatar from '@components/avatar'
import { MdOutlineSms } from 'react-icons/md'
import { TbTestPipe } from 'react-icons/tb'
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs'
import './CampaignStyle.scss'
export default function SmsCampaign() {

    const data = [
        {
            title: "One-time SMS message",
            desc: "Keep subscribers engaged and drive revenue by sharing your latest news or promoting a product or sale.",
            icon: <MdOutlineSms size={23} />,
            color: "light-primary"
        },
        {
            title: "A/B test",
            desc: "Send up to four variations of a single message, testing text or images to determine which performs best.",
            icon: <TbTestPipe size={23} />,
            color: "light-warning"
        },
        {
            title: "Select a message template",
            desc: "Choose from pre-written campaign messages and tailor to fit your brand.",
            icon: <BsReverseLayoutTextWindowReverse size={23} />,
            color: "light-secondary"
        }
    ]

    return (
        <Card>
            <CardBody>
                <h2 className='fw-bold m-2 ms-1'>Create a Campaign
                <p className='fs-5 fw-normal text-secondary'>Choose a campaign type to get started.</p> </h2>
                <Row>
                    <Col md="8" className='mt-1'>
                        <h4 className='fw-bolder m-1'>SMS Message</h4>

                        {
                            data.map((items) => {
                                return (

                                    <div className='listbox rounded d-flex justify-content-start align-items-center p-1 m-1 cursor-pointer ' >
                                        <Avatar color={items.color} icon={items.icon} className='me-2 ' style={{ padding: '5px' }} />
                                        <div >
                                            <h5 className='m-0 fs-5 fw-bolder' style={{ padding: "5px 0" }}>{items.title}</h5>
                                            <h6 className='m-0 font-small-3 text-secondary'>{items.desc}</h6>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className='text-center my-3'>

                            <Button color={"primary"} className='w-75'>Continue</Button>
                        </div>

                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}
