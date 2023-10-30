import { useState } from 'react'
import { Col, Row, Card, CardBody, InputGroup, ButtonDropdown, Button, DropdownToggle, DropdownMenu, DropdownItem, Input } from 'reactstrap'
import { AiFillStar } from "react-icons/ai"
import BarChart from './BarChart'
import "./Analytics.css"
import DoughnutChart from './DoughnutChart'

const Analytics = () => {
    const [rateOption, setRateOption] = useState('All ')
    const rateOptions = ['5 ', '4 ', '3 ', '2 ', '1 ']

    const [continentOption, setContinentOption] = useState('AllContinents')
    const continentOptions = ["Africa", "Antarctica", "Asia", "Australia", "Europe", "NorthAmerica", "SouthAmerica"]

    const [startMonth, setStartMonth] = useState('0')
    const [endMonth, setEndMonth] = useState('11')
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const [durationOption, setDurationOption] = useState('1mo 0days')
    const durationOptions = ["1mo 0 days", "1mo 3 days", "1mo 15 days", "2mo 0 days", "2mo 10 days"]

    console.log(rateOption, rateOptions)

    return (
        <>
            <Card>
                <CardBody>
                    <h4>Analytics</h4>
                </CardBody>
            </Card>
            <Row>
                <Col md="6">
                    <Card style={{ minHeight: "330px" }}>
                        <CardBody>
                            <div className=' d-flex justify-content-between align-items-center mb-1'>
                                <p className=' fw-bold '>Average</p>
                                <div>
                                    <select className="form-select dropsdown-width" aria-label="Default select example" value={rateOption} onChange={(e) => setRateOption(e.target.value)}>

                                        {
                                            rateOptions.map((ele, index) => {
                                                return (
                                                    <option key={index} value={ele}>{ele}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    {/* <button className="btn btn-outline-secondary fs-6 dropdown-toggle no-border-rate"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        {`${rateOption} star`}
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li className=" dropdown-item cursor-pointer" onClick={() => setRateOption("All ")}> All star</li>
                                        {
                                            rateOptions.map(ele => {
                                                return (
                                                    <li key={ele} className=" dropdown-item cursor-pointer" onClick={() => setRateOption(ele)}>

                                                        {`${ele} star`}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul> */}
                                </div>
                            </div>
                            <p className=' mb-2'><span className=' fw-bolder '>Q</span> Base on <span className=' fs-5 fw-bolder'>0</span> publish review</p>
                            <div>
                                <ul className=' list-unstyled mb-2'>
                                    {
                                        rateOptions.map((ele, index) => {
                                            return (
                                                <li className={`d-flex justify-content-evenly align-items-center mb-1 ${(rateOption === ele || rateOption === 'All ') ? 'opacity-100' : 'opacity-25'
                                                    }`}
                                                >
                                                    <AiFillStar style={{ color: "yellow", fontSize: "20px" }} />
                                                    <span className=' fw-bold fs-5'>{rateOptions.length - index}</span>
                                                    <span className=' d-block w-75 rounded-pill' style={{ height: "5px", background: "rgb(219, 219, 219)" }}></span>
                                                    0%
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col md="6">
                    <Card>
                        <CardBody>
                            <div className=' d-flex justify-content-between align-items-center'>
                                <p className=' fw-bold '>Top Countries in {continentOption}</p>
                                {/* <p>All time</p> */}
                                <div>
                                    <select className="form-select dropsdown-width" aria-label="Default select example" value={continentOption} onChange={(e) => setContinentOption(e.target.value)}>
                                        <option value="AllContinents">AllContinents</option>
                                        {
                                            continentOptions.map((ele, index) => {
                                                return (
                                                    <option key={index} value={ele}>{ele}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    {/* <button className="btn btn-outline-secondary fs-6 dropdown-toggle no-border-rate" type="button" data-bs-toggle="dropdown" aria-expanded="false">{continentOption}</button>
                                    <ul className="dropdown-menu">
                                        <li className=" dropdown-item cursor-pointer" onClick={() => setContinentOption("AllContinents")}>All Continents</li>
                                        {
                                            continentOptions.map(ele => {
                                                return (
                                                    <li key={ele} className=" dropdown-item cursor-pointer" onClick={() => setContinentOption(ele)}>{ele}</li>
                                                )
                                            })
                                        }
                                    </ul> */}
                                </div>
                            </div>

                            <DoughnutChart continent={continentOption.toLowerCase()} />

                            {/* <div className=' d-flex justify-content-evenly align-items-center mb-1 '>
                                <div className={ `topCountryOuterDiv rounded-circle ${continentOption.toLowerCase()}` }>
                                    <div className='topCountryInnerDiv  rounded-circle'></div>
                                </div>
                                <div className=' d-flex justify-content-between align-items-center '>
                                    <div className={ ` mx-1 ${continentOption.toLowerCase() + "btn"}` } style={{ width: "15px", height: "15px"}}></div>
                                    <h6>
                                        EMPTY
                                    </h6>
                                </div>
                            </div> */}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Card>
                <CardBody>
                    <div className=' d-flex justify-content-between align-items-center pb-2  border-bottom'>
                        <h4>Analytics</h4>
                        <div className="months d-flex gap-1">
                            <div>
                                <select className="form-select dropsdown-width" aria-label="Default select example" value={startMonth} onChange={(e) => {
                                    setStartMonth(e.target.value)
                                }}>
                                    {
                                        months.map((ele, index) => {
                                            return (
                                                <option key={index} value={index}>{ele}</option>
                                            )
                                        })
                                    }
                                </select>
                                {/* <button className="btn btn-outline-secondary fs-6 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{months[parseInt(startMonth)]}</button>
                                <ul className="dropdown-menu">
                                    {
                                        months.map((ele, index) => {
                                            return (
                                                <li key={index} className=" dropdown-item cursor-pointer" onClick={() => setStartMonth(index)}>{ele}</li>
                                            )
                                        })
                                    }
                                </ul> */}
                            </div>
                            <div>
                                <select className="form-select dropsdown-width" aria-label="Default select example" value={endMonth} onChange={(e) => {
                                    setEndMonth(e.target.value)
                                }}>
                                    {
                                        months.map((ele, index) => {
                                            return (
                                                <option key={index} value={index}>{ele}</option>
                                            )
                                        })
                                    }
                                </select>
                                {/* <button className="btn btn-outline-secondary fs-6 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{months[parseInt(endMonth)]}</button>
                                <ul className="dropdown-menu">
                                    {
                                        months.map((ele, index) => {
                                            return (
                                                <li key={index} className=" dropdown-item cursor-pointer" onClick={() => setEndMonth(index)}>{ele}</li>
                                            )
                                        })
                                    }
                                </ul> */}
                            </div>
                        </div>
                    </div>

                    <h5 className=' fw-bolder  text-capitalize my-2 '>All reviews Growth</h5>

                    <div>

                        <BarChart startMonth={startMonth} endMonth={endMonth} />
                    </div>

                </CardBody>
            </Card>

            {/* <Row>
                <Col xl="3">
                    <Card style={{ minHeight: "250px"}}>
                        <CardBody>
                            <p className=' fw-bold  mb-1'><span className=' fw-bolder'>Best Rated Products</span></p>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl="4">
                    <Card style={{ minHeight: "250px"}}>
                        <CardBody>
                            <div className='d-flex flex-wrap  justify-content-between align-items-center '>
                                <p className=' fw-bold  mb-1'><span className=' fw-bolder'>Avg. Duration from Product Purchase to Review Posted</span></p>
                                <div>
                                        <button className="btn btn-outline-secondary fs-6 dropdown-toggle no-border-rate" type="button" data-bs-toggle="dropdown" aria-expanded="false">{ durationOption }</button>
                                        <ul className="dropdown-menu">
                                            {
                                                durationOptions.map((ele, index) => {
                                                    return (
                                                        <li key={ index } className=" dropdown-item cursor-pointer" onClick={ () => setDurationOption(ele)}>{ ele }</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl="5">
                    <Card style={{ minHeight: "250px"}}>
                        <CardBody>
                            <p className=' fw-bold  mb-1'><span className=' fw-bolder'>Request Email Analysis -</span> Sent, Open Clicked</p>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th className=' text-center ' scope="col">Sent</th>
                                        <th className=' text-center ' scope="col">Open</th>
                                        <th className=' text-center ' scope="col">Clicked</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className=' text-center '>X</td>
                                        <td className=' text-center '>X</td>
                                        <td className=' text-center '>X</td>
                                    </tr>
                                    <tr>
                                        <td className=' text-center '>X</td>
                                        <td className=' text-center '>X</td>
                                        <td className=' text-center '>X</td>
                                    </tr>
                                    <tr>
                                        <td className=' text-center '>X</td>
                                        <td className=' text-center '>X</td>
                                        <td className=' text-center '>X</td>
                                    </tr>
                                </tbody>
                            </table>
                        </CardBody>
                    </Card>
                </Col>
            </Row> */}

            <Row>
                <Col xl="3" md="6">
                    <Card style={{ minHeight: "250px" }}>
                        <CardBody>
                            <p className=' fw-bold  mb-1'><span className=' fw-bolder'>Best Rated Products</span></p>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl="3" md="6">
                    <Card style={{ minHeight: "250px" }}>
                        <CardBody>
                            <div className='d-flex flex-wrap  justify-content-between align-items-center '>
                                <p className=' fw-bold  mb-1'><span className=' fw-bolder'>Avg. Duration from Product Purchase to Review Posted</span></p>
                                <div>
                                    <button className="btn btn-outline-secondary fs-6 dropdown-toggle no-border-rate" type="button" data-bs-toggle="dropdown" aria-expanded="false">{durationOption}</button>
                                    <ul className="dropdown-menu">
                                        {
                                            durationOptions.map((ele, index) => {
                                                return (
                                                    <li key={index} className=" dropdown-item cursor-pointer" onClick={() => setDurationOption(ele)}>{ele}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl="6">
                    <Card style={{ minHeight: "250px" }}>
                        <CardBody>
                            <p className=' fw-bold  mb-1'><span className=' fw-bolder'>Request Email Analysis -</span> Sent, Open Clicked</p>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th className=' text-center ' scope="col">Sent</th>
                                        <th className=' text-center ' scope="col">Open</th>
                                        <th className=' text-center ' scope="col">Clicked</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className=' text-center '>X</td>
                                        <td className=' text-center '>X</td>
                                        <td className=' text-center '>X</td>
                                    </tr>
                                    <tr>
                                        <td className=' text-center '>X</td>
                                        <td className=' text-center '>X</td>
                                        <td className=' text-center '>X</td>
                                    </tr>
                                    <tr>
                                        <td className=' text-center '>X</td>
                                        <td className=' text-center '>X</td>
                                        <td className=' text-center '>X</td>
                                    </tr>
                                </tbody>
                            </table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row style={{ minHeight: "200px" }}>

            </Row>


        </>
    )
}

export default Analytics