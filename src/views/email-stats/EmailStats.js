import {useState} from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import {BiSolidUpArrow} from "react-icons/bi"
import {BsFillInfoCircleFill} from "react-icons/bs"
import {LuSettings2} from "react-icons/lu"
import { TiTick } from "react-icons/ti"
import emailStatsData from './statsData'
import LineChart from './LineChart'

import "./EmailStats.css"

const EmailStats = () => {
    const [daysOption, setDaysOption] =  useState("Last 1month")
    const daysOptions = ["Last 30days", "Last 1month", "Last 2months", "Last 3months", "Last 6months", "Last 1year"]
    
    const [filtersOption, setFiltersOption] =  useState([])
    const filtersOptions = ["Filter 1", "Filter 2", "Filter 3", "Filter 4", "Filter 5"]

    const [selectedOptions, setSelectedOptions] = useState(['Sends', "Unique Clicks"])
  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option))
    } else {
      setSelectedOptions([...selectedOptions, option])
    }
  }

  const handleFilterChange = (filter) => {
    setFiltersOption([...filtersOption, filter])
  }

  const chartOptions = [
    { 
        title:"Sends",
        class: "sendsOption"
    },
    { 
        title:"Deliveries",
        class: "deliveriesOption"
    },
    { 
        title:"Total Opens",
        class: "totalOpensOption"
    },
    { 
        title:"Unique Opens",
        class: "uniqueOpensOption"
    },
    { 
        title:"Unique Clicks",
        class: "uniqueClicksOption"
    },
    { 
        title:"Other Clicks",
        class: "otherOpensOption"
    },
    { 
        title:"Bounces",
        class: "bouncesOption"
    },
    { 
        title:"Unsubscribes",
        class: "unsubscribesOption"
    }
]   

  return (
    <div>
                <div className=' d-flex  justify-content-between align-items-center mb-3'>
                    <h5 className=' my-2 '>Email Channel Engagement</h5>
                    <div className='d-flex  justify-content-between align-items-center'>
                        <div>
                            <button className="btn btn-outline-secondary fs-6 dropdown-toggle no-border-rate" type="button" data-bs-toggle="dropdown" aria-expanded="false">{ daysOption }</button>
                            <ul className="dropdown-menu">
                                {
                                    daysOptions.map((ele, index) => {
                                        return (
                                            <li key={ index } className=" dropdown-item cursor-pointer" onClick={ () => setDaysOption(ele)}>{ ele }</li>
                                        )
                                    })
                                }
                            </ul>
                            <button className="btn btn-outline-secondary text-primary fs-6 dropdown-toggle no-border-rate" type="button" data-bs-toggle="dropdown" aria-expanded="false"><LuSettings2 /> Filters</button>
                            <ul className="dropdown-menu">
                                {
                                    filtersOptions.map((ele, index) => {
                                        return (
                                            <li key={ index } className={filtersOption.includes(ele) ? " dropdown-item cursor-pointer text-primary" : " dropdown-item cursor-pointer"} onClick={() => handleFilterChange(ele)}>{ filtersOption.includes(ele) ? <> <TiTick/> {ele}</> : ele }</li>
                                        )
                                    })
                                }
                            </ul>
                            <button type='button' className='btn px-1' onClick={() => setFiltersOption([])}>Clear Filters</button>
                        </div>
                    </div>
                </div>
                <Row className=' mt-2 '>
                    {
                        emailStatsData.map((ele) => {
                            return (
                                <Col xl='3' md='6'>
                                    <Card  style={{minHeight: "200px"}}>
                                        <CardBody>
                                            <h6>{ele.title} <BsFillInfoCircleFill/></h6>
                                            <h2 className=' fw-bolder mt-1 mb-0'>{ele.rate}</h2>
                                            <p>{ele.count}</p>
                                            <p className=' lh-3'> <span className={ele.percentageInfo ? "cardPercentageTrue" : "cardPercentageFalse"}  style={{padding: "3px"}}><BiSolidUpArrow/> {ele.percentage}</span> {ele.percentageCount}</p>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
                <Card>
                    <CardBody>
                        <h5 className=' fw-bolder '>Performance Over Time</h5>
                        <div className=' d-flex justify-content-evenly align-items-center flex-wrap'>
                            <LineChart selectedOptions={selectedOptions} />
                            <div className=' d-flex flex-column justify-content-evenly '>
                            {
                                chartOptions.map((option) => {
                                    return (
                                        <label>
                                            <input
                                            className=' mx-1 mb-1'
                                            type="checkbox"
                                            checked={selectedOptions.includes(option.title)}
                                            onChange={() => handleOptionChange(option.title)}
                                            />
                                             <span className={`d-inline-block rounded-circle ${option.class}`} style={{width: "10px", height: "10px"}}></span> {option.title}
                                        </label>
                                    )
                                })
                            }

                                
                            </div>
                        </div>
                    </CardBody>
                </Card>
    </div>
  )
}

export default EmailStats