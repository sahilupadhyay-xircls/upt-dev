import S8 from '@src/assets/images/s8.png'
import React from 'react'
import { Col, Row } from 'reactstrap'

export const Section8 = () => {
  return (
    <div className=' mt-5 ' style={{background: "#502d3c", paddingTop: "49px", paddingBottom: "49px"}}>
        <Row className='mt-5' style={{background: "#663d4f", marginLeft: "120px", marginRight: "120px"}}>
            <Col className='d-flex text-center align-items-center' md={5}>
                <div>
                    <div className='section8-heading'>
                        <h1 className='text-white'>Harness the power of <span style={{color: "#fdb71c"}}>collaborative marketing</span></h1>
                    </div>
                    <div className='section8-info'>
                        <p className='text-white mt-1'>Build rewards & loyalty marketing solutions
that give your clients instant access to
a whole host of offers across product
categories</p>
                    </div>
                </div>
            </Col>
            
            <Col>
                <div className='section8-img text-center'>
                    <img src={S8}></img>
                </div>
            </Col>
        </Row>
    </div>
  )
}
