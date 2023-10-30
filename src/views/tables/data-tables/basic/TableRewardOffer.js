// ** React Imports
import { Fragment, useState } from 'react'


// ** Table Columns
import { rewardOfferColums } from '../data'
// import { TableResponsive } from '../data'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import { useTranslation } from 'react-i18next'
import DataTable from 'react-data-table-component'

// ** Reactstrap Imports
import { Card, Input, Row, Form, Col, FormGroup } from 'reactstrap'


// Publish switch
const PublishSwitch = ({ isActive }) => {
  return (
    <FormGroup switch><Input type="switch" role="switch" defaultChecked={isActive} /></FormGroup>
  )
}


export const data = [
  { subcategory: "Audio/Video Consultation", name: "rfv Test", id: 1, category: "Online Vet Consultation", responsive_id: "", start_date: "feb 17,2023", end_date: "feb 28,2023", sponser_count: "4", publish: <PublishSwitch isActive={true} />, activate: <PublishSwitch isActive={true} />, retail_price: "200", status: 0 },
  { subcategory: "Audio/Video Consultation", name: "Main Test", id: 1, category: "Online Vet Consultation", responsive_id: "", start_date: "feb 17,2023", end_date: "feb 28,2023", sponser_count: "4", publish: <PublishSwitch isActive={true} />, activate: <PublishSwitch isActive={true} />, retail_price: "200", status: 1 },
  { subcategory: "Audio/Video Consultation", name: "Main Test", id: 1, category: "Online Vet Consultation", responsive_id: "", start_date: "feb 17,2023", end_date: "feb 28,2023", sponser_count: "4", publish: <PublishSwitch isActive={true} />, activate: <PublishSwitch isActive={true} />, retail_price: "200", status: 0 }
]

const TableRewardOffer = () => {
  // ** State
  // eslint-disable-next-line no-unused-vars
  const [ItemsPerPage, setItemsPerPage] = useState(10)
  const [DataLength, setDataLength] = useState(data.length)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])


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
      1: { title: 'Active', color: 'light-success' },
      0: { title: 'Inactive', color: 'light-danger' }
    }
    if (value.length) {
      updatedData = data.filter(item => {
        const startsWith =
          item.name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.category.toLowerCase().startsWith(value.toLowerCase()) ||
          item.subcategory.toLowerCase().startsWith(value.toLowerCase()) ||
          item.retail_price.toLowerCase().startsWith(value.toLowerCase()) ||
          item.start_date.toLowerCase().startsWith(value.toLowerCase()) ||
          item.end_date.toLowerCase().startsWith(value.toLowerCase()) ||
          item.sponser_count.toLowerCase().startsWith(value.toLowerCase()) ||
          status[item.status].title.toLowerCase().startsWith(value.toLowerCase())

        const includes =
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.category.toLowerCase().includes(value.toLowerCase()) ||
          item.subcategory.toLowerCase().includes(value.toLowerCase()) ||
          item.retail_price.toLowerCase().includes(value.toLowerCase()) ||
          item.start_date.toLowerCase().includes(value.toLowerCase()) ||
          item.end_date.toLowerCase().includes(value.toLowerCase()) ||
          item.sponser_count.toLowerCase().includes(value.toLowerCase()) ||
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
  const CustomPagination = () => {

    return (
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
  }


  return (
    <Card >
      <Row className='justify-content-between align-items-center mb-1'>

        <Col className=' d-flex justify-content-start align-items-center' md='3' sm='3'>
          <Form className=' d-flex justify-content-start align-items-center'>
            <h5 className='fs-5 m-1'>Show</h5>

            <Input type="select" bsSize='sm' name="select" id="exampleSelect" onChange={(e) => { setItemsPerPage(e.target.value); setCurrentPage(0) }} style={{ minWidth: "60px" }}>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={40}>40</option>
              <option value={50}>50</option>
            </Input>
          </Form>
        </Col>
        <Col className='d-flex align-items-center justify-content-center ' md='4' sm='12'>
          <h4>Rewards Offer Dashboard</h4>

        </Col>

        <Col className='d-flex align-items-center justify-content-end mt-1' md='4' sm='12'>
         
          <Input
            className='dataTable-filter form-control ms-1'
            style={{ width: `180px`, height: `2.714rem` }}
            type='text'
            bsSize='sm'
            id='search-input-1'
            value={searchValue}
            onChange={handleFilter}
          />
        </Col>
      </Row>
      <div className='report_table_border'>
        {data ? <DataTable
          pagination
          key={ItemsPerPage}
          paginationPerPage={ItemsPerPage}
          columns={rewardOfferColums}
          // columns={TableResponsive}
          className='react-dataTable table'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          persistTableHead
          paginationComponent={CustomPagination}
          noDataComponent={<h4 className='fs-5 p-2'>No Data available in table</h4>}
          data={searchValue.length ? filteredData : data}
        /> : <div className="text-center"> <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div></div>}

      </div>
    </Card>
  )
}

export default TableRewardOffer
