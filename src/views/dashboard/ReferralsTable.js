import React, { useEffect, useState } from 'react'
import { Col, Row, Card, CardBody, Form } from 'reactstrap'
import Table from 'react-bootstrap/Table'
import Image from 'react-bootstrap/Image'
import '@src/views/dashboard/ReferralsTable.css'
import { headers } from '../../@core/auth/jwt/header'

const ReferralsTable = () => {
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(4) // Set the number of items per page

  useEffect(() => {
    fetch('https://api.xircles.in/referral/get_log/?page=1&size=4', {
      method: 'GET',
      headers
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((responseData) => {
        setCustomers(
          responseData.data.map((customer) => ({
            ...customer,
            createdAt: new Date(customer.createdAt).toLocaleDateString() // Convert and display only date
          }))
        )
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setError(error)
        setLoading(false)
      })
  }, [])

  // Calculate the indices for the current page
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = customers.slice(indexOfFirstItem, indexOfLastItem)

  // Function to change the current page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      <Card>
        <CardBody>
          <Row>
            <Col>
              <h3 className='text-center mb-3'>Total Reach</h3>
            </Col>
          </Row>
          <div className="table-responsive">
            <Table>
              <thead>
                <tr>
                  <th className='text-center fs-6'>Sr.no</th>
                  <th className='text-center fs-6'>ID</th>
                  <th className='text-center fs-6'>Referrer Email</th>
                  <th className='text-center fs-6'>Referree Email</th>
                  <th className='text-center fs-6'>Action</th>
                  <th className='text-center fs-6'>Shop</th>
                  {/* <th className='text-center fs-6'>Created At</th> */}
                  <th className='text-center fs-6'>Order Amount</th>
                  <th className='text-center fs-6'>Offer</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((customer, index) => (
                  <tr key={customer.id}>
                    <td className='text-center'>{index + 1}</td>
                    <td className="text-center">{customer.id}</td>
                    <td className="text-center">{customer.referrer_email}</td>
                    <td className='text-center'>{customer.referree_email}</td>
                    <td className='text-center'>{customer.action}</td>
                    <td className='text-center'>{customer.shop}</td>
                    {/* <td className='text-center'>{customer.createdAt}</td> */}
                    <td className='text-center'>{customer.order_amount}</td>
                    <td className='text-center'>{customer.offer}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className="pagination mt-3">
            <p>
              Showing {indexOfFirstItem + 1} to{' '}
              {Math.min(indexOfLastItem, customers.length)} of {customers.length} entries
            </p>
            <ul className="pagination-list d-none">
              {Array(Math.ceil(customers.length / itemsPerPage))
                .fill()
                .map((_, i) => (
                  <li
                    key={i}
                    className={`pagination-item ${
                      i + 1 === currentPage ? 'pagination-item-active' : ''
                    }`}
                    onClick={() => paginate(i + 1)}
                  >
                    {i + 1}
                  </li>
                ))}
            </ul>
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default ReferralsTable


// import React, { useState, useEffect } from 'react'
// import { headers } from '../../@core/auth/jwt/header'
// import { CardBody, Row, Col, Card, Form } from 'react-bootstrap'
// import '@src/views/dashboard/ReferralsTable.css'

// function ReferralsTable() {
//   const [data, setData] = useState([])
//   const [filteredData, setFilteredData] = useState([]) // Initialize as an empty array
//   const [itemsPerPage, setItemsPerPage] = useState(10)
//   const [currentPage, setCurrentPage] = useState(1)
//   const [searchTerm, setSearchTerm] = useState('')

//   useEffect(() => {
  //   fetch('https://api.xircles.in/referral/get_log/?page=1&size=4', {
  //     method: 'GET',
  //     headers
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok')
  //       }
  //       return response.json()
  //     })
  //     .then((responseData) => {
  //       // Assuming responseData is an array of items, replace 'items' with your actual data field
  //       setData(responseData.data) // Update with the correct field if needed
  //       setFilteredData(responseData.data) // Update with the correct field if needed
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error)
  //     })
  // }, [])

  // const handleItemsPerPageChange = (e) => {
  //   setItemsPerPage(Number(e.target.value))
  //   setCurrentPage(1)
  // }

  // const handleSearch = (e) => {
  //   const term = e.target.value.toLowerCase()
  //   setSearchTerm(term)
  //   const filtered = data.filter((item) => item.customerName.toLowerCase().includes(term)
  //   )
  //   setFilteredData(filtered)
  //   setCurrentPage(1)
  // }

  // const renderTableData = () => {
  //   const startIndex = (currentPage - 1) * itemsPerPage
  //   const endIndex = startIndex + itemsPerPage

//     return filteredData.slice(startIndex, endIndex).map((item, index) => {
//       // Split the created_at string and take the first part (date)
//       const createdDate = item.created_at.split('T')[0]

//       return (
        // <tr key={item.id}>
        //   <td>{startIndex + index + 1}</td>
        //   <td>{item.id}</td>
        //   <td>{item.referrer_email}</td>
          // <td>{item.referree_email}</td>
          // <td>{item.action}</td>
          // <td>{item.shop}</td>
          // <td>{createdDate}</td> {/* Display the extracted date */}
          // <td>{item.order_amount}</td>
          // <td>{item.referrer}</td>
          // <td>{item.offer}</td>
        // </tr>
//       )
//     })
//   }

//   const totalPages = Math.ceil(filteredData.length / itemsPerPage)

//   return (
//     <>
//       <Row>
//         <Col className='d-none d-md-block justify-content-start' lg={4} md={4}>
//                 <label style={{ display: 'flex' }}>
//                   <h4>Show</h4>&nbsp;
//                   <select
//                     value={itemsPerPage}
//                     onChange={handleItemsPerPageChange}
//                     style={{
//                       marginLeft: '2vh',
//                       marginRight: '2vh',
//                       height: '3vh',
//                       borderRadius: '0.7vh',
//                       width: '6vh',
//                       height: '3.5vh'
//                     }}
//                   >
//                     <option value="2">2</option>
//                     <option value="20">20</option>
//                     <option value="30">30</option>
//                   </select>
//                   &nbsp;<h4>rows</h4>
//                 </label>
//         </Col>
//         <Col className='d-flex justify-content-md-start' lg={4} md={4} sm={6}>
//                 <div className='total-reach text-center'>
//                   <h3>Total Reach</h3>
//                 </div>
//         </Col>
//         <Col className='d-flex justify-content-sm-end' lg={4} md={4} sm={6}>
//                 <Form.Control
//                   style={{
//                     border: '2px solid #9c9ba2',
//                     padding: '1vh',
//                     borderRadius: '0.8vh',
//                     width: '15vw'
//                   }}
//                   type="text"
//                   placeholder="Search by customer name"
//                   value={searchTerm}
//                   onChange={handleSearch}
//                 />
//         </Col>        
//       </Row>    
//           <div className="table-responsive mt-2">
//             <table
//               className="table-bordered"
//               style={{ width: "-webkit-fill-available" }}
//             >
//               <thead>
//                 <tr>
//                   <th>Sr.no</th>
//                   <th>ID</th>
//                   <th>Referrer Email</th>
//                   <th>Referree Email</th>
//                   <th>Action</th>
//                   <th>Shop</th>
//                   <th>Created At</th>
//                   <th>Order Amount</th>
//                   <th>Referrer</th>
//                   <th>Offer</th>
//                 </tr>
//               </thead>
//               <tbody className='justify-content-between'>
//                 {renderTableData()}
//               </tbody>
//             </table>
//           </div>
//           <Row className='d-flex justify-content-between mt-3'>
//             <Col lg={6} md={6} sm={12}>
//             <div className="pagination d-flex justify-content-sm-center justify-content-md-start" style={{fontWeight: "500" }}>
//               <h5 style={{ marginTop: "2px" }}>Showing</h5>&nbsp; {currentPage === totalPages ? 'all' : itemsPerPage} of{' '}
//               {filteredData.length}&nbsp; <h5 style={{ marginTop: "2px" }}>entries</h5>
//             </div>
//             </Col>
//             <Col lg={6} md={6} sm={12}>
//             <div className="pagination d-flex justify-content-sm-center justify-content-md-end" style={{ fontSize: "1.8vh", fontWeight: "500" }}>
//               <button className='back'
//                 onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
//                 disabled={currentPage === 1}
//               >
//                 Back
//               </button>
//               <span style={{ marginTop: "0.8vh" }}>
//                 Page {currentPage} of {totalPages}
//               </span>
//               <button className='next'
//                 onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
//                 disabled={currentPage === totalPages}
//               >
//                 Next
//               </button>
//             </div>
//             </Col>
//       </Row>

//     </>
//   )
// }

// export default ReferralsTable
