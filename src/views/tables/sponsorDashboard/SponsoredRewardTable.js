/* eslint-disable no-unused-vars */
import './report_table.scss'
// ** React Imports
import { Fragment, useState } from 'react'
// ** Table Columns
import { SponsoredMultiLingColumns } from './SponsoredData'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown, X } from 'react-feather'
import { useTranslation } from 'react-i18next'
import DataTable from 'react-data-table-component'

// ** Reactstrap Imports
import { Card, Badge, FormGroup, Form, Button, Input, Row, Col, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'


// switch element
const SwitchElement = ({ isActive }) => {
    return (
        <FormGroup switch><Input type="switch" role="switch" defaultChecked={isActive} /></FormGroup>
    )
}


// export data to ui
const data = [
    { reward_name: "Gift-Card (500)", total_sponsor_amount: "47500.00", reward_price: "500.00", discounted_reward_price: "475.00", start_date: "Mar 9,2023", end_date: "Apr 23,2023", activate: <SwitchElement isActive={true} />, status: 1 },
    { reward_name: "Gift-Card (500)", total_sponsor_amount: "47500.00", reward_price: "500.00", discounted_reward_price: "475.00", start_date: "Mar 9,2023", end_date: "Apr 23,2023", activate: <SwitchElement isActive={false} />, status: 0 },
    { reward_name: "Gift-Card (500)", total_sponsor_amount: "47500.00", reward_price: "500.00", discounted_reward_price: "475.00", start_date: "Mar 9,2023", end_date: "Apr 23,2023", activate: <SwitchElement isActive={true} />, status: 1 },
    { reward_name: "Chocolates", total_sponsor_amount: "33500.00", reward_price: "500.00", discounted_reward_price: "475.00", start_date: "Mar 9,2023", end_date: "Apr 23,2023", activate: <SwitchElement isActive={false} />, status: 0 },
    { reward_name: "Chocolates", total_sponsor_amount: "32000.00", reward_price: "500.00", discounted_reward_price: "475.00", start_date: "Mar 9,2023", end_date: "Apr 23,2023", activate: <SwitchElement isActive={true} />, status: 1 },
    { reward_name: "Chocolates", total_sponsor_amount: "25000.00", reward_price: "500.00", discounted_reward_price: "475.00", start_date: "Mar 9,2023", end_date: "Apr 23,2023", activate: <SwitchElement isActive={false} />, status: 0 },
    { reward_name: "Melody", total_sponsor_amount: "25000.00", reward_price: "500.00", discounted_reward_price: "475.00", start_date: "Mar 9,2023", end_date: "Apr 23,2023", activate: <SwitchElement isActive={true} />, status: 1 }
]


export default function SponsoredRewardTable() {

    // ** State
    const [ItemsPerPage, setItemsPerPage] = useState(10)
    const [DataLength, setDataLength] = useState(data.length)
    const [currentPage, setCurrentPage] = useState(0)
    const [searchValue, setSearchValue] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [modalData, setmodalData] = useState('')

    // Row  click function
    const [modal1, setModal1] = useState(false)
    const [modal2, setModal2] = useState(false)

    const onRowClicked = (row) => { setmodalData(row); setModal1(true) }

    // const handleRowClicked = useCallback((row, e) => onRowClicked(row, e), [onRowClicked])
    const closeBtn = (
        <h1 className="close" onClick={() => { setModal1(false); setModal2(false) }} type="button">
            <X size={20} className='text-secondary' />
        </h1>
    )

    //  modal img data

    const modalImgData = [
        { img: "https://media.istockphoto.com/id/1325601229/photo/full-moon-with-cosmos-flowers-silhouette-in-the-night.webp?b=1&s=170667a&w=0&k=20&c=5OE5T1hz2ISpmiKu9R9DqYHclBeH2olRg7cln0_61VU=" },
        { img: "https://images.unsplash.com/photo-1568292342316-60aa3d36f4b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FscGFwZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
        { img: "https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FscGFwZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
        { img: "https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FscGFwZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
        { img: "https://media.istockphoto.com/id/1325601229/photo/full-moon-with-cosmos-flowers-silhouette-in-the-night.webp?b=1&s=170667a&w=0&k=20&c=5OE5T1hz2ISpmiKu9R9DqYHclBeH2olRg7cln0_61VU=" },
        { img: "https://images.unsplash.com/photo-1568292342316-60aa3d36f4b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FscGFwZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" }
    ]
    // currency 
    const currency = { rupee: "₹" }

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
                    item.reward_name.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.total_sponsor_amount.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.reward_price.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.discounted_reward_price.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.start_date.toLowerCase().startsWith(value.toLowerCase()) ||
                    item.end_date.toLowerCase().startsWith(value.toLowerCase()) ||

                    status[item.status].title.toLowerCase().startsWith(value.toLowerCase())

                const includes =
                    item.reward_name.toLowerCase().includes(value.toLowerCase()) ||
                    item.total_sponsor_amount.toLowerCase().includes(value.toLowerCase()) ||
                    item.reward_price.toLowerCase().includes(value.toLowerCase()) ||
                    item.discounted_reward_price.toLowerCase().includes(value.toLowerCase()) ||
                    item.start_date.toLowerCase().includes(value.toLowerCase()) ||
                    item.end_date.toLowerCase().includes(value.toLowerCase()) ||
                    status[item.status].title.toLowerCase().includes(value.toLowerCase())

                // console.log("Start with", startsWith) 

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
        setCurrentPage(0)
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
                    <h4>My Sponsored Rewards</h4>
                </Col>

                <Col className='d-flex align-items-center justify-content-end ' md='4' sm='12'>

                    <Input
                        className='dataTable-filter form-control ms-1 fs-5'
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
                    key={ItemsPerPage}
                    paginationPerPage={ItemsPerPage}
                    highlightOnHover
                    selectableRowsNoSelectAll
                    columns={SponsoredMultiLingColumns}
                    sortIcon={<ChevronDown size={10} />}
                    paginationDefaultPage={currentPage + 1}
                    paginationComponent={CustomPagination}
                    persistTableHead
                    data={searchValue.length ? filteredData : data}
                    noDataComponent={<h4 className='fs-5 p-2'>No Data available in table</h4>}
                    onRowClicked={onRowClicked}
                /> : <div className="text-center"> <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div></div>}

            </div>

            {/* modal1 */}
            <Modal isOpen={modal1} backdrop={'static'} style={{ maxWidth: '600px', width: '100%' }}>

                <ModalHeader close={closeBtn} className='fs-3 fw-bold mx-2 p-1 bg-white border-bottom text-primary'><div className='text-primary'>{modalData.reward_name} Report</div></ModalHeader>
                <ModalBody className='px-3' >
                    {/* <div>

                        <h4 className='fs-5 fw-bold m-1'>Reward Name : <span>{modalData.reward_name}</span></h4>
                        <h4 className='fs-5 fw-bold m-1'>Total Sponsorship Amount : <span>{modalData.total_sponsor_amount}</span></h4>
                        <h4 className='fs-5 fw-bold m-1'>Reward Price : <span>{modalData.reward_price}</span></h4>
                        <h4 className='fs-5 fw-bold m-1'>Discounted Reward Price : <span>{modalData.discounted_reward_price}</span></h4>
                        <h4 className='fs-5 fw-bold m-1'>Start Date : <span>{modalData.start_date}</span></h4>
                        <h4 className='fs-5 fw-bold m-1'>End Date : <span>{modalData.end_date}</span></h4>
                        <h4 className='fs-5 fw-bold m-1'>Status : {modalData.status === 1 ? <span className='text-success'>Active</span> : <span className='text-danger'>Inactive</span>}</h4>
                    </div> */}

                    <div  >

                        <Row className='my-1'>
                            <Col md='8'>
                                <h5 >Reward Name : </h5>
                            </Col>
                            <Col md='4'>
                                <h5 className='text-primary'>{modalData.reward_name} </h5>
                            </Col>
                        </Row>
                        <Row className='my-1'>
                            <Col md='8'>
                                <h5 >Total Sponsorship Amount : </h5>
                            </Col>
                            <Col md='4'>
                                <h5 >{currency.rupee} {modalData.total_sponsor_amount} </h5>
                            </Col>
                        </Row>
                        <Row className='my-1'>
                            <Col md='8'>
                                <h5 >Reward Price : </h5>
                            </Col>
                            <Col md='4'>
                                <h5 className='text-success'>{currency.rupee} {modalData.reward_price} </h5>
                            </Col>
                        </Row>
                        <Row className='my-1'>
                            <Col md='8'>
                                <h5 >Discounted Reward Price : </h5>
                            </Col>
                            <Col md='4'>
                                <h5 >{currency.rupee} {modalData.discounted_reward_price} </h5>
                            </Col>
                        </Row>
                        <Row className='my-1'>
                            <Col md='8'>
                                <h5 >Start Date : </h5>
                            </Col>
                            <Col md='4'>
                                <h5 >{modalData.start_date} </h5>
                            </Col>
                        </Row>
                        <Row className='my-1'>
                            <Col md='8'>
                                <h5 >End Date : </h5>
                            </Col>
                            <Col md='4'>
                                <h5 >{modalData.end_date} </h5>
                            </Col>
                        </Row>
                        <Row className='my-1'>
                            <Col md='8'>
                                <h5 >Status : </h5>
                            </Col>
                            <Col md='4'>
                                <h5>{modalData.status === 1 ? <Badge color='light-success' className='px-1'>Active</Badge> : <Badge color='light-danger' className='px-1'>Inactive</Badge>} </h5>
                            </Col>
                        </Row>
                    </div>

                </ModalBody>
                <ModalFooter >
                    <Button color="primary" size='sm' onClick={() => setModal2(true)}>
                        Next
                    </Button>
                </ModalFooter>
            </Modal>

            {/* modal2 */}
            <Modal isOpen={modal2} backdrop={false} style={{ maxWidth: '700px', width: '100%' }}>
                <ModalHeader close={closeBtn} className='fs-3 fw-bold m-1 bg-white border-bottom'><div className='text-primary'>{modalData.reward_name} Report</div></ModalHeader>

                <ModalBody >
                    <Row>
                        {
                            modalImgData && modalImgData.map((imgSrc) => {
                                return (
                                    <Col lg='4'>
                                        <Card style={{ width: '100%', height: '80%' }} >
                                            <img alt="Sample" src={imgSrc.img} className='rounded-2 modal-imgs' style={{ width: '100%', height: '100%' }} />
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" size='sm' onClick={() => setModal2(false)}>
                        Back
                    </Button>
                </ModalFooter>
            </Modal>

        </Card>
    )
}
