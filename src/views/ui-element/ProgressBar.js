// ProgressBar.js
import React from 'react'
import PropTypes from 'prop-types'
import './ProgressBar.css' // Create this CSS file for styling

const ProgressBar = ({ percentage, color }) => {
  return (
    <div className="progress-container">
      <div
        className="progress"
        style={{
          width: `${percentage}%`,
          backgroundColor: color
        }}
      ></div>
    </div>
  )
}

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
}

export default ProgressBar
