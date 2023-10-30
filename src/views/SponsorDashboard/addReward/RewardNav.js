import React from 'react'
import { NavLink } from "react-router-dom"
import { Nav, NavItem } from "reactstrap"
import { User, Box } from "react-feather"
import './rewardPage.scss'

export default function RewardNav() {


    return (
        <>

            <Nav className='addReward_Nav mt-2 ms-2'>
                <NavItem className=" w-100 d-flex flex-column gap-2">
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/merchant/sponsor/add-reward/budget">
                        <div className='addReward_Nav_Icon bg-light-secondary rounded' style={{ padding: '6px 8px' }}>
                            <User />
                        </div>
                        <div>
                            <h5 className="fs-5 fw-bolder  m-0 p-0">Set a budget</h5>
                            <h6 className="font-small-3 text-secondary m-0 p-0">& customise how you spend it</h6>
                        </div>
                    </NavLink>

                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/merchant/sponsor/add-reward/customerGroup">
                        <div className='addReward_Nav_Icon bg-light-secondary rounded' style={{ padding: '6px 8px' }}>
                            <Box />
                        </div>
                        <div>
                            <h5 className="fs-5 fw-bolder  m-0 p-0">Select Customer Group  </h5>
                            <h6 className="font-small-3 text-secondary m-0 p-0">to assign this reward to</h6>
                        </div>
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/merchant/sponsor/add-reward/review">
                        <div className='addReward_Nav_Icon bg-light-secondary rounded' style={{ padding: '6px 8px' }}>
                            <User />
                        </div>
                        <div>
                            <h5 className="fs-5 fw-bolder  m-0 p-0">Review</h5>
                            <h6 className="font-small-3 text-secondary m-0 p-0">your reward rules</h6>
                        </div>
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/merchant/sponsor/add-reward/done">
                        <div className='addReward_Nav_Icon bg-light-secondary rounded' style={{ padding: '6px 8px' }}>
                            <User />
                        </div>
                        <div>
                            <h5 className="fs-5 fw-bolder  m-0 p-0">Done!</h5>
                            <h6 className="font-small-3 text-secondary m-0 p-0">Not happy? Go back & change.</h6>
                        </div>
                    </NavLink>

                </NavItem>
            </Nav>
        </>
    )
    // }to="/merchant/sponsor/add-reward/images"
}
