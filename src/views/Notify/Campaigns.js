import './style/NotifyStyle.css'
import { Col, Row, Card, CardBody, CardHeader, Table, CardColumns, CardTitle, Form, InputGroup, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { Data } from './Data.js'
import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { AiOutlineMenu } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiArrowDropDownLine } from 'react-icons/ri'


function Campaigns() {
    const [search, setSearch] = useState('')
    const [selectedChannel, setSelectedChannel] = useState(null)
    const [selectedSegment, setSelectedSegment] = useState(null)
    const [selectedCampaign, setSelectedCampaign] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [menuOpen, setMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)

    const itemsPerPage = 7
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    const toggleSearchOpen = () => {
        setSearchOpen(!searchOpen)
    }
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    const handleChannelSelect = (channel) => {
        setSelectedChannel(channel)
    }
    const handleSegmentSelect = (segment) => {
        setSelectedSegment(segment)
    }
    const handleCampaignSelect = (campaign) => {
        setSelectedCampaign(campaign)
    }
    const handleSearchChange = (e) => {
        setSearch(e.target.value.toLowerCase())
    }
    const filteredData = Data.filter((item) => {
        return (
            (!selectedChannel || item.Channel === selectedChannel) &&
            (search === '' || item.Name.toLowerCase().includes(search)) &&
            (!selectedSegment || item.Segment === selectedSegment) &&
            (!selectedCampaign || item.Campaign === selectedCampaign)
        )
    })
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem)

    return (
        <>
            <Card>
                {/* Campaign Header */}
                <CardBody>
                <div className="row d-flex justify-content-evenly ">
                        <div className="col-md-2">
                            <div className="">
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="">
                            </div>
                        </div>
                        <div className="col">
                            <CardTitle tag='h4' className='row p-auto m-auto text-nowrap text-sm-start'>
                                <strong>&nbsp;&nbsp;&nbsp;Campaigns</strong>
                            </CardTitle>
                        </div>
                        <div className="col order-md-0 order-last">
                                    <div className="col me-1">
                                        {searchOpen ? (
                                        <div class="col input-group rounded search-bar-order d-flex justify-content-center ">
                                            <input
                                                type="search"
                                                className={`form-control rounded small-screen-search text-center ${searchOpen ? 'fade-in' : 'fade-out'
                                                    }`}
                                                placeholder="Search Name"
                                                style={{height: `1.5rem`, border:"solid grey 1px", opacity:`0.8`, maxWidth:`180px`}}
                                                value={search}
                                                aria-label="Search"
                                                aria-describedby="search-addon"
                                                onChange={handleSearchChange}
                                            />
                                        </div>
                                        ) : null }
                                    </div>
                        </div>
                        <div className="col-md-2">
                                    <div className="col d-flex justify-content-end style list-unstyled "> 
                                            <li>
                                                <div>
                                                    <span class=" border-0" id="search-addon" style={{ marginTop: '0px', padding: '0px', paddingRight:`4px`, fontSize:`12px`}} >
                                                        <i class="SearchIcon fas fa-search " onClick={toggleSearchOpen}></i>
                                                    </span>
                                                </div>
                                            </li> 
                                            <li>
                                                <div className='d-flex'>
                                                    <GiHamburgerMenu className='HamburgerMenu' style={{paddingTop:`4px`, fontSize:`16px`}} onClick={toggleMenu}/>
                                                </div>
                                            </li>
                                    </div>
                        </div>
                    </div>
                </CardBody>
                <CardBody>
                    <div className="row">
                        <div className="col">
                            <div className="row d-flex text-nowrap justify-content-evenly" >
                                {/* Channel */}
                                <div className="col">
                                    <div className={`col-lg-2 mb-1 w-auto text-center ${menuOpen ? 'menu-open' : 'menu-closed'}`} onChange={toggleMenu} style={{margin: '-10px', padding:'0px'}}>
                                        <div className={`dropdown custom-dropdown`}>
                                            <h4 className='LightGrey'>Channel<br /></h4>
                                            <button
                                                className="btn dropdown-toggle btn-sm"
                                                type="button"
                                                id="dropdownMenuButton1"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                style={{border:"solid grey 1px", opacity:`0.8`}}
                                            >
                                                {selectedChannel ? selectedChannel : "--Select Channel--"}<RiArrowDropDownLine style={{fontSize:`16px`}}/>
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            handleChannelSelect('')
                                                        }}
                                                    >
                                                        --Select All--
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            handleChannelSelect('Email')
                                                        }}
                                                    >
                                                        Email
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            handleChannelSelect('SMS')
                                                        }}
                                                    >
                                                        SMS
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            handleChannelSelect('Phone Call')
                                                        }}
                                                    >
                                                        Phone Call
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Segment */}
                                <div className="col">
                                    <div className={`col-lg-2 mb-1 w-auto text-center ${menuOpen ? 'menu-open' : 'menu-closed'}`} onChange={toggleMenu} style={{margin: '-10px', padding:'0px'}}>
                                        <div className={`dropdown`} >
                                            <h4 className='LightGrey'>Segment<br /></h4>
                                            <button
                                                className="btn dropdown-toggle btn-sm"
                                                type="button"
                                                id="dropdownMenuButton"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                style={{border:"solid grey 1px", opacity:`0.8`}}
                                            >
                                                {selectedSegment ? selectedSegment : "--Select Segment--"}<RiArrowDropDownLine style={{fontSize:`16px`}}/>
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            handleSegmentSelect('')
                                                        }}
                                                    >
                                                        --Select All--
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            handleSegmentSelect('Segment 1')
                                                        }}
                                                    >
                                                        Segment 1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            handleSegmentSelect('Segment 2')
                                                        }}
                                                    >
                                                        Segment 2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            handleSegmentSelect('Segment 3')
                                                        }}
                                                    >
                                                        Segment 3
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Label */}
                                <div className="col">
                                    <div className={`col-lg-2 mb-1 w-auto text-center ${menuOpen ? 'menu-open' : 'menu-closed'}`} onChange={toggleMenu} style={{margin: '-10px', padding:'0px'}}>
                                        <div className="dropdown">
                                            <h4 className='LightGrey'>Campaign<br /></h4>
                                            <button
                                                className="btn dropdown-toggle btn-sm"
                                                type="button"
                                                id="dropdownMenuButton"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                style={{border:"solid grey 1px", opacity:`0.8`}}
                                            >
                                                {selectedCampaign ? selectedCampaign : "--Select Campaign--"}<RiArrowDropDownLine style={{fontSize:`16px`}}/>
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            handleCampaignSelect('')
                                                        }}
                                                    >
                                                        --Select All--
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            handleCampaignSelect('Campaign 1')
                                                        }}
                                                    >
                                                        Campaign 1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            handleCampaignSelect('Campaign 2')
                                                        }}
                                                    >
                                                        Campaign 2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            handleCampaignSelect('Campaign 3')
                                                        }}
                                                    >
                                                        Campaign 3
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* table */}
                    <div className="table-responsive table-container">
                        {filteredData.length > 0 ? (
                            <Table className="table">
                                <colgroup>
                                    <col style={{ width: '10%' }} />
                                    <col style={{ width: '15%' }} />
                                    <col style={{ width: '15%' }} />
                                    <col style={{ width: '15%' }} />
                                    <col style={{ width: '10%' }} />
                                    <col style={{ width: '15%' }} />
                                    <col style={{ width: '20%' }} /> 
                                </colgroup>
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Channel</th>
                                        <th scope="col">Segment</th>
                                        <th scope="col">Mode</th>
                                        <th scope="col">Campaign</th>
                                        <th scope="col">Last updated at</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.map((item) => (
                                        <tr key={item.ID}>
                                            <td scope="row">{item.ID}</td>
                                            <td>{item.Name}</td>
                                            <td><span className={item.Channel === "Email" ? 'badge bg-success w-100' : 'badge bg-danger w-100' && item.Channel === "SMS" ? 'badge bg-info w-100' : 'badge bg-danger w-100'}>{item.Channel}</span></td>
                                            <td>{item.Segment || <i><strong>NA</strong></i>}</td>
                                            <td><span className='badge bg-warning'>Broadcast</span></td>
                                            <td>{item.Campaign || <i><strong>NA</strong></i>}</td>
                                            <td className='LightGrey'>{item.Last_updated_at}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        ) : (
                            <p className='LightGrey text-center'><strong>There are no records to display</strong></p>
                        )}
                    </div>
                    {/* Pagination */}
                    <Pagination className="d-flex justify-content-center mt-3">
                        <PaginationItem disabled={currentPage === 1}>
                            <PaginationLink previous onClick={() => handlePageChange(currentPage - 1)} />
                        </PaginationItem>

                        {Array(Math.ceil(filteredData.length / itemsPerPage))
                            .fill()
                            .map((_, index) => (
                                <PaginationItem key={index} active={currentPage === index + 1}>
                                    <PaginationLink onClick={() => handlePageChange(index + 1)}>{index + 1}</PaginationLink>
                                </PaginationItem>
                            ))}

                        <PaginationItem disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)}>
                            <PaginationLink next onClick={() => handlePageChange(currentPage + 1)} />
                        </PaginationItem>
                    </Pagination>
                </CardBody>
            </Card>
        </>
    )
}

export default Campaigns