import { useState, useEffect } from "react"
import { AiOutlineArrowUp } from "react-icons/ai"
import { BsDownload } from "react-icons/bs"
import { Card, CardBody, Col, Row } from "reactstrap"
// import axios from "axios"
import AreaChart from "./AreaChart"
import LineChart from "./LineChart"
import "./OverallStats.css"

import responseData from "./data.json"

const OverallStats = () => {
  // const [responseData, setResponseData] = useState([])
  const [campaignsCount, setCampaignsCount] = useState(0)

  const [emailsSentCount, setEmailsSentCount] = useState({ overall: 0, actual: 0 })
  const [emailsClickCount, setEmailsClickCount] = useState({ overall: 0, actual: 0 }.actual)
  const [emailsOpenCount, setEmailsOpenCount] = useState({ overall: 0, actual: 0 }.actual)

  const campaignOptions = [
    "All Campaigns",
    "Broadcast Campaign",
    "Triggered Campaign",
    "Segmented Campaign"
  ]
  const [campaignOption, setCampaignOption] = useState("All Campaigns")

  const handleCampaignChange = (event) => {
    setCampaignOption(event.target.value)
  }
  const [daysOption, setDaysOption] = useState("Last month")
  const daysOptions = [
    "Last 30days",
    "Last 1month",
    "Last 2months",
    "Last 3months",
    "Last 6months",
    "Last 1year"
  ]

  const summaryDetails = [
    {
      value: "$1,83",
      detail: "Cost per Lead"
    },
    {
      value: "$0,09",
      detail: "Cost per Impression"
    },
    {
      value: "$0,23",
      detail: "Cost per Click"
    },
    {
      value: "$48,34",
      detail: "Cost per Conversion"
    },
    {
      value: "$24,458",
      detail: "Money Spent"
    }
  ]

  const campaignDetails = [
    {
      title: "Email Sent",
      percentage: `${parseInt((emailsSentCount.actual / emailsSentCount.overall) * 100)} %`,
      value: emailsSentCount.actual
    },
    {
      title: "Click",
      percentage: `${parseInt((emailsClickCount.actual / emailsClickCount.overall) * 100)} %`,
      value: emailsClickCount.actual
    },
    {
      title: "Open",
      percentage: `${parseInt((emailsOpenCount.actual / emailsOpenCount.overall) * 100)} %`,
      value: emailsOpenCount.actual
    },
    {
      title: "Other Clicks",
      percentage: "",
      value: ""
    },
    {
      title: "Conversion",
      percentage: "",
      value: ""
    }
  ]

  // const formdata = new FormData()
  // formdata.append("merchant_id", "524dfd6b-8c99-437e-8541-6ac67f0ed7a7")

  // useEffect(() => {
  //   const fetchCampaignData = async () => {
  //     try {
  //       const res = await axios.post(
  //         "https://2f1f-110-226-180-229.ngrok-free.app/accounts/campaigndata/",
  //         formdata
  //       )
  //       setResponseData(res.data)
  //     } catch (error) {
  //       console.error("Error:", error)
  //     }
  //   }


  //   fetchCampaignData()
  // }, [])

  useEffect(() => {
    const campaignCount = () => {
      let count = 0
      responseData.data.map(res => {
        if (res.fields?.campaign_type === campaignOption) {
          count++
        }
      })
      setCampaignsCount(count)

    }

    const emailCount = () => {
      let emailOrgSentCount = 0
      let emailOrgClickCount = 0
      let emailOrgOpenCount = 0
      let emailActSentCount = 0
      let emailActClickCount = 0
      let emailActOpenCount = 0
      responseData.data.map(res => {
        if (res.fields?.campaign_type === campaignOption && res.fields?.reply_to_address) {
          emailActClickCount++
        } else if (res.fields?.campaign_type === campaignOption && !res.fields?.reply_to_address) {
          emailOrgClickCount++
        }
        if (res.fields?.campaign_type === campaignOption && res.fields?.smart_send) {
          emailActSentCount++
        } else if (res.fields?.campaign_type === campaignOption && !res.fields?.smart_send) {
          emailOrgSentCount++
        }
        if (res.fields?.campaign_type === campaignOption && res.fields?.campaign_details.schedule) {
          emailActOpenCount++
        } else if (res.fields?.campaign_type === campaignOption && !res.fields?.campaign_details.schedule) {
          emailOrgOpenCount++
        }
      })
      setEmailsSentCount({ overall: emailOrgSentCount + emailActSentCount, actual: emailActSentCount })
      setEmailsClickCount({ overall: emailOrgClickCount + emailActClickCount, actual: emailActClickCount })
      setEmailsOpenCount({ overall: emailOrgOpenCount + emailActOpenCount, actual: emailActOpenCount })

    }

    emailCount()

    campaignCount()
  }, [campaignOption])

  return (
    <>
      {responseData ? (
        <div>
          <Card>
            <CardBody>
              <h4>Campaign Reports</h4>
            </CardBody>
          </Card>
          <div className=" d-flex justify-content-between align-items-center flex-wrap mb-2 ">
            <h4>Campaign Reports</h4>
            <div className=" d-flex justify-content-evenly align-items-center flex-wrap">
              <div className="me-2">
                <select id="campaignSelect" value={campaignOption} onChange={handleCampaignChange} style={{ margin: "0", border: "transparent", background: "transparent", fontSize: "1rem", fontWeight: "450", color: "#82868b" }}>
                  <option className="text-secondary" value="All Campaigns">All Campaigns</option>
                  <option value="Campaign 1">Campaign 1</option>
                  <option value="Campaign 2">Campaign 2</option>
                  <option value="Campaign 2">Campaign 3</option>
                </select>
                <ul className="dropdown-menu">
                  {campaignOptions.map((ele, index) => {
                    return (
                      <li
                        key={index}
                        className=" dropdown-item cursor-pointer"
                        onClick={() => setCampaignOption(ele)}
                      >
                        {ele}
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div>
                <select id="campaignSelect" value={daysOption} onChange={handleCampaignChange} style={{ margin: "0", border: "transparent", background: "transparent", fontSize: "1rem", fontWeight: "450", color: "#82868b" }}>
                  <option className="text-secondary" value="All Campaigns">Last month</option>
                  <option value="Campaign 1">Today</option>
                  <option value="Campaign 2">Last Week</option>
                  <option value="Campaign 2">Last Month</option>
                  <option value="Campaign 2">Last year</option>
                </select>
                <ul className="dropdown-menu">
                  {daysOptions.map((ele, index) => {
                    return (
                      <li
                        key={index}
                        className=" dropdown-item cursor-pointer"
                        onClick={() => setDaysOption(ele)}
                      >
                        {ele}
                      </li>
                    )
                  })}
                </ul>
              </div>
              <button
                className="btn btn-outline-secondary text-primary fs-6 no-border-rate"
                type="button"
              >
                {" "}
                <BsDownload /> Export CSV
              </button>
            </div>
          </div>

          <div>
            <Row>
              <Col md="6">
                <Card>
                  <CardBody className=" p-1" style={{ minHeight: "200px" }}>
                    <div className=" d-flex justify-content-around">
                      <div style={{ width: "40%" }}>
                        <div>
                          {/* <button
                        className="btn btn-outline-secondary fs-6 mb-1 dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {campaignOption}
                      </button> */}
                          <ul className="dropdown-menu">
                            {campaignOptions.map((ele, index) => {
                              return (
                                <li
                                  key={index}
                                  className=" dropdown-item cursor-pointer"
                                  onClick={() => setCampaignOption(ele)}
                                >
                                  {ele}
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                        <p className=" fs-6 mb-2 opacity-50 mt-3">
                          Scheduled Time: {responseData.data[1]?.fields?.campaign_details?.schedule_time}
                        </p>
                        <div className=" d-flex">
                          <p className=" fs-3 fw-bold pe-1">{campaignsCount}</p>
                          <p className=" text-success">
                            0%
                            <AiOutlineArrowUp />
                          </p>
                        </div>
                      </div>
                      <LineChart campaign={campaignOption} />
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col md="6">
                <Card>
                  <CardBody style={{ minHeight: "200px" }}>
                    <h5>Summary</h5>
                    <p className=" fs-6 mb-3 opacity-50">
                      Scheduled Time: {responseData.data[1]?.fields?.campaign_details?.schedule_time}
                    </p>
                    <div className=" d-flex justify-content-between flex-wrap">
                      {summaryDetails.map((ele, index) => {
                        return (
                          <div key={index} style={{ width: "90px" }}>
                            <h4 className="fw-bolder">{ele.value}</h4>
                            <p className="fw-bold mb-0">{ele.detail}</p>
                          </div>
                        )
                      })}
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>

          <h4>Campaign Funnel</h4>
          <p className=" fs-6 opacity-50">Jan 2, 2023 - Jun 2, 2023</p>
          <Card>
            <CardBody>
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                {campaignDetails.map((ele, index) => {
                  return (
                    <div key={index} style={{ width: "150px", height: "100px" }}>
                      <h6 className=" mb-1">
                        {ele.title}{" "}
                        <span className=" opacity-50">{ele.percentage}</span>
                      </h6>
                      <h1 className=" fw-bolder">{ele.value}</h1>
                    </div>
                  )
                })}
              </div>
              <AreaChart />
            </CardBody>
          </Card>
        </div>
      ) : (
        <p>Loading data...</p> // Show a loading message while data is being fetched
      )}

    </>
  )
}

export default OverallStats 
