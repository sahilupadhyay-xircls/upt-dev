import { useState, useEffect } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { AiFillDelete } from "react-icons/ai"
import { BiEditAlt } from "react-icons/bi"
import offers from "./data.json"

const OffersLog = () => {
  const [offersList, setOffersList] = useState({})


  useEffect(() => {
    setOffersList(offers)
    //     fetch(`https://api.xircles.in/referral/get_offers/`, {
    //       method: "GET",
    //       headers: {
    //         Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0MTAwMjI0LCJpYXQiOjE2OTQwNzAyMjQsImp0aSI6Ijc1YTM5NGM1NTYxYzRmNDM5YjJkMTg5MTQwMzYxMTZjIiwidXNlcl9pZCI6MTg3MTc2fQ.6eBUrGq_mLJrtG7e36pjt-WLvWhbs1_pV0s0cXehQCk",
    //         "Api-key": "Fv14sMRkz8uYqd3VMbKy5U+7h6QE4Rcb7MeG1d/PoXU="
    //       }
    //   })
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     setOffersList(data)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    //     // setOffersList(["Offer 1", "Offer 2", "Offer 3", "Offer 4", "Offer 5"])
    //     // console.log(offersList)
  }, [])

  // console.log(offersList)

  return (
    <>
      <Card>
        <CardBody>
          <h3>Offers List</h3>
        </CardBody>
      </Card>

      <button type="button" className='btn btn-primary fs-4 mb-2' >+ Create</button>

      <Row>
        {
          offersList ? (
            offersList?.data?.map(offer => {
              return (
                <Col key={offer.id} md={6}>
                  <Card className='rounded-2'>
                    <CardBody>
                      <div className='d-flex justify-content-between align-items-center'>
                        <h3>Offer {offer.id}</h3>
                        <div className='d-flex justify-content-center align-items-center gap-1'>
                          <button type="button" className='btn btn-primary' ><BiEditAlt /> Edit</button>
                          <button type="button" className='btn btn-danger' ><AiFillDelete /> Delete</button>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              )
            })
          ) : (
            <p>No offers</p>
          )
        }
      </Row>

      <Row>
        <Col md={6} className='p-0'>
          <Card style={{ overflow: 'hidden' }} className='mb-3 ms-2'>
            <CardBody>
              <div className='d-flex flex-column justify-items-center align-items-baseline'>
                <h3 className='ms-1 mb-1'>Referrer Offer</h3>
              </div>
              <div className="d-flex row mx-1">
                <div className="col-4 mb-1">
                  <h4 >Value</h4>
                  <p className=' fs-5'>25</p>
                </div>
                <div className="col-4">
                  <h4>Offer Type</h4>
                  <p className=' fs-5'>Percentage</p>
                </div>
                <div className="col-4 mb-1">
                  <h4 >Minimum</h4>
                  <p className=' fs-5'>12</p>
                </div>
              </div>
              <div className='d-flex justify-content-end align-items-center gap-1'>
                <button type="button" className='btn btn-primary' ><BiEditAlt /> Edit</button>
                <button type="button" className='btn btn-danger' ><AiFillDelete /> Delete</button>
              </div>
            </CardBody>
          </Card>
        </Col>

        {/* <Col md={6} className='p-0'>
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
        </Col> */}
      </Row>
    </>
  )
}

export default OffersLog

// https://api.xircles.in/referral/get_offers/