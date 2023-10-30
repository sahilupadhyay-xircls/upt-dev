// ** React Imports
import { Fragment } from 'react'
import chat from '../../assets/sidebar/chat.png'
import shedule from '../../assets/sidebar/schedule.png'
import expreriment from '../../assets/sidebar/growth.png'
import bill from '../../assets/sidebar/bill 1.png'
import { Label, Row, Col, Form, Input, Card, Table, CardText } from 'reactstrap'
import { FileText, User, MapPin, Link } from 'react-feather'
import './campaign.css'

const WizardModernVertical = () => {
  return (
    <Fragment>
      <Card>

        <Row>
          <Col md={6} >
            <div className='content-header p-1'>
              <h2 className='mb-0 heading-1'>Create a campaign </h2>
              <small style={{ fontSize: '12px' }}>Choose a campaign type to get started</small>
            </div>

            <h3 className='p-1'>SMS Message</h3>
            <div className='d-flex item-contain m-1'>
              <div> <img src={chat} className='img-log p-1' alt /></div>
              <div className='flex-grow-1 p-1'>
                <h5 className='mb-0'>One-time SMS message</h5>
                <CardText className='text-truncate p-[4px]'>
                  Keep Subscribers engagem s kskssksks sdkbskj
                </CardText>

              </div>
            </div>
            <div className='d-flex item-contain m-1'>
              <div> <img src={expreriment} className='img-log p-1' alt /></div>
              <div className='flex-grow-1 p-1'>
                <h5 className='mb-0'>One-time SMS message</h5>
                <CardText className='text-truncate p-[4px]'>
                  Keep Subscribers engagem s kskssksks sdkbskj
                </CardText>

              </div>
            </div><div className='d-flex item-contain m-1'>
              <div> <img src={shedule} className='img-log p-1' alt /></div>
              <div className='flex-grow-1 p-1'>
                <h5 className='mb-0'>One-time SMS message</h5>
                <CardText className='text-truncate p-[4px]'>
                  Keep Subscribers engagem s kskssksks sdkbskj
                </CardText>

              </div>
            </div>
            <button className='button m-1 p-1' style={{ background: '#fcee53' }}>Continue</button>

          </Col>
          <Col md={6} className='img-bg'>
            <img src={bill} alt="" />
          </Col>
        </Row>
      </Card>

    </Fragment>

  )
}

export default WizardModernVertical
