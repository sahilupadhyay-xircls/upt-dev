import React from 'react'

export default function Stepper({active}) {
    return (
        <div className='stepper p-1'>
            <div className="wrapper option-1 option-1-1">
                <ol className="c-stepper">
                    <li className={`c-stepper__item ${active >= 1 ? "active_c " : ""} ${active >= 2 ? "active_b " : ""}`} >
                        <h4 className="fs-5 ">Email</h4>
                    </li>
                    <li className={`c-stepper__item ${active >= 2 ? "active_c " : ""} ${active >= 3 ? "active_b " : ""}`}>
                        <h4 className="fs-5">WhatsApp</h4>
                    </li>
                    <li className={`c-stepper__item ${active >= 3 ? "active_c " : ""}`}>
                        <h4 className="fs-5">SMS</h4>
                    </li>
                </ol>
            </div>
        </div>
    )
}
