import './report_table.scss'
// ** React Imports
import { Fragment, useState } from 'react'
// ** Table Columns
import { HostWiseReportColumns } from './SponsoredData'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import { useTranslation } from 'react-i18next'
import DataTable from 'react-data-table-component'

// ** Reactstrap Imports
import { Card, Row, Col, Input, FormGroup } from 'reactstrap'


// switch element
const SwitchElement = ({ isActive }) => {
    return (
        <FormGroup switch><Input type="switch" role="switch" defaultChecked={isActive} /></FormGroup>
    )
}


// export data to ui
// export const data = [
//     { sr_no: "1 ", host: "47500.00", total_customers_sponsored: "475.00", total_valued_rewarded: "500.00", total_discount_received: "Mar 9,2023", total_amount_spent: "Apr 23,2023"  },
//     { sr_no: "2 ", host: "47500.00", total_customers_sponsored: "475.00", total_valued_rewarded: "500.00", total_discount_received: "Mar 9,2023", total_amount_spent: "Apr 23,2023"  },
//     { sr_no: "3 ", host: "47500.00", total_customers_sponsored: "475.00", total_valued_rewarded: "500.00", total_discount_received: "Mar 9,2023", total_amount_spent: "Apr 23,2023"   }
// ]

export const data = []

export default function HostWiseReportTable() {


    // ** State
    // eslint-disable-next-line no-unused-vars
    const [DataLength, setDataLength] = useState(data.length)
    const [currentPage, setCurrentPage] = useState(0)
    const [searchValue, setSearchValue] = useState('')
    const [filteredData, setFilteredData] = useState([])
const ItemsPerPage =10

    // ** Hooks
    const { t } = useTranslation()

    // ** Function to handle pagination
    const handlePagination = page => {
        setCurrentPage(page.selected)
    }

    // ** Function to handle filter
    const handleFilter = e => {
        const value = e.target.value
        let updatedData = []
        setSearchValue(value)

        const status = {
            0: { title: 'Active', color: 'light-success' },
            1: { title: 'Inactive', color: 'light-danger' }
        }
        if (value.length) {
            updatedData = data.filter(item => {
                const startsWith =
                    item.sr_no.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.total_sponsor_amount.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.reward_price.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.discounted_reward_price.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.start_date.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.end_date.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.active.toLowerCase().startsWith(value.toLowerCase()) ||

                    status[item.status].title.toLowerCase().startsWith(value.toLowerCase())

                const includes =
                    item.sr_no.toLowerCase().includes(value.toLowerCase()) ||
                    item.total_sponsor_amount.toLowerCase().includes(value.toLowerCase()) ||
                    item.reward_price.toLowerCase().includes(value.toLowerCase()) ||
                    item.discounted_reward_price.toLowerCase().includes(value.toLowerCase()) ||
                    item.start_date.toLowerCase().includes(value.toLowerCase()) ||
                    item.end_date.toLowerCase().includes(value.toLowerCase()) ||
                    item.active.toLowerCase().includes(value.toLowerCase()) ||
                    status[item.status].title.toLowerCase().includes(value.toLowerCase())

                if (startsWith) {
                    return startsWith
                } else if (!startsWith && includes) {
                    return includes
                } else return null
            })
            setFilteredData(updatedData)
            setSearchValue(value)
            setDataLength(updatedData.length)
        } else {
            setDataLength(data.length)

        }
    }

    // ** Pagination Previous Component
    const Previous = () => {
        return (
            <Fragment>
                <span className='align-middle d-none d-md-inline-block'>{t('Prev')}</span>
            </Fragment>
        )
    }

    // ** Pagination Next Component
    const Next = () => {
        return (
            <Fragment>
                <span className='align-middle d-none d-md-inline-block'>{t('Next')}</span>
            </Fragment>
        )
    }

    // ** Custom Pagination Component
    const CustomPagination = () => (
        <div className='d-flex justify-content-between align-items-center px-1'>
            <div className='show_row'>
                <h4 className='fs-6 p-0 text-secondary'>Showing {((currentPage * ItemsPerPage) + 1) >= DataLength ? DataLength : ((currentPage * ItemsPerPage) + 1)} to {((currentPage + 1) * ItemsPerPage) >= DataLength ? DataLength : ((currentPage + 1) * ItemsPerPage)} of {DataLength} entries</h4>
            </div >


            <ReactPaginate
                previousLabel={<Previous size={15} />}
                nextLabel={<Next size={15} />}
                forcePage={currentPage}
                onPageChange={page => handlePagination(page)}
                pageCount={searchValue.length ? Math.ceil(filteredData.length / ItemsPerPage) : Math.ceil(data.length / ItemsPerPage) || 1}
                breakLabel={'...'}
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                activeClassName={'active'}
                pageClassName={'page-item'}
                nextLinkClassName={'page-link'}
                nextClassName={'page-item next'}
                previousClassName={'page-item prev'}
                previousLinkClassName={'page-link'}
                pageLinkClassName={'page-link'}
                breakClassName='page-item'
                breakLinkClassName='page-link'
                containerClassName={'pagination react-paginate pagination-sm justify-content-end pe-1 mt-1'}
            />
        </div>
    )

    return (
        <Card >
            <Row className='justify-content-end align-items-center mb-1'>

                <Col className='d-flex align-items-center justify-content-center ' md='4' sm='12'>
                    <h4>Host Wise Report</h4>
                </Col>

                <Col className='d-flex align-items-center justify-content-end ' md='4' sm='12'>
                    <label className='fs-6 fw-bold' >
                        {t('Search')}
                    </label>
                    <Input
                        className='dataTable-filter form-control ms-1'
                        style={{ width: `180px`, height: `2.714rem` }}
                        type='text'
                        bsSize='sm'
                        id='search-input-1'
                        value={searchValue}
                        onChange={handleFilter}
                        placeholder='Search'
                    />
                </Col>
            </Row>


            <div className='report_table'>
                {data ? <DataTable
                    pagination
                    selectableRowsNoSelectAll
                    columns={HostWiseReportColumns}
                    className=''
                    paginationPerPage={7}
                    sortIcon={<ChevronDown size={10} />}
                    paginationDefaultPage={currentPage + 1}
                    paginationComponent={CustomPagination}
                    data={searchValue.length ? filteredData : data}
                    persistTableHead
                    noDataComponent={<h4 className='fs-5 p-2'>No Data available in table</h4>}

                /> : <div className="text-center"> <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div></div>}

            </div>
        </Card>
    )
}
