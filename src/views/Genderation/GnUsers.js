import React, { useEffect, useState } from 'react'
import { CheckCircle, CreditCard, DollarSign } from 'react-feather'
import ComTable from '../Components/DataTable/ComTable'

export default function GnUsers() {

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

    const columns = [
        {
            name: <p className="fw-bolder" style={{ fontSize: '0.95rem' }}>Sr No.</p>,
            cell: (row, index) => index + 1
        },
        {
            name: <p className="fw-bolder" style={{ fontSize: '0.95rem' }}>Name</p>,
            selector: row => row.codeDiscount.title

        },
        {
            name: <p className="fw-bolder" style={{ fontSize: '0.95rem' }}>Email</p>,
            selector: row => row.codeDiscount.title

        },
        {
            name: <p className="fw-bolder" style={{ fontSize: '0.95rem' }}>Location</p>,
            selector: row => row.codeDiscount.title

        },
        {
            name: <p className="fw-bolder" style={{ fontSize: '0.95rem' }}>Identity</p>,
            selector: row => row.codeDiscount.title

        },
        {
            name: <p className="fw-bolder" style={{ fontSize: '0.95rem' }}>Sign Up Date</p>,
            selector: row => new Date(row.codeDiscount.createdAt).toLocaleDateString()
        },
        {
            name: <p className="fw-bolder" style={{ fontSize: '0.95rem' }}>Total Purchases</p>,
            selector: row => {
                const rev = row.codeDiscount.totalSales ? (row.codeDiscount.totalSales.amount) : '-'
                return rev !== '-' ? `Rs. ${rev}` : '-'
            }
        },
        {
            name: <p className="fw-bolder" style={{ fontSize: '0.95rem' }}>No. of Logins</p>,
            selector: row => row.codeDiscount.title

        },
        {
            name: <p className="fw-bolder" style={{ fontSize: '0.95rem' }}>Last Website Vist Date</p>,
            selector: row => new Date(row.codeDiscount.createdAt).toLocaleDateString()
        }
    ]

    return (
        <>
            <h2 className='mb-2'>Users/Customers</h2>
            <section>
                <div className="row">
                    <div className="col-4">
                        <div className='card'>
                            <div className='card-body'>
                                <CheckCircle size='27px'/>
                                <div className="d-flex mt-1">
                                    <p className='h5 card-text' style={{ marginRight: 120 }}>Active Offers</p>
                                    <p className='h4 ms-5'>{tableData ? tableData.length : 0}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className='card'>
                            <div className='card-body'>
                                <CreditCard size='27px' />
                                <div className="d-flex mt-1">
                                    <p className='h5 card-text' style={{ marginRight: 90 }}>Total Redeemption</p>
                                    <p className='h4 ms-5'>0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className='card'>
                            <div className='card-body'>
                                <DollarSign size='27px' />
                                <div className="d-flex mt-1">
                                    <p className='h5 card-text' style={{ marginRight: 120 }}>Total Revenue</p>
                                    <p className='h4 ms-5'>0</p>
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
                            tableName="Users/Customers"
                            tableCol={columns}
                            data={tableData}
                            searchValue={searchValue}
                            handleFilter={handleFilter}
                            filteredData={filteredData}
                            isLoading={isLoading}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
