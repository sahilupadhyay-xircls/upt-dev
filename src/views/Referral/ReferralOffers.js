import { useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'

const ReferralOffers = () => {
  const [errorMsg1, setErrorMsg1] = useState("")
  const [errorMsg2, setErrorMsg2] = useState("")

  const [referrerOffer1Value, setReferrerOffer1Value] = useState(0)
  const [referrerOffer1Type, setReferrerOffer1Type] = useState('PERCENTAGE')
  const [referrerOffer1Min, setReferrerOffer1Min] = useState(0)

  const [referrerOffer2Value, setReferrerOffer2Value] = useState(0)
  const [referrerOffer2Type, setReferrerOffer2Type] = useState('PERCENTAGE')
  const [referrerOffer2Min, setReferrerOffer2Min] = useState(0)

  const handleSubmit = () => {
    setErrorMsg1("")
    setErrorMsg2("")
    if (referrerOffer1Min === 0 || referrerOffer1Value === 0) {
      setErrorMsg1("Input values should be greater 1")
    } else if (referrerOffer2Min === 0 || referrerOffer2Value === 0) {
      setErrorMsg2("Input values should be greater 1")
    } else {
      const form_data = new FormData()
      form_data.append('referrer_value', referrerOffer1Value)
      form_data.append('referrer_type', referrerOffer1Type)
      form_data.append('referrer_minimum', referrerOffer1Min)

      form_data.append('referree_value', referrerOffer2Value)
      form_data.append('referree_type', referrerOffer2Type)
      form_data.append('referree_minimum', referrerOffer2Min)

      // const statusActive = document.getElementById('statusactive').checked
      // form_data.append('status', statusActive ? '1' : '0')

      fetch(`https://api.xircles.in/referral/referralpoints/`, {
        method: "POST",
        body: form_data
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    // setReferrerOffer1Min(0)
    // setReferrerOffer1Type('PERCENTAGE')
    // setReferrerOffer1Value(0)
    // setReferrerOffer2Min(0)
    // setReferrerOffer2Type('PERCENTAGE')
    // setReferrerOffer2Value(0)
  }
  return (
    <>
      <Card>
        <CardBody>
          <h2 className=' fw-bolder'>Points {">"} Actions</h2>
        </CardBody>
      </Card>

      <h3 className=' fw-bolder mb-1'>Referral</h3>

      <Row>
        <Col md={6} className='p-0'>
          <Card style={{ overflow: 'hidden' }} className='mb-3 ms-2'>
            <CardBody>
              <div className='d-flex flex-column justify-items-center align-items-baseline'>
                <h3 className='ms-1'>Referrer Offer</h3>
                <p>{errorMsg1}</p>
              </div>
              <form className="d-flex row mx-1">
                <div className="col-4 mb-2">
                  <h5 >Value</h5>
                  <input type="number" className="form-control" min={1} value={referrerOffer1Value} onChange={(e) => setReferrerOffer1Value(e.target.value)} />
                </div>
                <div className="col-4">
                  <h5>Offer Type</h5>
                  <div className="d-flex align-items-center">
                    <select className="form-select m-0" onChange={(e) => setReferrerOffer1Type(e.target.value)}>
                      <option value='PERCENTAGE'>Percentage</option>
                      <option value='VALUE'>Value</option>
                    </select>
                  </div>
                </div>
                <div className="col-4 mb-2">
                  <h5 >Minimum</h5>
                  <input type="number" className="form-control" min={1} value={referrerOffer1Min} onChange={(e) => setReferrerOffer1Min(e.target.value)} />
                </div>
              </form>
            </CardBody>
          </Card>
        </Col>

        <Col md={6} className='p-0'>
          <Card style={{ overflow: 'hidden' }} className='mb-3 ms-2'>
            <CardBody>
              <div className='d-flex flex-column justify-items-center align-items-baseline'>
                <h3 className='ms-1'>Referrer Offer</h3>
                <p>{errorMsg2}</p>
              </div>
              <form className="d-flex row mx-1">
                <div className="col-4 mb-2">
                  <h5 >Value</h5>
                  <input type="number" className="form-control" min={1} value={referrerOffer2Value} onChange={(e) => setReferrerOffer2Value(e.target.value)} />
                </div>
                <div className="col-4">
                  <h5>Offer Type</h5>
                  <div className="d-flex align-items-center">
                    <select className="form-select m-0" onChange={(e) => setReferrerOffer2Type(e.target.value)}>
                      <option value='PERCENTAGE'>Percentage</option>
                      <option value='VALUE'>Value</option>
                    </select>
                  </div>
                </div>
                <div className="col-4 mb-2">
                  <h5 >Minimum</h5>
                  <input type="number" className="form-control" min={1} value={referrerOffer2Min} onChange={(e) => setReferrerOffer2Min(e.target.value)} />
                </div>
              </form>
            </CardBody>
          </Card>

        </Col>

        {/* <Col md={4}>
          <Card>
            <CardBody>
              <h4 className=' fw-bolder'>Summary</h4>
                <ul>
                  <li className='mb-1'>200 points for completing action</li>
                  <li className='mb-1'>Customers get 10 points for every 100 Rs. they spend</li>
                </ul>
              <h4 className=' fw-bolder'>Status</h4>
              <div className="form-check pb-1">
                  <input className="form-check-input" type="radio" name="status" id="statusactive" checked />
                  <label>Active</label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="radio" name="status" id="statusactive" />
                  <label>Inactive</label>
              </div>

            </CardBody>
          </Card>
        </Col> */}
      </Row>
      <div className="mb-2">
        <div className="d-flex justify-content-end">
          <button className='btn btn-primary' style={{ width: '200px' }} onClick={handleSubmit} >Save</button>
        </div>
      </div>
    </>
  )
}

export default ReferralOffers

// https://api.xircles.in/referral/referralpoints/