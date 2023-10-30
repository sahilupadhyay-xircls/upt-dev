import React from 'react'
import { NavLink } from "react-router-dom"
import { Nav, NavItem } from "reactstrap"
import { User, Box } from "react-feather"
import './rewardPage.scss'

export default function RewardNav() {
    
    
    return (
        <>

            <Nav className='addReward_Nav mt-2'>
                <NavItem className=" w-100 d-flex flex-column gap-2">
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')}  to="/merchant/host/add-reward/details">
                        <div className='addReward_Nav_Icon bg-light-secondary rounded' style={{ padding: '6px 8px' }}>
                            <User />
                        </div>
                        <span className="fs-5 fw-bolder text-dark">Reward Details</span>
                    </NavLink>

                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/merchant/host/add-reward/images">
                        <div className='addReward_Nav_Icon bg-light-secondary rounded' style={{ padding: '6px 8px' }}>
                            <Box />
                        </div>
                        <span className="fs-5 fw-bolder text-dark ">Reward Images</span>
                    </NavLink>

                </NavItem>
            </Nav>
        </>
    )
    // }to="/merchant/host/add-reward/images"
}
