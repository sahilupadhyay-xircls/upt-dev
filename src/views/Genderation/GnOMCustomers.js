import React, { useEffect, useState } from 'react'
import { User, BarChart2, RefreshCw, DollarSign } from 'react-feather'

export default function GnOMCustomers() {
    const [performanceData, setPerformanceData] = useState({})

    useEffect(() => {
        const form_data = new FormData()
        form_data.append('shop', "venettaperfumes.myshopify.com")

        fetch(`https://www.xircls.com/api/v1/whoosh/get/performance/`, {
            method: "POST",
            body: form_data
        })
            .then((response) => response.json())
            .then(data => {
                console.log(performanceData)
                setPerformanceData(data)
            })
            .catch((error) => {
                console.log(error)

            })
    }, [])

    return (
        <>
        <h2 className='mb-2'>Dashboard</h2>
            <section>
                <div className='row'>
                    <div className='col-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <User size='27px' />
                                <div className="d-flex mt-1 align-items-end justify-content-between">
                                    <p className='h5 card-text'>Visitors</p>
                                    <p className='h4'>
                                        {performanceData.total_earnings ? performanceData.total_earnings : 0}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <BarChart2 size='27px' />
                                <div className="d-flex mt-1 align-items-end justify-content-between">
                                    <p className='h5 card-text'>Profiles Created</p>
                                    <p className='h4'>
                                        {performanceData.verified_cust ? performanceData.verified_cust : 0}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <RefreshCw size='27px' />
                                <div className="d-flex mt-1 align-items-end justify-content-between">
                                    <p className='h5 card-text'>% of profiles created on an average</p>
                                    <p className='h4'>
                                        {performanceData.total_redeem ? performanceData.total_redeem : 0}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <DollarSign size='27px' />
                                <div className="d-flex mt-1 align-items-end justify-content-between">
                                    <p className='h5 card-text'>Revenue</p>
                                    <p className='h4'>
                                        {performanceData.total_redeem ? performanceData.total_redeem : 0}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
