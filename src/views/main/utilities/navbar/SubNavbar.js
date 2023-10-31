import React, { useEffect, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

export default function SubNavbar({ title }) {

  const [showMenu, setshowMenu] = useState(false)

  const width = window.innerWidth
  useEffect(() => {
    if (width < 500) {
      const second_navbar = document.getElementById("second_navbar")
      second_navbar.style.top = 80 + "px"
    }
    window.addEventListener('scroll', (event) => {
      const Yscroll = window.scrollY
      const second_navbar = document.getElementById("second_navbar");
      if (!second_navbar) {
        return null
      }
      if (Yscroll > 100) {
        second_navbar.style.top = 0 + "px"
        second_navbar.style.boxShadow = " 0 2px 8px rgba(0,0,0,0.16)"
      } else {
        second_navbar.style.top = 110 + "px"
        second_navbar.style.boxShadow = " none"

      }
    });
  }, [])



  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light border bg-white  w-100 second_navbar px-0 px-xl-5 d-flex  justify-content-center " id="second_navbar" style={{ position: 'fixed', top: '110px' }}>
      <div className="container-fluid  mx-0 mx-xl-3 px-1 px-xl-5" style={{ width: "1679px" }}>
        <a className="navbar-brand  text-black" href="#">{title}</a>
        <h3 className="navbar-toggler " onClick={() => setshowMenu(!showMenu)} style={{ border: 'none' }}>
          <span className="fs-4">{!showMenu ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
        </h3>
        <div className={`collapse navbar-collapse  ${showMenu ? 'show' : ''} `} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-1 fs-5 px-2">
            <li className="nav-item ">
              <a className="nav-link text-dark" aria-current="page" href="#">Overview</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-dark" aria-current="page" href="./superLeadz-features">Features</a>
            </li>

            <li className="nav-item ">
              <a className="nav-link text-dark" aria-current="page" href="#">Pricing</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-dark " aria-current="page" href="#">FAQ</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>


  )
}
