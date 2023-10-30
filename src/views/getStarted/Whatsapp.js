import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Card, CardBody, Input } from 'reactstrap'
import { BsWhatsapp } from 'react-icons/bs'
import './email.scss'
import Stepper from './Stepper'
import { useDispatch, useSelector } from 'react-redux'
import { whatsapp_name, whatsapp_num, whatsapp_ccode } from './redux/getStartSlice'

export function Whatsapp() {
    const dispatch = useDispatch()
    const name_slice = useSelector(state => state.getStartSlice_data.whatsapp_name)
    const num_slice = useSelector(state => state.getStartSlice_data.whatsapp_num)

    const [name, setname] = useState(name_slice)
    const [number, setnumber] = useState(num_slice)
    const [CCode, setCCode] = useState('')
    const [Error, setError] = useState({
        name: false,
        number: false
    })
    const [Width, setWidth] = useState(window.innerWidth)
    const navigate = useNavigate()
    useEffect(() => {
        const updateDimension = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', updateDimension);

    }, [])
    // form submit
    function submitForm() {
        if (name.trim() === '') {
            return setError({ name: true })
        }
        setError({ name: false })
        if (number.trim() === '' || number.length !== 10) {
            return setError({ number: true })
        }
        setError({ number: false })
        navigate("/merchant/get-started/whatsapp-verify")

    }

    return (
        <div className='whatsapp d-flex flex-column align-items-center justify-content-center '>

            <Stepper active={2} />
            <Card className={Width >= 680 ? 'w-75' : 'w-100'}>

                <CardBody className='d-flex flex-column align-items-center '>
                    <div className="w-100 px-3 my-2 d-flex align-items-center justify-content-between ">
                        <Link to='/merchant/get-started/' className="fw-bold">Back</Link>
                        <h4 className="text-center fs-3 fw-bold">WhatsApp Setup</h4>
                        <Link to='/merchant/get-started/sms' className="fw-bold">Skip</Link>
                    </div>
                    <h4 className='text-center'>Add your sender information</h4>
                    <p className='text-center mb-2'>Choose the sender name and whatsapp number appears in your subscribes inbox</p>
                    <form className={`d-flex flex-column align-items-center ${Width >= 680 ? 'w-50' : 'w-100 px-2'}`}>
                        <div className="mb-3 w-100">
                            <label htmlFor="fullName" className="form-label">
                                Sender Name
                            </label>
                            <Input
                                type="text"
                                className="form-control"
                                id="fullName"
                                required
                                defaultValue={name_slice}
                                onChange={(e) => { setname(e.target.value); dispatch(whatsapp_name(e.target.value)) }}
                                invalid={Error.name ? true : false}
                            />
                        </div>
                        <div className="mb-3 w-100">
                            <label htmlFor="number" className="form-label">
                                Sender WhatsApp Number
                            </label>

                            <div className='d-flex number-container'>
                                <select className="form-select m-0 me-1" onChange={ (e)=>{ setCCode(e.target.value); dispatch(whatsapp_ccode(e.target.value))}} style={{ width: "100px", marginRight: "8px" }}>
                                    <option value="91">+ 91</option>
                                    <option value="1">+ 1</option>
                                    <option value="401">+ 401</option>
                                     <option value="44">+ 44</option>

                                </select>
                                <Input
                                    type="number"
                                    className="form-control "
                                    id="number"
                                    required
                                    defaultValue={num_slice}
                                    invalid={Error.number ? true : false}
                                    onChange={(e) => { setnumber(e.target.value); dispatch(whatsapp_num(e.target.value)) }}
                                />
                            </div>

                        </div>
                        <button type="button" className="btn btn-primary " onClick={submitForm}>
                            Continue
                        </button>
                    </form>

                </CardBody>
            </Card>
        </div>
    )
}


// FOR VERIFY
export function WhatsappVerify() {
    const [ResendBox, setResendBox] = useState(false)
    const [ShowCount, setShowCount] = useState(false)
    const num_slice = useSelector(state => state.getStartSlice_data.whatsapp_num)
    const code_slice = useSelector(state => state.getStartSlice_data.whatsapp_ccode)
    var timeLeft = 30
    const [Width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
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
        <div className=' d-flex flex-column justify-content-center align-items-center '>
            <Stepper active={2} />

            <Card className={Width >= 680 ? 'w-75' : 'w-100'}>
            <div className="p-2 px-3 d-flex justify-content-between fw-bold">
                <Link to='/merchant/get-started/whatsapp' >Back</Link>
                <Link to='/merchant/get-started/sms'>Next</Link>
                </div>

                <CardBody className=' d-flex flex-column align-items-center '>
                    <BsWhatsapp size={120} />
                    <h3 className=' fw-bolder mt-1 mb-1'>Check your WhatsApp</h3>
                    <p className='mb-0'>To start using Klavivyo, activate your account with the link sent to </p>
                    <p className='text-primary fs-5 fw-bold'> +{code_slice} {num_slice}</p>
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
                            <Link to='/merchant/get-started/whatsapp' className='text-dark fw-bold cursor-pointer '>Change Number</Link>
                        </div>
                    }
                    {
                        ShowCount &&
                        <div className='text-center gap-1'>
                            <h6 className='text-secpndary mb-1'>Message has been sent  </h6>
                            <h5 className='cursor-auto text-dark  ' id='countDown'>Try again in 30s  </h5>
                        </div>
                    }

                </CardBody>
            </Card>
        </div>
    )
}