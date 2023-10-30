// ** React Imports
import { Fragment, useState } from 'react'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import { useTranslation } from 'react-i18next'
import DataTable from 'react-data-table-component'

// ** Reactstrap Imports
import { Card, Input, Row, Col } from 'reactstrap'
import Spinner from './Spinner'

const ComTable = ({ tableName, tableCol, data, searchValue, handleFilter, filteredData, isLoading, paginationPerPage  }) => {
  // ** State
  const [currentPage, setCurrentPage] = useState(0)
  

  // ** Hooks
  const { t } = useTranslation()
  // ** Function to handle pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
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
    <ReactPaginate
      previousLabel={<Previous size={15} />}
      nextLabel={<Next size={15} />}
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={searchValue.length ? Math.ceil(filteredData.length / 7) : Math.ceil(data.length / 7) || 1}
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
  )

  const customStyles = {
      headCells: {
          style: {
              color: "#6e6b7b",
              fontSize: "14px",
              fontWeight: "600",
              borderTop: `1px solid #ebe9f1`,
              borderRight: `1px solid #ebe9f1`,
              borderLeft: `1px solid #ebe9f1`
          }
      }, 
      cells: {
          style: {
            fontSize: "14px",
              border: `1px solid #ebe9f1`,
              color: "#5e5873",
              borderTop: `none`
          }
      }
  }

  return (
    <>
      <Row className='justify-content-end mx-0'>
        <Col className='d-flex align-items-center justify-content-center' md='4' sm='12'>
          <h4 className='m-0'>{tableName}</h4>
        </Col>
        <Col className='d-flex align-items-center justify-content-end' md='4' sm='12'>
          <Input
            className='dataTable-filter form-control ms-1'
            style={{ width: `180px`, height: `2.714rem` }}
            type='text'
            bsSize='sm'
            id='search-input-1'
            placeholder='Search...'
            value={searchValue}
            onChange={handleFilter}
          />
        </Col>
      </Row>
    
      <div className='react-dataTable' style={{marginTop: '20px'}}>
        {<DataTable
          pagination
          customStyles={customStyles}
          selectableRowsNoSelectAll
          columns={tableCol}
          className='react-dataTable'
          paginationPerPage={paginationPerPage}
          sortIcon={<ChevronDown size={10} />}  
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={searchValue.length ? filteredData : data}
          progressPending={isLoading}
          progressComponent={<Spinner size="40px" />}
          // noDataComponent=""
        />}
        
        
      </div>
    </>
  )
}

export default ComTable
