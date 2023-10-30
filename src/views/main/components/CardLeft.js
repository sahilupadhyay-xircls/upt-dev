import React from 'react'

export default function CardLeft({icon,title,desc}) {
    const color = '#9BA4B5'
    return (
        <div className='mt-4 mt-md-3 p-0 '>
            <div className='fs-1 text-dark' style={{}}>
                {icon}
            </div>
            <div className='mt-1'>
                <h1 className='display-6 main-heading fw-bold m-0'>{title}</h1>
                <h3 className='  text-black lh-29 m-0'>{desc}</h3>
            </div>
        </div>
    )
}
