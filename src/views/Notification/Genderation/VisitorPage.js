import React, { useEffect, useState } from 'react'
import ComTable from '../Components/DataTable/ComTable'

export default function VisitorPage() {

    const [tableData, setTableData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchValue, setSearchValue] = useState('')
    const [filteredData, setFilteredData] = useState([])

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

    const [columns] = useState([
        {
            name: <p className="fw-bolder" style={{ fontSize: '0.95rem' }}>Sr No.</p>,
            width: '7.5%',
            cell: (row, index) => index + 1
        },
    {
      name: <p className="fw-bolder" style={{ fontSize: '0.95rem' }}>Date</p>,
      selector: () => ''
    },
    {
      name: <p className="fw-bolder" style={{ fontSize: '0.95rem' }}>Time Stamp</p>,
      selector: () => ''
    },
    {
      name: <p className="fw-bolder" style={{ fontSize: '0.95rem' }}>Page Visited First</p>,
      selector: () => ''
    },

    {
      name: <p className="fw-bolder" style={{ fontSize: '0.95rem' }}>Page Dropped On</p>,
      selector: () => ''
    },
     {
      name: <p className="fw-bolder" style={{ fontSize: '0.95rem' }}>Session Duration</p>,
      selector: () => ''
    }
  ])

    return (
        <>
            <h2 className='mb-2'>Visitors Page</h2>
            <section>
                <div className="row">
                    <div className="col-6">
                        <div className='card'>
                            <div className='card-body'>
                                <div className="d-flex mt-1 justify-content-between">
                                    <h5 className='card-text'>Total Page Visits</h5>
                                    <h5 className='ms-5'>63930</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className='card'>
                            <div className='card-body'>
                                <div className="d-flex mt-1 justify-content-between">
                                    <h5 className='card-text'>Popular Page</h5>
                                        <h5 className='ms-5'> <a href="your-link-url">abc</a></h5>
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
                            tableName="Visitors Page"
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
        </>
    )
}
