import { Col, Row, Card, CardBody } from 'reactstrap'
import {Link} from 'react-router-dom'
import './Campaign.css'
import TableRewardOffer from '../tables/data-tables/basic/TableRewardOffer'
import ReportStatus from './ReportStatus'
import TotalCount from './TotalCount'
import TopData from './TopData'
function HostDashboard() {
    return (
        <>
            <Card>
                <CardBody className='d-flex justify-content-between align-items-center'>
                    <h4 className='p-0 m-0'>Host Dashboard</h4>
                    <div className='d-flex gap-1'>
                        <Link to='/merchant/sponsorDashboard' className='btn btn-primary fs-6' >Check In</Link>
                        <a className='btn btn-primary fs-6'>Check Out</a>
                        <Link to={`/merchant/host/add-reward/details`} className='btn btn-primary fs-6'>Add Reward</Link>
                    </div>
                </CardBody>
            </Card>

            <Card>

                {/* todays report */}

                <Row className='match-height'>
                    <ReportStatus cols={{ xl: '3', sm: '6' }} />
                </Row>

            </Card>

            {/* total counts */}

            <Row className='match-height'>
                <TotalCount />
            </Row>


            {/*  top data*/}
            <Row className='match-height'>
                <TopData />
            </Row>

{/* tables */}
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <div className='table'>
                                <TableRewardOffer />
                            </div>
                        </CardBody>
                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default HostDashboard