// import { useState } from 'react'
import img from '../Product_Review/product-9.png'
import { RiArrowRightFill } from 'react-icons/ri'

// const [redName] = useState("")


export const data = [{ heading: 'The content Experience Report', impression: '1,706', rightarrow1: "2.70%", clicks: "79", rightarrow2: "27.70%", formCTA:"10" }]

export const columns = [
    {
        name: "",
        width: '25rem',
        // sortable: true,
        // sortField: 'product',
        // selector: row => row.images,
        cell: row => (
            <div className='d-flex flex-row '>
                <img src={img} alt="" style={{ width: '15%', height: "auto" }} />
                <h6 className=" mx-1 mt-1" style={{fontWeight:"bolder"}}>{row.heading}</h6>
            </div>
        )
    },
    {
        name: <span style={{fontSize:"14px"}} className='fw-bold'>Impression</span>,
        // width: '11rem',
        sortable: true,
        sortField: 'impression',
        // selector: row => row.reviewer
        cell: row => (
            <div className='w-50 mt-1'><p className='text-center'>{row.impression}</p></div>
        )

    },
    {
        name: <span><RiArrowRightFill size={20} /></span>,
        // width: '10rem',
        // sortable: true,
        // selector: row => row.review
        cell: row => (
            <div className='mt-1'><p className='text-center'>{row.rightarrow1}</p></div>
        )


    },
    {
        name: <span style={{ fontSize: "14px" }} className='fw-bold'>Clicks</span>,
        // width: "9rem",
        sortable: true,
        // selector: row => row.date,
        sortField: 'clicks',
        cell: row => (
            <div className='w-25 mt-1'><p className='text-center'>{row.clicks}</p></div>
        )
    },
    {
        name: <span><RiArrowRightFill size={20} /></span>,
        // width: "10rem",
        // sortable: true,
        // sortField: 'status',
        // selector: row => row.status
        cell: row => (
            <p className='text-center mt-1'>{row.rightarrow2}</p>
        )

    },
    {
        name: <span style={{ fontSize: "14px" }} className='fw-bold'>Forms CTA Conversion</span>,
        width: '20rem',
        sortable: true,
        sortField: 'formCTA',
        cell: row => (
            <p className='text-center w-50 mt-1'>{row.formCTA}</p>
        )

    }
]