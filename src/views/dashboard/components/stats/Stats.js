// import {useContext}   from 'react'
// import { ThemeColors } from '@src/utility/context/ThemeColors'
import { Col, Row, Card, CardBody } from 'reactstrap'
import {LiaHandsHelpingSolid} from "react-icons/lia"
import {TbHandClick} from "react-icons/tb"
import {PiHandsClappingLight} from "react-icons/pi"
import { RiExchangeFundsLine } from "react-icons/ri"
import "./stats.css"

const Stats = () => {
    // const { colors } = useContext(ThemeColors)
    // console.log(colors)
  return (
    <>
         <Card>
                <CardBody>
                <Row className='match-height'>
                <Col xl='3' md='6' className='stats d-flex flex-column justify-content-center align-items-center gap-1 '>
                    <p className='customStyle openSerifFont mb-0'>Total Reach</p>
                    <h1 className='statsCount customStyle openSerifFont'>3,52,522</h1>
                    <div className='statsLogoReach rounded-circle'>
                        <div className=' statsLogo rounded-circle bg-white d-flex justify-content-center align-items-center'>
                            <LiaHandsHelpingSolid />
                        </div>                
                    </div>
                </Col>

                <Col xl='3' md='6' className='stats d-flex flex-column align-items-center gap-1'>
                    <p className='customStyle openSerifFont mb-0'>Clicks</p>
                    <h1 className='statsCount customStyle openSerifFont'>1,703</h1>
                    <div className='statsLogoClicks rounded-circle'>
                        <div className='statsLogo rounded-circle bg-white d-flex justify-content-center align-items-center rounded-circle'>
                            <TbHandClick />
                        </div>
                    </div>
                </Col>

                <Col xl='3' md='6' className='stats d-flex flex-column align-items-center gap-1'>
                    <p className=' customStyle openSerifFont mb-0'>Redemptions</p>
                    <h1 className='statsCount customStyle openSerifFont'>135</h1>
                    <div className='statsLogoRedemptions rounded-circle'>
                        <div className='statsLogo rounded-circle bg-white d-flex justify-content-center align-items-center rounded-circle'>
                            <PiHandsClappingLight />
                        </div>
                    </div>
                </Col>

                <Col xl='3' md='6' className='stats d-flex flex-column align-items-center gap-1'>
                    <p className=' customStyle openSerifFont mb-0'>Revenue</p>
                    <h1 className='statsCount customStyle openSerifFont'>0</h1>
                    <div className='statsLogoRevenue rounded-circle'>
                        <div className='statsLogo rounded-circle bg-white d-flex justify-content-center align-items-center rounded-circle'>
                            <RiExchangeFundsLine />
                        </div>
                    </div>
                </Col>
            </Row>
                </CardBody>
            </Card>
    </>
  )
}

export default Stats