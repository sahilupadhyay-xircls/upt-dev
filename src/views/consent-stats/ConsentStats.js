import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { BsFillPeopleFill } from "react-icons/bs"
import { SiAdguard } from "react-icons/si"
import DoubleBarChart from './DoubleBarChart'
import "./consent.css"
import ApexPieChart from './ApexPieChart'

const ConsentStats = () => {
  return (
    <>
      <h4 className='mt-1 mb-3'>Consent Status</h4>
      <Row>
        <Col md='6'>
          <div className="d-flex flex-wrap justify-content-between">
            <Card className='consentCard'>
              <CardBody className=' d-flex flex-column align-items-center'>
                <div className='consentLogo mb-1 d-flex justify-content-center align-items-center text-white bg-primary rounded-circle'>
                  <BsFillPeopleFill />
                </div>
                <h5 className=' text-center fw-bolder'>43,000</h5>
                <p className=' text-center'>Total Messaging Contacts</p>
              </CardBody>
            </Card>

            <Card className='consentCard'>
              <CardBody className=' d-flex flex-column align-items-center'>
                <div className='consentLogo mb-1 d-flex justify-content-center align-items-center text-white bg-primary rounded-circle'>
                  <SiAdguard />
                </div>
                <h5 className=' text-center fw-bolder'>2,000</h5>
                <p className=' text-center'>Reachable Opted in</p>
              </CardBody>
            </Card>
          </div>

          <Card>
            <CardBody>
              <h5 className=' mb-2'>Consent Status</h5>

              <div className="d-flex justify-content-center ">
                <ApexPieChart />
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col md='6'>
          <Card>
            <CardBody>
              <h5>Opt-in by Content Type</h5>
              <DoubleBarChart />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ConsentStats