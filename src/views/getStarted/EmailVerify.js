import React, { useEffect, useState } from 'react'
import { Card, CardBody } from 'reactstrap'
import { Mail } from "react-feather"
import { TbMailCheck } from 'react-icons/tb'
import { Link, useNavigate } from 'react-router-dom'
import Stepper from './Stepper'
import { useSelector } from 'react-redux'

const EmailVerify = () => {
    const navigate = useNavigate()

    const [ResendBox, setResendBox] = useState(false)
    const [ShowCount, setShowCount] = useState(false)
    const email_slice = useSelector(state => state.getStartSlice_data.email_id)
    const [Width, setWidth] = useState(window.innerWidth)

    var timeLeft = 30
    useEffect(() => {
        console.log(email_slice)
        if (email_slice === '') {
            navigate("/merchant/get-started/")
        }
        if (ShowCount) {
            var elem = document.getElementById('countDown');
            console.log("count down is running");
            function countdown() {
                if (timeLeft === -1) {
                    clearTimeout(timerId);
                    setShowCount(false)
                    setResendBox(true)
                } else {
                    elem.innerHTML = ' Try again in ' + timeLeft + 's';
                    timeLeft--;
                    console.log(timeLeft + "s");
                }
            }
            var timerId = setInterval(countdown, 1000);
        }
        const updateDimension = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', updateDimension);


    }, [ShowCount])
    return (
        <div className=' d-flex flex-column justify-content-center align-items-center'>
            <Stepper active={1} />
            <Card className={Width >= 680 ? 'w-75' : 'w-100'}>
                <div className="p-2 px-3 d-flex justify-content-between fw-bold">
                <Link to='/merchant/get-started/email' >Back</Link>
                <Link to='/merchant/get-started/whatsapp' >Next</Link>
                </div>

                <CardBody className=' d-flex flex-column align-items-center '>
                    <TbMailCheck size={150} />
                    <h3 className=' fw-bolder mt-1 mb-1'>Check your email</h3>
                    <p className='mb-0'>To start using Klavivyo, activate your account with the link sent to </p>
                    <p className='text-primary fs-5 fw-bold'>{email_slice}</p>
                    <hr className='bg-dark w-75 opacity-25 ' />
                    {
                        !ShowCount &&
                        <h5 to='#' className='text-secondary cursor-pointer' onClick={() => setResendBox(!ResendBox)}> Didn't receive an message? </h5>
                    }

                    {
                        ResendBox &&
                        <div className='text-center d-flex gap-1 mt-1'>
                            <h5 className='cursor-pointer text-dark ' onClick={() => { setResendBox(!ResendBox); setShowCount(true) }}>Resend Message</h5>
                            <h6>or</h6>
                            <Link to='/merchant/get-started/email' className='text-dark fw-bold cursor-pointer '>Change Email</Link>
                        </div>
                    }
                    {
                        ShowCount &&
                        <div className='text-center gap-1'>
                            <h6 className='text-secpndary mb-1'>Message has been sent  </h6>
                            <h5 className='cursor-auto text-dark ' id='countDown'>Try again in 30s  </h5>
                        </div>
                    } </CardBody>
            </Card>
        </div>
    )
}

export default EmailVerify