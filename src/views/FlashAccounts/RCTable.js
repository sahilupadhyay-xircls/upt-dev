import React, { useEffect, useState } from "react"
import ComTable from "../Components/DataTable/ComTable"

export default function RCTable() {
  const [tableData, setTableData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchValue, setSearchValue] = useState("")
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    // Simulating static data
    const staticData = [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        signUpDate: "2023-07-01",
        purchaseCount: 5,
        emailOpt: true,
        smsOpt: false,
        whatsappOpt: true
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        signUpDate: "2023-07-02",
        purchaseCount: 3,
        emailOpt: true,
        smsOpt: true,
        whatsappOpt: false
      }
      // Add more static data entries here
    ]

    setTableData(staticData)
    setIsLoading(false)
  }, [])

  const handleFilter = (e) => {
    const value = e.target.value
    setSearchValue(value)

    if (value.length) {
      const updatedData = tableData.filter((item) => {
        const startsWith =
          (item.pageVisitedFirst &&
            item.pageVisitedFirst
              .toLowerCase()
              .startsWith(value.toLowerCase())) ||
          (item.pageDroppedOn &&
            item.pageDroppedOn.toLowerCase().startsWith(value.toLowerCase()))

        return startsWith
      })

      setFilteredData(updatedData)
    } else {
      setFilteredData([])
    }
  }

  const columns = [
    {
      name: (
        <p className="fw-bolder" style={{ fontSize: "0.95rem" }}>
          Sr No.
        </p>
      ),
      width: "7.5%",
      cell: (row, index) => index + 1
    },
    {
      name: (
        <p className="fw-bolder" style={{ fontSize: "0.95rem" }}>Name</p>
      ),
      selector: "name"
    },
    {
      name: (
        <p className="fw-bolder" style={{ fontSize: "0.95rem" }}>Email ID</p>
      ),
      selector: "email"
    },
    {
      name: (
        <p className="fw-bolder" style={{ fontSize: "0.95rem" }}>Sign Up Date</p>
      ),
      selector: "signUpDate"
    },
    {
      name: (
        <p className="fw-bolder" style={{ fontSize: "0.95rem" }}>Purchase count</p>

      ),
      selector: "purchaseCount"
    },
    {
      name: (
        <p className="fw-bolder" style={{ fontSize: "0.95rem" }}> Email Opt</p>
      ),
      selector: "emailOpt"
    },
    {
      name: (
        <p className="fw-bolder" style={{ fontSize: "0.95rem" }}>SMS Opt</p>
      ),
      selector: "smsOpt"
    },
    {
      name: (
        <p className="fw-bolder" style={{ fontSize: "0.95rem" }}>Whatsapp Opt</p>
      ),
      selector: "whatsappOpt"
    }
  ]

  return (
    <>
      <section>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h3 style={{ marginTop: "9px" }}>Registered Customers</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="card">
          <div className="card-body">
            <ComTable
              tableName="Registered Customers"
              tableCol={columns}
              data={filteredData.length ? filteredData : tableData}
              searchValue={searchValue}
              handleFilter={handleFilter}
              paginationPerPage={2}
              isLoading={isLoading}
            />
          </div>
        </div>
      </section>
    </>
  )
}
