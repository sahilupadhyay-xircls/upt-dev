import React, { useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css' // Make sure you import Bootstrap CSS

function UncontrolledDropdownButton() {
  const dropdownRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false)
    }
  }

  // Attach an event listener to handle clicks outside the dropdown
  React.useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownButton"
        onClick={toggleDropdown}
      >
        Dropdown Button
      </button>
      <ul
        className={`dropdown-menu${isOpen ? ' show' : ''}`}
        aria-labelledby="dropdownButton"
      >
        <li>
          <a className="dropdown-item" href="#">
            Action 1
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Action 2
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Action 3
          </a>
        </li>
      </ul>
    </div>
  )
}

export default UncontrolledDropdownButton
