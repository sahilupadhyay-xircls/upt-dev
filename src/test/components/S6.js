import React from 'react'
import { Card, Col, Row, CardBody } from 'reactstrap'
import { LuFocus, LuFlagTriangleRight } from 'react-icons/lu'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import ReactApexChart from 'react-apexcharts'

export default function S6() {

    const series = [{
        name: "Desktops",
        data: [10, 20, -5, 25, 18,]
    }]
    const options = {
        colors: ['#000'],
        chart: {
            background: '#none',
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            },
            dropShadow: {
                enabled: true,
                top: 0,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.35
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
            lineCap: 'butt',
            width: 2,
        },

        markers: {
            size: 3
        },
        grid: {
            show: false,

        },
        xaxis: {
            labels: {
                show: false
            },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            }
        },
        yaxis: {
            labels: {
                show: false
            },
        }

    }


    return (
        <div>
            <h2 className='mb-2 ms-3'>S6</h2>
            <Row className='px-2'>
                <Col lg="4">
                    <Card className='rounded-3 border' style={{ background: '#cfe1fb' }}>
                        <CardBody>
                            <div className='d-flex align-items-center'>
                                <div className='bg-primary text-white rounded-3 d-flex justify-content-center align-items-center me-1' style={{ padding: "8px " }} >
                                    <LuFocus size={18} /></div>
                                <div>
                                    <h4 className='m-0 fw-bolder text-black'>Software checking</h4>
                                    <h6 className='m-0 text-secondary'>2,541 assistance</h6>
                                </div>
                            </div>
                            <Row className=''>
                                <Col xs="7" className='d-flex justify-content-center align-items-center'>
                                    <h4 className='text-black fw-bolder'>$242,210 <span className='text-success'>+ 4.5%</span></h4>
                                </Col>
                                <Col xs="5">
                                    <ReactApexChart options={options} series={series} type="line" height={100} style={{ width: "100%", marginTop: '-10px' }} />
                                </Col>
                            </Row>
                            <div className='d-flex justify-content-evenly' style={{ marginTop: "-10px" }}>
                                <h6 className='text-black fw-bolder'><span><AiOutlineArrowDown color="red" /></span>45,930 <span className='text-secondary fw-bold'>USD</span></h6>
                                <h6 className='text-black fw-bolder'><span><AiOutlineArrowUp color="green" /></span>45,930 <span className='text-secondary fw-bold'>USD</span></h6>
                                <h6 className='text-black fw-bolder'><span><LuFlagTriangleRight color="#5B0888" /></span>92 <span className='text-secondary fw-bold'>TDP</span></h6>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card className='rounded-3 border' style={{ background: '#cfe1fb' }}>
                        <CardBody>
                            <div className='d-flex align-items-center'>
                                <div className='bg-primary text-white rounded-3 d-flex justify-content-center align-items-center me-1' style={{ padding: "8px " }} >
                                    <LuFocus size={18} /></div>
                                <div>
                                    <h4 className='m-0 fw-bolder text-black'>Software checking</h4>
                                    <h6 className='m-0 text-secondary'>2,541 assistance</h6>
                                </div>
                            </div>
                            <Row className=''>
                                <Col xs="7" className='d-flex justify-content-center align-items-center'>
                                    <h4 className='text-black fw-bolder'>$242,210 <span className='text-success'>+ 4.5%</span></h4>
                                </Col>
                                <Col xs="5">
                                    <ReactApexChart options={options} series={series} type="line" height={100} style={{ width: "100%", marginTop: '-10px' }} />
                                </Col>
                            </Row>
                            <div className='d-flex justify-content-evenly' style={{ marginTop: "-10px" }}>
                                <h6 className='text-black fw-bolder'><span><AiOutlineArrowDown color="red" /></span>45,930 <span className='text-secondary fw-bold'>USD</span></h6>
                                <h6 className='text-black fw-bolder'><span><AiOutlineArrowUp color="green" /></span>45,930 <span className='text-secondary fw-bold'>USD</span></h6>
                                <h6 className='text-black fw-bolder'><span><LuFlagTriangleRight color="#5B0888" /></span>92 <span className='text-secondary fw-bold'>TDP</span></h6>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card className='rounded-3 border' style={{ background: '#cfe1fb' }}>
                        <CardBody>
                            <div className='d-flex align-items-center'>
                                <div className='bg-primary text-white rounded-3 d-flex justify-content-center align-items-center me-1' style={{ padding: "8px " }} >
                                    <LuFocus size={18} /></div>
                                <div>
                                    <h4 className='m-0 fw-bolder text-black'>Software checking</h4>
                                    <h6 className='m-0 text-secondary'>2,541 assistance</h6>
                                </div>
                            </div>
                            <Row className=''>
                                <Col xs="7" className='d-flex justify-content-center align-items-center'>
                                    <h4 className='text-black fw-bolder'>$242,210 <span className='text-success'>+ 4.5%</span></h4>
                                </Col>
                                <Col xs="5">
                                    <ReactApexChart options={options} series={series} type="line" height={100} style={{ width: "100%", marginTop: '-10px' }} />
                                </Col>
                            </Row>
                            <div className='d-flex justify-content-evenly' style={{ marginTop: "-10px" }}>
                                <h6 className='text-black fw-bolder'><span><AiOutlineArrowDown color="red" /></span>45,930 <span className='text-secondary fw-bold'>USD</span></h6>
                                <h6 className='text-black fw-bolder'><span><AiOutlineArrowUp color="green" /></span>45,930 <span className='text-secondary fw-bold'>USD</span></h6>
                                <h6 className='text-black fw-bolder'><span><LuFlagTriangleRight color="#5B0888" /></span>92 <span className='text-secondary fw-bold'>TDP</span></h6>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>


        </div>
    )
}
