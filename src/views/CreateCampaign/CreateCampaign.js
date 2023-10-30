// ** React Imports

// ** React Imports
import { Link } from 'react-router-dom'
import { Fragment, useState, useEffect } from 'react'
// ** Table Columns

// ** Third Party Components


// ** Reactstrap Imports
// ** Store & Actions

// ** Styles
// ** Custom Components
import '@styles/react/apps/app-invoice.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import mobile from '../../assets/sidebar/mobile.png'
import andriod from '../../assets/sidebar/android.png'
import email from '../../assets/sidebar/email.png'
import ios from "../../assets/sidebar/ioslogo.png"
import message from "../../assets/sidebar/message.png"
import filter from "../../assets/sidebar/sort.png"
import { Row, Col, Card, CardText, Button, Input, Table } from 'reactstrap'

// ** Steps
import './createcampaign.css'
//Classes Import

const CustomHeader = ({ }) => {

  const [isOn, setIsOn] = useState(true)

  const toggle = () => {
    setIsOn(prevState => !prevState)
  }

  //option
  const [selectedChannel, setSelectedChannel] = useState('')
  const [selectedSegment, setSelectedSegment] = useState('')
  const [selectedCampaign, setSelectedCampaign] = useState('')

  const handleChannelChange = (event) => {
    setSelectedChannel(event.target.value)
  }

  const handleSegmentChange = (event) => {
    setSelectedSegment(event.target.value)
  }

  const handleCampaignChange = (event) => {
    setSelectedCampaign(event.target.value)
  }

  const [data, setData] = useState([]) // Your table data

  useEffect(() => {
    // Fetch or set your data here
    const fetchedData = [
      // ... your data
      {
        id: 1,
        name: 'KM',
        channel: 'Email',
        segment: 'NA',
        mode: 'Broadcast',
        label: 'NA',
        lastupdate: `30 April '21, 06:05 pm`
      },
      {
        id: 2,
        name: 'KM',
        channel: 'Email',
        segment: 'NA',
        mode: 'Broadcast',
        label: 'NA',
        lastupdate: `30 April '21, 06:05 pm`
      },
      {
        id: 3,
        name: 'KM',
        channel: 'Email',
        segment: 'NA',
        mode: 'Broadcast',
        label: 'NA',
        lastupdate: `30 April '21, 06:05 pm`
      }

    ]
    setData(fetchedData)
  }, [])

  return (
    <Fragment>
      <Card classNam=''>
        <div className='seperate'> <h2 className='mb-0 heading-0'>Reach User Via</h2></div>


        <Row>
          <Col className='d-flex contain-value overflow-auto'>

            <div className='d-flex item-contain m-1 align-item-center justify-content-center p-1'>
              <div> <img src={mobile} className='img-log' alt /></div>
              <div className='my-auto'>

                <CardText className='cardText'>
                  Web Push
                </CardText>

              </div>
            </div>
            <div className='d-flex item-contain m-1 align-item-center justify-content-center p-1'>
              <div> <img src={andriod} className='img-log' alt /></div>
              <div className='my-auto'>

                <CardText className='cardText'>
                  Andriod Push
                </CardText>

              </div>
            </div><div className='d-flex item-contain m-1 align-item-center justify-content-center p-1'>
              <div> <img src={ios} className='img-log' alt /></div>
              <div className='my-auto'>

                <CardText className='cardText'>
                  Ios Push
                </CardText>

              </div>
            </div><div className='d-flex item-contain m-1 align-item-center justify-content-center p-1'>
              <div> <img src={email} className='img-log' alt /></div>
              <div className='my-auto'>

                <CardText className='cardText'>
                  Email
                </CardText>

              </div>
            </div><div className='d-flex item-contain m-1 align-item-center justify-content-center p-1'>
              <div> <img src={message} className='img-log' alt='message' /></div>
              <div className='my-auto'>

                <CardText className='cardText'>
                  SMS
                </CardText>

              </div>
            </div>


          </Col>

        </Row>
      </Card>

      <Card>
        <Row>
          <div className='invoice-list-table-header w-100'>
            <Row>
              <Col lg='9' className='d-flex justify-content-center px-lg-2 px-0 text-center'>
                <div className='ml-1 mt-1'> <h2 className='mb-0 heading-1'>Campaigns</h2></div>


              </Col>


              <Col lg='3' className='d-flex ml-1 justify-content-end w-40'>
                <div className='searchbarwidth'>

                  <Input
                    id='search-invoice'
                    className='searchbar  ml-3 pe-1'
                    type='text'

                    onChange=''
                    placeholder='Search'

                  />
                </div>

                <span className='filter'><img src={filter} alt="filter" onClick={toggle} /></span>
              </Col>


            </Row>
          </div>
        </Row>

        <Row className={`${isOn ? 'd-none' : 'd-block'}`} style={{ margin: '14px' }}>
          <Col className={`xm-12 filter-contain d-flex   align-items-center ml-2 justify-contend-center gap-1`}>
            <div className='input-select align-items-center pl-1'>

              <Input
                type='select'
                id='channel-select'
                value={selectedChannel}
                onChange={handleChannelChange}
                className='input-select-text form-control pe-1'
              >
                <option value=''>Channel </option>
                <option value='Channel1'>Channel 1 </option>
                <option value='Channel2'>Channel 2 </option>
              </Input>
            </div>
            <div className='input-select align-items-center pl-1'>

              <Input
                type='select'
                id='segment-select'
                value={selectedSegment}
                onChange={handleSegmentChange}
                className='input-select-text form-control pe-1'
              >
                <option value=''>Segment </option>
                <option value='Segment1'>Segment 1 </option>
                <option value='Segment2'>Segment 2 </option>
              </Input>
            </div>
            <div className='input-select align-items-center pl-1'>

              <Input
                type='select'
                id='campaign-select'
                value={selectedCampaign}
                onChange={handleCampaignChange}
                className='input-select-text form-control ms-20 pe-1'
              >
                <option value=''>Campaign </option>
                <option value='Campaign1'>Campaign 1 </option>
                <option value='Campaign2'>Campaign 2 </option>
              </Input>
            </div>

          </Col>
        </Row>
        <Row>
          <Col className='overflow-auto'>
            <Table striped responsive className='table'>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Channel</th>
                  <th>Segment</th>
                  <th>Mode</th>
                  <th>Label</th>
                  <th>Last updated at</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.id}</td>
                    <td><div className='d-flex item-contain align-item-center justify-content-between'>

                      <div className='my-auto'>

                        <CardText>
                          {row.name}
                        </CardText>

                      </div>
                      <div className='o-brdr'> <span className='bg-white  much rounded text-muted'>...</span></div>
                    </div></td>
                    <td> <span className='email t-style tal-val rounded text-white'>{row.channel}</span> </td>
                    <td>{row.segment}</td>
                    <td><span className='bg-warning  t-style tal-val rounded text-white'>{row.mode}</span> </td>
                    <td>{row.label}</td>
                    <td>{row.lastupdate}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Card>
    </Fragment>

  )

}
export default CustomHeader
