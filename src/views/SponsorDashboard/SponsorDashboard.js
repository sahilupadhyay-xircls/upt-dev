import {React} from 'react'
import {Col, Row, Card, CardBody} from 'reactstrap'

import TotalCount from './TotalCount'
import ReportStatus from './ReportStatus'
import TopData from './TopData'
import SponsoredRewardTable from '../tables/sponsorDashboard/SponsoredRewardTable'
import HostWiseReportTable from '../tables/sponsorDashboard/HostWiseReportTable'
import { Link } from 'react-router-dom'

const SponsorDashboard = () => {

 
  return (
    <>
      <Card>
        <CardBody className='d-flex justify-content-between align-items-center'>
          <h4 className='p-0 m-0'>Sponsor Dashboard - Privilege XIRCL Sponsor</h4>
          <Link to='/merchant/SponsorRewards' className='btn btn-primary fs-6'>Sponsor Reward</Link>
        </CardBody>
      </Card>

      <Row className='match-height'>
        <ReportStatus cols={{ xl: '3', sm: '6' }} />
      </Row>

      {/* total counts */}
      <Row className='match-height'>
        <TotalCount />
      </Row>

      {/*  top cal data*/}
      <Row className='match-height'>
        <TopData />
      </Row>

      {/* table my sponsored rewards */}

      <Row>
        <Col>
          <Card>
            <CardBody>
              {/* <TestTable /> */}
              <SponsoredRewardTable />

            </CardBody>
          </Card>
        </Col>

      </Row>


      {/* table my sponsored rewards */}
      <Row>
        <Col>
          <Card>
            <CardBody>
              <HostWiseReportTable />

            </CardBody>
          </Card>
        </Col>

      </Row>
    </>
  )
}

export default SponsorDashboard