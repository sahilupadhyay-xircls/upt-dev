import React from 'react'
import Avatar from '@components/avatar'
import { Box } from 'react-feather'
import { Col, Card, CardBody } from 'reactstrap'

export default function TopData() {
  return (
    <>
    <Col xl='4' md='4' xs='12' >
          <Card >
            <CardBody>
              <h2 className='fs-4 fw-bold  '>Top Sponsers</h2>
              <div className='py-1'>
                <h4 className='fs-6'>No data to display</h4>

              </div>
            </CardBody>
          </Card>
        </Col>
        

        <Col xl='4' md='4' xs='12' >
          <Card >
            <CardBody>
              <h2 className='fs-4 fw-bold  '>Top Performing Rewards</h2>
              <div className='py-1'>
                <h4 className='fs-6'>No data to display</h4>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl='4' md='4' xs='12' >
            <Card >
              <CardBody className='d-flex justify-content-between align-items-center'>

                <h4 className='fs-5 fw-bold m-0'>Average Discount</h4>
                <Avatar color={"light-primary"} icon={<Box size={20} />} style={{padding:"5px"}}/>
              </CardBody>

            </Card>
            <Card >
            <CardBody className='d-flex justify-content-between align-items-center'>

              <h4 className='fs-5 fw-bold m-0'>Average Earnings / sponser</h4>
              <Avatar color={"light-primary"} icon={<Box size={20}  />}  style={{padding:"5px"}}  />
              </CardBody>
            
            </Card>
        </Col>
        </>
  )
}
