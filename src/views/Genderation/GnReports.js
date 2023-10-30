import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, CardTitle, Col, Container, Row, Tooltip } from 'reactstrap'
import { Feather, GitHub, Gitlab, Plus, User, Users, X} from 'react-feather'
import './GnReports.css'
import { Link } from 'react-router-dom'

export default function GnReports() {

  // const [showTotalVisitSignUpList, setShowTotalVisitSignUpList] = useState(false)
  // const [showUniqueSignUpList, setShowUniqueSignUpList] = useState(false)
  const [showAverageTimeSignUpList, setShowAverageTimeSignUpList] = useState(false)
  const [showNoOfSignUpList, setShowNoOfSignUpList] = useState(false)
  const [showConversionSignUpList, setShowConversionSignUpList] = useState(false)
  const [showBreakdownSignUpList, setShowBreakdownSignUpList] = useState(false)
   const [data, setData] = useState({})

     // https://api.xircls.in/api/v1/customer_revenue/?shop=niketsingh.myshopify.com&app_name=genderation

    const getData = () => {
    fetch("https://api.xircls.in/api/v1/add/customer_details/?shop=niketsingh.myshopify.com&app_name=genderation")
      .then(response => response.json())
      .then(resp => {
        console.log(resp, 'jghjh')
        console.log(resp.status)
        console.log('inside: ', resp.status[1].gender)
        console.log(data)
        setData(data)

      const maleCount = resp.status.filter(item => item.gender === "male").length
      const femaleCount = resp.status.filter(item => item.gender === "female").length
      const transgenderCount = resp.status.filter(item => item.gender === "transgender").length

      // Update the count values in the JSX
      document.getElementById('maleCount').innerText = maleCount
      document.getElementById('femaleCount').innerText = femaleCount
      document.getElementById('transgenderCount').innerText = transgenderCount
      })
      .catch((error) => {
        console.log(error)
        setData([])
      })
  }

  useEffect(() => {
    getData()
  }, [])

  const putData = () => {
    fetch("https://api.xircls.in/api/v1/customer_revenue/?shop=niketsingh.myshopify.com&app=genderation")
      .then(response => response.json())
      .then(resp => {
        console.log(resp, 'jghjh')
        console.log('inside: ', resp.response[1].revenue)
        console.log(data)
        setData(data)

        const totalRevenue = resp.response.reduce((total, item) => total + item.revenue, 0)
      const formattedRevenue = totalRevenue.toLocaleString()
      document.getElementById('Revenue').innerText = formattedRevenue

      })
      .catch((error) => {
        console.log(error)
        setData([])
      })
  }


useEffect(() => {
    putData()
  }, [])

  return (
    <>
      <Container>
        <Row>
          <Col md='5' className='mt-1'>
            <Card className=' px-1 mb-2'>
              <CardHeader>
                <h1 className='m-0'>Sign-Ups</h1>
                {/* <p style={{ fontSize: '1.5rem' }}>
                  0
                </p> */}
              </CardHeader>
              <CardBody className='py-0'>
                <CardTitle className='d-flex justify-content-between mt-1'>
                  <div className='d-flex justify-content-center align-items-center'>
                    <div style={{ backgroundColor: '#00cfe8', padding: '7px', borderRadius: '50%' }}>
                      <User strokeWidth="2" width="25" height="25" style={{ color: 'white' }} />
                    </div>
                    <h5 className='m-1 card-text'>
                      Male
                    </h5>
                  </div>
                  <p style={{ fontSize: '1.3rem' }} id="maleCount">
                    0
                  </p>
                </CardTitle>
                <CardTitle className='d-flex justify-content-between mt-1'>
                  <div className='d-flex justify-content-center align-items-center'>
                    <div style={{ backgroundColor: 'pink', padding: '7px', borderRadius: '50%' }}>
                      <Users strokeWidth="2" width="25" height="25" style={{ color: 'white' }} />
                    </div>
                    <h5 className='m-1 card-text'>
                      Female
                    </h5>
                  </div>
                  <p style={{ fontSize: '1.3rem' }} id='femaleCount'>
                    0
                  </p>
                </CardTitle>
                <CardTitle className='d-flex justify-content-between mt-1'>
                  <div className='d-flex justify-content-center align-items-center'>
                    <div style={{ backgroundColor: '#7367f0', padding: '7px', borderRadius: '50%' }}>
                      <Feather strokeWidth="2" width="25" height="25" style={{ color: 'white' }} />
                    </div>
                    <h5 className='m-1 card-text'>
                      Transgender
                    </h5>
                  </div>
                  <p style={{ fontSize: '1.3rem' }} id='transgenderCount'>0</p>
                </CardTitle>
                <Link to='/merchant/sf-dashboard'>
                  <div className='d-flex justify-content-start align-items-start mb-2' style={{hover: 'pointer'}}>
                    <div><a className='ms-5' style={{textDecoration: 'underline'}}>Add More</a></div>
                  </div>
                </Link>
              </CardBody>
            </Card>
          </Col>
          <Col md='7'>
            <Row className=' mt-1 p-13'>
              <Col className="col-6">
                <Card>
                  <CardHeader id="totalVisitsTooltip1"> {/* Add the id attribute */}
                    <h3 className="card-text">
                      Total Visits
                    </h3>
                  </CardHeader>
                  <CardBody>
                    <p style={{ fontSize: '1.3rem' }}>0</p>
                  </CardBody>
                </Card>
                {/* <Tooltip
                  placement="bottom"
                  isOpen={showTotalVisitSignUpList}
                  target="totalVisitsTooltip1"
                  toggle={() => setShowTotalVisitSignUpList(!showTotalVisitSignUpList)}
                  style={{ borderRadius: '13%', boxShadow: '0 0 8px rgba(0, 0, 0,0.15)' }}
                >
                  <ul className="list-group  bg-white">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: '#00cfe8', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <User strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='ms-1'>
                        Male
                      </span>
                      <span className="ms-auto fw-bolder">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: 'pink', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <Users strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='ms-1'>
                        Female
                      </span>
                      <span className="ms-auto fw-bolder">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: '#7367f0', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <Feather strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='ms-1'>
                        Transgender
                      </span>
                      <span className="ms-1 fw-bolder">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: '#f3904f', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <GitHub strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='ms-1'>
                        Cat Lover
                      </span>
                      <span className="ms-auto fw-bolder">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: '#774f38', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <Gitlab strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='ms-1'>
                        Dog Lover
                      </span>
                      <span className="ms-auto fw-bolder">1</span>
                    </li>
                  </ul>
                </Tooltip> */}
              </Col>
              <Col className="col-6">
                <Card>
                  <CardHeader id="totalVisitsTooltip2"> {/* Add the id attribute */}
                    <h3 className="card-text">
                      Unique Visits
                    </h3>
                  </CardHeader>
                  <CardBody>
                    <p style={{ fontSize: '1.3rem' }}>0</p>
                  </CardBody>
                </Card>
                {/* <Tooltip
                  placement="bottom"
                  isOpen={showUniqueSignUpList}
                  target="totalVisitsTooltip2"
                  toggle={() => setShowUniqueSignUpList(!showUniqueSignUpList)}
                  style={{ backgroundColor: 'white', borderRadius: '13%', color: 'black', boxShadow: '0 0 8px rgba(0, 0, 0,0.15)' }}
                >
                  <ul className="list-group rounded">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: '#00cfe8', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <User strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='ms-1'>
                        Male
                      </span>
                      <span className="ms-auto fw-bolder">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: 'pink', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <Users strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='ms-1'>
                        Female
                      </span>
                      <span className="ms-auto fw-bolder">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: '#7367f0', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <Feather strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='ms-1'>
                        Transgender
                      </span>
                      <span className="ms-1 fw-bolder">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: '#f3904f', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <GitHub strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='ms-1'>
                        Cat Lover
                      </span>
                      <span className="ms-auto fw-bolder">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: '#774f38', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <Gitlab strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='ms-1'>
                        Dog Lover
                      </span>
                      <span className="ms-auto fw-bolder">1</span>
                    </li>
                  </ul>
                </Tooltip> */}
              </Col>
              <Col className="col-6">
                <Card>
                  <CardHeader id="totalVisitsTooltip3"> {/* Add the id attribute */}
                    <h3 className="card-text">
                      Average Time
                    </h3>
                  </CardHeader>
                  <CardBody>
                    <p style={{ fontSize: '1.3rem' }}>0</p>
                  </CardBody>
                </Card>
                <Tooltip
                  placement="bottom"
                  isOpen={showAverageTimeSignUpList}
                  target="totalVisitsTooltip3"
                  toggle={() => setShowAverageTimeSignUpList(!showAverageTimeSignUpList)}
                  style={{ backgroundColor: 'white', borderRadius: '13%', color: 'black', boxShadow: '0 0 8px rgba(0, 0, 0,0.15)' }}
                >
                  <ul className="list-group rounded">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: '#00cfe8', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <User strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='ms-1'>
                        Male
                      </span>
                      <span className="ms-auto fw-bolder">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: 'pink', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <Users strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='ms-1'>
                        Female
                      </span>
                      <span className="ms-auto fw-bolder">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: '#7367f0', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <Feather strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='  ms-1'>
                        Transgender
                      </span>
                      <span className="ms-1 fw-bolder">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: '#f3904f', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <GitHub strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='ms-1 '>
                        Cat Lover
                      </span>
                      <span className="ms-auto fw-bolder">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: '#774f38', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <Gitlab strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='ms-1 '>
                        Dog Lover
                      </span>
                      <span className="ms-auto fw-bolder">1</span>
                    </li>
                  </ul>
                </Tooltip>
              </Col>
              <Col className="col-6">
                <Card>
                  <CardHeader id="totalVisitsTooltip4"> {/* Add the id attribute */}
                    <h3 className="card-text">
                      Revenue
                    </h3>
                  </CardHeader>
                  <CardBody>
                    <p style={{ fontSize: '1.3rem' }} id='Revenue'>0</p>
                  </CardBody>
                </Card>
                <Tooltip
                  placement="bottom"
                  isOpen={showNoOfSignUpList}
                  target="totalVisitsTooltip4"
                  toggle={() => setShowNoOfSignUpList(!showNoOfSignUpList)}
                  style={{ backgroundColor: 'white', borderRadius: '13%', color: 'black', boxShadow: '0 0 8px rgba(0, 0, 0,0.15)' }}
                >
                  <ul className="list-group rounded">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: '#00cfe8', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <User strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='ms-1 '>
                        Male
                      </span>
                      <span className="ms-auto fw-bolder">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: 'pink', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <Users strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='ms-1 '>
                        Female
                      </span>
                      <span className="ms-auto fw-bolder">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: '#7367f0', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <Feather strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='  ms-1'>
                        Transgender
                      </span>
                      <span className="ms-1 fw-bolder">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: '#f3904f', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <GitHub strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='ms-1 '>
                        Cat Lover
                      </span>
                      <span className="ms-auto fw-bolder">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: '#774f38', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <Gitlab strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='ms-1 '>
                        Dog Lover
                      </span>
                      <span className="ms-auto fw-bolder">1</span>
                    </li>
                  </ul>
                </Tooltip>
              </Col>
              <Col className="col-6">
                <Card>
                  <CardHeader id="totalVisitsTooltip5"> {/* Add the id attribute */}
                    <h3 className="card-text">
                      Conversion Rate
                    </h3>
                  </CardHeader>
                  <CardBody>
                    <p style={{ fontSize: '1.3rem' }}>0</p>
                  </CardBody>
                </Card>
                <Tooltip
                  placement="bottom"
                  isOpen={showConversionSignUpList}
                  target="totalVisitsTooltip5"
                  toggle={() => setShowConversionSignUpList(!showConversionSignUpList)}
                  style={{ backgroundColor: 'white', borderRadius: '13%', color: 'black', boxShadow: '0 0 8px rgba(0, 0, 0,0.15)' }}
                >
                  <ul className="list-group rounded">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: '#00cfe8', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <User strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='ms-1 '>
                        Male
                      </span>
                      <span className="ms-auto fw-bolder">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: 'pink', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <Users strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='ms-1 '>
                        Female
                      </span>
                      <span className="ms-auto fw-bolder">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: '#7367f0', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <Feather strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='  ms-1'>
                        Transgender
                      </span>
                      <span className="ms-1 fw-bolder">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: '#f3904f', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <GitHub strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='ms-1 '>
                        Cat Lover
                      </span>
                      <span className="ms-auto fw-bolder">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: '#774f38', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <Gitlab strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='ms-1 '>
                        Dog Lover
                      </span>
                      <span className="ms-auto fw-bolder">1</span>
                    </li>
                  </ul>
                </Tooltip>
              </Col>
              <Col className="col-6">
                <Card>
                  <CardHeader id="totalVisitsTooltip6"> {/* Add the id attribute */}
                    <h3 className="card-text">
                      XX
                    </h3>
                  </CardHeader>
                  <CardBody>
                    <p style={{ fontSize: '1.3rem' }}>0</p>
                  </CardBody>
                </Card>
                <Tooltip
                  placement="bottom"
                  isOpen={showBreakdownSignUpList}
                  target="totalVisitsTooltip6"
                  toggle={() => setShowBreakdownSignUpList(!showBreakdownSignUpList)}
                  style={{ backgroundColor: 'white', borderRadius: '13%', color: 'black', boxShadow: '0 0 8px rgba(0, 0, 0,0.15)' }}
                >
                  <ul className="list-group rounded">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: '#00cfe8', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <User strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='ms-1 '>
                        Male
                      </span>
                      <span className="ms-auto fw-bolder">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: 'pink', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <Users strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='ms-1 '>
                        Female
                      </span>
                      <span className="ms-auto fw-bolder">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: '#7367f0', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <Feather strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='  ms-1'>
                        Transgender
                      </span>
                      <span className="ms-1 fw-bolder">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: '#f3904f', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <GitHub strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='ms-1 '>
                        Cat Lover
                      </span>
                      <span className="ms-auto fw-bolder">1</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0">
                      <div style={{ backgroundColor: '#774f38', borderRadius: '50%', padding: '5px', marginLeft: '-10px' }}>
                        <Gitlab strokeWidth="2" width="16" height="16" style={{ color: 'white' }} />
                      </div>
                      <span className='ms-1 '>
                        Dog Lover
                      </span>
                      <span className="ms-auto fw-bolder">1</span>
                    </li>
                  </ul>
                </Tooltip>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}