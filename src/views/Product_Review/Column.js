// ** React Imports
import { Link } from 'react-router-dom'
// import DataTable from 'react-data-table-component'
// import ProdReviewTable from './ProdReviewTable'

// ** Custom Components
import Avatar from '@components/avatar'
// import AvatarImg from './12-small.png'
import img from './product-9.png'

import { FaStar } from 'react-icons/fa'

// ** Store & Actions
// import { store } from '@store/store'
// import { getUser, deleteUser } from '../store'

// ** Icons Imports
import { MoreVertical, FileText, Trash2, Archive } from 'react-feather'

// ** Reactstrap Imports
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const statusObj = {
    pending: 'light-warning',
    published: 'light-success'
}

const renderClient = row => {
    if (row.avatar) {
        return <Avatar alt="Gisela Leppard" src="/static/images/avatar/1.jpg" width='32' height='32' />    
        // return <img src={AvatarImg} className='me-1' width='32' height='32'/>
    } else {
        return (
            <Avatar
                initials
                className='me-1'
                color={row.avatarColor || 'light-primary'}
                content={row.fullName || 'Gisela Leppard'}
            />
        )
    }
}

export const data = [{ name: 'Gisela Leppard', product: 'Air Jordan', productDesc:'Air Jordan is a line of basketball shoes produced by Nike', status: 'published', reviewer: '909090909', email: 'gleppard8@yandex.ru', date: "27 Apr 2022", review:"Ut mauris", reviewdesc:"Fusce consequat. Nulla nisl. Nunc nisl." }]

export const Column = [
    {
        name: <span className='fw-bold h5'>PRODUCT</span>,
        width: '25rem',
        sortable: true,
        sortField: 'product',
        selector: row => row.product,
        cell: row => (
            <div className='d-flex justify-content-left align-items-center mt-1'>
                <img src={ img } alt="" style={{width:'15%', height:"auto"}} />
                <div className='d-flex flex-column' style={{marginLeft:"7px"}}>
                    <Link
                        to={`/apps/user/view/${row.id}`}
                        className='user_name text-truncate text-body'
                        // onClick={() => store.dispatch(getUser(row.id))}
                    >
                        <span className='fw-medium' style={{fontSize:'14px'}}>{row.product}</span>
                    </Link>
                    <small className='text-muted mb-0 w-75'>{row.productDesc}</small>
                </div>
            </div>
        )
    },
    {
        name: <span className='fw-bold h5'>REVIEWER</span>,
        minWidth: '15rem',
        sortable: true,
        sortField: 'reviewer',
        selector: row => row.reviewer,
        cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
                {renderClient(row)}
                <div className='d-flex flex-column'>
                    <Link
                        to={`/apps/user/view/${row.id}`}
                        className='user_name text-truncate text-body'
                        // onClick={() => store.dispatch(getUser(row.id))}
                    >
                        <span className='fw-medium' style={{fontSize:'14px', color:"#7367f0"}}>{row.name}</span>
                    </Link>
                    <small className='text-truncate text-muted mb-0'>{row.email}</small>
                </div>
            </div>

        )
    },
    {
        name: <span className='fw-bold h5'>REVIEW</span>,
        minWidth: '20rem',
        sortable: true,
        selector: row => row.review,
        cell: row => (
            <div className='d-flex flex-column mt-1'>
                <div style={{marginBottom:'5px'}}>
                <FaStar size={21} color='#ff9f43'/>
                <FaStar size={21} color='#ff9f43'/>
                <FaStar size={21} color='#4b465c33'/>
                <FaStar size={21} color='#4b465c33'/>
                <FaStar size={21} color='#4b465c33'/>
                </div>
                <p className="h6" style={{marginBottom:'5px', fontSize:"14px"}}>{row.review}</p>
                <small >{row.reviewdesc}</small>
            </div>
        )

    },
    {
        name: <span className='fw-bold h5'>DATE</span>,
        width: "9rem",
        sortable: true,
        selector: row => row.date,
        sortField: 'dater',
        cell: row => (
            <span className='h5'>{row.date}</span>
        )
    },
    {
        name: <span className='fw-bold h5'>STATUS</span>,
        width: "9rem",
        sortable: true,
        sortField: 'status',
        selector: row => row.status,
        cell: row => (
            <Badge className='text-capitalize' color={statusObj[row.status]} style={{ padding: '7px'}}>
                {row.status}
            </Badge>
        )
    },
    {
        name: <span className='fw-bold h5'>ACTION</span>,
        width: '7rem',
        cell: row => (
            <div className='column-action'>
                <UncontrolledDropdown>
                    <DropdownToggle tag='div' className='btn btn-sm'>
                        <MoreVertical size={14} className='cursor-pointer' />
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem
                            tag={Link}
                            className='w-100'
                            to={`/apps/user/view/${row.id}`}
                            // onClick={() => store.dispatch(getUser(row.id))}
                        >
                            <FileText size={14} className='me-50' />
                            <span className='align-middle'>Details</span>
                        </DropdownItem>
                        <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                            <Archive size={14} className='me-50' />
                            <span className='align-middle'>Edit</span>
                        </DropdownItem>
                        <DropdownItem
                            tag='a'
                            href='/'
                            className='w-100'
                            onClick={e => {
                                e.preventDefault()
                                // store.dispatch(deleteUser(row.id))
                            }}
                        >
                            <Trash2 size={14} className='me-50' />
                            <span className='align-middle'>Delete</span>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        )
    }
]