import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, CardTitle, Col, Container, Modal, ModalBody, Row, Tooltip } from 'reactstrap'
import ComTable from '../Components/DataTable/ComTable'
import './GnReports.css'
import { Link } from 'react-router-dom'

export default function GnReportsCopy() {
    const [searchValue, setSearchValue] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [tableData, setTableData] = useState([])
    const [newColumnTitle, setNewColumnTitle] = useState('')
    // const [showPopup1, setShowPopup1] = useState(false)

    useEffect(() => {
        const form_data = new FormData()
        form_data.append('shop', 'opus-mind-bags.myshopify.com')
        form_data.append('app_name', "whoosh")
        fetch(`https://api.xircls.in/api/get/getdisc/`, {
            method: "POST",
            body: form_data
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setTableData(data.data.codeDiscountNodes.nodes)
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false)
            })

    }, [])

    // ** Function to handle filter
    const handleFilter = e => {
        const value = e.target.value
        let updatedData = []
        setSearchValue(value)

        if (value.length) {
            updatedData = tableData.filter(item => {
                const startsWith =
                    (item.sf_plan && item.sf_plan.toLowerCase().startsWith(value.toLowerCase())) ||
                    (item.sf_plan_status && item.sf_plan_status.toLowerCase().startsWith(value.toLowerCase()))

                if (startsWith) {
                    return startsWith
                } else return null
            })

            setFilteredData(updatedData)
            setSearchValue(value)
        }
    }
//       const togglePopup1 = () => {
//   setShowPopup1(!showPopup1)
// }


    const [columns, setColumns] = useState([
        {
      name: <p className="fw-bolder" style={{ fontSize: '0.95rem' }}>Identity</p>,
      cell: (row, index) => {
        
        if (index < 4) {
          return ['Male', 'Female', 'Cat Lover', 'Data Not Available'][index]
        } else {
          return null
        }
      }
    },
    {
      name: <p className="fw-bolder" style={{ fontSize: '0.95rem' }}>Revenue</p>,
      selector: () => ''
    },
    {
      name: <p className="fw-bolder" style={{ fontSize: '0.95rem' }}>Purchases</p>,
      selector: () => ''
    },
    {
      name: <p className="fw-bolder" style={{ fontSize: '0.95rem' }}>Customers</p>,
      selector: () => ''
    },
  {
  name: <p className="fw-bolder" style={{ fontSize: '0.95rem' }}>Users</p>,
 cell: () => (
        <Link to="/merchant/visitor-page" style={{ textDecoration: 'none', marginTop:'3%' }} >
          <span class="text-primary font-weight-medium" style={{fontSize:'16px'}}>200</span>
         <h6 style={{fontSize:'11px'}}>27%</h6>
        </Link>
      )
}

  ])

    // Reset the title input field
    const addColumn = () => {
      const newColumn = {
      name: <p className="fw-bolder" style={{ fontSize: '0.95rem' }}>{newColumnTitle}</p>,
      selector: (row) => row.offer_code
    }

    setColumns((prevColumns) => [...prevColumns, newColumn])
    setNewColumnTitle('')
  }


    return (
        <>
            <Container>
                <Row>
                    <div className="d-flex justify-content-between">
                        <h2 className='mb-2'>Reports</h2>
                        <div className="d-flex justify-content-center align-items-center">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="New Column Title"
                                value={newColumnTitle}
                                onChange={e => setNewColumnTitle(e.target.value)}
                                style={{ fontSize: '0.95rem', width: "150px", height: "40px" }}
                            />
                            <button className='btn btn-primary m-1' onClick={addColumn}>Add Column</button>
                        </div>
                    </div>
                    <section>
                        <div className="card">
                            <div className="card-body">
                                <ComTable
                                    tableName="Main Reports Page"
                                    tableCol={columns}
                                    data={tableData}
                                    searchValue={searchValue}
                                    handleFilter={handleFilter}
                                    filteredData={filteredData}
                                    paginationPerPage={4}
                                    isLoading={isLoading}
                                />
                            </div>
                        </div>
                    </section>
                </Row>
                  {/* <Modal className='modal-dialog modal-dialog-centered' isOpen={showPopup1} toggle={togglePopup1} >
                                            <ModalTitle className='ps-1 pt-1 d-flex justify-content-between'>
                                           <div className='mx-auto'>  
      <h3 className="text-center">Visitor Page: Male</h3>   
    </div>                                                                                                                                                
                                               <X onClick={togglePopup1} style={{ cursor: 'pointer' }} />
                                            </ModalTitle>
                                          <ModalBody className='d-flex justify-content-between'>
                                          <div>
                                            <Users />
                                            <span style={{ fontSize: "18px" }}>234</span>
                                          </div>
                                          <div className='d-flex'>
                                           <span style={{ fontSize: "18px" }}>Popular Page:</span>
      <p style={{ margin: "0", fontSize: "18px" }}>abc</p>
                                            
                                          </div>
                                            </ModalBody>
           </Modal>  */}
            </Container>
        </>
    )
}