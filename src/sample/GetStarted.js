import React, { useState } from 'react'
import './getStarted.scss'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import {GoDot} from 'react-icons/go'
import {MdDownloadDone} from 'react-icons/md'
export default function GetStarted() {
  const data = [
    { id: 1, title: "Increase AOV" },
    { id: 2, title: "Reward Loyalty" },
    { id: 3, title: "Increase Brand Awareness" },
    { id: 4, title: "Acquire New Customers" },
    { id: 5, title: "Test Product Receptiveness" },
  ]
  const [Data_new, setData_new] = useState(data)
  const [Data_array, setData_array] = useState([])

  function handleClick_add(id) {
    console.log("onlick")
    const dataOfId = Data_new.filter((obj) => obj.id === id)
    const isPresent = Data_array.filter((obj) => obj.id === id)
    if (isPresent.length === 0) {
      setData_array([...Data_array, ...dataOfId])
      const newData = Data_new.filter((obj) => obj.id !== id)
      setData_new([...newData])
    }
  }
  function handleClick_remove(id) {
    console.log("onlick")
    const dataOfId = Data_array.filter((obj) => obj.id === id)
    const isPresent = Data_new.filter((obj) => obj.id === id)
    if (isPresent.length === 0) {
      setData_new([...Data_new, ...dataOfId])
      const newArray = Data_array.filter((obj) => obj.id !== id)
      setData_array([...newArray])
    }
  }
  // console.log(Data_array)

  return (
    <Card>
      <CardBody>


        <div>
          <h1 className='text-center fs-1 fw-bold'>Welcome, <span>JhonDoe</span></h1>
          <p className='text-center'>Help us personalize your free sample setup and dashboard. <br /> Please answer these questions.</p>
        </div>


        <div className='ms-3 mt-2 '>
          <Row className='mt-1'>
            <h4 className='m-0 fs-4 fw-bold '><span className=''>1) </span> I want to give free samples to achieve these objectives.</h4>
            <p className='ms-1 font-small-3'>Please rank based on priority. </p>
            <div className='ans-div ms-3 d-flex flex-wrap gap-1'>
              <Col md="3" >
              <h6 className='mb-1'>Default rank :</h6>

                {
                  Data_new.map((data, index) => {
                    return (
                      <h5 key={index} className='text-secondary cursor-pointer' onClick={() => handleClick_add(data.id)} ><GoDot/> {data.title}</h5>
                    )
                  })
                }
                {
                  Data_new.length === 0 && <MdDownloadDone />
                }
              </Col>
              <div className='align-self-center'>
                <AiOutlineArrowRight className='text-black m-2'/>
              </div>
              <Col md="3">
                <h6 className=' mb-1'>Sorted rank :</h6>
                {
                  Data_array.map((data, index) => {
                    return (
                      <h5 className=' text-secondary cursor-pointer' onClick={() => handleClick_remove(data.id)}><span>{index + 1}. </span> {data.title} </h5>
                    )
                  })
                }
              </Col>

            </div>

          </Row>

          <hr />
          <Row className='mt-2'>

            <h4 className='m-0 fs-4 fw-bold '><span className=''>2) </span> I would like to promote my free samples on my website's.</h4>
            <div className='ans-div ms-3 '>
              <div className='ans-box d-flex '>
                <div className="cntr">
                  <input type="checkbox" id="q2c1" className="hidden-xs-up cbx_input" />
                  <label htmlFor="q2c1" className="cbx_label"></label>
                </div>
                <label htmlFor="q2c1" className='fs5 fw-bold text-secondary'>Home page (pop-up)</label>
              </div>
              <div className='ans-box d-flex '>
                <div className="cntr">
                  <input type="checkbox" id="q2c2" className="hidden-xs-up cbx_input" />
                  <label htmlFor="q2c2" className="cbx_label"></label>
                </div>
                <label htmlFor="q2c2" className='fs5 fw-bold text-secondary'> Product page</label>
              </div>
              <div className='ans-box d-flex'>
                <div className="cntr">
                  <input type="checkbox" id="q2c3" className="hidden-xs-up cbx_input" />
                  <label htmlFor="q2c3" className="cbx_label"></label>
                </div>
                <label htmlFor="q2c3" className='fs5 fw-bold text-secondary'> Product Listings page</label>
              </div>
              <div className='ans-box d-flex'>
                <div className="cntr">
                  <input type="checkbox" id="q2c4" className="hidden-xs-up cbx_input" />
                  <label htmlFor="q2c4" className="cbx_label"></label>
                </div>
                <label htmlFor="q2c4" className='fs5 fw-bold text-secondary'> Cart page</label>
              </div>
              <div className='ans-box d-flex'>
                <div className="cntr">
                  <input type="checkbox" id="q2c5" className="hidden-xs-up cbx_input" />
                  <label htmlFor="q2c5" className="cbx_label"></label>
                </div>
                <label htmlFor="q2c5" className='fs5 fw-bold text-secondary'> Thank You page</label>
              </div>
            </div>

          </Row>
          <hr />


          <Row className='mt-2'>
            <h4 className='m-0 fs-4 fw-bold '><span className=''>3) </span> I want to announce my free sample promotion via.</h4>
            <div className='ans-div ms-3 text-secondary'>
              <div className='ans-box d-flex '>
                <div className="cntr">
                  <input type="checkbox" id="q3c1" className="hidden-xs-up cbx_input" />
                  <label htmlFor="q3c1" className="cbx_label"></label>
                </div>
                <label htmlFor="q3c1" className='fs5 fw-bold text-secondary'>Email</label>
              </div>
              <div className='ans-box d-flex '>
                <div className="cntr">
                  <input type="checkbox" id="q3c2" className="hidden-xs-up cbx_input" />
                  <label htmlFor="q3c2" className="cbx_label"></label>
                </div>
                <label htmlFor="q3c2" className='fs5 fw-bold text-secondary'> SMS</label>
              </div>
              <div className='ans-box d-flex'>
                <div className="cntr">
                  <input type="checkbox" id="q3c3" className="hidden-xs-up cbx_input" />
                  <label htmlFor="q3c3" className="cbx_label"></label>
                </div>
                <label htmlFor="q3c3" className='fs5 fw-bold text-secondary'> WhatsApp</label>
              </div>

            </div>

          </Row>
        </div>
      </CardBody>
      <div className='p-2 d-flex justify-content-end'>
        <Link to='/merchant/sample/Get-Started/set-conditions' className='btn btn-primary me-1'>Save & continue</Link>
        <Link to='/merchant/sample/Get-Started/set-conditions' className='btn btn-primary'>Skip & Continue with Default Setup</Link>
      </div>
    </Card>
  )
}
