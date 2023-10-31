import logo from "@src/assets/images/logo.png"
import InfinitiLogo from "@src/assets/images/logo/Infiniti-logo.jpg"
import SemperFiLogo from "@src/assets/images/logo/SemperFi-logo.jpg"
import SniperLogo from "@src/assets/images/logo/Sniper-logo.jpg"
import XIRCLSLogo from "@src/assets/images/logo/XIRCLS_LOGO.png"
import CollaborativeMarketingLogo from "@src/assets/images/logo/collaborative_marketing_logo.png"
import VisionMissionLogo from "@src/assets/images/logo/mission_statement_logo.png"
import { useEffect, useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import { BsCodeSquare, BsReverseLayoutTextSidebarReverse } from "react-icons/bs"
import { IoIosArrowDown } from "react-icons/io"
import { PiCodeBlockLight } from "react-icons/pi"
import { RiTeamLine } from "react-icons/ri"
import { TfiTarget } from "react-icons/tfi"
import { TiFlashOutline } from "react-icons/ti"
import { VscTarget } from "react-icons/vsc"
import { Link } from 'react-router-dom'
import "../../mainCustome.scss"
import "./navbar.scss"

const Navbar = ({ position }) => {


useEffect(() => {
  window.addEventListener('scroll', (event) => {
    const Yscroll = window.scrollY
    const first_navbar = document.getElementById("first_navbar")

    if (Yscroll > 50) {
      first_navbar.style.boxShadow = " 0 2px 8px rgba(0,0,0,0.16)"
    } else {
      first_navbar.style.boxShadow = " none"

    }
  });
}, [])


  const width = window.innerWidth
  const [toggleMenu, setToggleMenu] = useState(true)
  const positionCal = () => {
    if (width > 1000) {
      return position
    }
    if (width < 1000) {
      return 'notFixed'
    }
  }
  const isFixed = positionCal()
// console.log(isFixed);

 

  const productList = [
    {
      title: "SuperLeadz",
      desc: "Lead Generation  ",
      img: InfinitiLogo,
      logo: <BsCodeSquare size={20} color='' className='text-dark' />,
      link: "/superLeadz"
    },
    {
      title: "Infinti",
      desc: "Customer Acquisition & Loyalty",
      img: InfinitiLogo,
      logo: <PiCodeBlockLight size={23} color='' className='text-dark' />,
      link: "/"
    },
    {
      title: "Semper fi",
      desc: "Customer Loyalty",
      img: SemperFiLogo,
      logo: <TiFlashOutline size={23} color='' className='text-dark' />,
      link: "/"
    },
    {
      title: "Sniper",
      desc: "Customer Acquisition",
      img: SniperLogo,
      logo: <TfiTarget size={20} color='' className='text-dark' />,
      link: "/"
    },

  ]
  const aboutList = [
    {
      title: "why XIRCLS?",
      desc: "To Decentralize Online Marketing Practices.",
      img: XIRCLSLogo,
      logo: <VscTarget size={25} color='' className='text-dark' />,
      link: "/"
    },
    {
      title: "Why Collaborative Marketing?",
      desc: "Because Life is Collaboration, Not Competition.",
      img: CollaborativeMarketingLogo,
      logo: <PiCodeBlockLight size={23} color='' className='text-dark' />,
      link: "/"

    },
    {
      title: "Vision & Mission",
      desc: "To Empower Businesses, Globally",
      img: VisionMissionLogo,
      logo: <TiFlashOutline size={23} color='' className='text-dark' />,
      link: "/vision-&-mission"

    },
    {
      title: "Team",
      desc: "Meet the people behind the products",
      img: VisionMissionLogo,
      logo: <RiTeamLine size={20} color='' className='text-dark' />,
      link: "/team"
    },
    {
      title: "Blogs",
      desc: "News, opinions and perspectives.",
      img: VisionMissionLogo,
      logo: <BsReverseLayoutTextSidebarReverse size={20} color='' className='text-dark' />,
      link: "/"
    }

  ]

  const [ShowProducts, setShowProducts] = useState(false)
  const [ShowCompany, setShowCompany] = useState(false)

  function mouseEnter(name) {
    if (width > 1000) {
      if (name === "products") {
        setShowProducts(true)
        console.log("mouse enter ");
      }
      if (name === "company") {
        setShowCompany(true)
        console.log("mouse enter ");
      }
    }
  }

  function mouseLeave(name) {
    if (width > 1000) {
      if (name === "products") {
        setShowProducts(false)
        console.log("mouse leave ");
      }
      if (name === "company") {
        setShowCompany(false)
        console.log("mouse leave ");
      }
    }
  }
  function mouseClick(name) {
    if (name === "products") {
      setShowProducts(!ShowProducts)
      setShowCompany(false)

    }
    if (name === "company") {
      setShowCompany(!ShowCompany)
      setShowProducts(false)
    }
  }

  return (
    <>
      <nav id="first_navbar" className={`homeNav py-1   position-${isFixed === "notFixed" ? "relative" : "fixed"}  `}>
        <Link to="/">
          <img src={logo} alt="logo" className='mx-2 nav_logo_img' />
        </Link>

        <div className={`toggleMenu ${toggleMenu ? "toggleMenuUp" : "toggleMenuDown"}`}>
          <ul className=' list-unstyled d-inline-flex gap-5 pt-1'>

            <li className='productLi ItemsList' onClick={() => mouseClick("products")} onMouseEnter={() => mouseEnter("products")} onMouseLeave={() => mouseLeave("products")}>
              <p className='text-dark'  >Products <IoIosArrowDown className={ShowProducts ? "rotate-180" : ""} /></p>
              <div className={`subMenu ${ShowProducts ? "productSubMenuDown" : "productSubMenuUp"} p-1 border border-1 rounded-3 px-md-3`}>
                {/* <div className={`subMenu ItemsList-cont  p-1 border border-1 rounded-3 px-md-3`}> */}
                <ul className=' list-unstyled '>
                  {
                    productList.map((ele, index) => (
                      <li key={index} i className='mt-1 hoverItems' style={{ padding: "5px 5px" }}>
                       <Link to={ele.link}>
                         <div className=' d-flex flex-md-row flex-column align-items-center gap-2' style={{ marginBottom: "12px" }}>
                          {/* <img src={ele.img} alt="XIRCLSLogo" width={50} /> */}
                          <div className='nav-list-logo d-flex align-items-center justify-content-center  rounded-circle' style={{ minWidth: "50px", minHeight: "50px", background: "#F0F0F0" }}>
                            {/* <BsCodeSquare size={25} color='' className='text-dark'/> */}
                            {ele.logo}
                          </div>
                          <div className='d-flex flex-column justify-content-center w-100 '>
                            <h4 className='text-capitalize text-black fw-bolder' >{ele.title}</h4>
                            <p className='m-0 text-dark fw-bold fs-6 ' style={{ marginBottom: "5px", marginTop: "5px" }}>For {ele.desc}</p>
                          </div>
                        </div>
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </li>
            <Link to='/partner' className='text-dark text-center'> <li ><p>Partners</p></li></Link>
            <Link to='/developer' className='text-dark text-center'> <li ><p>Developer</p></li></Link>

            <li className='aboutLi ItemsList' onClick={() => mouseClick("company")} onMouseEnter={() => mouseEnter("company")} onMouseLeave={() => mouseLeave("company")}>
              <p className='text-dark'>Company <IoIosArrowDown className={ShowCompany ? "rotate-180" : ""} /></p>
              <div className={`subMenu ${ShowCompany ? "aboutSubMenuDown" : "aboutSubMenuUp"} p-1 border border-1 rounded-3 px-md-3`}>
                {/* <div className={`subMenu ItemsList-cont  p-1 border border-1 rounded-3 px-md-3`}> */}
                <ul className=' list-unstyled'>
                  {
                    aboutList.map((ele, index) => (
                      <li key={index} i className='mt-1 hoverItems' style={{ padding: "5px 5px" }}>
                        <Link to={ele.link}>
                          <div className=' d-flex flex-md-row flex-column align-items-center gap-2' style={{ marginBottom: "5px" }}>
                            {/* <img src={ele.img} alt="XIRCLSLogo" width={50} /> */}
                            <div className='nav-list-logo d-flex align-items-center justify-content-center  rounded-circle' style={{ minWidth: "50px", minHeight: "50px", background: "#F0F0F0" }}>
                              {/* <BsCodeSquare size={25} color='' className='text-dark'/> */}
                              {ele.logo}
                            </div>
                            <div className='d-flex flex-column justify-content-center w-100 '>
                              <h4 className='text-capitalize text-black fw-bolder' >{ele.title}</h4>
                              <p className='m-0 text-dark fw-bold fs-6 ' style={{ marginBottom: "5px", marginTop: "5px" }}> {ele.desc}</p>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </li>

          </ul>
          <div className='navBtn gap-1'>
            <h4 type="button" className=' btn  btn-lg main-btn-blue fs-4 p-1'>Signup for Free</h4>

            <h4 type="button" className=' btn btn-lg main-btn-dark fs-4' >Login</h4>
          </div>
        </div>
        <div className='menuBtn' onClick={() => { setToggleMenu(!toggleMenu); setShowProducts(false); setShowCompany(false) }}>
          <AiOutlineMenu size={25} />
        </div>
      </nav>
    </>
  )
}

export default Navbar